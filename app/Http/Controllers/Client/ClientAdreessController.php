<?php

namespace App\Http\Controllers\Client;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Area\AreaCity;
use App\Model\Area\AreaState;
use App\Model\Area\AreaZone;
use Illuminate\Support\Facades\Validator;
use App\Traits;

class ClientAdreessController extends Controller
{
    use Traits\validatorError;
    //////////////////////////////////////////////////////////////////////  allStateForClient
    public function allStateForClient()
    {
        $allStateForClient = AreaState::all();
        return response()->json($allStateForClient);
    }
    //////////////////////////////////////////////////////////////////////  allStateForClient
    //////////////////////////////////////////////////////////////////////  allCityForClient
    public function allCityForClient()
    {
        $allCityForClient = AreaCity::all();
        return response()->json($allCityForClient);
    }
    //////////////////////////////////////////////////////////////////////  allCityForClient
    //////////////////////////////////////////////////////////////////////  selectCityForClient
    public function selectCityForClient($id)
    {
        $selectCityForClient = AreaCity::where('area_state_id', $id)->get();
        return response()->json($selectCityForClient);
    }
    //////////////////////////////////////////////////////////////////////  selectCityForClient


    //////////////////////////////////////////////////////////////////////  allZoneForClient
    public function allZoneForClient()
    {
        $allZoneForClient = AreaZone::all();
        return response()->json($allZoneForClient);
    }
    //////////////////////////////////////////////////////////////////////  allZoneForClient
    //////////////////////////////////////////////////////////////////////  selectZoneForClient
    public function selectZoneForClient($id)
    {
        $selectZoneForClient = AreaZone::where('area_city_id', $id)->get();
        return response()->json($selectZoneForClient);
    }
    //////////////////////////////////////////////////////////////////////  selectZoneForClient
    //////////////////////////////////////////////////////////////////////  registerClientAdress
    public function registerClientAdress(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'area_state_id' => 'required',
            'area_city_id' => 'required',
            'area_zone_id' => 'required',
            'postcode' => 'required',
            'superscription' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->vError($validator->errors());
        }
        $area = AreaState::find($request->area_state_id)->name;
        $city = AreaCity::find($request->area_city_id)->name;
        $zone = AreaZone::find($request->area_zone_id)->name;
        auth()->user()->first()->clientAddress()->create(
            array_merge(
                $request->all(),
                array('area' => $area),
                array('city' => $city),
                array('zone' => $zone)
            )
        );
        return $this->vSuccess();
    }
    //////////////////////////////////////////////////////////////////////  registerClientAdress
    //////////////////////////////////////////////////////////////////////  clientAddress
    public function clientAddress(Request $request)
    {

        $clientAddress = auth()->user()->first()->clientAddress()->get();
        return response()->json($clientAddress);
    }
    //////////////////////////////////////////////////////////////////////  clientAddress
    //////////////////////////////////////////////////////////////////////  selectClientAddress
    public function selectClientAddress($id)
    {

        $selectClientAddress = auth()->user()->first()->clientAddress()->where('id', $id)->first();
        return response()->json($selectClientAddress);
    }
    //////////////////////////////////////////////////////////////////////  selectClientAddress
    //////////////////////////////////////////////////////////////////////  editClientAdress
    public function editClientAdress(Request $request, $id)
    {
        $area = AreaState::find($request->area_state_id)->name;
        $city = AreaCity::find($request->area_city_id)->name;
        $zone = AreaZone::find($request->area_zone_id)->name;
        $selectClientAddress = auth()->user()->first()->clientAddress()->where('id', $id)->first()->update(
            array_merge(
                $request->all(),
                array('area' => $area),
                array('city' => $city),
                array('zone' => $zone)
            )
        );
        return $this->vSuccess();
    }
    //////////////////////////////////////////////////////////////////////  editClientAdress
    //////////////////////////////////////////////////////////////////////  deleteClientAdress
    public function deleteClientAdress($id)
    {

        $selectClientAddress = auth()->user()->first()->clientAddress()->where('id', $id)->first()->delete();
        return $this->vSuccess();
    }
    //////////////////////////////////////////////////////////////////////  deleteClientAdress
}
