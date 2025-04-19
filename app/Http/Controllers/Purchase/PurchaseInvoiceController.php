<?php

namespace App\Http\Controllers\Purchase;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class PurchaseInvoiceController extends Controller
{
    //////////////////////////////////////////////////////////////////////  createInvoice
    public function createInvoice(Request $request)
    {
        $discount = 0;
        $price = 0;
        $cart = auth()->user()->first()->cart()->get();
        foreach ($cart as $item) {
            $discount = $discount + $item->sellerProduct()->first()->price - $item->sellerProduct()->first()->price_with_discount;
            $price = $price + $item->sellerProduct()->first()->price;
        };
        /////////////
        DB::beginTransaction();
        try {
            /////////////
            $purchaseInvoice = auth()->user()->first()->purchaseInvoice()->create([
                'status' => '1',
                'price' => $price,
                'discount' => $discount,
                'amount_paid' => $price - $discount,
                'transport_cost' => $request->transport_cost,
                'delivery_date' => $request->delivery_date,
                'delivery_time' => $request->delivery_time,
                'payment_method' => $request->payment_method,
                'client_address_id' =>  auth()->user()->first()->clientAddress()->find($request->client_address_id)->id,
                'description' => $request->description,
            ]);
            foreach ($cart as $item) {
                $purchaseInvoice->purchaseInvoiceDetail()->create([
                    'user_id' => auth()->user()->first()->id,
                    'seller_product_id' => $item->seller_product_id,
                    'count' => $item->count,
                    'amount_paid' =>  $item->sellerProduct()->first()->price_with_discount,
                    'discount' => $item->sellerProduct()->first()->price - $item->sellerProduct()->first()->price_with_discount,
                    'color' => $item->color,
                    'size' => $item->size,
                    'guarantee' => $item->guarantee,
                ]);
            };
            foreach ($cart as $item) {
                $purchaseInvoice->purchaseStoreInvoice()->create([
                    'seller_product_id' =>  $item->seller_product_id,
                    'seller_price' => $item->sellerProduct()->first()->seller_price,
                    'discount' => $item->sellerProduct()->first()->discount,
                    'site_discount' => $item->sellerProduct()->first()->site_discount,
                    'seller_discount' => $item->sellerProduct()->first()->seller_discount,
                    'gain_seller' => $item->sellerProduct()->first()->gain_seller,
                    'gain_site' => $item->sellerProduct()->first()->gain_site,
                    'gain_seller_with_discount' => $item->sellerProduct()->first()->gain_seller_with_discount,
                    'gain_site_with_discount' => $item->sellerProduct()->first()->gain_site_with_discount,
                    'price' => $item->sellerProduct()->first()->price,
                    'price_with_discount' => $item->sellerProduct()->first()->price_with_discount,
                    'crop_event_id' => $item->sellerProduct()->first()->crop_event_id,
                ]);
            };
            auth()->user()->first()->cart()->delete();
            /////////////
            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json('error');
        }
        /////////////
        return response()->json('success');
    }
    //////////////////////////////////////////////////////////////////////  createInvoice
    //////////////////////////////////////////////////////////////////////  awaitingPayment
    public function awaitingPayment()
    {
        $awaitingPayment = auth()->user()->first()->purchaseInvoice()->where('status', 1)->get();
        return response()->json($awaitingPayment);
    }
    //////////////////////////////////////////////////////////////////////  awaitingPayment
    //////////////////////////////////////////////////////////////////////  processing
    public function processing()
    {
        $processing = auth()->user()->first()->purchaseInvoice()->where('status', 2)->get();
        return response()->json($processing);
    }
    //////////////////////////////////////////////////////////////////////  processing
    //////////////////////////////////////////////////////////////////////  delivered
    public function delivered()
    {
        $delivered = auth()->user()->first()->purchaseInvoice()->where('status', 3)->get();
        return response()->json($delivered);
    }
    //////////////////////////////////////////////////////////////////////  delivered
    //////////////////////////////////////////////////////////////////////  returned
    public function returned()
    {
        $returned = auth()->user()->first()->purchaseInvoice()->where('status', 4)->get();
        return response()->json($returned);
    }
    //////////////////////////////////////////////////////////////////////  returned
    //////////////////////////////////////////////////////////////////////  abolition
    public function abolition()
    {
        $abolition = auth()->user()->first()->purchaseInvoice()->where('status', 5)->get();
        return response()->json($abolition);
    }
    //////////////////////////////////////////////////////////////////////  abolition
      //////////////////////////////////////////////////////////////////////  clientPurchaseDetail
      public function clientPurchaseDetail(Request $request)
      {
          $clientPurchaseDetail = auth()->user()->first()->purchaseInvoice()->where('id',  $request->id)->first()->purchaseInvoiceDetail()
          ->with(['sellerProduct'=>function($query){
            $query->with(['product','seller'])->get();
          }])->get();
          return response()->json($clientPurchaseDetail);
      }
      //////////////////////////////////////////////////////////////////////  clientPurchaseDetail
}

