<?php

namespace App\Http\Controllers\SiteView;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Panel\Crop\Crop;
use App\Model\Panel\Crop\CropCategory;
use App\Model\Panel\Crop\CropSegment;
use App\Model\Panel\Crop\CropSubCategory;
use App\Model\Panel\Crop\CropSubSegment;

class ViewSellerCropController extends Controller
{
    //////////////////////////////////////////////////////////////////////  viewSellerProductByCategory
    public function viewSellerProductByCategory(Request $request)
    {
        $crop = CropCategory::where('page_language_id', $request->language)
            ->where('id', $request->category)->first()->sellerproduct()
            ->get();
        return response()->json($crop);
    }
    //////////////////////////////////////////////////////////////////////  viewSellerProductByCategory
    //////////////////////////////////////////////////////////////////////  viewSellerProductBySubCategory
    public function viewSellerProductBySubCategory(Request $request)
    {
        $crop = CropSubCategory::where('id', $request->subcategory)->first()->sellerproduct()
            ->get();
        return response()->json($crop);
    }
    //////////////////////////////////////////////////////////////////////  viewSellerProductBySubCategory
    //////////////////////////////////////////////////////////////////////  viewSellerProductBySegment
    public function viewSellerProductBySegment(Request $request)
    {
        $crop = CropSegment::where('id', $request->segment)->first()->sellerproduct()
            ->get();
        return response()->json($crop);
    }
    //////////////////////////////////////////////////////////////////////  viewSellerProductBySegment
    //////////////////////////////////////////////////////////////////////  viewSellerProductBySubSegment
    public function viewSellerProductBySubSegment(Request $request)
    {
        $crop = CropSubSegment::where('id', $request->subsegment)->first()->sellerproduct()
            ->get();
        return response()->json($crop);
    }
    //////////////////////////////////////////////////////////////////////  viewSellerProductBySubSegment
}
