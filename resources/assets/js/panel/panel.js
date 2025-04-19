require("../general/importModule");
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Vuex from "vuex";
Vue.use(Vuex);
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//component
Vue.component(
    "windowHeader",
    require("../general/component/windows/vpcWindowHeader").default
);
Vue.component(
    "windowTable",
    require("../general/component/dataTable/vpcWindowTable").default
);
Vue.component(
    "windowTableWithoutExcel",
    require("../general/component/dataTable/vpcWindowTableWithoutExcel").default
);
Vue.component(
    "simpleDataTable",
    require("../general/component/dataTable/simpleDataTable").default
);
Vue.component(
    "vpcWindowTableEditable",
    require("../general/component/dataTable/vpcWindowTableEditable").default
);
Vue.component(
    "singleInput",
    require("../general/component/input/vpcSingleInput").default
);
Vue.component(
    "datePicker",
    require("../general/component/input/vpcDatePicker").default
);
Vue.component(
    "singleInputDisabled",
    require("../general/component/input/vpcSingleInputDisabled").default
);
Vue.component(
    "textareaInput",
    require("../general/component/input/vpcTextareaInput").default
);
Vue.component(
    "textareaInputDisabled",
    require("../general/component/input/vpcTextareaInputDisabled").default
);
Vue.component(
    "imageInput",
    require("../general/component/image/vpcImageInput").default
);
Vue.component(
    "submitBtn",
    require("../general/component/button/vpcSubmitBtn").default
);
Vue.component(
    "editBtn",
    require("../general/component/button/vpcEditBtn").default
);
Vue.component(
    "listSelector",
    require("../general/component/dropDown/vpcListSelector").default
);
Vue.component(
    "listMultiSelector",
    require("../general/component/dropDown/vpcListMultiSelector").default
);
Vue.component(
    "listSelectorBySelection",
    require("../general/component/dropDown/vpcListSelectorBySelection").default
);
Vue.component(
    "listSelectorOptional",
    require("../general/component/dropDown/vpcListSelectorOptional").default
);
Vue.component(
    "keyValueInput",
    require("../general/component/keyValue/vpcKeyValueInput").default
);
Vue.component(
    "multiChoiceInput",
    require("../general/component/multiSelect/vpcMultiChoiceInput").default
);
Vue.component(
    "colorInput",
    require("../general/component/multiSelect/vpcColorInput").default
);
Vue.component(
    "multiFiles",
    require("../general/component/files/vpcMultiFiles").default
);
Vue.component(
    "persianCalender",
    require("../general/component/calender/persianCalender").default
);

// component
/////////////////////////////////////////////////////////////////
import { gsap, TweenMax, TimelineMax } from "gsap";
import { ExpoScaleEase, RoughEase, SlowMo } from "gsap/EasePack";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { Draggable } from "gsap/Draggable";
import { EaselPlugin } from "gsap/EaselPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { PixiPlugin } from "gsap/PixiPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
gsap.registerPlugin(
    CSSRulePlugin,
    Draggable,
    EaselPlugin,
    MotionPathPlugin,
    PixiPlugin,
    TextPlugin,
    ScrollToPlugin,
    ScrollTrigger,
    CustomEase,
    ExpoScaleEase,
    RoughEase,
    SlowMo,
    TweenMax,
    TimelineMax
);
const gsapVpc = gsap;
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
//component
// component
/////////////////////////////////////////////////////////////////
//store
import mainStore from "../general/store/mainStore";
import profile from "../general/store/profile";
import authStore from "../general/store/authStore";
import calenderStore from "../general/store/calenderStore";
import userStore from "../general/store/UserStore";
import uiStore from "./ui/uiStore";
import wrapperStore from "./ui/wrapperStore";
import formCategory from "./Store/sitepanel/formCategoryStore";
import formSubCategory from "./Store/sitepanel/formSubCategoryStore";
import formSegment from "./Store/sitepanel/formSegmentStore";
import formArticle from "./Store/sitepanel/formArticleStore";
import ComponentSlider from "./Store/sitepanel/ComponentSliderStore";
import ComponentRow from "./Store/sitepanel/ComponentRowStore";
import ComponentTextRow from "./Store/sitepanel/ComponentTextRowStore";
import ComponentCarousel from "./Store/sitepanel/ComponentCarouselStore";
import ComponentOneColumn from "./Store/sitepanel/ComponentOneColumnStore";
import ComponentTwoColumn from "./Store/sitepanel/ComponentTwoColumnStore";
import ComponentThreeColumn from "./Store/sitepanel/ComponentThreeColumnStore";
import ComponentFourColumn from "./Store/sitepanel/ComponentFourColumnStore";
import ComponentManyColumn from "./Store/sitepanel/ComponentManyColumnStore";
import ComponentManyColumnFile from "./Store/sitepanel/ComponentManyColumnFileStore";
import ComponentFlashSale from "./Store/sitepanel/ComponentFlashSaleStore";
import ComponentContact from "./Store/sitepanel/ComponentContactStore";
import ComponentAbout from "./Store/sitepanel/ComponentAboutStore";
import ComponentSocialMedia from "./Store/sitepanel/ComponentSocialMediaStore";
import ComponentInfo from "./Store/sitepanel/ComponentInfoStore";
import ComponentFooter from "./Store/sitepanel/ComponentFooterStore";
import ComponentHeader from "./Store/sitepanel/ComponentHeaderStore";
import formCrop from "./Store/sitepanel/formCropStore";
import formCropCategory from "./Store/sitepanel/formCropCategoryStore";
import formCropSubCategory from "./Store/sitepanel/formCropSubCategoryStore";
import formCropSegment from "./Store/sitepanel/formCropSegmentStore";
import formCropSubSegment from "./Store/sitepanel/formCropSubSegmentStore";
import formCropDetail from "./Store/sitepanel/formCropDetailStore";
import formCropEvent from "./Store/sitepanel/formCropEventStore";
import formCropAttribute from "./Store/sitepanel/formCropAttributeStore";
import formCropDescription from "./Store/sitepanel/formCropDescriptionStore";
import formCropMedia from "./Store/sitepanel/formCropMediaStore";
import formDiscount from "./Store/sitepanel/formDiscountStore";
import formSeller from "./Store/sitepanel/formSellerStore";
import formSellerEvidence from "./Store/sitepanel/formSellerEvidenceStore";
import formSellerContract from "./Store/sitepanel/formSellerContractStore";
import formComment from "./Store/sitepanel/formCommentStore";
import formArticleSub from "./Store/sitepanel/formArticleSubStore";
import formAddress from "./Store/sitepanel/formAddressStore";
import formInvoice from "./Store/sitepanel/formInvoiceStore";
import informationEmployment from "./Store/sitepanel/informationEmploymentStore";
import informationOpinion from "./Store/sitepanel/informationOpinionStore";
import formSellerProdcut from "./Store/sitepanel/formSellerProdcutStore";
import ComponentGallery from "./Store/sitepanel/ComponentGalleryStore";
import formInvoiceTempClient from "./Store/sitepanel/formInvoiceTempClientStore";
const store = new Vuex.Store({
    modules: {
        mainStore,
        userStore,
        authStore,
        calenderStore,
        formCategory,
        formSubCategory,
        formSegment,
        formArticle,
        formCrop,
        formCropCategory,
        formCropSubCategory,
        formCropSegment,
        formCropSubSegment,
        formCropDetail,
        formCropEvent,
        formCropAttribute,
        formSellerContract,
        formArticleSub,
        formSellerEvidence,
        formCropDescription,
        formCropMedia,
        formDiscount,
        formSeller,
        formComment,
        formAddress,
        formSellerProdcut,
        formInvoice,
        formInvoiceTempClient,
        ComponentSlider,
        ComponentRow,
        ComponentTextRow,
        ComponentCarousel,
        ComponentOneColumn,
        ComponentTwoColumn,
        ComponentThreeColumn,
        ComponentFourColumn,
        ComponentManyColumn,
        ComponentFlashSale,
        ComponentContact,
        ComponentAbout,
        ComponentSocialMedia,
        ComponentInfo,
        ComponentManyColumnFile,
        informationEmployment,
        informationOpinion,
        ComponentFooter,
        ComponentHeader,
        wrapperStore,
        ComponentGallery,
        uiStore,
        profile,
    }
});
// store
/////////////////////////////////////////////////////////////////
//router
const routes = [
    {
        path: "/",
        name: "login",
        components: { login: require("./pages/loginpage").default }
    },
    {
        path: "/dashboard",
        name: "dashboard",
        meta: { adminAuth: true },
        components: {
            adminpanel: require("./pages/dashboard").default
        },

        children: [
            // //////////Users
            {
                path: "/usersForm",
                components: {
                    usersForm: require("./forms/users/user/usersForm")
                        .default
                },
                name: "usersForm"
            },
            {
                path: "/userEdit",
                components: {
                    userEdit: require("./forms/users/user/userEdit.vue")
                        .default
                },
                name: "userEdit"
            },
            {
                path: "/userTable",
                components: {
                    userTable: require("./forms/users/user/userTable.vue")
                        .default
                },
                name: "userTable"
            },
            //////////Users
            //////////UserInfo
            {
                path: "/userInfoTable",
                components: {
                    userInfoTable: require("./forms/users/userinfo/userInfoTable")
                        .default
                },
                name: "userInfoTable"
            },
            {
                path: "/userInfoEdit",
                components: {
                    userInfoEdit: require("./forms/users/userinfo/userInfoEdit.vue")
                        .default
                },
                name: "userInfoEdit"
            },
            // //////////UserInfo
            //////////article
            {
                path: "/articleForm",
                components: {
                    articleForm: require("./forms/article/article/articleForm.vue")
                        .default
                },
                name: "articleForm"
            },
            {
                path: "/articleTable",
                components: {
                    articleTable: require("./forms/article/article/articleTable.vue")
                        .default
                },
                name: "articleTable"
            },
            {
                path: "/articleEdit",
                components: {
                    articleEdit: require("./forms/article/article/articleEdit.vue")
                        .default
                },
                name: "articleEdit"
            },
            //////////article
            //////////articleSub
            {
                path: "/articleSubForm",
                components: {
                    articleSubForm: require("./forms/article/articleSub/articleSubForm.vue")
                        .default
                },
                name: "articleSubForm"
            },
            {
                path: "/articleSubTable",
                components: {
                    articleSubTable: require("./forms/article/articleSub/articleSubTable.vue")
                        .default
                },
                name: "articleSubTable"
            },
            {
                path: "/articleSubEdit",
                components: {
                    articleSubEdit: require("./forms/article/articleSub/articleSubEdit.vue")
                        .default
                },
                name: "articleSubEdit"
            },
            //////////articleSub
            //////////category
            {
                path: "/categoryForm",
                components: {
                    categoryForm: require("./forms/webCategory/category/categoryForm.vue")
                        .default
                },
                name: "categoryForm"
            },
            {
                path: "/categoryTable",
                components: {
                    categoryTable: require("./forms/webCategory/category/categoryTable.vue")
                        .default
                },
                name: "categoryTable"
            },
            {
                path: "/categoryEdit",
                components: {
                    categoryEdit: require("./forms/webCategory/category/categoryEdit.vue")
                        .default
                },
                name: "categoryEdit"
            },
            //////////category
            //////////subcategory
            {
                path: "/subCategoryForm",

                components: {
                    subCategoryForm: require("./forms/webCategory/subcategory/subCategoryForm.vue")
                        .default
                },
                name: "subCategoryForm"
            },
            {
                path: "/subCategoryTable",
                components: {
                    subCategoryTable: require("./forms/webCategory/subcategory/subCategoryTable.vue")
                        .default
                },
                name: "subCategoryTable"
            },
            {
                path: "/subCategoryEdit",
                components: {
                    subCategoryEdit: require("./forms/webCategory/subcategory/subCategoryEdit.vue")
                        .default
                },
                name: "subCategoryEdit"
            },
            //////////subcategory
            //////////segment
            {
                path: "/segmentForm",

                components: {
                    segmentForm: require("./forms/webCategory/segment/segmentForm.vue")
                        .default
                },
                name: "segmentForm"
            },
            {
                path: "/segmentTable",
                components: {
                    segmentTable: require("./forms/webCategory/segment/segmentTable.vue")
                        .default
                },
                name: "segmentTable"
            },
            {
                path: "/segmentEdit",
                components: {
                    segmentEdit: require("./forms/webCategory/segment/segmentEdit.vue")
                        .default
                },
                name: "segmentEdit"
            },
            //////////segment
            //////////slider
            {
                path: "/sliderForm",
                components: {
                    sliderForm: require("./forms/graphicInterface/slider/sliderForm.vue")
                        .default
                },
                name: "sliderForm"
            },
            {
                path: "/sliderEdit",
                components: {
                    sliderEdit: require("./forms/graphicInterface/slider/sliderEdit.vue")
                        .default
                },
                name: "sliderEdit"
            },
            {
                path: "/sliderTable",
                components: {
                    sliderTable: require("./forms/graphicInterface/slider/sliderTable.vue")
                        .default
                },
                name: "sliderTable"
            },
            //////////slider
               //////////gallery
               {
                path: "/galleryForm",
                components: {
                    galleryForm: require("./forms/graphicInterface/gallery/galleryForm.vue")
                        .default
                },
                name: "galleryForm"
            },
            {
                path: "/galleryEdit",
                components: {
                    galleryEdit: require("./forms/graphicInterface/gallery/galleryEdit.vue")
                        .default
                },
                name: "galleryEdit"
            },
            {
                path: "/galleryTable",
                components: {
                    galleryTable: require("./forms/graphicInterface/gallery/galleryTable.vue")
                        .default
                },
                name: "galleryTable"
            },
            //////////gallery
            //////////Row
            {
                path: "/rowForm",
                components: {
                    rowForm: require("./forms/graphicInterface/row/rowForm")
                        .default
                },
                name: "rowForm"
            },
            {
                path: "/rowEdit",
                components: {
                    rowEdit: require("./forms/graphicInterface/row/rowEdit")
                        .default
                },
                name: "rowEdit"
            },
            {
                path: "/rowTable",
                components: {
                    rowTable: require("./forms/graphicInterface/row/rowTable.vue")
                        .default
                },
                name: "rowTable"
            },

            //////////Row
            //////////TextRow
            {
                path: "/textRowForm",
                components: {
                    textRowForm: require("./forms/graphicInterface/textrow/textRowForm.vue")
                        .default
                },
                name: "textRowForm"
            },
            {
                path: "/textRowEdit",
                components: {
                    textRowEdit: require("./forms/graphicInterface/textrow/textRowEdit.vue")
                        .default
                },
                name: "textRowEdit"
            },
            {
                path: "/textRowTable",
                components: {
                    textRowTable: require("./forms/graphicInterface/textrow/textRowTable.vue")
                        .default
                },
                name: "textRowTable"
            },
            //////////TextRow
            //////////carousel
            {
                path: "/carouselForm",
                components: {
                    carouselForm: require("./forms/graphicInterface/carousel/carouselForm.vue")
                        .default
                },
                name: "carouselForm"
            },
            {
                path: "/carouselEdit",
                components: {
                    carouselEdit: require("./forms/graphicInterface/carousel/carouselEdit.vue")
                        .default
                },
                name: "carouselEdit"
            },
            {
                path: "/carouselTable",
                components: {
                    carouselTable: require("./forms/graphicInterface/carousel/carouselTable.vue")
                        .default
                },
                name: "carouselTable"
            },
            //////////carousel

            //////////OneColumn
            {
                path: "/oneColumnForm",
                components: {
                    oneColumnForm: require("./forms/graphicInterface/onecolumn/oneColumnForm.vue")
                        .default
                },
                name: "oneColumnForm"
            },
            {
                path: "/oneColumnEdit",
                components: {
                    oneColumnEdit: require("./forms/graphicInterface/onecolumn/oneColumnEdit.vue")
                        .default
                },
                name: "oneColumnEdit"
            },
            {
                path: "/oneColumnTable",
                components: {
                    oneColumnTable: require("./forms/graphicInterface/onecolumn/oneColumnTable.vue")
                        .default
                },
                name: "oneColumnTable"
            },
            //////////OneColumn
            //////////TwoColumn

            {
                path: "/twoColumnForm",
                components: {
                    twoColumnForm: require("./forms/graphicInterface/twocolumn/twoColumnForm.vue")
                        .default
                },
                name: "twoColumnForm"
            },
            {
                path: "/twoColumnEdit",
                components: {
                    twoColumnEdit: require("./forms/graphicInterface/twocolumn/twoColumnEdit.vue")
                        .default
                },
                name: "twoColumnEdit"
            },
            {
                path: "/twoColumnTable",
                components: {
                    twoColumnTable: require("./forms/graphicInterface/twocolumn/twoColumnTable.vue")
                        .default
                },
                name: "twoColumnTable"
            },
            //////////TwoColumn
            //////////ThreeColumn
            {
                path: "/threeColumnForm",
                components: {
                    threeColumnForm: require("./forms/graphicInterface/threecolumn/threeColumnForm.vue")
                        .default
                },
                name: "threeColumnForm"
            },
            {
                path: "/threeColumnEdit",
                components: {
                    threeColumnEdit: require("./forms/graphicInterface/threecolumn/threeColumnEdit.vue")
                        .default
                },
                name: "threeColumnEdit"
            },
            {
                path: "/threeColumnTable",
                components: {
                    threeColumnTable: require("./forms/graphicInterface/threecolumn/threeColumnTable.vue")
                        .default
                },
                name: "threeColumnTable"
            },
            //////////ThreeColumn
            //////////FourColumn
            {
                path: "/fourColumnForm",
                components: {
                    fourColumnForm: require("./forms/graphicInterface/fourcolumn/fourColumnForm.vue")
                        .default
                },
                name: "fourColumnForm"
            },
            {
                path: "/fourColumnEdit",
                components: {
                    fourColumnEdit: require("./forms/graphicInterface/fourcolumn/fourColumnEdit.vue")
                        .default
                },
                name: "fourColumnEdit"
            },
            {
                path: "/fourColumnTable",
                components: {
                    fourColumnTable: require("./forms/graphicInterface/fourcolumn/fourColumnTable.vue")
                        .default
                },
                name: "fourColumnTable"
            },
            //////////FourColumn
            //////////ManyColumn
            {
                path: "/manyColumnForm",
                components: {
                    manyColumnForm: require("./forms/graphicInterface/manycolumn/manyColumnForm.vue")
                        .default
                },
                name: "manyColumnForm"
            },
            {
                path: "/manyColumnEdit",
                components: {
                    manyColumnEdit: require("./forms/graphicInterface/manycolumn/manyColumnEdit.vue")
                        .default
                },
                name: "manyColumnEdit"
            },
            {
                path: "/manyColumnTable",
                components: {
                    manyColumnTable: require("./forms/graphicInterface/manycolumn/manyColumnTable.vue")
                        .default
                },
                name: "manyColumnTable"
            },
            //////////ManyColumn
            //////////ManyColumnFile
            {
                path: "/manyColumnFileForm",
                components: {
                    manyColumnFileForm: require("./forms/graphicInterface/manycolumnfile/manyColumnFileForm.vue")
                        .default
                },
                name: "manyColumnFileForm"
            },
            {
                path: "/manyColumnFileEdit",
                components: {
                    manyColumnFileEdit: require("./forms/graphicInterface/manycolumnfile/manyColumnFileEdit.vue")
                        .default
                },
                name: "manyColumnFileEdit"
            },
            {
                path: "/manyColumnFileTable",
                components: {
                    manyColumnFileTable: require("./forms/graphicInterface/manycolumnfile/manyColumnFileTable.vue")
                        .default
                },
                name: "manyColumnFileTable"
            },
            //////////ManyColumnFileFile
            //////////flashSale
            {
                path: "/flashSaleForm",
                components: {
                    flashSaleForm: require("./forms/graphicInterface/flashsale/flashSaleForm.vue")
                        .default
                },
                name: "flashSaleForm"
            },
            {
                path: "/flashSaleEdit",
                components: {
                    flashSaleEdit: require("./forms/graphicInterface/flashsale/flashSaleEdit.vue")
                        .default
                },
                name: "flashSaleEdit"
            },
            {
                path: "/flashSaleTable",
                components: {
                    flashSaleTable: require("./forms/graphicInterface/flashsale/flashSaleTable.vue")
                        .default
                },
                name: "flashSaleTable"
            },
            //////////flashSale
            //////////header
            {
                path: "/headerForm",
                components: {
                    headerForm: require("./forms/graphicInterface/header/headerForm.vue")
                        .default
                },
                name: "headerForm"
            },
            {
                path: "/headerEdit",
                components: {
                    headerEdit: require("./forms/graphicInterface/header/headerEdit.vue")
                        .default
                },
                name: "headerEdit"
            },
            {
                path: "/headerTable",
                components: {
                    headerTable: require("./forms/graphicInterface/header/headerTable.vue")
                        .default
                },
                name: "headerTable"
            },
            //////////header
            //////////footer
            {
                path: "/footerForm",
                components: {
                    footerForm: require("./forms/graphicInterface/footer/footerForm.vue")
                        .default
                },
                name: "footerForm"
            },
            {
                path: "/footerEdit",
                components: {
                    footerEdit: require("./forms/graphicInterface/footer/footerEdit.vue")
                        .default
                },
                name: "footerEdit"
            },
            {
                path: "/footerTable",
                components: {
                    footerTable: require("./forms/graphicInterface/footer/footerTable.vue")
                        .default
                },
                name: "footerTable"
            },
            //////////footer
            //////////contact
            {
                path: "/contactForm",
                components: {
                    contactForm: require("./forms/graphicInterface/contact/contactForm.vue")
                        .default
                },
                name: "contactForm"
            },
            {
                path: "/contactEdit",
                components: {
                    contactEdit: require("./forms/graphicInterface/contact/contactEdit.vue")
                        .default
                },
                name: "contactEdit"
            },
            {
                path: "/contactTable",
                components: {
                    contactTable: require("./forms/graphicInterface/contact/contactTable.vue")
                        .default
                },
                name: "contactTable"
            },
            //////////contact
            //////////about
            {
                path: "/aboutForm",
                components: {
                    aboutForm: require("./forms/graphicInterface/about/aboutForm.vue")
                        .default
                },
                name: "aboutForm"
            },
            {
                path: "/aboutEdit",
                components: {
                    aboutEdit: require("./forms/graphicInterface/about/aboutEdit.vue")
                        .default
                },
                name: "aboutEdit"
            },
            {
                path: "/aboutTable",
                components: {
                    aboutTable: require("./forms/graphicInterface/about/aboutTable.vue")
                        .default
                },
                name: "aboutTable"
            },
            //////////about

            //////////socialMedia
            {
                path: "/socialMediaForm",
                components: {
                    socialMediaForm: require("./forms/graphicInterface/socialmedia/socialMediaForm.vue")
                        .default
                },
                name: "socialMediaForm"
            },
            {
                path: "/socialMediaEdit",
                components: {
                    socialMediaEdit: require("./forms/graphicInterface/socialmedia/socialMediaEdit.vue")
                        .default
                },
                name: "socialMediaEdit"
            },
            {
                path: "/socialMediaTable",
                components: {
                    socialMediaTable: require("./forms/graphicInterface/socialmedia/socialMediaTable.vue")
                        .default
                },
                name: "socialMediaTable"
            },
            //////////socialMedia

            //////////Info
            {
                path: "/infoForm",
                components: {
                    infoForm: require("./forms/graphicInterface/info/infoForm.vue")
                        .default
                },
                name: "infoForm"
            },
            {
                path: "/infoEdit",
                components: {
                    infoEdit: require("./forms/graphicInterface/info/infoEdit.vue")
                        .default
                },
                name: "infoEdit"
            },
            {
                path: "/infoTable",
                components: {
                    infoTable: require("./forms/graphicInterface/info/infoTable.vue")
                        .default
                },
                name: "infoTable"
            },
            //////////Info
            //////////crop
            {
                path: "/cropForm",
                components: {
                    cropForm: require("./forms/crop/crops/cropForm.vue").default
                },
                name: "cropForm"
            },
            {
                path: "/cropEdit",
                components: {
                    cropEdit: require("./forms/crop/crops/cropEdit.vue").default
                },
                name: "cropEdit"
            },
            {
                path: "/cropTable",
                components: {
                    cropTable: require("./forms/crop/crops/cropTable.vue")
                        .default
                },
                name: "cropTable"
            },
            //////////crop
            //////////cropDescription
            {
                path: "/cropDescriptionForm",
                components: {
                    cropDescriptionForm: require("./forms/crop/cropDescription/cropDescriptionForm.vue")
                        .default
                },
                name: "cropDescriptionForm"
            },
            {
                path: "/cropDescriptionEdit",
                components: {
                    cropDescriptionEdit: require("./forms/crop/cropDescription/cropDescriptionEdit.vue")
                        .default
                },
                name: "cropDescriptionEdit"
            },
            {
                path: "/cropDescriptionTable",
                components: {
                    cropDescriptionTable: require("./forms/crop/cropDescription/cropDescriptionTable.vue")
                        .default
                },
                name: "cropDescriptionTable"
            },
            //////////cropDescription
            //////////cropMedia
            {
                path: "/cropMediaForm",
                components: {
                    cropMediaForm: require("./forms/crop/cropMedia/cropMediaForm.vue")
                        .default
                },
                name: "cropMediaForm"
            },
            {
                path: "/cropMediaTable",
                components: {
                    cropMediaTable: require("./forms/crop/cropMedia/cropMediaTable.vue")
                        .default
                },
                name: "cropMediaTable"
            },
            //////////cropMedia
            //////////croptAttribute
            {
                path: "/cropAttributeForm",
                components: {
                    cropAttributeForm: require("./forms/crop/cropAttribute/cropAttributeForm.vue")
                        .default
                },
                name: "cropAttributeForm"
            },
            {
                path: "/cropAttributeEdit",
                components: {
                    cropAttributeEdit: require("./forms/crop/cropAttribute/cropAttributeEdit.vue")
                        .default
                },
                name: "cropAttributeEdit"
            },
            {
                path: "/cropAttributeTable",
                components: {
                    cropAttributeTable: require("./forms/crop/cropAttribute/cropAttributeTable.vue")
                        .default
                },
                name: "cropAttributeTable"
            },
            //////////croptAttribute
            //////////cropCategory
            {
                path: "/cropCategoryForm",
                components: {
                    cropCategoryForm: require("./forms/crop/cropCategory/cropCategoryForm.vue")
                        .default
                },
                name: "cropCategoryForm"
            },
            {
                path: "/cropCategoryEdit",
                components: {
                    cropCategoryEdit: require("./forms/crop/cropCategory/cropCategoryEdit.vue")
                        .default
                },
                name: "cropCategoryEdit"
            },
            {
                path: "/cropCategoryTable",
                components: {
                    cropCategoryTable: require("./forms/crop/cropCategory/cropCategoryTable.vue")
                        .default
                },
                name: "cropCategoryTable"
            },
            //////////cropCategory

            //////////cropSubCategory
            {
                path: "/cropSubCategoryForm",
                components: {
                    cropSubCategoryForm: require("./forms/crop/cropSubCategory/cropSubCategoryForm.vue")
                        .default
                },
                name: "cropSubCategoryForm"
            },
            {
                path: "/cropSubCategoryEdit",
                components: {
                    cropSubCategoryEdit: require("./forms/crop/cropSubCategory/cropSubCategoryEdit.vue")
                        .default
                },
                name: "cropSubCategoryEdit"
            },
            {
                path: "/cropSubCategoryTable",
                components: {
                    cropSubCategoryTable: require("./forms/crop/cropSubCategory/cropSubCategoryTable.vue")
                        .default
                },
                name: "cropSubCategoryTable"
            },
            //////////cropSubCategory
            //////////cropSegment
            {
                path: "/cropSegmentForm",
                components: {
                    cropSegmentForm: require("./forms/crop/cropSegment/cropSegmentForm.vue")
                        .default
                },
                name: "cropSegmentForm"
            },
            {
                path: "/cropSegmentEdit",
                components: {
                    cropSegmentEdit: require("./forms/crop/cropSegment/cropSegmentEdit.vue")
                        .default
                },
                name: "cropSegmentEdit"
            },
            {
                path: "/cropSegmentTable",
                components: {
                    cropSegmentTable: require("./forms/crop/cropSegment/cropSegmentTable.vue")
                        .default
                },
                name: "cropSegmentTable"
            },
            //////////cropSegment
            //////////cropSubSegment
            {
                path: "/cropSubSegmentForm",
                components: {
                    cropSubSegmentForm: require("./forms/crop/cropSubSegment/cropSubSegmentForm.vue")
                        .default
                },
                name: "cropSubSegmentForm"
            },
            {
                path: "/cropSubSegmentEdit",
                components: {
                    cropSubSegmentEdit: require("./forms/crop/cropSubSegment/cropSubSegmentEdit.vue")
                        .default
                },
                name: "cropSubSegmentEdit"
            },
            {
                path: "/cropSubSegmentTable",
                components: {
                    cropSubSegmentTable: require("./forms/crop/cropSubSegment/cropSubSegmentTable.vue")
                        .default
                },
                name: "cropSubSegmentTable"
            },
            //////////cropSubSegment
            //////////cropDetail
            {
                path: "/cropDetailForm",
                components: {
                    cropDetailForm: require("./forms/crop/cropDetail/cropDetailForm.vue")
                        .default
                },
                name: "cropDetailForm"
            },
            {
                path: "/cropDetailEdit",
                components: {
                    cropDetailEdit: require("./forms/crop/cropDetail/cropDetailEdit.vue")
                        .default
                },
                name: "cropDetailEdit"
            },
            {
                path: "/cropDetailTable",
                components: {
                    cropDetailTable: require("./forms/crop/cropDetail/cropDetailTable.vue")
                        .default
                },
                name: "cropDetailTable"
            },
            //////////cropDetail
            //////////cropEvent
            {
                path: "/cropEventForm",
                components: {
                    cropEventForm: require("./forms/crop/cropEvent/cropEventForm.vue")
                        .default
                },
                name: "cropEventForm"
            },
            {
                path: "/cropEventEdit",
                components: {
                    cropEventEdit: require("./forms/crop/cropEvent/cropEventEdit.vue")
                        .default
                },
                name: "cropEventEdit"
            },
            {
                path: "/cropEventTable",
                components: {
                    cropEventTable: require("./forms/crop/cropEvent/cropEventTable.vue")
                        .default
                },
                name: "cropEventTable"
            },
            //////////cropEvent
            //////////discount
            {
                path: "/discountCodeForm",
                components: {
                    discountCodeForm: require("./forms/discountcode/discountCodeForm.vue")
                        .default
                },
                name: "discountCodeForm"
            },
            {
                path: "/discountCodeEdit",
                components: {
                    discountCodeEdit: require("./forms/discountcode/discountCodeEdit.vue")
                        .default
                },
                name: "discountCodeEdit"
            },
            {
                path: "/discountCodeTable",
                components: {
                    discountCodeTable: require("./forms/discountcode/discountCodeTable.vue")
                        .default
                },
                name: "discountCodeTable"
            },
            //////////discount
            //////////sellerEvidence
            {
                path: "/sellerEvidenceForm",
                components: {
                    sellerEvidenceForm: require("./forms/seller/evidence/sellerEvidenceForm")
                        .default
                },
                name: "sellerEvidenceForm"
            },
            {
                path: "/sellerEvidenceTable",
                components: {
                    sellerEvidenceTable: require("./forms/seller/evidence/sellerEvidenceTable.vue")
                        .default
                },
                name: "sellerEvidenceTable"
            },
            {
                path: "/sellerEvidenceEdit",
                components: {
                    sellerEvidenceEdit: require("./forms/seller/evidence/sellerEvidenceEdit.vue")
                        .default
                },
                name: "sellerEvidenceEdit"
            },
            {
                path: "/sellerEvidenceConfirmTable",
                components: {
                    sellerEvidenceConfirmTable: require("./forms/seller/evidence/sellerEvidenceConfirmTable.vue")
                        .default
                },
                name: "sellerEvidenceConfirmTable"
            },
            {
                path: "/sellerEvidenceConfirmForm",
                components: {
                    sellerEvidenceConfirmForm: require("./forms/seller/evidence/sellerEvidenceConfirmForm.vue")
                        .default
                },
                name: "sellerEvidenceConfirmForm"
            },
            //////////sellerEvidence
            //////////sellerStore
            {
                path: "/sellerLicenseTable",
                components: {
                    sellerLicenseTable: require("./forms/seller/license/sellerLicenseTable.vue")
                        .default
                },
                name: "sellerLicenseTable"
            },
            {
                path: "/sellerLicenseForm",
                components: {
                    sellerLicenseForm: require("./forms/seller/license/sellerLicenseForm.vue")
                        .default
                },
                name: "sellerLicenseForm"
            },
            {
                path: "/sellerPercentageTable",
                components: {
                    sellerPercentageTable: require("./forms/seller/license/sellerPercentageTable.vue")
                        .default
                },
                name: "sellerPercentageTable"
            },
            {
                path: "/sellerPercentageEdit",
                components: {
                    sellerPercentageEdit: require("./forms/seller/license/sellerPercentageEdit.vue")
                        .default
                },
                name: "sellerPercentageEdit"
            },
            //////////commentTable
            {
                path: "/commentTable",
                components: {
                    commentTable: require("./forms/comment/commentTable.vue")
                        .default
                },
                name: "commentTable"
            },
            //////////commentTable
            //////////employment
            {
                path: "/employmentTable",
                components: {
                    employmentTable: require("./forms/information/employment/employmentTable.vue")
                        .default
                },
                name: "employmentTable"
            },
            {
                path: "/employmentView",
                components: {
                    employmentView: require("./forms/information/employment/employmentView.vue")
                        .default
                },
                name: "employmentView"
            },
            //////////employment
            //////////opinion
            {
                path: "/opinionTable",
                components: {
                    opinionTable: require("./forms/information/opinion/opinionTable.vue")
                        .default
                },
                name: "opinionTable"
            },
            {
                path: "/opinionView",
                components: {
                    opinionView: require("./forms/information/opinion/opinionView.vue")
                        .default
                },
                name: "opinionView"
            },
            //////////opinion
            //////////SellerAddress
            {
                path: "/sellerAddressForm",
                components: {
                    sellerAddressForm: require("./forms/seller/address/sellerAddressForm.vue")
                        .default
                },
                name: "sellerAddressForm"
            },
            {
                path: "/sellerAddressTable",
                components: {
                    sellerAddressTable: require("./forms/seller/address/sellerAddressTable.vue")
                        .default
                },
                name: "sellerAddressTable"
            },
            {
                path: "/sellerAddressEdit",
                components: {
                    sellerAddressEdit: require("./forms/seller/address/sellerAddressEdit.vue")
                        .default
                },
                name: "sellerAddressEdit"
            },
            //////////SellerAddress
            //////////sellerProduct
            {
                path: "/sellerProductForm",
                components: {
                    sellerProductForm: require("./forms/shopping/sellerProdcut/sellerProductForm.vue")
                        .default
                },
                name: "sellerProductForm"
            },
            {
                path: "/sellerProductTable",
                components: {
                    sellerProductTable: require("./forms/shopping/sellerProdcut/sellerProductTable.vue")
                        .default
                },
                name: "sellerProductTable"
            },
            {
                path: "/sellerProductEdit",
                components: {
                    sellerProductEdit: require("./forms/shopping/sellerProdcut/sellerProductEdit.vue")
                        .default
                },
                name: "sellerProductEdit"
            },
            //////////sellerProduct
            //////////invoice
            {
                path: "/statusInvoiceTable",
                components: {
                    statusInvoiceTable: require("./forms/invoice/status/statusInvoiceTable.vue")
                        .default
                },
                name: "statusInvoiceTable"
            },
            {
                path: "/statusInvoiceForm",
                components: {
                    statusInvoiceForm: require("./forms/invoice/status/statusInvoiceForm.vue")
                        .default
                },
                name: "statusInvoiceForm"
            },
            {
                path: "/clientInvoiceTable",
                components: {
                    clientInvoiceTable: require("./forms/invoice/client/clientInvoiceTable.vue")
                        .default
                },
                name: "clientInvoiceTable"
            },
            {
                path: "/clientInvoiceForm",
                components: {
                    clientInvoiceForm: require("./forms/invoice/client/clientInvoiceForm.vue")
                        .default
                },
                name: "clientInvoiceForm"
            },
            {
                path: "/storeInvoiceTable",
                components: {
                    storeInvoiceTable: require("./forms/invoice/store/storeInvoiceTable.vue")
                        .default
                },
                name: "storeInvoiceTable"
            },
            {
                path: "/storeInvoiceForm",
                components: {
                    storeInvoiceForm: require("./forms/invoice/store/storeInvoiceForm.vue")
                        .default
                },
                name: "storeInvoiceForm"
            },
            {
                path: "/statusInvoiceTempClientTable",
                components: {
                    statusInvoiceTempClientTable: require("./forms/invoice/tempClient/statusInvoiceTempClientTable.vue")
                        .default
                },
                name: "statusInvoiceTempClientTable"
            },
            {
                path: "/tempClientInvoiceTable",
                components: {
                    tempClientInvoiceTable: require("./forms/invoice/tempClient/tempClientInvoiceTable.vue")
                        .default
                },
                name: "tempClientInvoiceTable"
            },
            {
                path: "/tempClientInvoiceForm",
                components: {
                    tempClientInvoiceForm: require("./forms/invoice/tempClient/tempClientInvoiceForm.vue")
                        .default
                },
                name: "tempClientInvoiceForm"
            },
            //////////invoice
            //////////dashboard
            {
                path: "/calender",
                components: {
                    calender: require("./dashboard/calender.vue")
                        .default
                },
                name: "calender"
            },
            {
                path: "/profile",
                components: {
                    profile: require("./dashboard/profile.vue")
                        .default
                },
                name: "profile"
            },
            //////////dashboard
        ]
    }
];
const Router = new VueRouter({
    routes
});
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// nprogress
import NProgress from "nprogress";
Router.afterEach((to, from) => {
    NProgress.done();
});
Router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start();
    }
    next();
});
Router.afterEach((to, from) => {
    NProgress.done();
});
axios.interceptors.request.use(
    function(config) {
        NProgress.start();
        return config;
    },
    function(error) {
        console.error(error);
        return Promise.reject(error);
    }
);
axios.interceptors.response.use(
    function(response) {
        NProgress.done();
        return response;
    },
    function(error) {
        console.error(error);
        return Promise.reject(error);
    }
);
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// beforeeach
Router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.adminAuth)) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.common["Authorization"] =
                "Bearer " +
                (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                    ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                    : null);
            axios
                .get("api/userType/administrator")
                .then(response => {
                    return next();
                    resolve(resolve);
                })
                .catch(error => {
                    return next({
                        path: "/"
                    });
                    reject(error);
                });
        });
    } else {
        next();
    }
});
/////////////////////////////////////////////////////////////////
//instance
const app = new Vue({
    el: "#panel",
    data: {
        gsapVpc
    },
    router: Router,
    store,
    props: {}

    //instance
});
