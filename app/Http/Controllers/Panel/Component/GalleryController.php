<?php

namespace App\Http\Controllers\Panel\Component;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Panel\Component\ComponentGallery;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\File;
use App\Traits;

class GalleryController extends Controller
{
    use Traits\uploadImage;
    use Traits\validatorError;

    //////////////////////////////////////////////////////////////////////  gallery
    public function gallery()
    {
        if (Gate::allows('administrator')) {
            $gallery = ComponentGallery::where('status', 1)->get();
            return response()->json($gallery);
        }
    }
    //////////////////////////////////////////////////////////////////////  gallery

    //////////////////////////////////////////////////////////////////////  registerGallery
    public function registerGallery(Request $request)
    {
        if (Gate::allows('administrator')) {

            $validator = Validator::make($request->all(), [
                'name' => 'required|max:50',
                'image1' => 'required',
                'title1' => 'required',
                'description' => 'required',
                'link' => 'required',
                'seo' => 'required',
                'status' => 'required',
                'page_template_id' => 'required',
                'page_language_id' => 'required',
                'section' => 'required',

            ]);
            if ($validator->fails()) {
                return $this->vError($validator->errors());
            }
            //validator//
                ComponentGallery::create(array_merge($request->all(),
                    array( 'image1' => $this->saveImageAbsolute('gallery',$request->name,$request->image1)),
                    array( 'image2' => $this->saveImageAbsolute('gallery',$request->name,$request->image2))));
                return $this->vSuccess();
        }
    }
    //////////////////////////////////////////////////////////////////////  registerGallery

    /////////////////////////////////////////////////////////////////////////////////////galleryTable
    public function galleryTable(Request $request)
    {
        if (Gate::allows('administrator')) {
            $userTable =ComponentGallery::where($request->searchColumn, 'like', '%' . $request->search . '%')->whereBetween('created_at', [$request->startDate, $request->endDate])->orderby($request->name, $request->order)->paginate(20);
            return response()->json($userTable);
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////galleryTable



    //////////////////////////////////////////////////////////////////////  selectGallery
    public function selectGallery($id)
    {
        if (Gate::allows('administrator')) {
            $selectGallery = ComponentGallery::where('id', $id)->first();
            return response()->json($selectGallery);
        }
    }
    //////////////////////////////////////////////////////////////////////  selectGallery
    //////////////////////////////////////////////////////////////////////  editGallery
    public function editGallery(Request $request, $id)
    {
        if (Gate::allows('administrator')) {

            //validator//
            $validator = Validator::make($request->all(), [
                'name' => 'required|max:50',
                'title1' => 'required',
                'description' => 'required',
                'status' => 'required|numeric',
                'link' => 'required',
                'seo' => 'required',
                'page_template_id' => 'required',
                'page_language_id' => 'required',
                'section' => 'required',

            ]);
            if ($validator->fails()) {
                return $this->vError($validator->errors());
            }
            //validator//
                $gallery = ComponentGallery::find($id);
                $gallery->update(array_merge($request->all(),
                    array( 'image1' => $this->saveImageAbsolute('gallery',$request->name,$request->image1)),
                    array( 'image2' => $this->saveImageAbsolute('gallery',$request->name,$request->image2))));
                return $this->vSuccess();
        }
    }
    //////////////////////////////////////////////////////////////////////  editGallery

    /////////////////////////////////////////////////////////////////////////////////////deleteGallery
    public function deleteGallery($id)
    {
        if (Gate::allows('administrator')) {
            $gallery = ComponentGallery::find($id);
            File::delete(public_path(ComponentGallery::find($id)->image1));
            $gallery->delete();
            return $this->vSuccess();
        }
    }
    /////////////////////////////////////////////////////////////////////////////////////deleteGallery
}
