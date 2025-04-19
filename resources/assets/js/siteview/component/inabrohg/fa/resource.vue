<template>
   <section class="vpc_column_resource startAnimiationManySectionTwoColumn d-flex flex-row justify-content-center">
    <div class="row w-100">
      <div class="col-2 vpc_title d-flex flex-row align-items-center justify-content-around">
        <h3
          class="vpc_manySectionTwo_column_title_span d-flex flex-row align-items-center justify-content-around"
        >منابع</h3>
      </div>
      <div class="col-10 vpc_manySectionTwo_column">
        <div class="row  p-3 justify-content-center">
          <h2 class=" vpc_resource_title py-4">بزرگترین مهارت من این بود که دانش پذیر بودم.</h2>
        </div>
      <div class="row position-relative p-5">
        <div class="col-12 col-md-3 mb-5 p-2" v-for="(item,index) in this.source" :key="index">
          <div class="vpc_resource_box">
              <div class="p-2 ">
                <!-- <img  class="img-fluid" :src="item.image1" height="70px" width="120px" alt=""> -->
                </div>
              <div class="py-2">
                <h6>

                <a :href="item.link" style="color: #536b8c;">{{item.title1}}</a>
                  
                </h6>
              
                  <br>
                  <p class="py-2"> 
                    {{item.description}}
                  </p>
                  <br>
                  <img src="/img/database/ghorbani/star.png" width="10px" height="10px" alt="">
                  <img src="/img/database/ghorbani/star.png" width="10px" height="10px" alt="">
                  <img src="/img/database/ghorbani/star.png" width="10px" height="10px" alt="">
                  <img src="/img/database/ghorbani/star.png" width="10px" height="10px" alt="">
                  <img src="/img/database/ghorbani/star.png" width="10px" height="10px" alt="">
              </div>
          </div>
        </div>

             <div class="vpc_manySectionTwo_column_title_category">
            <span>
                     منابع
              </span>
          </div>


              <!-- <div class=" vpc_manySectionTwo_column_title_category py-5">
        <div class="pt-5">

            <span> منابع </span>
        </div>
          </div> -->

      </div>
      </div>
    </div>
  </section>
</template>
<!---->
<style lang="scss" scoped>
$color1: #ffffff;
$color2: #7a7a7a;
$color3: #e0e0e0;
$color4: #d0d0d0;
$color5: #7a7a7a;

.vpc_column_resource {
  direction: rtl;
  font-family: IranSans, sans-serif;
}
.vpc_title {
  @include font(faSans);
  position: relative;
   background-color: $color2;
}
.vpc_manySectionTwo_column {
  background-color: $color3;
}
.vpc_manySectionTwo_column_title_span {
  transform: rotate(90deg);
  font-size: 2.7em;
  white-space: nowrap;
  color: $color1;
}
.vpc_manySectionTwo_column_img_title {
  position: relative;
  color: $color2;
  text-align: center;
  @include font(faSans);
  font-weight: 600;
}
.vpc_manySectionTwo_column_img_title:after {
  position: absolute;
  content: "";
  left: 50%;
  bottom: 0;
  width: 70px;
  height: 3px;
  background: $color1;
  justify-content: center;
  text-align: center;
}
.vpc_text {
  padding-bottom: 15px;
  position: relative;
  color: $color1;
  @include font(faSans);
  text-align: justify;
}
.vpc_manySectionTwo_column_title {
  position: absolute;
  bottom: 0;
  left: 3%;
}
.vpc_manySectionTwo_column_title span {
  color: $color4;
  font-size: 4.8em;
  font-weight: 600;
}

.vpc_resource_box{
  background-color:$color4 ;
  text-align: center;
}
.vpc_resource_box h6{
  color:$color4;
  font-family: IranSans,sans-serif;
  font-weight: bold;
}
.vpc_resource_box p{
  color:$color1;
 @include font(faSans);
  font-size: 15px;
}
.vpc_manySectionTwo_column_title_category {
  position: absolute;
  bottom: 0;
  left: 3%;
}
.vpc_manySectionTwo_column_title_category span {
  color: $color2;
  font-size: 4.8em;
  font-weight: 600;
}
.vpc_resource_title {
  position: relative;
  color: $color5;
  text-align: center;
  @include font(faSans);
  font-weight: 600;
}
.vpc_resource_title:after {
    position: absolute;
    content: "";
    left: 50%;
    bottom: 0;
    width: 70px;
    height: 3px;
    background: #ffffff;
    justify-content: center;
    text-align: center;
}

</style>
<script>
export default {
  name: "resource",
  props: ["source"],
  data() {
    return {

    };
  },
  computed: {},
  mounted: function () {
       ////////////////////////////////
    var vpcTitleManySectionTwoColumnText = new TimelineMax();
    vpcTitleManySectionTwoColumnText.from(".vpc_manySectionTwo_column_title_span", 5, { x : 1000});
    const screanManySectionTwoColumnitleBackground = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationManySectionTwoColumn",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcTitleManySectionTwoColumnText]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcManySectionTwoColumn = new TimelineMax();
    vpcManySectionTwoColumn.from(".vpc_resource_box", 5, { y: 700, opacity: 0 });
    const screanManySectionTwoColumnSection = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationManySectionTwoColumn",
        triggerHook: 1,
        duration: "150%",
      })
      .setTween([vpcManySectionTwoColumn]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcManySectionTwoColumnCategory = new TimelineMax();
    vpcManySectionTwoColumnCategory.from(".vpc_manySectionTwo_column_title_category", 5, { x: -500, scale: 0 });
    const screanManySectionTwoColumnCategoryTitle = this.$scrollmagic
      .scene({
        triggerElement: ".vpc_manySectionTwo_column",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcManySectionTwoColumnCategory]);
    ////////////////////////////////
    this.$scrollmagic.addScene([screanManySectionTwoColumnCategoryTitle,screanManySectionTwoColumnitleBackground,screanManySectionTwoColumnSection]);
  },
};
</script>


