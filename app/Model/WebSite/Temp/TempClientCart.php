<?php

namespace App\Model\WebSite\Temp;

use App\Model\Panel\Seller\SellerProduct;
use Illuminate\Database\Eloquent\Model;

class TempClientCart extends Model
{
    protected $fillable = [
        'temp_client_id',
        'seller_product_id',
        'temp_client_invoice_id',
        'color',
        'size',
        'guarantee',
        'count',
    ];
    public function tempClient(){
        return $this->belongsTo(TempClient::class,'temp_client_id');
    }
    public function sellerProduct(){
        return $this->hasOne(SellerProduct::class,'pid','seller_product_id');
    }
}

