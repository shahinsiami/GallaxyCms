require("../../../general/importModule");
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Vuex from "vuex";
Vue.use(Vuex);
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
// store
import commonStore from "../../Store/commonStore";
import viewAbout from "../../Store/viewAboutStore";
import viewCarousel from "../../Store/viewCarouselStore";
import viewContact from "../../Store/viewContactStore";
import viewFlashSales from "../../Store/viewFlashSaleStore";
import viewFourColumn from "../../Store/viewFourColumnStore";
import viewInfo from "../../Store/viewInfoStore";
import viewManyColumn from "../../Store/viewManyColumnStore";
import viewOneColumn from "../../Store/viewOneColumnStore";
import viewRow from "../../Store/viewRowStore";
import viewSlider from "../../Store/viewSliderStore";
import viewSocialMedia from "../../Store/viewSocialMediaStore";
import viewTextRow from "../../Store/viewTextRowStore";
import viewThreeColumn from "../../Store/viewThreeColumnStore";
import viewTwoColumn from "../../Store/viewTwoColumnStore";
import viewMenu from "../../Store/viewMenuStore";
import viewHeader from "../../Store/viewHeaderStore";
import viewArticle from "../../Store/viewArticleStore";
import viewBlog from "../../Store/viewBlogStore";
import viewResultSearch from "../../Store/viewResultSearchStore";
import viewManyColumnFile from "../../Store/viewManyColumnFileStore";
import viewCrop from "../../Store/viewCropStore";
import viewSiteFooter from "../../Store/viewSiteFooterStore";
import viewSiteHeader from "../../Store/viewSiteHeaderStore";
import viewGallery from "../../Store/viewGalleryStore";
import authStore from "../../Store/authStore";
import general from "../../Store/generalStore";
import viewSellerCrop from "../../Store/viewSellerCropStore";
import viewSeller from "../../Store/viewSellerStore";
import viewFilterCrop from "../../Store/viewFilterCrop";
import viewCropMenu from "../../Store/viewCropMenuStore";
import clientInfo from "../../Store/clientInfoStore";
import clientAddress from "../../Store/clientAddressStore";
import clientCart from "../../Store/clientCartStore";
import clientInterest from "../../Store/clientInterestStore";
import tempClient from "../../Store/tempClientStore";

const store = new Vuex.Store({
    modules: {
        clientInfo,
        clientAddress,
        clientCart,
        clientInterest,
        authStore,
        commonStore,
        viewAbout,
        viewCarousel,
        viewHeader,
        viewContact,
        viewFlashSales,
        viewFourColumn,
        viewInfo,
        viewManyColumn,
        viewOneColumn,
        viewRow,
        viewSlider,
        viewBlog,
        viewSocialMedia,
        viewTextRow,
        viewThreeColumn,
        viewTwoColumn,
        viewMenu,
        viewArticle,
        viewResultSearch,
        viewManyColumnFile,
        viewCrop,
        viewSiteFooter,
        viewSiteHeader,
        viewGallery,
        general,
        viewSellerCrop,
        viewSeller,
        viewFilterCrop,
        viewCropMenu,
        tempClient
    }
});
// store
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
// router
const routes =
    [
        {
            path: '/',
            name: 'home',
            components: {home : require('./fa/home').default},

        },     
        {
            path: '/shopping',
            name: 'shopping',
            components: {home : require('./fa/shopping').default},

        },        
    ]

    const Router = new VueRouter({
        routes
    });
    
    Router.beforeEach((to, from, next) => {
        if (to.matched.some(record => record.meta.noLink)) {
        } else {
            next();
        }
    });
    
    const app = new Vue({
        el: "#siteview",
        data: {
            gsapVpc
        },
        watch:{
            $route(to, from) {
                document.getElementById('siteview').scrollTo({ top: 0, behavior: 'smooth' });
              },
      
        },
        components: {
            // faheader: require("../../Component/atigheh/fa/headerMall").default,
            // fafooter: require("../../Component/atigheh/fa/footerMall").default,
        },
    
        router: Router,
        store,
        props: {}
        //instance
    });
    