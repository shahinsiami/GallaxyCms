<?php

namespace App\Model\WebSite\Temp;

use Illuminate\Database\Eloquent\Model;

class TempClientInvoice extends Model
{
    protected $fillable = [
        'temp_client_id',
        'discount',
        'price',
        'status',
        'price_with_discount',
        
    ];
    public function tempClientCart(){
        return $this->hasMany(TempClientCart::class,'temp_client_invoice_id');
    }
    public function tempClient(){
        return $this->belongsTo(TempClient::class,'temp_client_id');
    }
    public function sellerProduct(){
        return $this->hasOne(SellerProduct::class,'pid','seller_product_id');
    }
}






