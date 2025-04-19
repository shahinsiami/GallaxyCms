<?php

namespace App\Model\Panel\Crop;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CropSubCategory extends Model
{
    use Sluggable;
    protected $fillable = ['name', 'description', 'priority', 'event', 'crop_category_id', 'image', 'slug'];

    public function category()
    {
        return $this->belongsTo(CropCategory::class, 'crop_category_id');
    }

    public function segment()
    {
        return $this->hasMany(CropSegment::class);
    }

    public function subsegment()
    {
        return  DB::table('crop_sub_categories')
            ->join('crop_segments', 'crop_sub_categories.id', '=', 'crop_segments.crop_sub_category_id')
            ->join('crop_sub_segments', 'crop_segments.id', '=', 'crop_sub_segments.crop_segment_id')
            ->select('crop_sub_segments.*');
    }
    public function crop()
    {
        return  DB::table('crop_sub_categories')
            ->join('crop_segments', 'crop_sub_categories.id', '=', 'crop_segments.crop_sub_category_id')
            ->join('crop_sub_segments', 'crop_segments.id', '=', 'crop_sub_segments.crop_segment_id')
            ->join('crops', 'crops.id', '=', 'crops.crop_sub_segment_id')
            ->select('crops.*');
    }
    public function sellerProduct()
    {
        return  DB::table('crop_sub_categories')
            ->join('crop_segments', 'crop_sub_categories.id', '=', 'crop_segments.crop_sub_category_id')
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
