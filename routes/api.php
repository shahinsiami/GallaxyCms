<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('throttle:400,1')->post('/login', 'Authentication\Api@login');
Route::middleware(['throttle:400,1', 'auth:api'])->get('/userType/{permission}', 'Authentication\Api@userType');
///////////////////////////////////////////////////////////////////////////////////////////general
///////////////////////////////////////////////////////////////////////////////////////////general
///////////////////////////////////////////////////////////////////////////////////////////general
Route::middleware('auth:api')->prefix('v1')->group(function () {
    ///////////////////////////////////////////////////////////////////////////////////////////userinfo
    ///////////////////////////////////////////////////////////////////////////////////////////userType
    ///////////////////////////////////////////////////////////////////////////////////////////userType
    ///////////////////////////////////////////////////////////////////////////////////////////calender
    Route::post('/userCalender/', 'General\Panel\CalenderController@userCalender');
    Route::delete('/deleteTodoCalender/{id}', 'General\Panel\CalenderController@deleteTodoCalender');
    Route::get('/allUserForCalender/', 'General\Panel\CalenderController@allUserForCalender');
    Route::post('/registTodo', 'General\Panel\CalenderController@registTodo');
    Route::post('/todoDone', 'General\Panel\CalenderController@todoDone');
    Route::post('/todoLater', 'General\Panel\CalenderController@todoLater');
    ///////////////////////////////////////////////////////////////////////////////////////////calender
    ///////////////////////////////////////////////////////////////////////////////////////////file
    Route::post('/uploadFile', 'General\File\Upload@uploadFile');
    Route::post('/removeFile', 'General\File\Upload@removeFile');
    Route::post('/ckUpload', 'General\CkEditor\DecoupledEditor@ckUpload');
    ///////////////////////////////////////////////////////////////////////////////////////////file
    ///////////////////////////////////////////////////////////////////////////////////////////user
    Route::get('/allPermissionsForUserRegister', 'General\Users\Form@allPermissionsForUserRegister');
    Route::post('/userRegister', 'General\Users\Form@userRegister');
    Route::post('/userTable', 'General\Users\Form@userTable');
    Route::get('/selectUserEdit/{id}', 'General\Users\Form@selectUserEdit');
    Route::post('/editUser/{id}', 'General\Users\Form@editUser');
    Route::delete('/deleteUser/{id}', 'General\Users\Form@deleteUser');
    Route::get('/getUserInfo/', 'General\Users\Form@getUserInfo');
    Route::get('/userMenu', 'Authentication\Api@userMenu');
    Route::post('/logout', 'Authentication\Api@logout');
    Route::post('/resetpassword', 'Authentication\Api@resetpassword');
    Route::get('/getNotification', 'General\Users\Form@getNotification');
    Route::get('/seenNotification/{id}', 'General\Users\Form@seenNotification');
    ///////////////////////////////////////////////////////////////////////////////////////////user
    ///////////////////////////////////////////////////////////////////////////////////////////userinfo
    Route::post('/userInfoTable', 'General\Users\Form@userInfoTable');
    Route::get('/selectUserInfoEdit/{id}', 'General\Users\Form@selectUserInfoEdit');
    Route::post('/EditUserInfo/{id}', 'General\Users\Form@EditUserInfo');
    ///////////////////////////////////////////////////////////////////////////////////////////userinfo
});
///////////////////////////////////////////////////////////////////////////////////////////general
///////////////////////////////////////////////////////////////////////////////////////////general
///////////////////////////////////////////////////////////////////////////////////////////general
///////////////////////////////////////////////////////////////////////////////////////////sitepanel
///////////////////////////////////////////////////////////////////////////////////////////sitepanel
///////////////////////////////////////////////////////////////////////////////////////////sitepanel
Route::middleware('auth:api')->prefix('v1')->group(function () {
    ///////////////////////////////////////////////////////////////////////////////////////////main
    Route::get('/language', 'Panel\Main\MainController@language');
    Route::get('/template', 'Panel\Main\MainController@template');
    ///////////////////////////////////////////////////////////////////////////////////////////main
    ///////////////////////////////////////////////////////////////////////////////////////////category
    Route::post('/registCategory', 'Panel\Category\WebCategoryController@registCategory');
    Route::post('/categoryTable', 'Panel\Category\WebCategoryController@categoryTable');
    Route::get('/selectCategory/{id}', 'Panel\Category\WebCategoryController@selectCategory');
    Route::post('/editCategory/{id}', 'Panel\Category\WebCategoryController@editCategory');
    Route::delete('/deleteCategory/{id}', 'Panel\Category\WebCategoryController@deleteCategory');
    Route::get('/excelCat', 'Panel\Category\WebCategoryController@excelCat');
    ///////////////////////////////////////////////////////////////////////////////////////////category
    ///////////////////////////////////////////////////////////////////////////////////////////subcategory
    Route::get('/allSubCategory', 'Panel\Category\WebSubCategoryController@allSubCategory');
    Route::post('/registerSubCategory', 'Panel\Category\WebSubCategoryController@registerSubCategory');
    Route::get('/categoryForSubCategories', 'Panel\Category\WebSubCategoryController@categoryForSubCategories');
    Route::post('/subCategoryTable', 'Panel\Category\WebSubCategoryController@subCategoryTable');
    Route::get('/selectSubCategory/{id}', 'Panel\Category\WebSubCategoryController@selectSubCategory');
    Route::post('/editSubCategory/{id}', 'Panel\Category\WebSubCategoryController@editSubCategory');
    Route::delete('/deleteSubCategory/{id}', 'Panel\Category\WebSubCategoryController@deleteSubCategory');
    Route::get('/excelSubCategory', 'Panel\Category\WebSubCategoryController@excelSubCategory');
    ///////////////////////////////////////////////////////////////////////////////////////////subcategory
    ///////////////////////////////////////////////////////////////////////////////////////////segment
    Route::get('/categoryForSegment', 'Panel\Category\WebSegmentController@categoryForSegment');
    Route::get('/choiceSubCategory/{id}', 'Panel\Category\WebSegmentController@choiceSubCategory');
    Route::get('/subCategoryForSegment', 'Panel\Category\WebSegmentController@subCategoryForSegment');
    Route::post('/registSegment', 'Panel\Category\WebSegmentController@registSegment');
    Route::post('/segmentTable', 'Panel\Category\WebSegmentController@segmentTable');
    Route::get('/selectSegment/{id}', 'Panel\Category\WebSegmentController@selectSegment');
    Route::post('/editSegment/{id}', 'Panel\Category\WebSegmentController@editSegment');
    Route::delete('/deletSegment/{id}', 'Panel\Category\WebSegmentController@deletSegment');
    Route::get('/excelSegment', 'Panel\Category\WebSegmentController@excelSegment');
    ///////////////////////////////////////////////////////////////////////////////////////////segment
    ///////////////////////////////////////////////////////////////////////////////////////////article
    Route::post('/registerArticle', 'Panel\Article\WebArticleController@registerArticle');
    Route::post('/categoryForArticle', 'Panel\Article\WebArticleController@categoryForArticle');
    Route::post('/subCategoryForArticle', 'Panel\Article\WebArticleController@subCategoryForArticle');
    Route::post('/subCategoryForArticleBySelection/{id}', 'Panel\Article\WebArticleController@subCategoryForArticleBySelection');
    Route::post('/SegmentForArticle', 'Panel\Article\WebArticleController@SegmentForArticle');
    Route::post('/SegmentForArticleBySelection/{id}', 'Panel\Article\WebArticleController@SegmentForArticleBySelection');
    Route::post('/articleTable', 'Panel\Article\WebArticleController@articleTable');
    Route::get('/selectArticle/{id}', 'Panel\Article\WebArticleController@selectArticle');
    Route::post('/editArticle/{id}', 'Panel\Article\WebArticleController@editArticle');
    Route::delete('/deletArticle/{id}', 'Panel\Article\WebArticleController@deletArticle');
    Route::get('/excelArticle', 'Panel\Article\WebArticleController@excelArticle');
    ///////////////////////////////////////////////////////////////////////////////////////////article
    ///////////////////////////////////////////////////////////////////////////////////////////article
    Route::post('/articleForArticleSub', 'Panel\Article\WebArticleSubController@articleForArticleSub');
    Route::post('/registerArticleSub', 'Panel\Article\WebArticleSubController@registerArticleSub');
    Route::post('/articleSubTable', 'Panel\Article\WebArticleSubController@articleSubTable');
    Route::get('/selectArticleSub/{id}', 'Panel\Article\WebArticleSubController@selectArticleSub');
    Route::post('/editArticleSub/{id}', 'Panel\Article\WebArticleSubController@editArticleSub');
    Route::delete('/deletArticleSub/{id}', 'Panel\Article\WebArticleSubController@deletArticleSub');
    Route::get('/excelArticleSub', 'Panel\Article\WebArticleSubController@excelArticleSub');
    ///////////////////////////////////////////////////////////////////////////////////////////article
    ///////////////////////////////////////////////////////////////////////////////////////////slider
    Route::get('/Slider', 'Panel\Component\SliderController@Slider');
    Route::post('/registerSlider', 'Panel\Component\SliderController@registerSlider');
    Route::post('/sliderTable', 'Panel\Component\SliderController@sliderTable');
    Route::get('/selectSlider/{id}', 'Panel\Component\SliderController@selectSlider');
    Route::post('/editSlider/{id}', 'Panel\Component\SliderController@editSlider');
    Route::delete('/deleteSlider/{id}', 'Panel\Component\SliderController@deleteSlider');
    ///////////////////////////////////////////////////////////////////////////////////////////slider
    ///////////////////////////////////////////////////////////////////////////////////////////row
    Route::get('/Row', 'Panel\Component\RowController@Row');
    Route::post('/registerRow', 'Panel\Component\RowController@registerRow');
    Route::post('/rowTable', 'Panel\Component\RowController@rowTable');
    Route::get('/selectRow/{id}', 'Panel\Component\RowController@selectRow');
    Route::post('/editRow/{id}', 'Panel\Component\RowController@editRow');
    Route::delete('/deleteRow/{id}', 'Panel\Component\RowController@deleteRow');
    ///////////////////////////////////////////////////////////////////////////////////////////row
    ///////////////////////////////////////////////////////////////////////////////////////////textrow
    Route::get('/TextRow', 'Panel\Component\TextRowController@TextRow');
    Route::post('/registerTextRow', 'Panel\Component\TextRowController@registerTextRow');
    Route::post('/textRowTable', 'Panel\Component\TextRowController@textRowTable');
    Route::get('/selectTextRow/{id}', 'Panel\Component\TextRowController@selectTextRow');
    Route::post('/editTextRow/{id}', 'Panel\Component\TextRowController@editTextRow');
    Route::delete('/deleteTextRow/{id}', 'Panel\Component\TextRowController@deleteTextRow');
    ///////////////////////////////////////////////////////////////////////////////////////////textrow
    ///////////////////////////////////////////////////////////////////////////////////////////carousel
    Route::get('/Carousel', 'Panel\Component\CarouselController@Carousel');
    Route::post('/registerCarousel', 'Panel\Component\CarouselController@registerCarousel');
    Route::post('/carouselTable', 'Panel\Component\CarouselController@carouselTable');
    Route::get('/selectCarousel/{id}', 'Panel\Component\CarouselController@selectCarousel');
    Route::post('/editCarousel/{id}', 'Panel\Component\CarouselController@editCarousel');
    Route::delete('/deleteCarousel/{id}', 'Panel\Component\CarouselController@deleteCarousel');
    ///////////////////////////////////////////////////////////////////////////////////////////carousel
    ///////////////////////////////////////////////////////////////////////////////////////////onecolumn
    Route::get('/oneColumn', 'Panel\Component\OneColumnController@oneColumn');
    Route::post('/registerOneColumn', 'Panel\Component\OneColumnController@registerOneColumn');
    Route::post('/oneColumnTable', 'Panel\Component\OneColumnController@oneColumnTable');
    Route::get('/selectOneColumn/{id}', 'Panel\Component\OneColumnController@selectOneColumn');
    Route::post('/editOneColumn/{id}', 'Panel\Component\OneColumnController@editOneColumn');
    Route::delete('/deleteOneColumn/{id}', 'Panel\Component\OneColumnController@deleteOneColumn');
    ///////////////////////////////////////////////////////////////////////////////////////////onecolumn
    ///////////////////////////////////////////////////////////////////////////////////////////twocolumn
    Route::get('/twoColumn', 'Panel\Component\TwoColumnController@twoColumn');
    Route::post('/registerTwoColumn', 'Panel\Component\TwoColumnController@registerTwoColumn');
    Route::post('/twoColumnTable', 'Panel\Component\TwoColumnController@twoColumnTable');
    Route::get('/selectTwoColumn/{id}', 'Panel\Component\TwoColumnController@selectTwoColumn');
    Route::post('/editTwoColumn/{id}', 'Panel\Component\TwoColumnController@editTwoColumn');
    Route::delete('/deleteTwoColumn/{id}', 'Panel\Component\TwoColumnController@deleteTwoColumn');
    ///////////////////////////////////////////////////////////////////////////////////////////twocolumn
    ///////////////////////////////////////////////////////////////////////////////////////////threecolumn
    Route::get('/threeColumn', 'Panel\Component\ThreeColumnController@threeColumn');
    Route::post('/registerThreeColumn', 'Panel\Component\ThreeColumnController@registerThreeColumn');
    Route::post('/threeColumnTable', 'Panel\Component\ThreeColumnController@threeColumnTable');
    Route::get('/selectThreeColumn/{id}', 'Panel\Component\ThreeColumnController@selectThreeColumn');
    Route::post('/editThreeColumn/{id}', 'Panel\Component\ThreeColumnController@editThreeColumn');
    Route::delete('/deleteThreeColumn/{id}', 'Panel\Component\ThreeColumnController@deleteThreeColumn');
    ///////////////////////////////////////////////////////////////////////////////////////////threecolumn
    ///////////////////////////////////////////////////////////////////////////////////////////fourcolumn
    Route::get('/fourColumn', 'Panel\Component\FourColumnController@fourColumn');
    Route::post('/registerFourColumn', 'Panel\Component\FourColumnController@registerFourColumn');
    Route::post('/fourColumnTable', 'Panel\Component\FourColumnController@fourColumnTable');
    Route::get('/selectFourColumn/{id}', 'Panel\Component\FourColumnController@selectFourColumn');
    Route::post('/editFourColumn/{id}', 'Panel\Component\FourColumnController@editFourColumn');
    Route::delete('/deleteFourColumn/{id}', 'Panel\Component\FourColumnController@deleteFourColumn');
    ///////////////////////////////////////////////////////////////////////////////////////////fourcolumn
    ///////////////////////////////////////////////////////////////////////////////////////////manycolumn
    Route::get('/manyColumn', 'Panel\Component\ManyColumnController@manyColumn');
    Route::post('/registerManyColumn', 'Panel\Component\ManyColumnController@registerManyColumn');
    Route::post('/manyColumnTable', 'Panel\Component\ManyColumnController@manyColumnTable');
    Route::get('/selectManyColumn/{id}', 'Panel\Component\ManyColumnController@selectManyColumn');
    Route::post('/editManyColumn/{id}', 'Panel\Component\ManyColumnController@editManyColumn');
    Route::delete('/deleteManyColumn/{id}', 'Panel\Component\ManyColumnController@deleteManyColumn');
    ///////////////////////////////////////////////////////////////////////////////////////////manycolumn
    ///////////////////////////////////////////////////////////////////////////////////////////manycolumn
    Route::get('/gallery', 'Panel\Component\GalleryController@gallery');
    Route::post('/registerGallery', 'Panel\Component\GalleryController@registerGallery');
    Route::post('/galleryTable', 'Panel\Component\GalleryController@galleryTable');
    Route::get('/selectGallery/{id}', 'Panel\Component\GalleryController@selectGallery');
    Route::post('/editGallery/{id}', 'Panel\Component\GalleryController@editGallery');
    Route::delete('/deleteGallery/{id}', 'Panel\Component\GalleryController@deleteGallery');
    ///////////////////////////////////////////////////////////////////////////////////////////manycolumn
    ///////////////////////////////////////////////////////////////////////////////////////////manycolumnfile
    Route::get('/manyColumnFile', 'Panel\Component\ManyColumnFileController@manyColumnFile');
    Route::post('/registerManyColumnFile', 'Panel\Component\ManyColumnFileController@registerManyColumnFile');
    Route::post('/manyColumnFileTable', 'Panel\Component\ManyColumnFileController@manyColumnFileTable');
    Route::get('/selectManyColumnFile/{id}', 'Panel\Component\ManyColumnFileController@selectManyColumnFile');
    Route::post('/editManyColumnFile/{id}', 'Panel\Component\ManyColumnFileController@editManyColumnFile');
    Route::delete('/deleteManyColumnFile/{id}', 'Panel\Component\ManyColumnFileController@deleteManyColumnFile');
    ///////////////////////////////////////////////////////////////////////////////////////////manycolumnfile
    ///////////////////////////////////////////////////////////////////////////////////////////flashsale
    Route::get('/flashSale', 'Panel\Component\FlashSaleController@flashSale');
    Route::post('/registerFlashSale', 'Panel\Component\FlashSaleController@registerFlashSale');
    Route::post('/flashSaleTable', 'Panel\Component\FlashSaleController@flashSaleTable');
    Route::get('/selectFlashSale/{id}', 'Panel\Component\FlashSaleController@selectFlashSale');
    Route::post('/editFlashSale/{id}', 'Panel\Component\FlashSaleController@editFlashSale');
    Route::delete('/deleteFlashSale/{id}', 'Panel\Component\FlashSaleController@deleteFlashSale');
    ///////////////////////////////////////////////////////////////////////////////////////////flashsale
    ///////////////////////////////////////////////////////////////////////////////////////////contact
    Route::get('/contact', 'Panel\Component\ContatcController@contact');
    Route::post('/registerContact', 'Panel\Component\ContatcController@registerContact');
    Route::post('/contactTable', 'Panel\Component\ContatcController@contactTable');
    Route::get('/selectContact/{id}', 'Panel\Component\ContatcController@selectContact');
    Route::post('/editContact/{id}', 'Panel\Component\ContatcController@editContact');
    Route::delete('/deleteContact/{id}', 'Panel\Component\ContatcController@deleteContact');
    ///////////////////////////////////////////////////////////////////////////////////////////contact
    ///////////////////////////////////////////////////////////////////////////////////////////about
    Route::get('/about', 'Panel\Component\AboutController@about');
    Route::post('/registerAbout', 'Panel\Component\AboutController@registerAbout');
    Route::post('/aboutTable', 'Panel\Component\AboutController@aboutTable');
    Route::get('/selectAbout/{id}', 'Panel\Component\AboutController@selectAbout');
    Route::post('/editAbout/{id}', 'Panel\Component\AboutController@editAbout');
    Route::delete('/deleteAbout/{id}', 'Panel\Component\AboutController@deleteAbout');
    ///////////////////////////////////////////////////////////////////////////////////////////about
    ///////////////////////////////////////////////////////////////////////////////////////////socialMedia
    Route::get('/socialMedia', 'Panel\Component\SocialMediaController@socialMedia');
    Route::post('/registerSocialMedia', 'Panel\Component\SocialMediaController@registerSocialMedia');
    Route::post('/socialMediaTable', 'Panel\Component\SocialMediaController@socialMediaTable');
    Route::get('/selectSocialMedia/{id}', 'Panel\Component\SocialMediaController@selectSocialMedia');
    Route::post('/editSocialMedia/{id}', 'Panel\Component\SocialMediaController@editSocialMedia');
    Route::delete('/deleteSocialMedia/{id}', 'Panel\Component\SocialMediaController@deleteSocialMedia');
    ///////////////////////////////////////////////////////////////////////////////////////////socialMedia
    ///////////////////////////////////////////////////////////////////////////////////////////Info
    Route::get('/info', 'Panel\Component\InfoController@info');
    Route::post('/registerInfo', 'Panel\Component\InfoController@registerInfo');
    Route::post('/infoTable', 'Panel\Component\InfoController@infoTable');
    Route::get('/selectInfo/{id}', 'Panel\Component\InfoController@selectInfo');
    Route::post('/editInfo/{id}', 'Panel\Component\InfoController@editInfo');
    Route::delete('/deleteInfo/{id}', 'Panel\Component\InfoController@deleteInfo');
    ///////////////////////////////////////////////////////////////////////////////////////////Info
    ///////////////////////////////////////////////////////////////////////////////////////////Header
    Route::get('/Header', 'Panel\Component\HeaderController@Header');
    Route::post('/registerHeader', 'Panel\Component\HeaderController@registerHeader');
    Route::post('/headerTable', 'Panel\Component\HeaderController@headerTable');
    Route::get('/selectHeader/{id}', 'Panel\Component\HeaderController@selectHeader');
    Route::post('/editHeader/{id}', 'Panel\Component\HeaderController@editHeader');
    Route::delete('/deleteHeader/{id}', 'Panel\Component\HeaderController@deleteHeader');
    ///////////////////////////////////////////////////////////////////////////////////////////Header
    ///////////////////////////////////////////////////////////////////////////////////////////Footer
    Route::get('/Footer', 'Panel\Component\FooterController@Footer');
    Route::post('/registerFooter', 'Panel\Component\FooterController@registerFooter');
    Route::post('/footerTable', 'Panel\Component\FooterController@footerTable');
    Route::get('/selectFooter/{id}', 'Panel\Component\FooterController@selectFooter');
    Route::post('/editFooter/{id}', 'Panel\Component\FooterController@editFooter');
    Route::delete('/deleteFooter/{id}', 'Panel\Component\FooterController@deleteFooter');
    ///////////////////////////////////////////////////////////////////////////////////////////Footer
    ///////////////////////////////////////////////////////////////////////////////////////////crop
    Route::get('/cropCategoryForCrops', 'Panel\Crop\CropController@cropCategoryForCrops');
    Route::get('/cropSubcategoryForCrops', 'Panel\Crop\CropController@cropSubcategoryForCrops');
    Route::get('/cropSubcategoryForCropsBySelection/{id}', 'Panel\Crop\CropController@cropSubcategoryForCropsBySelection');
    Route::get('/cropSegmentForCrops', 'Panel\Crop\CropController@cropSegmentForCrops');
    Route::get('/cropSegmentForCropsBySelection/{id}', 'Panel\Crop\CropController@cropSegmentForCropsBySelection');
    Route::get('/cropSubSegmentForCrops', 'Panel\Crop\CropController@cropSubSegmentForCrops');
    Route::get('/cropSubSegmentForCropsBySelection/{id}', 'Panel\Crop\CropController@cropSubSegmentForCropsBySelection');
    Route::get('/cropDetailForCrops/{id}', 'Panel\Crop\CropController@cropDetailForCrops');
    Route::post('/registerCrop/', 'Panel\Crop\CropController@registerCrop');
    Route::post('/cropTable/', 'Panel\Crop\CropController@cropTable');
    Route::get('/selectCrop/{id}', 'Panel\Crop\CropController@selectCrop');
    Route::post('/editCrop/{id}', 'Panel\Crop\CropController@editCrop');
    Route::delete('/deleteCrop/{id}', 'Panel\Crop\CropController@deleteCrop');
    ///////////////////////////////////////////////////////////////////////////////////////////crop
    ///////////////////////////////////////////////////////////////////////////////////////////cropDescription
    Route::post('/allCroptForDescription', 'Panel\Crop\CropDescriptionController@allCroptForDescription');
    Route::post('/registerCropDescription/', 'Panel\Crop\CropDescriptionController@registerCropDescription');
    Route::post('/cropDescriptionTable/', 'Panel\Crop\CropDescriptionController@cropDescriptionTable');
    Route::get('/selectCropDescription/{id}', 'Panel\Crop\CropDescriptionController@selectCropDescription');
    Route::post('/editCropDescription/{id}', 'Panel\Crop\CropDescriptionController@editCropDescription');
    Route::delete('/deleteCropDescription/{id}', 'Panel\Crop\CropDescriptionController@deleteCropDescription');
    ///////////////////////////////////////////////////////////////////////////////////////////cropDescription
    ///////////////////////////////////////////////////////////////////////////////////////////cropMedia
    Route::post('/allCroptForMedia', 'Panel\Crop\CropMediaController@allCroptForMedia');
    Route::post('/registerCropMedia/', 'Panel\Crop\CropMediaController@registerCropMedia');
    Route::post('/cropMediaTable/', 'Panel\Crop\CropMediaController@cropMediaTable');
    Route::get('/selectCropMedia/{id}', 'Panel\Crop\CropMediaController@selectCropMedia');
    Route::post('/editCropMedia/{id}', 'Panel\Crop\CropMediaController@editCropMedia');
    ///////////////////////////////////////////////////////////////////////////////////////////cropMedia
    ///////////////////////////////////////////////////////////////////////////////////////////cropAttribute
    Route::post('/allCroptForAttribute', 'Panel\Crop\CropAttributeController@allCroptForAttribute');
    Route::post('/registerCropAttribute/', 'Panel\Crop\CropAttributeController@registerCropAttribute');
    Route::post('/cropAttributeTable/', 'Panel\Crop\CropAttributeController@cropAttributeTable');
    Route::get('/selectCropAttribute/{id}', 'Panel\Crop\CropAttributeController@selectCropAttribute');
    Route::post('/editCropAttribute/{id}', 'Panel\Crop\CropAttributeController@editCropAttribute');
    Route::delete('/deleteCropAttribute/{id}', 'Panel\Crop\CropAttributeController@deleteCropAttribute');
    Route::delete('/deleteCropAttribute/{id}', 'Panel\Crop\CropAttributeController@deleteCropAttribute');
    Route::get('/cropDetailForCropsAttribute/{id}', 'Panel\Crop\CropAttributeController@cropDetailForCropsAttribute');
    ///////////////////////////////////////////////////////////////////////////////////////////cropAttribute
    ///////////////////////////////////////////////////////////////////////////////////////////cropcategory
    Route::post('/registerCropCategory', 'Panel\Crop\CropCategoryController@registerCropCategory');
    Route::post('/cropCategoryTable', 'Panel\Crop\CropCategoryController@cropCategoryTable');
    Route::get('/selectCropCategory/{id}', 'Panel\Crop\CropCategoryController@selectCropCategory');
    Route::post('/editCropCategory/{id}', 'Panel\Crop\CropCategoryController@editCropCategory');
    Route::delete('/deleteCropCategory/{id}', 'Panel\Crop\CropCategoryController@deleteCropCategory');
    ///////////////////////////////////////////////////////////////////////////////////////////cropcategory
    ///////////////////////////////////////////////////////////////////////////////////////////cropsubcategory
    Route::get('/allCropSubCategory', 'Panel\Category\WebSubCategoryController@allCropSubCategory');
    Route::post('/registerCropSubCategory', 'Panel\Crop\CropSubCategoryController@registerCropSubCategory');
    Route::get('/cropCategoryForCropSubCategories', 'Panel\Crop\CropSubCategoryController@cropCategoryForCropSubCategories');
    Route::post('/cropSubCategoryTable', 'Panel\Crop\CropSubCategoryController@cropSubCategoryTable');
    Route::get('/selectCropSubCategory/{id}', 'Panel\Crop\CropSubCategoryController@selectCropSubCategory');
    Route::post('/editCropSubCategory/{id}', 'Panel\Crop\CropSubCategoryController@editCropSubCategory');
    Route::delete('/deleteCropSubCategory/{id}', 'Panel\Crop\CropSubCategoryController@deleteCropSubCategory');
    ///////////////////////////////////////////////////////////////////////////////////////////cropsubcategory
    ///////////////////////////////////////////////////////////////////////////////////////////cropsegment
    Route::get('/cropCategoryForCropSegment', 'Panel\Crop\CropSegmentController@cropCategoryForCropSegment');
    Route::get('/choiceCropSubCategory/{id}', 'Panel\Crop\CropSegmentController@choiceCropSubCategory');
    Route::get('/cropSubCategoryForCropSegment', 'Panel\Crop\CropSegmentController@cropSubCategoryForCropSegment');
    Route::post('/registerCropSegment', 'Panel\Crop\CropSegmentController@registerCropSegment');
    Route::post('/cropSegmentTable', 'Panel\Crop\CropSegmentController@cropSegmentTable');
    Route::get('/selectCropSegment/{id}', 'Panel\Crop\CropSegmentController@selectCropSegment');
    Route::post('/editCropSegment/{id}', 'Panel\Crop\CropSegmentController@editCropSegment');
    Route::delete('/deleteCropSegment/{id}', 'Panel\Crop\CropSegmentController@deleteCropSegment');
    ///////////////////////////////////////////////////////////////////////////////////////////cropsegment
    ///////////////////////////////////////////////////////////////////////////////////////////cropsubsegment
    Route::get('/cropSegmentForCropSubSegment', 'Panel\Crop\CropSubSegmentController@cropSegmentForCropSubSegment');
    Route::get('/cropEventForCropSubSegment', 'Panel\Crop\CropSubSegmentController@cropEventForCropSubSegment');
    Route::post('/registerCropSubSegment', 'Panel\Crop\CropSubSegmentController@registerCropSubSegment');
    Route::post('/cropSubSegmentTable', 'Panel\Crop\CropSubSegmentController@cropSubSegmentTable');
    Route::get('/selectCropSubSegment/{id}', 'Panel\Crop\CropSubSegmentController@selectCropSubSegment');
    Route::post('/editCropSubSegment/{id}', 'Panel\Crop\CropSubSegmentController@editCropSubSegment');
    Route::delete('/deleteCropSubSegment/{id}', 'Panel\Crop\CropSubSegmentController@deleteCropSubSegment');
    ///////////////////////////////////////////////////////////////////////////////////////////cropsubsegment
    ///////////////////////////////////////////////////////////////////////////////////////////cropevent
    Route::post('/registerCropEvent', 'Panel\Crop\CropEventController@registerCropEvent');
    Route::post('/cropEventTable', 'Panel\Crop\CropEventController@cropEventTable');
    Route::get('/selectCropEvent/{id}', 'Panel\Crop\CropEventController@selectCropEvent');
    Route::post('/editCropEvent/{id}', 'Panel\Crop\CropEventController@editCropEvent');
    Route::delete('/deleteCropEvent/{id}', 'Panel\Crop\CropEventController@deleteCropEvent');
    ///////////////////////////////////////////////////////////////////////////////////////////cropevent
    ///////////////////////////////////////////////////////////////////////////////////////////cropdetail
    Route::post('/registerCropDetail', 'Panel\Crop\CropDetailController@registerCropDetail');
    Route::post('/cropDetailTable', 'Panel\Crop\CropDetailController@cropDetailTable');
    Route::get('/selectCropDetail/{id}', 'Panel\Crop\CropDetailController@selectCropDetail');
    Route::post('/editCropDetail/{id}', 'Panel\Crop\CropDetailController@editCropDetail');
    Route::delete('/deleteCropDetail/{id}', 'Panel\Crop\CropDetailController@deleteCropDetail');
    Route::get('/cropSubSegmentForCropDetail', 'Panel\Crop\CropDetailController@cropSubSegmentForCropDetail');
    ///////////////////////////////////////////////////////////////////////////////////////////cropdetail
    ///////////////////////////////////////////////////////////////////////////////////////////discount
    Route::post('/registDiscount', 'Panel\Discount\DiscountController@registDiscount');
    Route::post('/tableDiscount', 'Panel\Discount\DiscountController@tableDiscount');
    Route::get('/selectDiscount/{id}', 'Panel\Discount\DiscountController@selectDiscount');
    Route::post('/editDiscount/{id}', 'Panel\Discount\DiscountController@editDiscount');
    Route::delete('/deletDiscount/{id}', 'Panel\Discount\DiscountController@deletDiscount');
    Route::get('/excelDiscount/', 'Panel\Discount\DiscountController@excelDiscount');
    ///////////////////////////////////////////////////////////////////////////////////////////discount
    ///////////////////////////////////////////////////////////////////////////////////////////sellerActivation
    ///////////////////////////////////////////////////////////////////////////////////////////sellerEvidence
    Route::post('/registerSellerEvidence', 'Panel\Seller\SellerEvidenceController@registerSellerEvidence');
    Route::post('/sellerEvidenceTable', 'Panel\Seller\SellerEvidenceController@sellerEvidenceTable');
    Route::get('/selectSellerEvidence/{id}', 'Panel\Seller\SellerEvidenceController@selectSellerEvidence');
    Route::post('/editSellerEvidence/{id}', 'Panel\Seller\SellerEvidenceController@editSellerEvidence');
    Route::delete('/deleteSellerEvidence/{id}', 'Panel\Seller\SellerEvidenceController@deleteSellerEvidence');
    Route::get('/allStateForEvidence', 'Panel\Seller\SellerEvidenceController@allStateForEvidence');
    Route::get('/allCityForEvidence', 'Panel\Seller\SellerEvidenceController@allCityForEvidence');
    Route::get('/selectCityForEvidence/{id}', 'Panel\Seller\SellerEvidenceController@selectCityForEvidence');
    Route::get('/allZoneForEvidence', 'Panel\Seller\SellerEvidenceController@allZoneForEvidence');
    Route::get('/selectZoneForEvidence/{id}', 'Panel\Seller\SellerEvidenceController@selectZoneForEvidence');
    Route::get('/cropCategoryForSellerEvidence', 'Panel\Seller\SellerEvidenceController@cropCategoryForSellerEvidence');
    Route::post('/createCase/{id}', 'Panel\Seller\SellerEvidenceController@createCase');
    Route::post('/deactivateSeller/{id}', 'Panel\Seller\SellerEvidenceController@deactivateSeller');
    Route::post('/activeSeller/{id}', 'Panel\Seller\SellerEvidenceController@activeSeller');
    ///////////////////////////////////////////////////////////////////////////////////////////sellerEvidence
    ///////////////////////////////////////////////////////////////////////////////////////////sellerContract
    ///////////////////////////////////////////////////////////////////////////////////////////sellerContract
    Route::post('/sellerLicenseTable', 'Panel\Seller\SellerContractController@sellerLicenseTable');
    Route::get('/selectSellerLicense/{id}', 'Panel\Seller\SellerContractController@selectSellerLicense');
    Route::get('/categoryForSellerLicence', 'Panel\Seller\SellerContractController@categoryForSellerLicence');
    Route::get('/subcategoryForSellerLicence', 'Panel\Seller\SellerContractController@subcategoryForSellerLicence');
    Route::get('/subcategoryForSellerLicenceBySelection/{id}', 'Panel\Seller\SellerContractController@subcategoryForSellerLicenceBySelection');
    Route::get('/segmentForSellerLicence', 'Panel\Seller\SellerContractController@segmentForSellerLicence');
    Route::get('/segmentForSellerLicenceBySelection/{id}', 'Panel\Seller\SellerContractController@segmentForSellerLicenceBySelection');
    Route::get('/subSegmentForSellerLicence', 'Panel\Seller\SellerContractController@subSegmentForSellerLicence');
    Route::get('/subSegmentForSellerLicenceBySelection/{id}', 'Panel\Seller\SellerContractController@subSegmentForSellerLicenceBySelection');
    Route::post('/registSellerLicence', 'Panel\Seller\SellerContractController@registSellerLicence');
    Route::post('/sellerPerecentageTable', 'Panel\Seller\SellerContractController@sellerPerecentageTable');
    Route::get('/selectSellerPrecentage/{id}', 'Panel\Seller\SellerContractController@selectSellerPrecentage');
    Route::post('/editSellerPrecentage/{id}', 'Panel\Seller\SellerContractController@editSellerPrecentage');
    ///////////////////////////////////////////////////////////////////////////////////////////sellerContract
    ///////////////////////////////////////////////////////////////////////////////////////////comment
    Route::post('/commentTable', 'Panel\Comment\CommentController@commentTable');
    Route::post('/accecptComment/{id}', 'Panel\Comment\CommentController@accecptComment');
    Route::post('/rejectComment/{id}', 'Panel\Comment\CommentController@rejectComment');
    ///////////////////////////////////////////////////////////////////////////////////////////comment
    ///////////////////////////////////////////////////////////////////////////////////////////empoyment
    Route::post('/employmentTable', 'Panel\Information\EmploymentController@employmentTable');
    Route::get('/selectEmployment/{id}', 'Panel\Information\EmploymentController@selectEmployment');
    Route::delete('/deleteEmployment/{id}', 'Panel\Information\EmploymentController@deleteEmployment');
    ///////////////////////////////////////////////////////////////////////////////////////////empoyment
    ///////////////////////////////////////////////////////////////////////////////////////////opinion
    Route::post('/opinionTable', 'Panel\Information\OpinionController@opinionTable');
    Route::get('/selectOpinion/{id}', 'Panel\Information\OpinionController@selectOpinion');
    Route::delete('/deleteOpinion/{id}', 'Panel\Information\OpinionController@deleteOpinion');
    ///////////////////////////////////////////////////////////////////////////////////////////opinion
    ///////////////////////////////////////////////////////////////////////////////////////////sellerAddress
    Route::post('/registSellerAddress', 'Panel\Seller\SellerAddressController@registSellerAddress');
    Route::post('/sellerAddressTable', 'Panel\Seller\SellerAddressController@sellerAddressTable');
    Route::get('/selectSellerAddress/{id}', 'Panel\Seller\SellerAddressController@selectSellerAddress');
    Route::post('/editSellerAddress/{id}', 'Panel\Seller\SellerAddressController@editSellerAddress');
    Route::delete('/deletSellerAddress/{id}', 'Panel\Seller\SellerAddressController@deletSellerAddress');
    Route::get('/allStateForAddress', 'Panel\Seller\SellerAddressController@allStateForAddress');
    Route::get('/allCityForAddress', 'Panel\Seller\SellerAddressController@allCityForAddress');
    Route::get('/selectCityForAddress/{id}', 'Panel\Seller\SellerAddressController@selectCityForAddress');
    Route::get('/allZoneForAddress', 'Panel\Seller\SellerAddressController@allZoneForAddress');
    Route::get('/selectZoneForAddress/{id}', 'Panel\Seller\SellerAddressController@selectZoneForAddress');
    Route::get('/allMallForAddress/', 'Panel\Seller\SellerAddressController@allMallForAddress');
    ///////////////////////////////////////////////////////////////////////////////////////////sellerAddress
    ///////////////////////////////////////////////////////////////////////////////////////////sellerProdcut
    Route::get('/allCropSubSegmentForSellerProdcut/', 'Panel\Shopping\SellerProductController@allCropSubSegmentForSellerProdcut');
    Route::get('/productForSellerProduct/', 'Panel\Shopping\SellerProductController@productForSellerProduct');
    Route::post('/productForSellerProdcutBySelection/{id}', 'Panel\Shopping\SellerProductController@productForSellerProdcutBySelection');
    Route::get('/allEventForSellerProduct/', 'Panel\Shopping\SellerProductController@allEventForSellerProduct');
    Route::get('/sellerAddressForSellerProdcut/', 'Panel\Shopping\SellerProductController@sellerAddressForSellerProdcut');
    Route::post('/registerSellerProduct', 'Panel\Shopping\SellerProductController@registerSellerProduct');
    Route::post('/sellerProductTable', 'Panel\Shopping\SellerProductController@sellerProductTable');
    Route::get('/selectSellerProduct/{id}', 'Panel\Shopping\SellerProductController@selectSellerProduct');
    Route::post('/editSellerProduct/{id}', 'Panel\Shopping\SellerProductController@editSellerProduct');
    ///////////////////////////////////////////////////////////////////////////////////////////sellerProdcut
    ///////////////////////////////////////////////////////////////////////////////////////////invoice
    Route::post('/clientInvoiceTable/', 'Panel\Invoice\InvoiceController@clientInvoiceTable');
    Route::post('/storeInvoiceTable/', 'Panel\Invoice\InvoiceController@storeInvoiceTable');
    Route::post('/statusInvoiceTable/', 'Panel\Invoice\InvoiceController@statusInvoiceTable');
    Route::get('/selectClientInvoice/{id}', 'Panel\Invoice\InvoiceController@selectClientInvoice');
    Route::post('/selectClientInvoiceAdditional/{id}', 'Panel\Invoice\InvoiceController@selectClientInvoiceAdditional');
    Route::get('/selectStoreInvoice/{id}', 'Panel\Invoice\InvoiceController@selectStoreInvoice');
    Route::post('/selectStoreInvoiceAdditional/{id}', 'Panel\Invoice\InvoiceController@selectClientInvoiceAdditional');
    Route::get('/selectStatusInvoice/{id}', 'Panel\Invoice\InvoiceController@selectStatusInvoice'); 
    Route::post('/selectStatusInvoiceAdditional/{id}', 'Panel\Invoice\InvoiceController@selectClientInvoiceAdditional');
    Route::post('/editInvoiceColumnt', 'Panel\Invoice\InvoiceController@editInvoiceColumnt'); 
    ///////////////////////////////////////////////////////////////////////////////////////////invoice
    ///////////////////////////////////////////////////////////////////////////////////////////invoice
    Route::post('/statusInvoiceTempClientTable/', 'Panel\Invoice\InvoiceTempClientContrller@statusInvoiceTempClientTable');
    Route::post('/editInvoiceTempClientColumn', 'Panel\Invoice\InvoiceTempClientContrller@editInvoiceTempClientColumn'); 
    Route::post('/tempClientInvoiceTable/', 'Panel\Invoice\InvoiceTempClientContrller@tempClientInvoiceTable');
    Route::get('/selectTempClientInvoice/{id}', 'Panel\Invoice\InvoiceTempClientContrller@selectTempClientInvoice');
    Route::post('/selectTempClientInvoiceAdditional/{id}', 'Panel\Invoice\InvoiceTempClientContrller@selectTempClientInvoiceAdditional');
    ///////////////////////////////////////////////////////////////////////////////////////////invoice
});
///////////////////////////////////////////////////////////////////////////////////////////sitepanel
///////////////////////////////////////////////////////////////////////////////////////////sitepanel
///////////////////////////////////////////////////////////////////////////////////////////sitepanel
///////////////////////////////////////////////////////////////////////////////////////////siteview
///////////////////////////////////////////////////////////////////////////////////////////siteview
///////////////////////////////////////////////////////////////////////////////////////////siteview
Route::prefix('v1')->group(function () {
    ///////////////////////////////////////////////////////////////////////////////////////////baseStore
    //menu
    Route::post('/baseMenu', 'SiteView\ViewMenuController@baseMenu');
    //menu
    //contact
    Route::post('/viewContact', 'SiteView\ViewContactController@viewContact');
    //contact
    //about
    Route::post('/viewAbout', 'SiteView\ViewAboutController@viewAbout');
    //about
    //manyColumnFile
    Route::post('/viewManyColumnFile', 'SiteView\ViewFileController@viewManyColumnFile');
    //manyColumnFile
    //row
    Route::post('/viewRow', 'SiteView\ViewRowController@viewRow');
    //row
    //flashSales
    Route::post('/viewFlashSales', 'SiteView\ViewFlashSaleController@viewFlashSales');
    //flashSales
    Route::post('/viewCarousel', 'SiteView\ViewCarouselController@viewCarousel');
    //slider
    Route::post('/viewSlider', 'SiteView\ViewSliderController@viewSlider');
    //slider
    //slider
    Route::post('/viewTextRow', 'SiteView\ViewTextRowController@viewTextRow');
    //about
    //oneColumn
    Route::post('/viewOneColumn', 'SiteView\ViewOneColumnController@viewOneColumn');
    //oneColumn
    //Gallery
    Route::post('/viewGallery', 'SiteView\ViewGalleryController@viewGallery');
    //Gallery
    //TwoColumn
    Route::post('/viewTwoColumn', 'SiteView\ViewTwoColumnController@viewTwoColumn');
    //TwoColumn
    //threeColumn
    Route::post('/viewThreeColumn', 'SiteView\ViewThreeColumnController@viewThreeColumn');
    //threeColumn
    //FourColumn
    Route::post('/viewFourColumn', 'SiteView\ViewFourColumnController@viewFourColumn');
    //FourColumn
    //ManyColumn
    Route::post('/viewManyColumn', 'SiteView\ViewManyColumnController@viewManyColumn');
    //ManyColumn
    //viewSiteFooter
    Route::post('/viewSiteFooter', 'SiteView\viewSiteFooterController@viewSiteFooter');
    //viewSiteFooter
    //viewSiteHeader
    Route::post('/viewSiteHeader', 'SiteView\viewSiteHeaderController@viewSiteHeader');
    //viewSiteHeader
    //viewSiteHeader
    //viewGallery
    Route::post('/viewGallery', 'SiteView\viewGalleryController@viewGallery');
    //viewGallery
    //article
    Route::post('/singleArticle', 'SiteView\ViewArticleController@singleArticle');
    Route::post('/lastArticleByCategory', 'SiteView\ViewArticleController@lastArticleByCategory');
    Route::post('/lastArticleBySubCategory', 'SiteView\ViewArticleController@lastArticleBySubCategory');
    Route::post('/lastArticleBySegment', 'SiteView\ViewArticleController@lastArticleBySegment');
    Route::post('/articlesByCategory', 'SiteView\ViewArticleController@articlesByCategory');
    Route::post('/articlesByCategoryWithoutPagination', 'SiteView\ViewArticleController@articlesByCategoryWithoutPagination');
    Route::post('/articlesBySubCategory', 'SiteView\ViewArticleController@articlesBySubCategory');
    Route::post('/articlesBySubCategoryWithoutPagination', 'SiteView\ViewArticleController@articlesBySubCategoryWithoutPagination');
    Route::post('/articlesBySegment', 'SiteView\ViewArticleController@articlesBySegment');
    Route::post('/articlesBySegmentWithoutPagination', 'SiteView\ViewArticleController@articlesBySegmentWithoutPagination');
    Route::post('/singleSubArticle', 'SiteView\ViewArticleController@singleSubArticle');
    Route::post('/subArticles', 'SiteView\ViewArticleController@subArticles');
    //article
    //blog
    Route::post('/blogCategoryArticles', 'SiteView\ViewBlogController@blogCategoryArticles');
    Route::post('/blogSubCategoryArticles', 'SiteView\ViewBlogController@blogSubCategoryArticles');
    Route::post('/blogSegmentArticles', 'SiteView\ViewBlogController@blogSegmentArticles');
    Route::post('/recentArticles', 'SiteView\ViewBlogController@recentArticles');
    Route::post('/ArticleArchiveByYear', 'SiteView\ViewBlogController@ArticleArchiveByYear');
    Route::post('/articleBySelectedMonth', 'SiteView\ViewBlogController@articleBySelectedMonth');
    Route::post('/selectedCategory', 'SiteView\ViewBlogController@selectedCategory');
    Route::post('/selectedSubCategory', 'SiteView\ViewBlogController@selectedSubCategory');
    Route::post('/selectedSegment', 'SiteView\ViewBlogController@selectedSegment');
    Route::post('/selectedArticleWithAllParent', 'SiteView\ViewBlogController@selectedArticleWithAllParent');
    Route::post('/selectedSubArticleWithArticle', 'SiteView\ViewBlogController@selectedSubArticleWithArticle');
    //blog
    //social
    Route::get('/viewSocialMedia', 'SiteView\ViewSocialMediaController@viewSocialMedia');
    //social
    //info
    Route::post('/viewInfo', 'SiteView\ViewInfoController@viewInfo');
    //info
    //header
    Route::post('/viewCategoryHeader', 'SiteView\ViewHeaderController@viewCategoryHeader');
    Route::post('/viewSubCategoryHeader', 'SiteView\ViewHeaderController@viewSubCategoryHeader');
    Route::post('/viewSegmentHeader', 'SiteView\ViewHeaderController@viewSegmentHeader');
    //header
    //search
    Route::post('/viewResultCrop', 'SiteView\ViewResultSearch@viewResultCrop');
    Route::post('/viewResultArticle', 'SiteView\ViewResultSearch@viewResultArticle');
    //search
    //cropMenu
    Route::post('/cropCategoryMenu', 'SiteView\ViewCropMenuController@cropCategoryMenu');
    Route::post('/cropSubCategoryMenu', 'SiteView\ViewCropMenuController@cropSubCategoryMenu');
    Route::post('/cropSegmentMenu', 'SiteView\ViewCropMenuController@cropSegmentMenu');
    Route::post('/cropSubSegmentMenu', 'SiteView\ViewCropMenuController@cropSubSegmentMenu');
    //cropMenu
    //crop
    Route::post('/viewAllCrop', 'SiteView\ViewCropController@viewAllCrop');
    Route::post('/viewSingleCrop', 'SiteView\ViewCropController@viewSingleCrop');
    Route::post('/cropByCategory', 'SiteView\ViewCropController@cropByCategory');
    Route::post('/cropBySubCategory', 'SiteView\ViewCropController@cropBySubCategory');
    Route::post('/cropBySegment', 'SiteView\ViewCropController@cropBySegment');
    Route::post('/cropBySubSegment', 'SiteView\ViewCropController@cropBySubSegment');
    Route::post('/cropDetail', 'SiteView\ViewCropController@cropDetail');
    Route::post('/cropCategory', 'SiteView\ViewCropController@cropCategory');
    Route::post('/cropSubCategory', 'SiteView\ViewCropController@cropSubCategory');
    Route::post('/cropSegment', 'SiteView\ViewCropController@cropSegment');
    Route::post('/cropSubSegment', 'SiteView\ViewCropController@cropSubSegment');
    //crop
    //auth
    Route::middleware(['throttle:60,1'])->post('/viewRegister', 'SiteView\ViewRegisterLoginController@viewRegister');
    Route::middleware('auth:api')->post('/loginStatus', 'SiteView\ViewRegisterLoginController@loginStatus');
    Route::middleware('auth:api')->post('/userInfo', 'SiteView\ViewRegisterLoginController@userInfo');
    //auth
    //information
    Route::post('/registerEmployment', 'SiteView\InformationEmploymentController@registerEmployment');
    Route::post('/registerOpinion', 'SiteView\InformationOpinionController@registerOpinion');
    //information
    //likeAndComment
    Route::post('/viewLikeArticle', 'SiteView\ViewLikeAndCommentController@viewLikeArticle');
    Route::post('/viewDisLikeArticle', 'SiteView\ViewLikeAndCommentController@viewDisLikeArticle');
    Route::post('/viewCommentArticle', 'SiteView\ViewLikeAndCommentController@viewCommentArticle');
    //likeAndComment
    //sellerProduct
    Route::post('/viewSellerProductByCategory', 'SiteView\ViewSellerCropController@viewSellerProductByCategory');
    Route::post('/viewSellerProductBySubCategory', 'SiteView\ViewSellerCropController@viewSellerProductBySubCategory');
    Route::post('/viewSellerProductBySegment', 'SiteView\ViewSellerCropController@viewSellerProductBySegment');
    Route::post('/viewSellerProductBySubSegment', 'SiteView\ViewSellerCropController@viewSellerProductBySubSegment');
    //sellerProduct
    //cropFilter
    Route::post('/viewFilterCropByLowPrice', 'SiteView\viewFilterCropController@viewFilterCropByLowPrice');
    Route::post('/viewFilterCropByHighPrice', 'SiteView\viewFilterCropController@viewFilterCropByHighPrice');
    Route::post('/viewFilterCropByBetweenTwoPrices', 'SiteView\viewFilterCropController@viewFilterCropByBetweenTwoPrices');
    Route::post('/viewFilterCropByLowPriceInSubSegment', 'SiteView\viewFilterCropController@viewFilterCropByLowPriceInSubSegment');
    Route::post('/viewFilterCropByHighPriceInSubSegment', 'SiteView\viewFilterCropController@viewFilterCropByHighPriceInSubSegment');
    Route::post('/viewFilterCropByBetweenTwoPricesInSubSegment', 'SiteView\viewFilterCropController@viewFilterCropByBetweenTwoPricesInSubSegment');

    Route::post('/viewFilterCropByLowDiscount', 'SiteView\viewFilterCropController@viewFilterCropByLowDiscount');
    Route::post('/viewFilterCropByHighDiscount', 'SiteView\viewFilterCropController@viewFilterCropByHighDiscount');
    Route::post('/viewFilterCropByBetweenTwoDiscounts', 'SiteView\viewFilterCropController@viewFilterCropByBetweenTwoDiscounts');
    Route::post('/viewFilterCropByLowDiscountInSubSegment', 'SiteView\viewFilterCropController@viewFilterCropByLowDiscountInSubSegment');
    Route::post('/viewFilterCropByHighDiscountInSubSegment', 'SiteView\viewFilterCropController@viewFilterCropByHighDiscountInSubSegment');
    Route::post('/viewFilterCropByBetweenTwoDiscountsInSubSegment', 'SiteView\viewFilterCropController@viewFilterCropByBetweenTwoDiscountsInSubSegment');
    Route::post('/viewFilterCropByRateInSegment', 'SiteView\viewFilterCropController@viewFilterCropByRateInSegment');
    Route::post('/viewFilterCropByAmountInSegment', 'SiteView\viewFilterCropController@viewFilterCropByAmountInSegment');
    Route::post('/viewFilterCropByAmountCountInSegment', 'SiteView\viewFilterCropController@viewFilterCropByAmountCountInSegment');
    Route::post('/viewFilterCropByBrand', 'SiteView\viewFilterCropController@viewFilterCropByBrand');
    //cropFilter
    //temp
    Route::post('/tempShoppingWithRegisterTempClient', 'Temp\TempClientController@tempShoppingWithRegisterTempClient');
    Route::post('/tempProduct', 'Temp\TempClientController@tempProduct');
    //temp
    ///////////////////////////////////////////////////////////////////////////////////////////baseStore
});
///////////////////////////////////////////////////////////////////////////////////////////siteview
///////////////////////////////////////////////////////////////////////////////////////////siteview
///////////////////////////////////////////////////////////////////////////////////////////siteview
///////////////////////////////////////////////////////////////////////////////////////////client
///////////////////////////////////////////////////////////////////////////////////////////client
///////////////////////////////////////////////////////////////////////////////////////////client
Route::prefix('v1')->group(function () {
    Route::post('/clientLogin', 'Client\Authentication@login');
    Route::post('/registerClient', 'Client\Authentication@registerClient');
    Route::get('/allStateForClient', 'Client\ClientAdreessController@allStateForClient');
    Route::get('/allZoneForClient', 'Client\ClientAdreessController@allZoneForClient');
    Route::get('/allCityForClient', 'Client\ClientAdreessController@allCityForClient');
    Route::get('/selectCityForClient/{id}', 'Client\ClientAdreessController@selectCityForClient');
    Route::get('/selectZoneForClient/{id}', 'Client\ClientAdreessController@selectZoneForClient');
});
Route::middleware('auth:api')->prefix('v1')->group(function () {
    //info
    Route::post('/clientInfo', 'Client\clientInfoController@clientInfo');
    Route::post('/registerClientInfo', 'Client\clientInfoController@registerClientInfo');
    //info
    //address
    Route::get('/clientAddress', 'Client\ClientAdreessController@clientAddress');
    Route::post('/registerClientAdress', 'Client\ClientAdreessController@registerClientAdress');
    Route::post('/selectClientAddress/{id}', 'Client\ClientAdreessController@selectClientAddress');
    Route::post('/editClientAdress/{id}', 'Client\ClientAdreessController@editClientAdress');
    Route::post('/deleteClientAdress/{id}', 'Client\ClientAdreessController@deleteClientAdress');
    //address
    //cart
    Route::post('/addToCart', 'Client\ClientCartController@addToCart');
    Route::post('/shoppingCart', 'Client\ClientCartController@shoppingCart');
    Route::post('/deleteCropFromCart/{id}', 'Client\ClientCartController@deleteCropFromCart');
    Route::post('/addProductCount', 'Client\ClientCartController@addProductCount');
    Route::post('/minProductCount', 'Client\ClientCartController@minProductCount');
    //cart
    //interest
    Route::post('/clientInterest', 'Client\ClientInterestController@clientInterest');
    //interest
    //purchase
    Route::post('/createInvoice', 'Purchase\PurchaseInvoiceController@createInvoice');
    Route::post('/awaitingPayment', 'Purchase\PurchaseInvoiceController@awaitingPayment');
    Route::post('/processing', 'Purchase\PurchaseInvoiceController@processing');
    Route::post('/delivered', 'Purchase\PurchaseInvoiceController@delivered');
    Route::post('/returned', 'Purchase\PurchaseInvoiceController@returned');
    Route::post('/abolition', 'Purchase\PurchaseInvoiceController@abolition');
    Route::post('/clientPurchaseDetail', 'Purchase\PurchaseInvoiceController@clientPurchaseDetail');
    //purchase
});
///////////////////////////////////////////////////////////////////////////////////////////client
///////////////////////////////////////////////////////////////////////////////////////////client
///////////////////////////////////////////////////////////////////////////////////////////client