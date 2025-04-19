<?php

namespace App\Model\WebSite\Shopping;

use Illuminate\Database\Eloquent\Model;

class ClientInterest extends Model
{
    protected $fillable = [
        'user_id',
        'crop_id',
    ];
    public function user(){
        return $this->belongsTo(User::class,'user_id');
    }
}
