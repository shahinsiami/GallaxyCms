<template>
  <section class="vpc_column_textRow startAnimiationColumnTextRow d-flex flex-row justify-content-center">
    <div class="row w-100">
      <div class="col-2 vpc_title d-flex flex-row align-items-center justify-content-around">
        <h3
          class="vpc_title_span d-flex flex-row align-items-center justify-content-around"
        > {{this.source.title1}}</h3>
      </div>
      <div class="col-10 vpc_column_textRow p-5">
        <div class="row">
          
          <div class="col-12 px-5">
            <h2
              class="vpc_text_row py-2"
            >
            {{this.source.title2}}
            </h2>
            <p class="py-5 vpc_text" v-html="this.source.description">
            </p>
          </div>
            <div class="vpc_title_textRow_category">
            <span>
                     {{this.source.title3}}
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
$color5: #343a40;
$color6: #000000;
$color7: #7a7a7a;
.vpc_column_textRow {
  direction: rtl;
  font-family: IranSans, sans-serif;
}
.vpc_title {
  @include font(faSans);
  position: relative;
   background-color: $color2;
}
.vpc_column_textRow {
  background-color: $color3;
}
.vpc_title_span {
  transform: rotate(90deg);
  font-size: 2.7em;
  white-space: nowrap;
  color: $color1;
}
.vpc_text_row {
  position: relative;
  color: #7a7a7a;
  text-align: center;
  @include font(faSans);
  font-weight: 600;
}
.vpc_text_row:after {
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
  color: $color7;
  @include font(faSans);
  text-align: justify;
}
.vpc_title_textRow_category {
  position: absolute;
  bottom: 0;
  left: 3%;
}
.vpc_title_textRow_category span {
  color: $color2;
  font-size: 4.8em;
  font-weight: 600;
}
</style>
<script>
export default {
  name: "textRowUs",
  props: ["source"],
  data() {
    return {
    };
  },
  computed: {},
  mounted: function () {
       ////////////////////////////////
    var vpcTitleText = new TimelineMax();
    vpcTitleText.from(".vpc_title_span", 5, { x : 1000});
    const screanColumnTextRowTitleBackground = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationColumnTextRow",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcTitleText]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcColumTextRowImg = new TimelineMax();
    vpcColumTextRowImg.from(".vpc_column_textRow_img", 5, { x: -500, opacity: 0 });
    var vpcColumntTextRowTitle = new TimelineMax();
    vpcColumntTextRowTitle.from(".vpc_text_row", 5, { scale: 0 });
    var vpcColumntTextRowText = new TimelineMax();
    vpcColumntTextRowText.from(".vpc_text", 5, { x: 500, opacity: 0 });
    const screanColumnTextRowPic = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationColumnTextRow",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcColumTextRowImg, vpcColumntTextRowTitle, vpcColumntTextRowText]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcColumntTextRowCategory = new TimelineMax();
    vpcColumntTextRowCategory.from(".vpc_title_textRow_category", 5, { x: -500, scale: 0 });
    const screanTextRowCategory = this.$scrollmagic
      .scene({
        triggerElement: ".vpc_text_row",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcColumntTextRowCategory]);
    ////////////////////////////////
    this.$scrollmagic.addScene([screanColumnTextRowPic, screanTextRowCategory, screanColumnTextRowTitleBackground]);
  },
};
</script>

