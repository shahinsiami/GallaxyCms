<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Traits;
use Illuminate\Support\Facades\Validator;

class ClientInfoController extends Controller
{
    use Traits\validatorError;
    /////////////////////////////////////////////////////////////////////////////////////////////////clientInfo
    public function clientInfo(Request $request)
    {
        $user = auth()->user()->first()->clientInfo()->first();
        return response()->json($user);

    }
    /////////////////////////////////////////////////////////////////////////////////////////////////clientInfo
    /////////////////////////////////////////////////////////////////////////////////////////////////registerClientInfo
    public function registerClientInfo(Request $request)
    {
      
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255|',
            'phonenumber' => 'required|digits_between:9,14',
        ]);
        if ($validator->fails()) {
            return $this->vError($validator->errors());
        }
        $user = auth()->user()->first()->clientInfo()->first();
        $user->update(
            $request->all()
        );
        return $this->vSuccess();

    }
    /////////////////////////////////////////////////////////////////////////////////////////////////registerClientInfo
}
