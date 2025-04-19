<template>
  <section >
      <div class="header-inner">

        <div class="d-flex flex-column justify-content-center align-items-center">
                <img class="logo-icon" src="img/database/ghorbani/static/business-logo.png" alt="exalt">
                <img class="mt-2" src="img/database/ghorbani/static/font.png" width="300px">
                <span class="logo-tagline" style="font-family: 'Iranian Sans';color: #163457;"> صفحه شخصی دکتر محمد قربانی</span>
        </div><!-- navbar-header -->
        <div>
            <ul class="my-2 vpc_slide_menu">
                <li v-for="(item,index) in source" :key="index" @click="scrollToHome(item.id)">{{item.name}}</li>
            </ul>
        </div>
    </div>
  </section>
</template>
<!---->
<style lang="scss" scoped>
$color1:#213452;
$color2:#1861d8;
.vpc_slide_menu{
  text-align: right;
  direction: rtl;
  @include font('faSans');
  li {
    color:$color1;
    cursor: pointer;
  }
  li:hover{
    color:$color2;
  }
}
</style>
<script>
export default {
  name: "sideMenu",
  props:['source'],
   data() {
    return {
      scrollTo: new this.$root.$data.gsapVpc.timeline(),
    };
  },
  methods:{
    scrollToHome(item){
    this.scrollTo.to('#siteview',0.5, {scrollTo: {y:'#'+item}});
    }
  }
  
};
</script>

