<?php

namespace App\Http\Controllers\Panel\Invoice;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\WebSite\Temp\TempClientInvoice;
use App\Traits;
use Illuminate\Support\Facades\Gate;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Validator;

class InvoiceTempClientContrller extends Controller
{
    use Traits\uploadImage;
    use Traits\validatorError;
    /////////////////////////////////////////////////////////////////////////////////////statusInvoiceTempClientTable
    public function statusInvoiceTempClientTable(Request $request)
    {
        if (Gate::allows('administrator')) {
            $clientInvoiceTable = TempClientInvoice::with('tempClient')->where($request->searchColumn, 'like', '%' . $request->search . '%')->whereBetween('created_at', [$request->startDate, $request->endDate])->orderby($request->name, $request->order)->paginate(20);
            return response()->json($clientInvoiceTable);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////statusInvoiceTempClientTable
    /////////////////////////////////////////////////////////////////////////////////////editInvoiceTempClientColumn
    public function editInvoiceTempClientColumn(Request $request)
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
            $TempClientInvoice = TempClientInvoice::find($request->id);
            $TempClientInvoice->update($request->all());
            return $this->vSuccess();
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////editInvoiceTempClientColumn
    /////////////////////////////////////////////////////////////////////////////////////tempClientInvoiceTable
    public function tempClientInvoiceTable(Request $request)
    {
        if (Gate::allows('administrator')) {
            $tempClientInvoiceTable = TempClientInvoice::with('tempClient')->where($request->searchColumn, 'like', '%' . $request->search . '%')->whereBetween('created_at', [$request->startDate, $request->endDate])->orderby($request->name, $request->order)->paginate(20);
            return response()->json($tempClientInvoiceTable);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////tempClientInvoiceTable
    /////////////////////////////////////////////////////////////////////////////////////selectTempClientInvoice
    public function selectTempClientInvoice($id)
    {
        if (Gate::allows('administrator')) {
            $selectClientInvoice = TempClientInvoice::where('id', $id)->first();
            return response()->json($selectClientInvoice);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////selectTempClientInvoice
    /////////////////////////////////////////////////////////////////////////////////////selectTempClientInvoiceAdditional
    public function selectTempClientInvoiceAdditional(Request $request, $id)
    {
        if (Gate::allows('administrator')) {
            $selectTempClientInvoiceAdditional = TempClientInvoice::where('id', $id)->first()->tempClientCart()->with(['tempClient', 'sellerProduct' =>
            function ($query) {
                $query->with(['product', 'seller'])->get();
            }])->where($request->searchColumn, 'like', '%' . $request->search . '%')->whereBetween('created_at', [$request->startDate, $request->endDate])->orderby($request->name, $request->order)->paginate(20);
            return response()->json($selectTempClientInvoiceAdditional);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////selectTempClientInvoiceAdditional
}
