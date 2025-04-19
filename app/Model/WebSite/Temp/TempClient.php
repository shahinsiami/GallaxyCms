<?php

namespace App\Model\WebSite\Temp;

use Illuminate\Database\Eloquent\Model;

class TempClient extends Model
{
    protected $fillable = [
        'name',
        'family',
        'birthday',
        'superscription',
        'state',
        'city',
        'zone',
        'postcode',
        'area_state_id',
        'area_city_id',
        'area_zone_id',
        'sex',
        'degree',
        'email',
        'description',
        'phonenumber',
    ];
    public function tempClientInvoice(){
        return $this->hasMany(TempClientInvoice::class,'temp_client_id');
    }
}
















