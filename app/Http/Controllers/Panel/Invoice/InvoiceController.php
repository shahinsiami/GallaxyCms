<?php

namespace App\Http\Controllers\Panel\Invoice;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\WebSite\Shopping\PurchaseInvoice;
use App\Model\WebSite\Shopping\PurchaseStoreInvoice;
use App\Traits;
use Illuminate\Support\Facades\Gate;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Validator;

class InvoiceController extends Controller
{
    use Traits\uploadImage;
    use Traits\validatorError;
    /////////////////////////////////////////////////////////////////////////////////////clientInvoiceTable
    public function clientInvoiceTable(Request $request)
    {
        if (Gate::allows('administrator')) {
            $clientInvoiceTable = PurchaseInvoice::with('client')->where($request->searchColumn, 'like', '%' . $request->search . '%')->whereBetween('created_at', [$request->startDate, $request->endDate])->orderby($request->name, $request->order)->paginate(20);
            return response()->json($clientInvoiceTable);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////clientInvoiceTable
    /////////////////////////////////////////////////////////////////////////////////////selectClientInvoice
    public function selectClientInvoice($id)
    {
        if (Gate::allows('administrator')) {
            $selectClientInvoice = PurchaseInvoice::where('id', $id)->first();
            return response()->json($selectClientInvoice);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////selectClientInvoice
    /////////////////////////////////////////////////////////////////////////////////////selectClientInvoiceAdditional
    public function selectClientInvoiceAdditional(Request $request,$id)
    {
        if (Gate::allows('administrator')) {
            $selectClientInvoiceAdditional = PurchaseInvoice::where('id', $id)->first()->purchaseInvoiceDetail()->with(['user','sellerProduct'=>
            function($query){
                $query->with(['product','seller'])->get();
            }
            ])->where($request->searchColumn, 'like', '%' . $request->search . '%')->whereBetween('created_at', [$request->startDate, $request->endDate])->orderby($request->name, $request->order)->paginate(20);
            return response()->json($selectClientInvoiceAdditional);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////selectClientInvoiceAdditional
    /////////////////////////////////////////////////////////////////////////////////////storeInvoiceTable
    public function storeInvoiceTable(Request $request)
    {
        if (Gate::allows('administrator')) {
            $storeInvoiceTable = PurchaseInvoice::with(['purchaseStoreInvoice','client'])->where($request->searchColumn, 'like', '%' . $request->search . '%')->whereBetween('created_at', [$request->startDate, $request->endDate])->orderby($request->name, $request->order)->paginate(20);
            return response()->json($storeInvoiceTable);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////storeInvoiceTable
    /////////////////////////////////////////////////////////////////////////////////////selectstoreInvoice
    public function selectstoreInvoice($id)
    {
        if (Gate::allows('administrator')) {
            $selectstoreInvoice = PurchaseInvoice::where('id', $id)->first();
            return response()->json($selectstoreInvoice);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////selectstoreInvoice
      /////////////////////////////////////////////////////////////////////////////////////selectStoretInvoiceAdditional
      public function selectStoretInvoiceAdditional(Request $request,$id)
      {
          if (Gate::allows('administrator')) {
              $selectStoretInvoiceAdditional = PurchaseInvoice::where('id', $id)->first()->purchaseStoreInvoice()->with(['user','sellerProduct'=>
              function($query){
                  $query->with(['product','seller'])->get();
              }
              ])->where($request->searchColumn, 'like', '%' . $request->search . '%')->whereBetween('created_at', [$request->startDate, $request->endDate])->orderby($request->name, $request->order)->paginate(20);
              return response()->json($selectStoretInvoiceAdditional);
          }
      }
      /////////////////////////////////////////////////////////////////////////////////////selectStoretInvoiceAdditional
    /////////////////////////////////////////////////////////////////////////////////////statusInvoiceTable
    public function statusInvoiceTable(Request $request)
    {
        if (Gate::allows('administrator')) {
            $clientInvoiceTable = PurchaseInvoice::with('client')->where($request->searchColumn, 'like', '%' . $request->search . '%')->whereBetween('created_at', [$request->startDate, $request->endDate])->orderby($request->name, $request->order)->paginate(20);
            return response()->json($clientInvoiceTable);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////statusInvoiceTable
    /////////////////////////////////////////////////////////////////////////////////////selectstatusInvoice
    public function selectstatusInvoice($id)
    {
        if (Gate::allows('administrator')) {
            $selectClientInvoice = PurchaseInvoice::where('id', $id)->first();
            return response()->json($selectClientInvoice);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////selectstatusInvoice
      /////////////////////////////////////////////////////////////////////////////////////selectStatustInvoiceAdditional
      public function selectStatustInvoiceAdditional(Request $request,$id)
      {
          if (Gate::allows('administrator')) {
              $selectStatustInvoiceAdditional = PurchaseInvoice::where('id', $id)->first()->purchaseInvoiceDetail()->with(['user','sellerProduct'=>
              function($query){
                  $query->with(['product','seller'])->get();
              }
              ])->where($request->searchColumn, 'like', '%' . $request->search . '%')->whereBetween('created_at', [$request->startDate, $request->endDate])->orderby($request->name, $request->order)->paginate(20);
              return response()->json($selectStatustInvoiceAdditional);
          }
      }
      /////////////////////////////////////////////////////////////////////////////////////selectStatustInvoiceAdditional
    /////////////////////////////////////////////////////////////////////////////////////editInvoiceColumnt
    public function editInvoiceColumnt(Request $request)
    {
        if (Gate::allows('administrator')) {
            //validator//
            $validator = Validator::make($request->all(), [
                'id' => 'required',
            ]);
            if ($validator->fails()) {
                return $this->vError($validator->errors());
            }
            //validator//
            $category = PurchaseInvoice::find( $request->id);
            $category->update($request->all());
            return $this->vSuccess();

        }
    }
    /////////////////////////////////////////////////////////////////////////////////////editInvoiceColumnt
}
