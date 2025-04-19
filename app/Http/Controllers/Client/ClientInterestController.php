<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Traits;

class ClientInterestController extends Controller
{
    use Traits\validatorError;
    //////////////////////////////////////////////////////////////////////  clientInterest
    public function clientInterest(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'crop_id' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->vError($validator->errors());
        }
        if (auth()->user()->first()->interestCrop()->where('crop_id', $request->crop_id)->exists()) {
            auth()->user()->first()->interestCrop()->where('crop_id', $request->crop_id)->first()->delete();
        } else {
            auth()->user()->first()->interestCrop()->create(
                $request->all(),
            );
        }
        return $this->vSuccess();
    }
    //////////////////////////////////////////////////////////////////////  clientInterest
}
