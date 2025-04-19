<?php

namespace App\Model\WebSite\Shopping;

use App\User;
use Illuminate\Database\Eloquent\Model;

class PurchaseStoreInvoice extends Model
{
    protected $fillable = [
        'purchase_invoice_id',
        'seller_product_id',
        'seller_price',
        'discount',
        'site_discount',
        'seller_discount',
        'gain_seller',
        'gain_site',
        'gain_seller_with_discount',
        'gain_site_with_discount',
        'price',
        'price_with_discount',
        'crop_event_id',
    ];
    public function purchaseInvoice(){
        return $this->belongsTo(purchaseInvoice::class,'purchase_invoice_id');
    }
    public function sellerProduct(){
        return $this->hasOne(SellerProduct::class,'pid','seller_product_id');
    }
    public function client(){
        return $this->hasOne(User::class,'id','user_id');
    }
}
