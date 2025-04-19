<?php

namespace App\Http\Controllers\SiteView;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Panel\Crop\CropCategory;
use App\Model\Panel\Crop\CropSegment;
use App\Model\Panel\Crop\CropSubSegment;

class ViewCropMenuController extends Controller
{
       //////////////////////////////////////////////////////////////////////  cropCategoryMenu
       public function cropCategoryMenu()
       {
           $cropCategoryMenu = CropCategory::get();
           return response()->json($cropCategoryMenu);
       }
       //////////////////////////////////////////////////////////////////////  cropCategoryMenu
          //////////////////////////////////////////////////////////////////////  cropSubCategoryMenu
    public function cropSubCategoryMenu()
    {
        $cropSubCategoryMenu = CropSubSegment::get();
        return response()->json($cropSubCategoryMenu);
    }
    //////////////////////////////////////////////////////////////////////  cropSubCategoryMenu
       //////////////////////////////////////////////////////////////////////  cropSegmentMenu
       public function cropSegmentMenu()
       {
           $cropSegmentMenu = CropSegment::get();
           return response()->json($cropSegmentMenu);
       }
       //////////////////////////////////////////////////////////////////////  cropSegmentMenu
          //////////////////////////////////////////////////////////////////////  cropSubSegmentMenu
    public function cropSubSegmentMenu()
    {
        $cropSubSegmentMenu = CropSubSegment::get();
        return response()->json($cropSubSegmentMenu);
    }
    //////////////////////////////////////////////////////////////////////  cropSubSegmentMenu

}
