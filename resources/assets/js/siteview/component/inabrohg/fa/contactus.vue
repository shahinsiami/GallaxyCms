<template>
  <section class="vpc_contact d-flex flex-row justify-content-center">
    <div class="row w-100">
      <div class="col-2 vpc_title d-flex flex-row align-items-center justify-content-around">
        <h3
          class="vpc_footer_column_title_span d-flex flex-row align-items-center justify-content-around"
        >تماس با ما</h3>
      </div>
      <div class="col-12 col-md-10 vpc_contact_leftSec vpc_contact_img_title p-5">
        <h4>اطلاعات تماس</h4>
        <div class="row pt-3 text-center">
          <div class="col-12 col-md-4" v-if="this.source.find(item => { return item.type == 4 })" >
            <div>
              <img class="p-1 vpc_contact_icon border" :src=" this.source.filter(item => { return item.type == 4 })[0].image1 "  alt />
            </div>
            <div class="pt-4">
              <h5> {{ this.source.filter(item => { return item.type == 4 })[0].title1 }} </h5>
            </div>
            <div>
              <span v-html=" this.source.filter(item => { return item.type == 4 })[0].description" ></span>
            </div>
          </div>
          <div class="col-12 col-md-4" v-if="this.source.find(item => { return item.type == 2 })" >
            <div>
              <img class="p-1 vpc_contact_icon border" :src=" this.source.filter(item => { return item.type == 2 })[0].image1 " alt />
            </div>
            <div class="pt-4">
              <h5> {{ this.source.filter(item => { return item.type == 2 })[0].title1 }} </h5>
            </div>
            <div class="vpc_contact_mail">
              <span v-html=" this.source.filter(item => { return item.type == 2 })[0].description" ></span>
            </div>
          </div>

          <div class="col-12 col-md-4" v-if="this.source.find(item => { return item.type == 0 })" >
            <div>
              <img class="p-1 vpc_contact_icon border" :src=" this.source.filter(item => { return item.type == 0 })[0].image1 "  alt />
            </div>
            <div class="pt-4">
              <h5> {{ this.source.filter(item => { return item.type == 0 })[0].title1 }} </h5>
            </div>
            <div>
              <span v-html=" this.source.filter(item => { return item.type == 0 })[0].description" ></span>
            </div>
          </div>
        </div>
        <div class="row py-5 text-center">
          <div class="col-12 col-md-6"  >
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3240.4488147594557!2d51.458969615034015!3d35.690571580191964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z2KrZh9ix2KfZhi0g2K7bjNin2KjYp9mGINm-24zYsdmI2LLbjC3YrtuM2KfYqNin2YYg2b7YsdmI2KfYsi3aqdmI2obZhyDYp9mB2LTYp9ixLdm-2YTYp9qp27E!5e0!3m2!1sen!2sus!4v1606128554511!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          <!-- <div class="col-12 col-md-6" v-if="this.source.find(item => { return item.type == 3 })" >
            <iframe
              :src=" this.source.filter(item => {
                                    return item.type == 3
                                })[0].description"
              width="600"
              height="450"
              frameborder="0"
              style="border:0;"
              allowfullscreen
              aria-hidden="false"
              tabindex="0"
            ></iframe> -->
          </div>
          <div class="col-12 col-md-6">
            <div class="vpc_contact_form">
              <h2>یک پیام بفرستید</h2>
            </div>
            <div>
              <input
                v-model="data.name"
                type="text"
                placeholder="نام"
                required
                class="vpc_contact_form_input border-bottom"
              />
              <input
                v-model="data.family"
                type="text"
                placeholder="نام خانوادگی"
                required
                class="vpc_contact_form_input border-bottom"
              />
              <input
                v-model="data.title"
                type="text"
                placeholder="موضوع"
                required
                class="vpc_contact_form_input border-bottom"
              />
              <textarea
                v-model="data.openion"
                placeholder="پیام"
                class="vpc_contact_form_input border-bottom"
              ></textarea>
              <button @click="submit" class="vpc_contact_btn">ارسال</button>
            </div>
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
.vpc_title {
  @include font(faSans);
  position: relative;
  background-color: $color2;
}
.vpc_footer_column {
  background-color: $color3;
}
.vpc_footer_column_title_span {
  transform: rotate(90deg);
  font-size: 2.7em;
  white-space: nowrap;
  color: $color1;
}

.vpc_contact {
  direction: rtl;
  font-family: IranSans, sans-serif;
}
.vpc_contactTitle {
  background-color: rgb(172, 172, 172);
  font-family: IranSans, sans-serif;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.vpc_contact_leftSec {
  background-color: #c0c0c0;
}
.vpc_contactTitle_span {
  transform: rotate(90deg);
  font-size: 55px;
  line-height: 55px;
  position: absolute;
  white-space: nowrap;
  width: 0;
  top: 180px;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-weight: 800;
  text-transform: uppercase;
  color: #ffffff;
}
.vpc_contact_img_title h4 {
  padding-bottom: 25px;
  position: relative;
  color: #ffffff;
  text-align: center;
  font-family: IranSans, sans-serif;
  font-weight: 600;
}
.vpc_contact_img_title h4:after {
  position: absolute;
  content: "";
  left: 47%;
  bottom: 0;
  width: 70px;
  height: 3px;
  background: #fff;
  justify-content: center;
  text-align: center;
}
.vpc_contact_img_title h5 {
  padding-bottom: 25px;
  position: relative;
  color: #ffffff;
  text-align: center;
  font-family: IranSans, sans-serif;
  font-weight: 600;
}
.vpc_contact_img_title span {
  padding-bottom: 25px;
  position: relative;
  color: #ffffff;
  text-align: center;
  font-family: IranSans, sans-serif;
}
.vpc_contact_form h2 {
  padding-bottom: 25px;
  position: relative;
  color: #ffffff;
  text-align: right;
  font-family: IranSans, sans-serif;
}
.vpc_contact_img_title h2:after {
  position: absolute;
  content: "";
  right: 7%;
  bottom: 0;
  width: 70px;
  height: 3px;
  background: #fff;
  justify-content: center;
  text-align: center;
}

.vpc_contact_form_input {
  margin-bottom: 20px;
  font: 15px/31px IranSans, sans-serif;
  color: #ffffff;
  padding: 11px 20px;
  height: auto;
  box-shadow: none;
  text-align: right;
  width: 100%;
  border: none;
  background-color: inherit;
}
.vpc_contact_btn {
  color: #dfdfdf;
  background: #5c5c5c;
  font-family: IranSans, sans-serif;
  display: block;
  width: 100%;
  height: 55px;
  border: none;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  font-weight: 800;
  padding: 0 15px;
  cursor: pointer;
}
.vpc_contact_icon {
    height: 40px;
    width:40px;
    text-align: center;
    border-radius: 50%;
    transition: 0.3s;
}
.vpc_contact_mail span p a{
      color: #dfdfdf;

}
</style>
<script>
export default {
  name: "contact",
  props: ["source"],
  data() {
    return {
      data: {
        name: "",
        family: "",
        title: "",
        openion: "",
      },
    };
  },
  computed: {},
  methods: {
    submit() {
      const form = new FormData();
      for (const item in this.data) {
        form.append(item, this.data[item]);
      }
      axios.defaults.headers.common["Authorization"] =
        "Bearer " +
        (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
          ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
          : null);
      axios
        .post("/api/v1/registerOpinion", form)
        .then((response) => {
          this.data.name = "";
          this.data.family = "";
          this.data.title = "";
          this.data.openion = "";
        })
        .catch((error) => {});
    },
  },
  mounted: function () {},
};
</script>

