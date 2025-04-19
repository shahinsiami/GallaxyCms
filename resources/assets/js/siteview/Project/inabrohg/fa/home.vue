<template> 
<section class="d-flex flex-row vpc_background">
  <section v-bind:class="[this.showMenu ? 'vpc_open_menu' : 'vpc_close_menu']">
    <slider id="home" v-if="this.viewSlider.length > 0" :source="this.viewSlider"></slider>
    <aboutUs id="aboutUs" class="someID" v-if="this.about.length > 0" :source="this.about[0]"></aboutUs>
    <services id="services" v-if="this.viewManyColumn.length > 0" :source="this.viewManyColumn"></services>
    <buyBook id="buyBook" v-if="this.viewProduct.length > 0" :source="this.viewProduct"></buyBook>
   <resource id="resource"
      v-if="this.viewManySectionTwoColumn.length > 0"
      :source="this.viewManySectionTwoColumn"
    ></resource>
     <project  id="project"
      v-if="this.viewThreeColumnSectionTwo.length > 0"
      :source="this.viewThreeColumnSectionTwo"
    ></project>
    <educationalGroup id="educationalGroup" v-if="this.viewTextRow.length > 0" :source="this.viewTextRow[0]"></educationalGroup>
    <gallery id="gallery" v-if="this.Gallery.length > 1" :source="this.Gallery"></gallery>
   <customers id="customers"
      v-if="this.viewManySectionThreeColumn.length > 0"
      :source="this.viewManySectionThreeColumn"
    ></customers>
    <contactus id="contactus" v-if="this.contact.length > 0" :source="this.contact"></contactus> 
  </section>
  <section v-bind:class="[!this.showMenu ? 'vpc_close_slide_menu' : 'vpc_open_slide_menu']">
    <div  class="vpc_side_menu">
      <sideMenu :source="this.menu"></sideMenu>
    </div>
  </section>
  <div class="vpc_hamburger_icon">
      <div class="d-flex flex-row w-100 justify-content-center align-items-center" @click="openSlideMenu">
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect class="openSlideMenu1" fill="#ffffff" width="100" height="10" />
          <rect class="openSlideMenu2" fill="#ffffff" y="30" width="100" height="10" />
          <rect class="openSlideMenu3" fill="#ffffff" y="60" width="100" height="10" />
        </svg>
      </div>
  </div>
   <div class="vpc_shopping_icon">
      <div class="d-flex flex-row w-100 justify-content-center align-items-center position-relative" @click="goShoppingCart">
<svg  x="0px" y="0px" width="40" height="40">
	<g>
		<path fill="#FFFFFF" d="M28.28,19.29l4.04-15.83h4.42V0.98h-6.35l-0.95,3.73L3.72,4.69l2.73,14.6L28.28,19.29L28.28,19.29
			L28.28,19.29z M28.81,7.19l-2.45,9.61H8.52l-1.8-9.62L28.81,7.19z"/>
		<path fill="#FFFFFF" d="M24.88,28.36c2.19,0,3.98-1.78,3.98-3.98s-1.78-3.98-3.98-3.98H9.89c-2.19,0-3.98,1.78-3.98,3.98
			s1.78,3.98,3.98,3.98s3.98-1.78,3.98-3.98c0-0.53-0.1-1.03-0.29-1.49h7.61c-0.19,0.46-0.29,0.96-0.29,1.49
			C20.9,26.57,22.68,28.36,24.88,28.36z M11.38,24.38c0,0.82-0.67,1.49-1.49,1.49S8.4,25.2,8.4,24.38c0-0.82,0.67-1.49,1.49-1.49
			C10.71,22.89,11.38,23.56,11.38,24.38z M26.37,24.38c0,0.82-0.67,1.49-1.49,1.49s-1.49-0.67-1.49-1.49c0-0.82,0.67-1.49,1.49-1.49
			S26.37,23.56,26.37,24.38z"/>
	</g>
</svg>
<div class="vpc_shopping_icon_count d-flex flex-row justify-content-center align-items-center">{{this.shoopingCount}}</div>


      </div>
  </div>
  </section>
</template>
<!---->
<style lang="scss" scoped>
$color1: #c0c0c0;
.vpc_background{
  background-color: $color1;
}
.vpc_hamburger_icon{
  position: fixed;
  right: 25px;
  top:10px;
  cursor: pointer;
  z-index: 100;
}
.vpc_shopping_icon{
  position: fixed;
  left: 25px;
  top:10px;
  cursor: pointer;
  z-index: 100;
}
.vpc_shopping_icon_count{
position: absolute;
right:0px;
bottom: 0px;
width: 20px;
height: 20px;
background-color:rgb(83, 107, 140);
border-radius: 50%;
color:#ffffff;
}
.vpc_open_menu{
  width:calc(100% - 300px) !important;
  transition: 1s ease all;
  @include maxSize(600){
    display: none;
  }
}
.vpc_close_menu{
  width:100% !important;
  transition: 1s ease all;
}
.vpc_side_menu{
  background-color: $color1;
  width: 300px;
  height: 100vh;
}
.vpc_open_slide_menu{
  position:fixed;
  right: 0px;
  top: 0px;
  width:300px !important;
  transition: 1s ease all;
  overflow: hidden;
   @include maxSize(600){
     width:100% !important;
  }
}
.vpc_close_slide_menu{
  position:fixed;
  right: 0px;
  top: 0px;
  width:0px !important;
  transition: 1s ease all;
  overflow: hidden;
}
</style>
<!---->
<script>
export default {
  name: "home",
  components: {
    slider: require("../../../Component/inabrohg/fa/slider").default,
    aboutUs: require("../../../Component/inabrohg/fa/aboutUs").default,
    services: require("../../../Component/inabrohg/fa/services").default,
    buyBook: require("../../../Component/inabrohg/fa/buyBook").default,
    resource: require("../../../Component/inabrohg/fa/resource").default,
    project: require("../../../Component/inabrohg/fa/project").default,
    educationalGroup: require("../../../Component/inabrohg/fa/educationalGroup").default,
    gallery: require("../../../Component/inabrohg/fa/gallery").default,
    customers: require("../../../Component/inabrohg/fa/customers").default,
    Contactus: require("../../../Component/inabrohg/fa/Contactus").default,
    sideMenu: require("../../../Component/inabrohg/fa/sideMenu").default,
  },

  data() {
    return {
      menu:[
        {name:'خانه',id:"home"},
        {name:'درباره ما',id:"aboutUs"},
        {name:'خدمات ما',id:"services"},
        {name:'کتب',id:"buyBook"},
        {name:'منابع رایگان',id:"resource"},
        {name:'پروژه های ما',id:"project"},
        {name:'گروه آموزشی',id:"educationalGroup"},
        {name:'گالری',id:"gallery"},
        {name:'مشتریان',id:"customers"},
        {name:'تماس با ما',id:"contactus"},
      ],
      showMenu:false,
       slideMenuIcon: new this.$root.$data.gsapVpc.timeline(),
    };
  },
  computed: {
    shoopingCount:{
      get() {
        if (this.$store.state.tempClient.shoppingLocalStore){
          return this.$store.state.tempClient.shoppingLocalStore.length;
        }else{
          return 0
        }
      },
    },
    about: {
      get() {
        return this.$store.state.viewAbout.viewAbout;
      },
    },
    viewManyColumn: {
      get() {
        return this.$store.state.viewManyColumn.manyColumnHome.filter(
          (item) => {
            return item.section == 1;
          }
        );
      },
    },
    viewProduct: {
      get() {
          return this.$store.state.viewSellerCrop.sellerProductByCategory;
      },
    },
    viewManySectionTwoColumn: {
      get() {
        return this.$store.state.viewManyColumn.manyColumnHome.filter(
          (item) => {
            return item.section == 2;
          }
        );
      },
    },
    viewThreeColumnSectionTwo: {
      get() {
        return this.$store.state.viewThreeColumn.threeColumnHome.filter(
          (item) => {
            return item.section == 2;
          }
        );
      },
    },
    viewManySectionThreeColumn: {
      get() {
        return this.$store.state.viewManyColumn.manyColumnHome.filter(
          (item) => {
            return item.section == 3;
          }
        );
      },
    },
    viewTextRow: {
      get() {
        return this.$store.state.viewTextRow.textRowHome.filter((item) => {
          return item.section == 1;
        });
      },
    },
    Gallery: {
      get() {
        return this.$store.state.viewGallery.galleryHome.filter((item) => {
          return item.section == 1;
        });
      },
    },
    contact: {
      get() {
        return this.$store.state.viewContact.contactHome;
      },
    },
    viewSlider: {
      get() {
        return this.$store.state.viewSlider.sliderHome.filter((item) => {
          return item.section == 1;
        });
      },
    },
  },
  methods:{
    goShoppingCart(){
 this.$router.push({ name: "shopping" });
 location.reload();
    },
    openSlideMenu(){
      if (!this.showMenu) {
        this.slideMenuIcon.to(".openSlideMenu1", 0.3, {
          rotation: 90,
          y: 30,
          x: 0,
          transformOrigin: "center center"
        });
        this.slideMenuIcon.to(".openSlideMenu2", 0.3, {
          rotation: 90,
          y: 0,
          x: 30,
          transformOrigin: "center center"
        });
        this.slideMenuIcon.to(".openSlideMenu3", 0.3, {
          rotation: 90,
          y: -30,
          x: -30,
          transformOrigin: "center center"
        });
       this.showMenu = true;
      } else {
        this.slideMenuIcon.to(".openSlideMenu1", 0.3, {
          rotation: 0,
          y: 0,
          x: 0,
          transformOrigin: "center center"
        });
        this.slideMenuIcon.to(".openSlideMenu2", 0.3, {
          rotation: 0,
          y: 0,
          x: 0,
          transformOrigin: "center center"
        });
        this.slideMenuIcon.to(".openSlideMenu3", 0.3, {
          rotation: 0,
          y: 0,
          x: 0,
          transformOrigin: "center center"
        });
          this.showMenu = false;
      }
    }
  },
  beforeCreate() {
    this.$store.dispatch("viewAbout", [1, 2]);
    this.$store.dispatch("viewManyColumn", [1, 2]);
    this.$store.dispatch("sellerProductByCategory",[1,1]);
    this.$store.dispatch("viewTextRow", [1, 2]);
    this.$store.dispatch("viewGallery", [1, 2]);
    this.$store.dispatch("viewContact", [1, 2]);
    this.$store.dispatch("viewSlider", [1, 2]);
  },
};
</script>
