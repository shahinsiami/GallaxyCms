<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use App\Traits;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class Authentication extends Controller
{
    use Traits\validatorError;
    /////////////////////////////////////////////////////////////////////////////////////////////////login
    public function login(Request $request)
    {
        $http = new \GuzzleHttp\Client([
            'timeout' => 50.0,
        ]);
        try {
            $response = $http->post(config('services.passport.login_endpoint'), [
                'form_params' => [
                    'grant_type' => config('services.passport.grant_type'),
                    'client_id' => config('services.passport.client_id'),
                    'client_secret' => config('services.passport.client_secret'),
                    'username' => $request->username,
                    'password' => $request->password,
                ]
            ]);
            return $response->getBody();
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            if ($e->getCode() == 400) {
                return response()->json('invalid', $e->getCode());
            } else if ($e->getCode() == 401) {
                return response()->json('invalid', $e->getCode());
            }
            return response()->json('invalid', $e->getCode());
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////login
    /////////////////////////////////////////////////////////////////////////////////////////////////registerClient
  public function registerClient(Request $request)
  {
      $validator = Validator::make($request->all(), [
          'username' => 'required|string|max:255|unique:users,name',
          'password' => 'required|string|min:6|',
          'name' => 'required',
          'family' => 'required',
          'email' => 'required',
          'phonenumber' => 'required|digits_between:9,14',
          'degree' => 'required',
          'sex' => 'required',
          'birthday' => 'required',
          'address' => 'required',
      ]);
      if ($validator->fails()) {
          return $this->vError($validator->errors());
      }

      $user = User::create([
          'name' => $request->username,
          'password' => bcrypt($request->password),
      ]);

      $user->clientInfo()->create(
          $request->all()
      );
//        Smsirlaravel::sendVerification($randomnumber, $user->phonenumber);
      return $this->vSuccess();
  }

    /////////////////////////////////////////////////////////////////////////////////////////////////registerClient
}
