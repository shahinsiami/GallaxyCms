<?php

namespace App\Model\WebSite\General;

use Illuminate\Database\Eloquent\Model;

class ClientAddress extends Model
{
    protected $fillable = [
        'superscription',
        'state',
        'city',
        'zone',
        'postcode',
        'area_state_id',
        'area_city_id',
        'area_zone_id',
    ];
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
}
