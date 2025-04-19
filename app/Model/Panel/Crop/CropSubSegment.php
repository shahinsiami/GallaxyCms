<?php

namespace App\Model\Panel\Crop;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class CropSubSegment extends Model
{
    use Sluggable;
    protected $fillable = ['name', 'description', 'priority', 'crop_event_id', 'crop_segment_id', 'image', 'slug'];

    public function segment()
    {
        return $this->belongsTo(CropSegment::class, 'crop_segment_id');
    }
    public function crop()
    {
        return $this->hasMany(Crop::class);
    }
    public function sellerProduct()
    {
        return  DB::table('crop_sub_segments')
            ->join('crops', 'crops.id', '=', 'crops.crop_sub_segment_id')
            ->join('seller_products', 'seller_products.pid', '=', 'seller_products.crop_id')
            ->select(['seller_products.*','crops.*'])->groupBy('pid');;
    }
    public function subcategory()
    {
        return  DB::table('crop_sub_segments')
            ->join('crop_segments', 'crop_segments.id', '=', 'crop_sub_segments.crop_segment_id')
            ->join('crop_sub_categories', 'crop_sub_categories.id', '=', 'crop_segments.crop_sub_category_id')
            ->select('crop_sub_categories.*')->groupBy('id');
    }
    public function category()
    {
        return  DB::table('crop_sub_segments')
            ->join('crop_segments', 'crop_segments.id', '=', 'crop_sub_segments.crop_segment_id')
            ->join('crop_sub_categories', 'crop_sub_categories.id', '=', 'crop_segments.crop_sub_category_id')
            ->join('crop_categories', 'crop_categories.id', '=', 'crop_sub_categories.crop_category_id')
            ->select('crop_categories.*')->groupBy('id');
    }
    public function rateByHigh()
    {
        return  DB::table('crop_sub_segments')
        ->join('crops', 'crop_sub_segments.id', '=', 'crops.crop_sub_segment_id')
        ->join('crop_rates', 'crops.id', '=', 'crop_rates.crop_id')->orderBy('rate', 'desc');
    }
    public function amountByHigh()
    {
        return  DB::table('crop_sub_segments')
        ->join('crops', 'crop_sub_segments.id', '=', 'crops.crop_sub_segment_id')
        ->join('crop_amounts', 'crops.id', '=', 'crop_amounts.crop_id')->orderBy('amount', 'desc');
    }
    public function amountCountByHigh()
    {
        return  DB::table('crop_sub_segments')
        ->join('crops', 'crop_sub_segments.id', '=', 'crops.crop_sub_segment_id')
        ->join('crop_amounts', 'crops.id', '=', 'crop_amounts.crop_id')->orderBy('salenumber', 'desc');
    }
    public function event()
    {
        return $this->belongsTo(CropEvent::class);
    }
    public function detail()
    {
        return $this->hasOne(CropDetail::class);
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
