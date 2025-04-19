<?php

namespace App\Model\Panel\Crop;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CropCategory extends Model
{
    use Sluggable;
    protected $fillable = [
        'name', 'description', 'priority', 'event', 'image', 'slug', 'page_template_id',
        'page_language_id'
    ];

    public function subcategory()
    {
        return $this->hasMany(CropSubCategory::class);
    }
    public function segment()
    {
        return $this->hasManyThrough(CropSegment::class, CropSubCategory::class);
    }

    public function subsegment()
    {
        return  DB::table('crop_categories')
            ->join('crop_sub_categories', 'crop_categories.id', '=', 'crop_sub_categories.crop_category_id')
            ->join('crop_segments', 'crop_sub_categories.id', '=', 'crop_segments.crop_sub_category_id')
            ->join('crop_sub_segments', 'crop_segments.id', '=', 'crop_sub_segments.crop_segment_id')
            ->select('crop_sub_segments.*');
    }
    public function crop()
    {
        return  DB::table('crop_categories')
            ->join('crop_sub_categories', 'crop_categories.id', '=', 'crop_sub_categories.crop_category_id')
            ->join('crop_segments', 'crop_sub_categories.id', '=', 'crop_segments.crop_sub_category_id')
            ->join('crop_sub_segments', 'crop_segments.id', '=', 'crop_sub_segments.crop_segment_id')
            ->join('crops', 'crops.id', '=', 'crops.crop_sub_segment_id')
            ->select('crops.*');
    }
    public function sellerProduct()
    {
        return  DB::table('crop_categories')
            ->join('crop_sub_categories', 'crop_categories.id', '=', 'crop_sub_categories.crop_category_id')
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
