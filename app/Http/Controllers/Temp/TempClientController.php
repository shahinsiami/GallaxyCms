<?php

namespace App\Http\Controllers\Temp;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Panel\Seller\SellerProduct;
use App\Model\WebSite\Temp\TempClient;
use App\Traits;
use Illuminate\Support\Facades\Validator;

class TempClientController extends Controller
{
    use Traits\uploadImage;
    use Traits\validatorError;
    /////////////////////////////////////////////////////////////////////////////////////tempShoppingWithRegisterTempClient
    public function tempShoppingWithRegisterTempClient(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',

        ]);
        if ($validator->fails()) {
            return $this->vError($validator->errors());
        }
        //validator//
       
        $tempClient = TempClient::create($request->all());
        //
        $discount = 0;
        $price = 0;
        foreach ($request->product as $item) {
            $discount = $discount +  SellerProduct::find($item['pid'])->price -  SellerProduct::find($item['pid'])->price_with_discount;
            $price = $price + SellerProduct::find($item['pid'])->price;
        };
        //
        $tempClientInvoice = $tempClient->tempClientInvoice()->create([
            'discount' => $discount,
            'price' => $price,
            'price_with_discount' => $price - $discount
        ]);
        //
        foreach ($request->product as $item) {
            $tempClientInvoice->tempClientCart()->create([
                'temp_client_id' => $tempClientInvoice->id,
                'seller_product_id' => $item['pid'],
                'color' => $item['color'],
                'size' => $item['size'],
                'guarantee' => $item['guarantee'],
                'count' => $item['count'],
            ]);
        };
        return $this->vSuccess();
    }
    /////////////////////////////////////////////////////////////////////////////////////tempShoppingWithRegisterTempClient
    /////////////////////////////////////////////////////////////////////////////////////tempProduct
    public function tempProduct(Request $request)
    {
        $tempProduct = SellerProduct::with('product')->whereIn('pid', json_decode($request->pid))->get();
        return response()->json($tempProduct);
    }
    /////////////////////////////////////////////////////////////////////////////////////tempProduct
}
