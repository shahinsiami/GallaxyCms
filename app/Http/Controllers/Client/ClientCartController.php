<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Traits;
class ClientCartController extends Controller
{
    use Traits\validatorError;
    //////////////////////////////////////////////////////////////////////  addToCart
    public function addToCart(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'count' => 'required',
            'seller_product_id' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->vError($validator->errors());
        }
        if (auth()->user()->first()->cart()->where('seller_product_id',$request->seller_product_id)->exists()){
            auth()->user()->first()->cart()->where('seller_product_id',$request->seller_product_id)->first()->update(['count'=>$request->count]);
        }else{
            auth()->user()->first()->cart()->create(
                $request->all(),
        );
        }
        return $this->vSuccess();
    }
    //////////////////////////////////////////////////////////////////////  addToCart
    //////////////////////////////////////////////////////////////////////  shoppingCart
    public function shoppingCart(Request $request)
    {
        $shoppingCart = auth()->user()->first()->cart()->with(['sellerProduct'=>function($query){
            $query->with('product')->get();
        }])->get();
        return $shoppingCart;
    }
    //////////////////////////////////////////////////////////////////////  shoppingCart
      //////////////////////////////////////////////////////////////////////  deleteCropFromCart
      public function deleteCropFromCart($id)
      {
        auth()->user()->first()->cart()->where('id',$id)->delete();
          return $this->vSuccess();
      }
      //////////////////////////////////////////////////////////////////////  deleteCropFromCart
      //////////////////////////////////////////////////////////////////////  addProductCount
      public function addProductCount(Request $request)
      {
        auth()->user()->first()->cart()->where('id', $request->id)->update([
            'count' => auth()->user()->first()->cart()->where('id', $request->id)->first()->count + 1
        ]);
          return $this->vSuccess();
      }
      //////////////////////////////////////////////////////////////////////  addProductCount
        //////////////////////////////////////////////////////////////////////  minProductCount
        public function minProductCount(Request $request)
        {
          auth()->user()->first()->cart()->where('id', $request->id)->update([
              'count' => auth()->user()->first()->cart()->where('id', $request->id)->first()->count - 1
          ]);
            return $this->vSuccess();
        }
        //////////////////////////////////////////////////////////////////////  minProductCount
}

