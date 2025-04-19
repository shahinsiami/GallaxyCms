<template>
  <section>
    <div>
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li
            @click="changeSliderImage(index)"
            v-for="(item,index) in this.source"
            :key="index"
            v-bind:class="[ index == sliderIndex ? 'active' : ' ']"
          ></li>
        </ol>
        <div class="carousel-inner slider-img">
          <div
            class="carousel-item"
            v-for="(item,index) in this.source"
            :key="index"
            v-bind:class="[ index == sliderIndex ? 'active' : ' ']"
          >
            <img class="img-fluid w-100 vpc_slide_animation " :src="item.image1"  alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h3 class="pb-3">{{item.title1}}</h3>
              <p>{{item.description}}</p>
              <!-- <button class="btn">تماس با ما</button>
              <button class="btn">خرید محصولات</button>-->
            </div>
          </div>
        </div>

        <a class="carousel-control-prev"  @click="changeSliderPrevious">
          <span class="carousel-control-prev-icon"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" @click="changeSliderNext">
          <span class="carousel-control-next-icon"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </section>
</template>
<!---->
<style scoped>
body{
    font-family: IranSans, sans-serif;

}
carousel-caption h3 {
  font-family: IranSans, sans-serif;
}
carousel-caption p {
  font-family: IranSans, sans-serif;
}
.btn {
  background-color: #5c5c5c;
  color: #fff;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  padding: 20px 25px;
  font-family: IranSans, sans-serif;
}

.btn:hover {
  background-color: #fff;
  color: #5c5c5c;
}
.carousel-inner{
  background-color: #000000;
}

.slider-img {
    /* width: 100%; */
    /* height: 100vh; */
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
}
.slider-img:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(74, 74, 74, 0.7);
    z-index: 2;
}
.carousel-control-prev{
  z-index: 5;
}
.carousel-control-next{
    z-index: 5;
}
</style>
<script>
export default {
  name: "service",
  props: ["source"],
  data() {
    return {
      sliderIndex: 0,
            vpcSlider: new this.$root.$data.gsapVpc.timeline(),
    };
  },
  methods: {
    changeSliderImage(index) {
      this.sliderIndex = index;
       this.vpcSlider.from(".vpc_slide_animation", 1, { x: 1000});
        this.vpcSlider.from(".vpc_slide_animation", 1.5, { scale: 1.4});
    },
    changeSliderNext() {
        if(this.sliderIndex + 1 < this.source.length){
        this.sliderIndex = this.sliderIndex + 1
         this.vpcSlider.from(".vpc_slide_animation", 1, {x: 1000 });
          this.vpcSlider.from(".vpc_slide_animation", 1.5, { scale: 1.4});
      }
    },
    changeSliderPrevious() {
      if(this.sliderIndex - 1 >= 0){
        this.sliderIndex = this.sliderIndex - 1
         this.vpcSlider.from(".vpc_slide_animation", 1, {x: 1000 });
          this.vpcSlider.from(".vpc_slide_animation", 1.5, { scale: 1.4});
      }
    },
  },
};
</script>


