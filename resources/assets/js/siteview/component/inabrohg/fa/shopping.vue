<template>
  <section class="vpc vpc_background">
    <div class="row justify-content-center text-center p-5">
      <div
        class="d-flex flex-column vpc_style_box justify-content-center text-center"
      >
        <div
          class="d-flex flex-column justify-content-center align-items-center my-2"
        >
          <img
            class="logo-icon"
            src="img/database/ghorbani/static/business-logo.png"
            alt="exalt"
          />
          <img
            class="mt-2"
            src="img/database/ghorbani/static/font.png"
            width="300px"
          />
          <span
            class="logo-tagline"
            style="font-family: 'Iranian Sans'; color: #163457"
          >
            سفارش خود را ثبت کنید</span
          >
        </div>
        <!-- navbar-header -->
        <!-- product -->
            <div
          class="d-flex flex-row p-2 justify-content-center align-items-center">
        <div v-for="(item,index) in this.source" :key="index">
          <img :src="item.product.image1" height="200px" class="img-fluid">
          <span  style="font-family: 'Iranian Sans';font-size:0.8em">{{item.price}} تومان</span>  
          <br>
          <span  style="font-family: 'Iranian Sans';font-size:0.8em"> {{item.price}}تومان تخفیف </span>  
        </div>
        </div>
        <!-- product -->
        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <input
            v-model="data.name"
            class="vpc_input w-100"
            type="text"
            placeholder="نام"
          />
        </div>
        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <input
            v-model="data.family"
            class="vpc_input w-100"
            type="text"
            placeholder="نام خانوادگی"
          />
        </div>
        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <listSelectorOptional
            class="vpc_listSelectorOptional w-100"
            listSource="gender"
            listName="جنسیت"
            selectedItem="name"
            :getSource="this.$store.state.general.sex"
            @selectid="data.sex = $event.id"
            :lastValue="data.sex"
          ></listSelectorOptional>
        </div>
        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <vpcDatePicker
            class="vpc_datepicker"
            inputTitle="تاریخ تولد"
            v-model="data.birthday"
          ></vpcDatePicker>
        </div>
        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <listSelectorOptional
            listSource="edu"
            class="vpc_listSelectorOptional"
            selectedItem="name"
            listName="تحصیلات"
            :getSource="this.$store.state.general.degree"
            @selectid="data.degree = $event.id"
            :lastValue="data.degree"
          ></listSelectorOptional>
        </div>

        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <listSelector
            selectedItem="name"
            listName="استان"
            listSource="allStateForClient"
            :getSource="this.$store.state.clientAddress.allStateForClient"
            :lastValue="data.area_state_id"
            @selectid="
              data.area_state_id = $event.id;
              data.state = $event.name;
            "
          ></listSelector>
        </div>
        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <listSelectorBySelection
            selectedItem="name"
            listName="شهر"
            listSource="allCityForClient"
            :getSource="this.$store.state.clientAddress.selectCityForClient"
            :lastValue="data.area_state_id"
            @selectid="
              data.area_city_id = $event.id;
              data.city = $event.name;
            "
            selectionList="selectCityForClient"
            :selectionId="data.area_state_id"
            :getAllSource="this.$store.state.clientAddress.allCityForClient"
          ></listSelectorBySelection>
        </div>
        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <listSelectorBySelection
            selectedItem="name"
            listName="منطقه"
            listSource="allZoneForClient"
            :getSource="this.$store.state.clientAddress.selectZoneForClient"
            :lastValue="data.area_state_id"
            @selectid="
              data.area_zone_id = $event.id;
              data.zone = $event.name;
            "
            selectionList="selectZoneForClient"
            :selectionId="data.area_city_id"
            :getAllSource="this.$store.state.clientAddress.allZoneForClient"
          ></listSelectorBySelection>
        </div>

        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <input
            v-model="data.postcode"
            class="vpc_input w-100"
            type="text"
            placeholder="کدپستی"
          />
        </div>

        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <input
            v-model="data.phonenumber"
            class="vpc_input w-100"
            type="number"
            placeholder="شماره همراه"
          />
        </div>

        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <input
            v-model="data.superscription"
            class="vpc_input w-100"
            type="text"
            placeholder="آدرس"
          />
        </div>

        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <input
            v-model="data.email"
            class="vpc_input w-100"
            type="email"
            placeholder="پست الکترونیکی"
          />
        </div>
        <div
          class="d-flex flex-row p-2 justify-content-center align-items-center"
        >
          <input
            v-model="data.description"
            class="vpc_input w-100"
            type="text"
            placeholder="توضیحات"
          />
        </div>

        <!-- captcha -->
        <div class="p-2 my-2">
          <input
            class="vpc_input text-right"
            type="text"
            placeholder="عبارت زیر را وارد فرمایید"
            v-model="vcaptcha.value"
          />
        </div>
        <div class="p-2 my-2">
          <div class="p-0 d-flex flex-row justify-content-center">
            <div class="captcha-background w-75 position-relative">
              <div
                class="w-100 d-flex flex-row justify-content-center align-item-center captcha"
                oncopy="return false"
                oncut="return false"
                unselectable="on"
                onselectstart="return false;"
                onmousedown="return false;"
              >
                {{ this.captcha }}
              </div>
              <img
                @click="refreshcaptcha"
                src="photo/module/Panel/login/reload.svg"
                class="reload_captcha"
                style="width: 20px; height: 20px"
                alt="vira"
              />
            </div>
          </div>
        </div>

        <!-- captcha -->
        <div
          v-if="vcaptcha.captchaError"
          class="d-flex flex-row w-100 justify-content-center vpc_notify_error"
        >
          عبارت فوق را صحیح وارد فرمایید
        </div>

        <div class="p-2 py-5">
          <button @click="tempShoppingWithRegisterTempClient" class="vpc_btn">خرید</button>
        </div>
      </div>
    </div>
  </section>
</template>
<!---->
<style lang='scss' scoped>
$color1: #213452;
$color2: #cfd8dc;
.vpc_background {
  background-color: $color1;
}
.vpc {
  direction: rtl;
  font-family: "IRANSans", sans-serif;
}
.vpc_style_box {
  width: 70%;
  /*height: 450px; */
  border: solid 1px #cfd8dc;
  box-shadow: 0 3px 8px 0 #cfd8dc;
  background-color: $color2;
}
.vpc_input {
  border: solid 1px #cfd8dcc0;
  font-size: 0.8em;
  font-weight: 600;
  padding: 10px;
  outline: none;
}

.vpc_btn {
  height: 40px;
  line-height: 38px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  padding: 0 15px;
  font-weight: 600;
  color: #fff;
  background: $color1;
  border: none;
  border-radius: 3px;
  width: 100%;
  margin-top: 5px;
  outline: none;
}

.vpc_btn:hover {
  background-color: #e0e0e0;
  color: #535353;
  box-shadow: 2px 1px 11px 2px rgba(0, 0, 0, 0.1);
}
.vpc_btn:active {
  background-color: #e0e0e0;
  color: #535353;
}

.vpc_style_login_box {
  width: 400px;
  height: 70px;
  border: solid 1px #cfd8dc;
  box-shadow: 0 3px 8px 0 #cfd8dc;
}

.vpc_strong_text {
  color: #ffa000;
  cursor: pointer;
  padding-right: 7px;
}
.vpc_text {
  font-size: 0.8em;
  font-weight: 600;
  color: #535353;
}
.captcha {
  color: #37474f !important;
  font-size: 1.2em;
  transform: skew(50deg);
  font-weight: bold;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.captcha-background {
  height: 40px;
  border-radius: 10px;
  background-image: linear-gradient(
      45deg,
      rgba(112, 107, 109, 0.18) 25%,
      transparent 25%
    ),
    linear-gradient(135deg, rgba(112, 107, 109, 0.18) 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, rgba(112, 107, 109, 0.18) 75%),
    linear-gradient(135deg, transparent 75%, rgba(112, 107, 109, 0.18) 75%);
  background-size: 25px 25px; /* Must be a square */
  background-position: 0 0, 12.5px 0, 12.5px -12.5px, 0px 12.5px; /* Must be half of one side of the square */
}
.reload_captcha {
  position: absolute;
  left: 0px;
  top: 10px;
}
.vpc_listSelectorOptional {
  font-size: 0.9em;
  font-weight: 800;
}
.vpc_datepicker inputTitle {
  font-size: 0.8em;
  font-weight: 900;
}
</style>
<script>
export default {
  name: "register",
  props:['source'],
  components: {
    listSelectorOptional: require("../../general/vpcListSelectorOptional")
      .default,
    listSelectorBySelection: require("../../general/vpcListSelectorBySelection")
      .default,
        listSelector: require("../../general/vpcListSelector")
      .default,
    vpcDatePicker: require("../../general/vpcDatePicker").default,
  },
  data() {
    return {
      showNotify: false,
      type: "",
      title: "",
      message: "",
      vcaptcha: {
        value: "",
        newcaptcha: 1,
        captchaError: false,
      },
      data: {
        name: "",
        family: "",
        birthday: "",
        superscription: "",
        state: "",
        city: "",
        zone: "",
        postcode: "",
        area_state_id: "",
        area_city_id: "",
        area_zone_id: "",
        sex: "",
        degree: "",
        email: "",
        description: "",
        phonenumber: "",
        product: this.$store.state.tempClient.shoppingLocalStore
      },
    };
  },
  methods: {
    refreshcaptcha() {
      this.vcaptcha.newcaptcha = Math.random() * 10;
    },
    tempShoppingWithRegisterTempClient() {
      if (this.captcha == this.vcaptcha.value) {
        axios
          .post("/api/v1/tempShoppingWithRegisterTempClient", this.data)
          .then((response) => {
            (this.type = response.data.type),
              (this.title = response.data.title);
            this.message = Object.values(response.data.text)[0][0];
            this.showNotify = true;
            if (response.data.type != "error") {
              this.$router.push({ path: "/" });
                localStorage.clear();
            }
          })
          .catch((error) => {});
      } else {
        this.vcaptcha.captchaError = true;
      }
    },
  },
  watch: {},
  computed: {
    captcha: {
      get() {
        var randomvalue = Math.floor(
          Math.random() *
            100000 *
            (Math.random() * 10 * this.vcaptcha.newcaptcha) +
            1
        );
        return randomvalue;
      },
    },
  },
  mounted: function () {},
  beforeCreate() {},
};
</script>

