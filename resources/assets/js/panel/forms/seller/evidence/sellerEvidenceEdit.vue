<template>
  <div class="content">
    <div class="row p-2">
      <div class="col-6 d-flex flex-row justify-content-center align-items-center">
        <editBtn
          @needRefresh="this.refresh"
          :responseDispatch="this.edit.response"
          :axiosUrl="this.edit.axiosUrl"
          :formData="this.data"
          :buttonTitle="this.edit.buttonTitle"
        ></editBtn>
      </div>
      <div class="col-6">
        <windowHeader :windowTitle="this.window.title" :windowTitleLine="this.window.titleLine"></windowHeader>
      </div>
    </div>
    <div v-if="lastId == '' || !this.refreshPage" class="vpc_loader">
      <div class="vpc_loader_img">
        <img width="300" height="300" src="photo/module/Panel/forms/loader.gif" />
      </div>
    </div>
    <div v-if="lastId !== '' && this.refreshPage" class="container-fluid">
      <div style="direction:rtl">
        <div class="row">
          <div class="d-flex flex-row w-100 justify-content-start align-items-center vpc_nav">
            <div
              @click="showTab1"
              v-bind:class="[this.tab1 ? 'vpc_nav_item_selected' : '']"
              class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
            >مشخصات فروشگاه</div>
            <div
              @click="showTab2"
              v-bind:class="[this.tab2 ? 'vpc_nav_item_selected' : '']"
              class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
            >آدرس</div>
            <div
              @click="showTab3"
              v-bind:class="[this.tab3 ? 'vpc_nav_item_selected' : '']"
              class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
            >مشخصات ثبتی</div>
            <div
              @click="showTab4"
              v-bind:class="[this.tab4 ? 'vpc_nav_item_selected' : '']"
              class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
            >ضمایم</div>
          </div>
        </div>
        <!---->
        <div class="row" v-bind:class="[this.tab1 ? '' : 'vpc_nav_item_selected_form']">
          <singleInput type="text" inputTitle="نام فروشگاه" v-model="data.storename"></singleInput>
          <singleInput type="text" inputTitle="نوع فروشگاه" v-model="data.type"></singleInput>
          <singleInput type="text" inputTitle="مالک فروشگاه" v-model="data.owner"></singleInput>
          <singleInput type="text" inputTitle="کارت بانکی" v-model="data.cardnumber"></singleInput>
          <listSelector
            selectedItem="name"
            listName="مجموعه"
            listSource="cropCategoryForSellerEvidence"
            :getSource="this.$store.state.formSellerEvidence.cropCategoryForSellerEvidence"
            :lastValue="data.crop_category_id"
            @selectid=" data.crop_category_id = $event.id "
          ></listSelector>
        </div>
        <div class="row" v-bind:class="[this.tab2 ? '' : 'vpc_nav_item_selected_form']">
          <listSelector
            selectedItem="name"
            listName="استان"
            listSource="allStateForEvidence"
            :getSource="this.$store.state.formSellerEvidence.allStateForEvidence"
            :lastValue="data.area_state_id"
            @selectid=" data.area_state_id = $event.id "
          ></listSelector>
          <listSelectorBySelection
            selectedItem="name"
            listName="شهر"
            listSource="allCityForEvidence"
            :getAllSource="this.$store.state.formSellerEvidence.allCityForEvidence"
            :lastValue="data.area_city_id"
            @selectid=" data.area_city_id = $event.id "
            :selectionId="data.area_state_id"
            selectionList="selectCityForEvidence"
            :getSource="this.$store.state.formSellerEvidence.selectCityForEvidence"
          ></listSelectorBySelection>
          <listSelectorBySelection
            selectedItem="name"
            listName="بخش"
            listSource="allZoneForEvidence"
            :getAllSource="this.$store.state.formSellerEvidence.allZoneForEvidence"
            :lastValue="data.area_zone_id"
            @selectid=" data.area_zone_id = $event.id "
            :selectionId="data.area_city_id"
            selectionList="selectZoneForEvidence"
            :getSource="this.$store.state.formSellerEvidence.selectZoneForEvidence"
          ></listSelectorBySelection>
          <singleInput type="text" inputTitle="کد پستی" v-model="data.postcode"></singleInput>
          <singleInput type="text" inputTitle="شماره تلفن" v-model="data.phonenumber"></singleInput>
          <singleInput type="text" inputTitle="آدرس" v-model="data.address"></singleInput>
        </div>
        <div class="row" v-bind:class="[this.tab3 ? '' : 'vpc_nav_item_selected_form']">
          <singleInput type="text" inputTitle="شماره ملی" v-model="data.companynationalcode"></singleInput>
          <singleInput type="text" inputTitle="کد اقتصادی" v-model="data.economiccode"></singleInput>
          <singleInput type="text" inputTitle="شماره ثبت" v-model="data.companynumber"></singleInput>
        </div>
        <div class="row" v-bind:class="[this.tab4 ? '' : 'vpc_nav_item_selected_form']">
          <imageInput
            :lastImageProp="this.data.stewardship"
            @file="data.stewardship  = $event"
            imageTitle="کواهی مباشرت"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.nationalcard"
            @file="data.nationalcard   = $event"
            imageTitle="کارت ملی"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.officialnewspaper"
            @file="data.officialnewspaper   = $event"
            imageTitle="روزنامه رسمی"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.registration"
            @file="data.registration    = $event"
            imageTitle="شرکت نامه"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.activitypermission"
            @file="data.activitypermission    = $event"
            imageTitle="مجوز فعالیت"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.license"
            @file="data.license    = $event"
            imageTitle="مجوز"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.formalrequest"
            @file="data.formalrequest    = $event"
            imageTitle="درخواست رسمی"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.latestofficialnewspaper"
            @file="data.latestofficialnewspaper    = $event"
            imageTitle="روزنامه تغییرات"
          ></imageInput>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb:hover {
  background: #bdbdbd;
}
.vpc_nav_item_selected_form {
  display: none;
}
</style>
<script>
export default {
  name: "sellerEvidenceEdit",
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      refreshPage: true,
      window: {
        headerid: "sellerEvidenceEdit",
        title: "ویرایش مشخصات فروشگاه",
        titleLine: "فروشگاه/ تشکیل پرونده/ویرایش پرونده/ویرایش مشخصات فروشگاه",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editSellerEvidence/",
        response: "selectSellerEvidence",
      },
      data: {
        crop_category_id: "",
        storename: "",
        owner: "",
        type: "",
        cardnumber: "",
        postcode: "",
        phonenumber: "",
        address: "",
        companynationalcode: "",
        economiccode: "",
        companynumber: "",
        stewardship: "",
        nationalcard: "",
        officialnewspaper: "",
        registration: "",
        activitypermission: "",
        license: "",
        formalrequest: "",
        latestofficialnewspaper: "",
        area_state_id: "",
        area_city_id: "",
        area_zone_id: "",
      },
    };
  },
  //model
  //compute
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    last_crop_category_id: function () {
      this.data.crop_category_id = this.last_crop_category_id;
    },
    lastStorename: function () {
      this.data.storename = this.lastStorename;
    },
    lastOwner: function () {
      this.data.owner = this.lastOwner;
    },
    lastType: function () {
      this.data.type = this.lastType;
    },
    lastCardnumber: function () {
      this.data.cardnumber = this.lastCardnumber;
    },
    lastCardnumber: function () {
      this.data.cardnumber = this.lastCardnumber;
    },
    lastPostcode: function () {
      this.data.postcode = this.lastPostcode;
    },
    lastPhonenumber: function () {
      this.data.phonenumber = this.lastPhonenumber;
    },
    lastAddress: function () {
      this.data.address = this.lastAddress;
    },
    lastCompanynationalcode: function () {
      this.data.companynationalcode = this.lastCompanynationalcode;
    },
    lastEconomiccode: function () {
      this.data.economiccode = this.lastEconomiccode;
    },
    lastCompanynumber: function () {
      this.data.companynumber = this.lastCompanynumber;
    },
    lastStewardship: function () {
      this.data.stewardship = this.lastStewardship;
    },
    lastNationalcard: function () {
      this.data.nationalcard = this.lastNationalcard;
    },
    lastOfficialnewspaper: function () {
      this.data.officialnewspaper = this.lastOfficialnewspaper;
    },
    lastRegistration: function () {
      this.data.registration = this.lastRegistration;
    },
    lastActivitypermission: function () {
      this.data.activitypermission = this.lastActivitypermission;
    },
    lastLicense: function () {
      this.data.license = this.lastLicense;
    },
    lastFormalrequest: function () {
      this.data.formalrequest = this.lastFormalrequest;
    },
    lastLatestofficialnewspaper: function () {
      this.data.latestofficialnewspaper = this.lastLatestofficialnewspaper;
    },
    last_area_state_id: function () {
      this.data.area_state_id = this.last_area_state_id;
    },
    last_area_city_id: function () {
      this.data.area_city_id = this.last_area_city_id;
    },
    last_area_zone_id: function () {
      this.data.area_zone_id = this.last_area_zone_id;
    },
  },
  //watch
  computed: {
    lastId: {
      get() {
        if (this.$store.state.formSellerEvidence.selectSellerEvidence.id) {
          return this.$store.state.formSellerEvidence.selectSellerEvidence.id;
        } else {
          return "";
        }
      },
    },
    last_crop_category_id: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .crop_category_id;
      },
    },
    lastStorename: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .storename;
      },
    },
    lastOwner: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence.owner;
      },
    },
    lastType: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence.type;
      },
    },
    lastCardnumber: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .cardnumber;
      },
    },
    lastPostcode: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .postcode;
      },
    },
    lastPhonenumber: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .phonenumber;
      },
    },
    lastAddress: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .address;
      },
    },
    lastCompanynationalcode: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .companynationalcode;
      },
    },
    lastEconomiccode: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .economiccode;
      },
    },
    lastCompanynumber: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .companynumber;
      },
    },
    lastStewardship: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .stewardship;
      },
    },
    lastNationalcard: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .nationalcard;
      },
    },
    lastOfficialnewspaper: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .officialnewspaper;
      },
    },
    lastRegistration: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .registration;
      },
    },
    lastActivitypermission: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .activitypermission;
      },
    },
    lastLicense: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .license;
      },
    },
    lastFormalrequest: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .formalrequest;
      },
    },
    lastLatestofficialnewspaper: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .latestofficialnewspaper;
      },
    },
    last_area_state_id: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .area_state_id;
      },
    },

    last_area_city_id: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .area_city_id;
      },
    },
    last_area_zone_id: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .area_zone_id;
      },
    },
  },
  //compute
  //method
  methods: {
    // refresh
    refresh() {
      (this.refreshPage = false),
        setTimeout(() => {
          this.refreshPage = true;
        }, 800);
    },
    // refresh
    showTab1() {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
    },
    showTab2() {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.tab4 = false;
    },
    showTab3() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
    },
    showTab4() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
    },
  },
  //method
};
</script>
