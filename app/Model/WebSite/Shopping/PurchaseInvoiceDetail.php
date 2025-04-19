<?php

namespace App\Model\WebSite\Shopping;

use App\Model\Panel\Seller\SellerProduct;
use App\User;
use Illuminate\Database\Eloquent\Model;

class PurchaseInvoiceDetail extends Model
{
    protected $fillable = [
        'user_id',
        'seller_product_id',
        'purchase_invoice_id',
        'count',
        'amount_paid',
        'discount',
        'color',
        'size',
        'guarantee',
    ];
    public function purchaseInvoice(){
        return $this->belongsTo(purchaseInvoice::class,'purchase_invoice_id');
    }
    public function sellerProduct(){
        return $this->hasOne(SellerProduct::class,'pid','seller_product_id');
    }
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
}








