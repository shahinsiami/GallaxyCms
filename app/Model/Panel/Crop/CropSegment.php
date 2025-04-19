<?php

namespace App\Model\Panel\Crop;

use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Support\Facades\DB;

class CropSegment extends Model
{
    use Sluggable;
    protected $fillable = ['name', 'description', 'priority', 'event', 'crop_sub_category_id', 'image', 'slug'];
    public function category()
    {
        return $this->hasManyThrough(CropCategory::class, CropSubCategory::class, 'id', 'id', 'crop_sub_category_id', 'crop_category_id');
    }
    public function subcategory()
    {
        return $this->belongsTo(CropSubCategory::class, 'crop_sub_category_id');
    }

    public function subsegment()
    {
        return $this->hasMany(CropSubSegment::class);
    }
    public function crop()
    {
        return $this->hasManyThrough(Crop::class, CropSubSegment::class, 'crop_segment_id', 'crop_sub_segment_id', 'id', 'id');
    }
    public function sellerProduct()
    {
        return  DB::table('crop_segments')
            ->join('crop_sub_segments', 'crop_segments.id', '=', 'crop_sub_segments.crop_segment_id')
            ->join('crops', 'crops.id', '=', 'crops.crop_sub_segment_id')
            ->join('seller_products', 'seller_products.pid', '=', 'seller_products.crop_id')
            ->select(['seller_products.*','crops.*'])->groupBy('pid');;
    }




    public function sluggable()
    {
        return [
            'slug' => [
                'source' => 'name'
            ]
        ];
    }
}
