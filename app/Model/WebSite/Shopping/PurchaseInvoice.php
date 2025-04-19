<?php

namespace App\Model\WebSite\Shopping;

use App\User;
use Illuminate\Database\Eloquent\Model;

class PurchaseInvoice extends Model
{
    protected $fillable = [
        'user_id',
        'status',
        'amount_paid',
        'price',
        'discount',
        'transport_cost',
        'delivery_date',
        'delivery_time',
        'payment_method',
        'client_address_id',
        'description',
    ];
    public function purchaseInvoiceDetail(){
        return $this->hasMany(PurchaseInvoiceDetail::class,'purchase_invoice_id');
    }
    public function purchaseStoreInvoice(){
        return $this->hasMany(PurchaseStoreInvoice::class,'purchase_invoice_id');
    }
    public function client(){
        return $this->hasOne(User::class,'id','user_id');
    }
}









