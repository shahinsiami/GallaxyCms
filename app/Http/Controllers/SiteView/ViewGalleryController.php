<?php

namespace App\Http\Controllers\SiteView;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Panel\Component\ComponentGallery;

class ViewGalleryController extends Controller
{
  //////////////////////////////////////////////////////////////////////  viewGallery
  public function viewGallery(Request $request)
  {
      $Gallery = ComponentGallery::where('page_language_id', $request->language)
          ->where('status', 1)
          ->where('page_template_id', $request->template)
          ->get();
      return response()->json($Gallery);
  }
  //////////////////////////////////////////////////////////////////////  viewGallery
}
