<?php

namespace App\Http\Controllers\SiteView;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Panel\Crop\Crop;
use App\Model\Panel\Crop\CropSubSegment;
use App\Model\Panel\Seller\SellerProduct;

class ViewFilterCropController extends Controller
{
    //////////////////////////////////////////////////////////////////////  viewFilterCropByLowPrice
    public function viewFilterCropByLowPrice(Request $request)
    {
        $viewFilterCropByLowPrice = SellerProduct::orderBy('price', 'asc')
            ->get();
        return response()->json($viewFilterCropByLowPrice);
    }
    //////////////////////////////////////////////////////////////////////  viewFilterCropByLowPrice
    //////////////////////////////////////////////////////////////////////  viewFilterCropByHighPrice
    public function viewFilterCropByHighPrice(Request $request)
    {
        $viewFilterCropByHighPrice = SellerProduct::orderBy('price', 'desc')
            ->get();
        return response()->json($viewFilterCropByHighPrice);
    }
    //////////////////////////////////////////////////////////////////////  viewFilterCropByHighPrice
    //////////////////////////////////////////////////////////////////////  viewFilterCropByBetweenTwoPrices
    public function viewFilterCropByBetweenTwoPrices(Request $request)
    {
        $viewFilterCropByBetweenTwoPrices = SellerProduct::whereBetween('price', [$request->low, $request->high])
            ->get();
        return response()->json($viewFilterCropByBetweenTwoPrices);
    }
    //////////////////////////////////////////////////////////////////////  viewFilterCropByBetweenTwoPrices
    //////////////////////////////////////////////////////////////////////  viewFilterCropByLowPriceInSubSegment
    public function viewFilterCropByLowPriceInSubSegment(Request $request)
    {
        $viewFilterCropByLowPriceInSubSegment = CropSubSegment::where('id',$request->subsegment)->first()->sellerProduct()->orderBy('price', 'asc')
            ->get();
        return response()->json($viewFilterCropByLowPriceInSubSegment);
    }
    //////////////////////////////////////////////////////////////////////  viewFilterCropByLowPriceInSubSegment
    //////////////////////////////////////////////////////////////////////  viewFilterCropByHighPriceInSubSegment
    public function viewFilterCropByHighPriceInSubSegment(Request $request)
    {
        $viewFilterCropByHighPriceInSubSegment = CropSubSegment::where('id',$request->subsegment)->first()->sellerProduct()->orderBy('price', 'desc')
            ->get();
        return response()->json($viewFilterCropByHighPriceInSubSegment);
    }
    //////////////////////////////////////////////////////////////////////  viewFilterCropByHighPriceInSubSegment
    //////////////////////////////////////////////////////////////////////  viewFilterCropByBetweenTwoPricesInSubSegment
    public function viewFilterCropByBetweenTwoPricesInSubSegment(Request $request)
    {
        $viewFilterCropByBetweenTwoPricesInSubSegment = CropSubSegment::where('id',$request->subsegment)->first()->sellerProduct()->whereBetween('price', [$request->low, $request->high])
            ->get();
        return response()->json($viewFilterCropByBetweenTwoPricesInSubSegment);
    }
    //////////////////////////////////////////////////////////////////////  viewFilterCropByBetweenTwoPricesInSubSegment





      //////////////////////////////////////////////////////////////////////  viewFilterCropByLowDiscount
      public function viewFilterCropByLowDiscount(Request $request)
      {
          $viewFilterCropByLowDiscount = SellerProduct::orderBy('discount', 'asc')
              ->get();
          return response()->json($viewFilterCropByLowDiscount);
      }
      //////////////////////////////////////////////////////////////////////  viewFilterCropByLowDiscount
      //////////////////////////////////////////////////////////////////////  viewFilterCropByHighDiscount
      public function viewFilterCropByHighDiscount(Request $request)
      {
          $viewFilterCropByHighDiscount = SellerProduct::orderBy('discount', 'desc')
              ->get();
          return response()->json($viewFilterCropByHighDiscount);
      }
      //////////////////////////////////////////////////////////////////////  viewFilterCropByHighDiscount
      //////////////////////////////////////////////////////////////////////  viewFilterCropByBetweenTwoDiscounts
      public function viewFilterCropByBetweenTwoDiscounts(Request $request)
      {
          $viewFilterCropByBetweenTwoDiscounts = SellerProduct::whereBetween('discount', [$request->low, $request->high])
              ->get();
          return response()->json($viewFilterCropByBetweenTwoDiscounts);
      }
      //////////////////////////////////////////////////////////////////////  viewFilterCropByBetweenTwoDiscounts
      //////////////////////////////////////////////////////////////////////  viewFilterCropByLowDiscountInSubSegment
      public function viewFilterCropByLowDiscountInSubSegment(Request $request)
      {
          $viewFilterCropByLowDiscountInSubSegment = CropSubSegment::where('id',$request->subsegment)->first()->sellerProduct()->orderBy('discount', 'asc')
              ->get();
          return response()->json($viewFilterCropByLowDiscountInSubSegment);
      }
      //////////////////////////////////////////////////////////////////////  viewFilterCropByLowDiscountInSubSegment
      //////////////////////////////////////////////////////////////////////  viewFilterCropByHighDiscountInSubSegment
      public function viewFilterCropByHighDiscountInSubSegment(Request $request)
      {
          $viewFilterCropByHighDiscountInSubSegment = CropSubSegment::where('id',$request->subsegment)->first()->sellerProduct()->orderBy('discount', 'desc')
              ->get();
          return response()->json($viewFilterCropByHighDiscountInSubSegment);
      }
      //////////////////////////////////////////////////////////////////////  viewFilterCropByHighDiscountInSubSegment
      //////////////////////////////////////////////////////////////////////  viewFilterCropByBetweenTwoDiscountsInSubSegment
      public function viewFilterCropByBetweenTwoDiscountsInSubSegment(Request $request)
      {
          $viewFilterCropByBetweenTwoDiscountsInSubSegment = CropSubSegment::where('id',$request->subsegment)->first()->sellerProduct()->whereBetween('discount', [$request->low, $request->high])
              ->get();
          return response()->json($viewFilterCropByBetweenTwoDiscountsInSubSegment);
      }
      //////////////////////////////////////////////////////////////////////  viewFilterCropByBetweenTwoDiscountsInSubSegment
      //////////////////////////////////////////////////////////////////////  viewFilterCropByRateInSegment
      public function viewFilterCropByRateInSegment(Request $request)
      {
          $viewFilterCropByRateInSegment = CropSubSegment::where('id',$request->subsegment)->first()->rateByHigh()->get();
          return response()->json($viewFilterCropByRateInSegment);
      }
      //////////////////////////////////////////////////////////////////////  viewFilterCropByRateInSegment
       //////////////////////////////////////////////////////////////////////  viewFilterCropByAmountInSegment
       public function viewFilterCropByAmountInSegment(Request $request)
       {
           $viewFilterCropByAmountInSegment = CropSubSegment::where('id',$request->subsegment)->first()->amountByHigh()->get();
           return response()->json($viewFilterCropByAmountInSegment);
       }
       //////////////////////////////////////////////////////////////////////  viewFilterCropByAmountInSegment
        //////////////////////////////////////////////////////////////////////  viewFilterCropByAmountCountInSegment
      public function viewFilterCropByAmountCountInSegment(Request $request)
      {
          $viewFilterCropByAmountCountInSegment = CropSubSegment::where('id',$request->subsegment)->first()->amountCountByHigh()->get();
          return response()->json($viewFilterCropByAmountCountInSegment);
      }
      //////////////////////////////////////////////////////////////////////  viewFilterCropByAmountCountInSegment
            //////////////////////////////////////////////////////////////////////  viewFilterCropByBrand
            public function viewFilterCropByBrand(Request $request)
            {
                $viewFilterCropByBrand = Crop::where('brand',$request->brand)->get();
                return response()->json($viewFilterCropByBrand);
            }
            //////////////////////////////////////////////////////////////////////  viewFilterCropByBrand
}