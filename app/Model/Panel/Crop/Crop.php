<?php

namespace App\Model\Panel\Crop;

use App\Model\Panel\Seller\SellerProduct;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Crop extends Model
{
    use Sluggable;

    protected $fillable = [
        'id' ,
        'name' ,
        'brand' ,
        'description' ,
        'meta' ,
        'madein' ,
        'packet' ,
        'image1' ,
        'image2' ,
        'image3',
        'image4',
        'image5',
        'image6',
        'image7',
        'image8',
        'image9',
        'image10',
        'timage1',
        'timage2',
        'slug',
        'crop_sub_segment_id',
        'maxprice',
        'minprice',
        ];

    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
    public function category()
    {
        return  DB::table('crops')
            ->join('crop_sub_segments', 'crop_sub_segments.id', '=', 'crops.crop_sub_segment_id')
            ->join('crop_segments', 'crop_segments.id', '=', 'crop_sub_segments.crop_segment_id')
            ->join('crop_sub_categories', 'crop_sub_categories.id', '=', 'crop_segments.crop_sub_category_id')
            ->join('crop_categories', 'crop_categories.id', '=', 'crop_sub_categories.crop_category_id')
            ->select('crop_categories.*')->groupBy('id');
    }
    public function subcategory()
    {
        return  DB::table('crops')
            ->join('crop_sub_segments', 'crop_sub_segments.id', '=', 'crops.crop_sub_segment_id')
            ->join('crop_segments', 'crop_segments.id', '=', 'crop_sub_segments.crop_segment_id')
            ->join('crop_sub_categories', 'crop_sub_categories.id', '=', 'crop_segments.crop_sub_category_id')
            ->select('crop_sub_categories.*')->groupBy('id');
    }
    public function segment()
    {
        return  DB::table('crops')
            ->join('crop_sub_segments', 'crop_sub_segments.id', '=', 'crops.crop_sub_segment_id')
            ->join('crop_segments', 'crop_segments.id', '=', 'crop_sub_segments.crop_segment_id')
            ->select('crop_segments.*')->groupBy('id');
    }
    public function subsegment(){
        return $this->belongsTo(CropSubSegment::class,'crop_sub_segment_id');
    }
    public function rate(){
        return $this->hasOne(CropRate::class);
    }
    public function saleaMount(){
        return $this->hasOne(CropAmount::class);
    }
    public function fullDescription(){
        return $this->hasMany(CropDescription::class);
    }
    public function attribute(){
        return $this->hasMany(CropAttribute::class);
    }
    public function media(){
        return $this->hasMany(CropMedia::class);
    }
    public function sellerProduct(){
        return $this->hasMany(SellerProduct::class);
    }
}
