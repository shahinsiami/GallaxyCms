<template>
  <section class="vpc_column_gallery startAnimiationColumnGallery d-flex flex-row justify-content-center">
    <div class="row w-100">
      <div class="col-2 vpc_title d-flex flex-row align-items-center justify-content-around">
        <h3 class="vpc_title_span d-flex flex-row align-items-center justify-content-around">گالری</h3>
      </div>
      <div class="col-10 vpc_column_gallery p-5 position-relative">
        <div class="d-flex flex-row justify-content-center align-items-center">
          <div class="vpc_gallery_tolbar">
            <button
              @click="changeGallery(item)"
              v-for="(item,index) in this.GalleryTitle"
              :key="index"
              class="btn"
            >{{item}}</button>
          </div>
        </div>
        <h4
          class="vpc_gallery_img_title py-2"
        >آنقدر که در شکست فرصت هست، در موفقیت نیست.من آنقدر شکست خوردم که فکر میکنم، هیچ ارتفاعی خطرناک نیست.</h4>

        <!--  -->
        <div class="row pt-3 pb-5 vpc_column_gallery_img">
          <div
            class="col-lg-4 col-md-6 col-12"
            v-for="(item,index) in this.galleryImage"
            :key="index"
          >
            <div class="vpc_gallery_pic">
              <img :src="item.image1" class="img-fluid" alt />
              <div class="vpc_gallery_hover">
                <div class="vpc_link">
                  <a @click="showFullImage(item.image1)" class="vpc_link_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.145 18.29c-5.042 0-9.145-4.102-9.145-9.145s4.103-9.145 9.145-9.145 9.145 4.103 9.145 9.145-4.102 9.145-9.145 9.145zm0-15.167c-3.321 0-6.022 2.702-6.022 6.022s2.702 6.022 6.022 6.022 6.023-2.702 6.023-6.022-2.702-6.022-6.023-6.022zm9.263 12.443c-.817 1.176-1.852 2.188-3.046 2.981l5.452 5.453 3.014-3.013-5.42-5.421z"/></svg>
                  </a>
                </div>
                <span>{{item.title1}}</span>
              </div>
            </div>
          </div>
        </div>
        <!--  -->

        <div class="vpc_title_category">
          <span>گالری</span>
        </div>
      </div>
    </div>
    <div
      @click="hideFullImage"
      v-if="this.showFullImageSelected"
      class="vpc_full_image d-flex flex-row justify-content-center align-items-center"
    >
      <div class="vpc_full_image_pic d-flex flex-row justify-content-center align-items-center">
        <img :src="this.showImage" class="vpc_full_image_height img-fluid" />
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
$color5: #343a40;
$color6: #000000;
$color7: #7a7a7a;
.vpc_column_gallery {
  direction: rtl;
  font-family: IranSans, sans-serif;
}
.vpc_title {
  @include font(faSans);
  position: relative;
  background-color: $color2;
}
.vpc_column_gallery {
  background-color: $color3;
}
.vpc_title_span {
  transform: rotate(90deg);
  font-size: 2.7em;
  white-space: nowrap;
  color: $color1;
}
.vpc_gallery_img_title {
  position: relative;
  color: $color7;
  text-align: center;
  @include font(faSans);
  font-weight: 600;
}
.vpc_gallery_img_title:after {
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
.vpc_gallery_tolbar {
  border-radius: 30px;
  -webkit-border-radius: 30px;
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  padding: 0 18px;
  margin-bottom: 65px;
  border: none;
  background: #fff;
}
.vpc_gallery_tolbar button {
  font-size: 14px;
  line-height: 14px;
  color: $color2;
  font-weight: 300;
  padding: 0 15px;
  text-transform: uppercase;
  transition: 0.3s;
  background: none;
  border-radius: 0;
  border-left: $color1 1px solid;
  margin: 13px 0;
}

.vpc_gallery_tolbar button:last-child {
  margin-right: 0;
  border-left: none;
}
.vpc_gallery_tolbar button:hover,
.vpc_gallery_tolbar button:focus {
  box-shadow: none;
  color: $color5;
}

.vpc_gallery_pic {
  position: relative;
  text-align: center;
  margin-bottom: 30px;
  overflow: hidden;
}
.vpc_gallery_pic img {
  position: relative;
}
.vpc_gallery_pic:after {
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.7);
  transition: 0.3s;
  opacity: 0;
}

/* project box hover info*/
.vpc_gallery_pic .vpc_gallery_hover {
  position: absolute;
  top: 0%;
  left: 0;
  width: 100%;
  transition: all 0.5s;
  color: $color1;
  opacity: 0;
  visibility: hidden;
  z-index: 1;
}
.vpc_gallery_pic .vpc_gallery_hover a {
  color: $color1;
}
.vpc_gallery_pic:hover .vpc_gallery_hover {
  top: 50%;
  transform: translate(0, -50%);
  opacity: 1;
  visibility: visible;
}
.vpc_gallery_pic:hover:after {
  opacity: 1;
}
.vpc_gallery_pic .vpc_gallery_hover a.vpc_link_icon {
  display: inline-block;
  vertical-align: top;
  width: 45px;
  height: 45px;
  line-height: 45px;
  margin: 0 2px;
  font-size: 18px;
  border-radius: 50%;
  -webkit-border-radius: 50%;
  text-align: center;
  color: $color2;
  background-color: $color1;
  transition: 0.3s;
  cursor: pointer;
}
.vpc_gallery_pic .vpc_gallery_hover a.vpc_link_icon:hover {
  background-color: $color3;
  color: $color1;
}
.vpc_link {
  margin-bottom: 10px;
}
.vpc_full_image {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: $color6;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 100 !important;
}
.vpc_full_image_pic {
  width: 80vw;
  height: 80vh;
}
.vpc_full_image_height {
  height: 80vh;
}
</style>
<script>
export default {
  name: "galleryUs",
  props: ["source"],
  data() {
    return {
      galleryImage: "",
      showFullImageSelected: false,
      showImage: "",
      galleryChangeAnimation: new this.$root.$data.gsapVpc.timeline(),
    };
  },
  computed: {
    GalleryTitle: {
      get() {
        const distinctName = [...new Set(this.source.map((x) => x.name))];
        return distinctName;
      },
    },
  },
  methods: {
    changeGallery(item) {
      this.galleryImage = this.source.filter((x) => {
        return x.name == item;
      });
        this.galleryChangeAnimation.from(".vpc_column_gallery_img", 1, { y:100});
    },
    showFullImage(item) {
      this.showImage = item;
      this.showFullImageSelected = true;
    },
      hideFullImage() {
      this.showFullImageSelected = false;
    },
  },
  mounted: function () {
    this.galleryImage = this.source.filter((x) => {
      return x.name == this.source[0].name;
    });
    ////////////////////////////////
    var vpcTitleText = new TimelineMax();
    vpcTitleText.from(".vpc_title_span", 5, { x: 1000 });
    const screanColumnGalleryTitleBackground = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationColumnGallery",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcTitleText]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcColumGalleryImg = new TimelineMax();
    vpcColumGalleryImg.from(".vpc_column_gallery_img", 5, {
      x: -500,
      opacity: 0,
    });
    const screanColumnGalleryPic = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationColumnGallery",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([
        vpcColumGalleryImg,
      ]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcColumntGalleryCategory = new TimelineMax();
    vpcColumntGalleryCategory.from(".vpc_title_category", 5, {
      x: -500,
      scale: 0,
    });
    const screanGalleryCategory = this.$scrollmagic
      .scene({
        triggerElement: ".vpc_title_category",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcColumntGalleryCategory]);
    ////////////////////////////////
    this.$scrollmagic.addScene([
      screanColumnGalleryPic,
      screanGalleryCategory,
      screanColumnGalleryTitleBackground,
    ]);
  },
};
</script>


