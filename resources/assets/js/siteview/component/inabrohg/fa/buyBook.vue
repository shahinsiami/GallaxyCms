<template>
  <section
    class="vpc_column_buybook startAnimiationThreeColumn d-flex flex-row justify-content-center"
  >
    <div class="row w-100">
      <div
        class="col-2 vpc_title d-flex flex-row align-items-center justify-content-around"
      >
        <h3
          class="vpc_three_column_title_span d-flex flex-row align-items-center justify-content-around"
        >
          فروش کتاب
        </h3>
      </div>
      <div class="col-10 vpc_three_column">
        <div class="row p-5 justify-content-center">
          <h2 class="vpc_buy_book_title py-4">
            دزدها کتاب نمی خوانند و کتابخوان ها دزدی نمی کنند.
          </h2>
        </div>
        <div class="row position-relative p-5">
          <div
            class="col-12 col-md-3 my-3"
            v-for="(item, index) in this.source"
            :key="index"
          >
            <div class="vpc_buybook_box">
              <div class="p-2">
                <img class="img-fluid" :src="item.image1" alt="" />
              </div>
              <div class="py-3">
                {{ item.name }}
                <br />
                <p>
                  {{ item.price }}
                </p>
                <p class="vpc_add_to_cart" @click="addToCart(item)">
                  اضافه کردن به سبد خرید
                </p>
              </div>
            </div>
          </div>
          <div class="vpc_three_column_title_category">
            <span> فروش کتاب </span>
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
$color5: #343a40;
$color6: #000000;
$color7: #7a7a7a;
$color8: #213452;
.vpc_column_buybook {
  direction: rtl;
  font-family: IranSans, sans-serif;
}
.vpc_title {
  @include font(faSans);
  position: relative;
  background-color: $color2;
}
.vpc_three_column {
  background-color: $color3;
}
.vpc_three_column_title_span {
  transform: rotate(90deg);
  font-size: 2.7em;
  white-space: nowrap;
  color: $color1;
}
.vpc_three_column_img_title {
  position: relative;
  color: $color2;
  text-align: center;
  @include font(faSans);
  font-weight: 600;
}
.vpc_three_column_img_title:after {
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
.vpc_three_column_title {
  position: absolute;
  bottom: 0;
  left: 3%;
}
.vpc_three_column_title span {
  color: $color4;
  font-size: 4.8em;
  font-weight: 600;
}

.vpc_buybook_box {
  background-color: $color4;
  text-align: center;
}
.vpc_buybook_box h6 {
  color: $color4;
  font-family: IranSans, sans-serif;
  font-weight: bold;
}
.vpc_buybook_box p {
  color: $color1;
  @include font(faSans);
  font-size: 15px;
}
.vpc_three_column_title_category {
  position: absolute;
  bottom: 0;
  left: 3%;
}
.vpc_three_column_title_category span {
  color: $color2;
  font-size: 4.8em;
  font-weight: 600;
}
.vpc_buy_book_title {
  position: relative;
  color: $color7;
  text-align: center;
  @include font(faSans);
  font-weight: 600;
}
.vpc_buy_book_title:after {
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
.vpc_add_to_cart {
  color: $color8 !important;
  cursor: pointer;
  &:hover {
    color: $color1 im !important;
  }
}
</style>
<script>
export default {
  name: "buyBook",
  props: ["source"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    addToCart(item) {
      console.log(item.pid)
      if (localStorage.getItem("product")) {
        const addproduct = [];
        let product = {
          pid: item.pid,
          color: item.id,
          size: item.size,
          guarantee: item.guarantee,
          count: 1,
        };
        let localStorageTemp = JSON.parse(localStorage.getItem("product"));
        for (var i = 0; i < localStorageTemp.length; i++) {
          addproduct.push(localStorageTemp[i]);
        }
        // addproduct.forEach(item => console.log(item.pid))
        if (!(addproduct.some(e => e.pid === item.pid))) {
      addproduct.push(product);
        localStorage.setItem("product", JSON.stringify(addproduct));
        this.$store.state.tempClient.shoppingLocalStore = addproduct
        }
      } else {
         const addproduct = [];
        let product = {
          pid: item.pid,
          color: item.color,
          size: item.size,
          guarantee: item.guarantee,
          count: 1,
        };
        addproduct.push(product);
        localStorage.setItem("product", JSON.stringify(addproduct));
          this.$store.state.tempClient.shoppingLocalStore = addproduct
      }
    },
  },
  mounted: function () {
    ////////////////////////////////
    var vpcTitleThreeColumnText = new TimelineMax();
    vpcTitleThreeColumnText.from(".vpc_three_column_title_span", 5, {
      x: 1000,
    });
    const screanThreeColumnitleBackground = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationThreeColumn",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcTitleThreeColumnText]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcThreeColumn = new TimelineMax();
    vpcThreeColumn.from(".vpc_buybook_box", 5, { y: 700, opacity: 0 });
    const screanThreeColumnSection = this.$scrollmagic
      .scene({
        triggerElement: ".startAnimiationThreeColumn",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcThreeColumn]);
    ////////////////////////////////
    ////////////////////////////////
    var vpcThreeColumnCategory = new TimelineMax();
    vpcThreeColumnCategory.from(".vpc_three_column_title_category", 5, {
      x: -500,
      scale: 0,
    });
    const screanThreeColumnCategoryTitle = this.$scrollmagic
      .scene({
        triggerElement: ".vpc_three_column",
        triggerHook: 1,
        duration: "100%",
      })
      .setTween([vpcThreeColumnCategory]);
    ////////////////////////////////
    this.$scrollmagic.addScene([
      screanThreeColumnCategoryTitle,
      screanThreeColumnitleBackground,
      screanThreeColumnSection,
    ]);
  },
};
</script>
