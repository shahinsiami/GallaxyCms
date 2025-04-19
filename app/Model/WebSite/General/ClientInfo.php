<?php

namespace App\Model\WebSite\General;

use Illuminate\Database\Eloquent\Model;

class ClientInfo extends Model
{
    protected $fillable = [
        'id',
        'name',
        'family',
        'birthday',
        'address',
        'sex',
        'degree',
        'signature',
        'photo',
        'email',
        'phonenumber',
        'user_id'
    ];
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
}
