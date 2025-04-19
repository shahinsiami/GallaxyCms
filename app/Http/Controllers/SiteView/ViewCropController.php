<?php

namespace App\Http\Controllers\SiteView;

use App\Model\Panel\Crop\Crop;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Panel\Crop\CropCategory;
use App\Model\Panel\Crop\CropSegment;
use App\Model\Panel\Crop\CropSubCategory;
use App\Model\Panel\Crop\CropSubSegment;

class ViewCropController extends Controller
{
    //////////////////////////////////////////////////////////////////////  viewAllCrop
    public function viewAllCrop()
    {
        $viewAllCrop = Crop::get();
        return response()->json($viewAllCrop);
    }
    //////////////////////////////////////////////////////////////////////  viewAllCrop
    //////////////////////////////////////////////////////////////////////  viewSingleCrop
    public function viewSingleCrop(Request $request)
    {
        $viewAllCrop = Crop::where('slug', $request->slug)->get();
        return response()->json($viewAllCrop);
    }
    //////////////////////////////////////////////////////////////////////  viewSingleCrop
    //////////////////////////////////////////////////////////////////////  cropByCategory
    public function cropByCategory(Request $request)
    {
        $cropByCategory = CropCategory::where('slug', $request->slug)->first()->crop()->limit(100)->get();
        return $cropByCategory;
    }
    //////////////////////////////////////////////////////////////////////  cropByCategory
    //////////////////////////////////////////////////////////////////////  cropBySubCategory
    public function cropBySubCategory(Request $request)
    {
        $cropBySubCategory = CropSubCategory::where('slug', $request->slug)->first()->crop()->limit(100)->get();
        return $cropBySubCategory;
    }
    //////////////////////////////////////////////////////////////////////  cropBySubCategory
    //////////////////////////////////////////////////////////////////////  cropBySegment
    public function cropBySegment(Request $request)
    {
        $cropBySegment = CropSegment::where('slug', $request->slug)->first()->crop()->limit(100)->get();
        return $cropBySegment;
    }
    //////////////////////////////////////////////////////////////////////  cropBySegment
    //////////////////////////////////////////////////////////////////////  cropBySubSegment
    public function cropBySubSegment(Request $request)
    {
        $cropBySubSegment = CropSubSegment::where('slug', $request->slug)->first()->crop()->limit(100)->get();
        return $cropBySubSegment;
    }
    //////////////////////////////////////////////////////////////////////  cropBySubSegment
    //////////////////////////////////////////////////////////////////////  cropDetail
    public function cropDetail(Request $request)
    {
        $cropDetail = Crop::where('slug', $request->slug)->with(['saleaMount', 'attribute', 'media', 'rate', 'fullDescription', 'sellerProduct'])->first();
        return $cropDetail;
    }
    //////////////////////////////////////////////////////////////////////  cropDetail
    //////////////////////////////////////////////////////////////////////  cropCategory
    public function cropCategory(Request $request)
    {
        $cropCategory = Crop::where('slug', $request->slug)->first()->category()->get();
        return $cropCategory;
    }
    //////////////////////////////////////////////////////////////////////  cropCategory
    //////////////////////////////////////////////////////////////////////  cropSubCategory
    public function cropSubCategory(Request $request)
    {
        $cropCategory = Crop::where('slug', $request->slug)->first()->subcategory()->get();
        return $cropCategory;
    }
    //////////////////////////////////////////////////////////////////////  cropSubCategory
    //////////////////////////////////////////////////////////////////////  cropSegment
    public function cropSegment(Request $request)
    {
        $cropCategory = Crop::where('slug', $request->slug)->first()->segment()->get();
        return $cropCategory;
    }
    //////////////////////////////////////////////////////////////////////  cropSegment
    //////////////////////////////////////////////////////////////////////  cropSubSegment
    public function cropSubSegment(Request $request)
    {
        $cropCategory = Crop::where('slug', $request->slug)->first()->subsegment()->get();
        return $cropCategory;
    }
    //////////////////////////////////////////////////////////////////////  cropSubSegment
}
