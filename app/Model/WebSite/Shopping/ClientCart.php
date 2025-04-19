<?php

namespace App\Model\WebSite\Shopping;

use App\Model\Panel\Seller\SellerProduct;
use Illuminate\Database\Eloquent\Model;

class ClientCart extends Model
{
    protected $fillable = [
        'user_id',
        'seller_product_id',
        'count',
    ];
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
    public function sellerProduct(){
        return $this->belongsTo(SellerProduct::class,'seller_product_id');
    }
    
}
