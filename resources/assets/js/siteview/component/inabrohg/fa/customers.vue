<template>
   <section class="vpc_column_resource startAnimiationManySectionThreeColumn d-flex flex-row justify-content-center">
    <div class="row w-100">
      <div class="col-2 vpc_title d-flex flex-row align-items-center justify-content-around">
        <h3
          class="vpc_manySectionThree_column_title_span d-flex flex-row align-items-center justify-content-around"
        >مشتریان</h3>
      </div>
      <div class="col-10 vpc_manySectionThree_column">
      <div class="row position-relative p-5">
        <div class="col-12 col-md-3 my-3" v-for="(item,index) in this.source" :key="index">
          <div class="vpc_costumer_box">
              <div><img  class="img-fluid" :src="item.image1" alt=""></div>
              <div class="py-2">
                  {{item.title1}}
                  <!-- <p> 
                    {{item.description}}
                  </p> -->
              </div>
          </div>
        </div>
             <div class="vpc_manySectionThree_column_title_category">
            <span>
            مشتریان
              </span>
          </div>
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
.vpc_column_resource {
  direction: rtl;
  font-family: IranSans, sans-serif;
}
.vpc_title {
  @include font(faSans);
  position: relative;
   background-color: $color2;
}
.vpc_manySectionThree_column {
  background-color: $color3;
}
.vpc_manySectionThree_column_title_span {
  transform: rotate(90deg);
  font-size: 2.7em;
  white-space: nowrap;
  color: $color1;
}
.vpc_manySectionThree_column_img_title {
  position: relative;
  color: $color2;
  text-align: center;
  @include font(faSans);
  font-weight: 600;
}
.vpc_manySectionThree_column_img_title:after {
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
.vpc_manySectionThree_column_title {
  position: absolute;
  bottom: 0;
  left: 3%;
}
.vpc_manySectionThree_column_title span {
  color: $color4;
  font-size: 4.8em;
  font-weight: 600;
}

.vpc_costumer_box{
  background-color:$color4 ;
  text-align: center;
}
.vpc_costumer_box h6{
  color:$color4;
  font-family: IranSans,sans-serif;
  font-weight: bold;
}
.vpc_costumer_box p{
  color:$color1;
 @include font(faSans);
  font-size: 15px;
}
.vpc_manySectionThree_column_title_category {
  position: absolute;
  bottom: 0;
  left: 3%;
}
.vpc_manySectionThree_column_title_category span {
  color: $color2;
  font-size: 4.8em;
  font-weight: 600;
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
    var vpcTitleManySectionThreeColumnText = new TimelineMax();
    vpcTitleManySectionThreeColumnText.from(".vpc_manySectionThree_column_title_span", 5, { x : 1000});
    const screanManySectionThreeColumnitleBackground = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationManySectionThreeColumn",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcTitleManySectionThreeColumnText]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcManySectionThreeColumn = new TimelineMax();
    vpcManySectionThreeColumn.from(".vpc_costumer_box", 5, { y: 700, opacity: 0 });
    const screanManySectionThreeColumnSection = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationManySectionThreeColumn",
        triggerHook: 1,
        duration: "150%",
      })
      .setTween([vpcManySectionThreeColumn]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcManySectionThreeColumnCategory = new TimelineMax();
    vpcManySectionThreeColumnCategory.from(".vpc_manySectionThree_column_title_category", 5, { x: -500, scale: 0 });
    const screanManySectionThreeColumnCategoryTitle = this.$scrollmagic
      .scene({
        triggerElement: ".vpc_manySectionThree_column",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcManySectionThreeColumnCategory]);
    ////////////////////////////////
    this.$scrollmagic.addScene([screanManySectionThreeColumnCategoryTitle,screanManySectionThreeColumnitleBackground,screanManySectionThreeColumnSection]);
  },
};
</script>


