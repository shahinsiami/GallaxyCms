<template>
  <section class="vpc_column_about startAnimiationColumnAbout d-flex flex-row justify-content-center">
    <div class="row w-100">
      <div class="col-2 vpc_title d-flex flex-row align-items-center justify-content-around">
        <h3
          class="vpc_title_about_span d-flex flex-row align-items-center justify-content-around"
        > {{this.source.title1}}</h3>
      </div>
      <div class="col-10 vpc_column_about p-5">
        <div class="row">
          <div class="col-md-4">
            <img class="vpc_column_about_img" :src="this.source.image1" alt />
          </div>
          <div class="col-md-8 px-5">
            <h2
              class="vpc_about_img_title py-2"
            >
            {{this.source.title2}}
            </h2>
            <p v-html="this.source.description" class="py-5 vpc_text">
                  
            </p>
          </div>
            <div class="vpc_title_category">
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
$color2: #aeaeae;
$color3: #c0c0c0;
$color4: #d0d0d0;
.vpc_column_about {
  direction: rtl;
  font-family: IranSans, sans-serif;
  background-color: $color3;
}
.vpc_title {
  @include font(faSans);
  position: relative;
   background-color: $color2;
}
.vpc_title_about_span {
  transform: rotate(90deg);
  font-size: 2.7em;
  white-space: nowrap;
  color: $color1;
}
.vpc_about_img_title {
  position: relative;
  color: #7a7a7a;
  text-align: center;
  @include font(faSans);
  font-weight: 600;
}
.vpc_about_img_title:after {
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
.vpc_title_category {
  position: absolute;
  bottom: 0;
  left: 3%;
}
.vpc_title_category span {
  color: $color4;
  font-size: 4.8em;
  font-weight: 600;
}
</style>
<script>
export default {
  name: "aboutUs",
  props: ["source"],
  data() {
    return {
    };
  },
  computed: {},
  mounted: function () {
       ////////////////////////////////
    var vpcTitleText = new TimelineMax();
    vpcTitleText.from(".vpc_title_about_span", 5, { x : 1000});
    const screanColumnAboutTitleBackground = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationColumnAbout",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcTitleText]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcColumAboutImg = new TimelineMax();
    vpcColumAboutImg.from(".vpc_column_about_img", 5, { x: -500, opacity: 0 });
    var vpcColumntAboutTitle = new TimelineMax();
    vpcColumntAboutTitle.from(".vpc_about_img_title", 5, { scale: 0 });
    var vpcColumntAboutText = new TimelineMax();
    vpcColumntAboutText.from(".vpc_text", 5, { x: 500, opacity: 0 });
    const screanColumnAboutPic = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationColumnAbout",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcColumAboutImg, vpcColumntAboutTitle, vpcColumntAboutText]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcColumntAboutCategory = new TimelineMax();
    vpcColumntAboutCategory.from(".vpc_title_category", 5, { x: -500, scale: 0 });
    const screanAboutCategory = this.$scrollmagic
      .scene({
        triggerElement: ".vpc_about_img_title",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcColumntAboutCategory]);
    ////////////////////////////////
    this.$scrollmagic.addScene([screanColumnAboutPic, screanAboutCategory, screanColumnAboutTitleBackground]);
  },
};
</script>

