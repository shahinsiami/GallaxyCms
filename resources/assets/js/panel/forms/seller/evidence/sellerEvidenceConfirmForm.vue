<template>
  <div class="content">
    <div class="row p-2">
       <div class="col-12">
        <windowHeader :windowTitle="this.window.title" :windowTitleLine="this.window.titleLine"></windowHeader>
      </div>
      <div class="col-12 my-2 d-flex flex-row justify-content-center align-items-center">
               <!-- <editBtn
          @needRefresh="this.refresh"
          :responseDispatch="this.edit.response"
          :axiosUrl="this.edit.axiosUrl"
          :formData="this.data"
          :buttonTitle="this.edit.buttonTitle"
        ></editBtn> -->
            <editBtn
          @needRefresh="this.refresh"
          :responseDispatch="this.edit.response"
          :axiosUrl="this.editDisactiveStore.axiosUrl"
          :formData="this.data"
          :buttonTitle="this.editDisactiveStore.buttonTitle"
        ></editBtn>
       <editBtn
          @needRefresh="this.refresh"
          :responseDispatch="this.edit.response"
          :axiosUrl="this.editJustActiveStore.axiosUrl"
          :formData="this.data"
          :buttonTitle="this.editJustActiveStore.buttonTitle"
        ></editBtn>
      <editBtn
          @needRefresh="this.refresh"
          :responseDispatch="this.edit.response"
          :axiosUrl="this.editActiveStore.axiosUrl"
          :formData="this.data"
          :buttonTitle="this.editActiveStore.buttonTitle"
        ></editBtn>
      </div>
    </div>
    <div v-if="!this.refreshPage" class="vpc_loader">
      <div class="vpc_loader_img">
        <img width="300" height="300" src="photo/module/Panel/forms/loader.gif" />
      </div>
    </div>
    <div style="direction:rtl" v-if="this.refreshPage" class="container-fluid">
      <div class="row">
        <div class="d-flex flex-row w-100 justify-content-start align-items-center vpc_nav">
          <div
            @click="showTab1"
            v-bind:class="[this.tab1 ? 'vpc_nav_item_selected' : '']"
            class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
          >وضعیت</div>
          <div
            @click="showTab2"
            v-bind:class="[this.tab2 ? 'vpc_nav_item_selected' : '']"
            class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
          >مشخصات فروشگاه</div>
          <div
            @click="showTab3"
            v-bind:class="[this.tab3 ? 'vpc_nav_item_selected' : '']"
            class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
          >آدرس</div>
          <div
            @click="showTab4"
            v-bind:class="[this.tab4 ? 'vpc_nav_item_selected' : '']"
            class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
          >مدارک</div>
        </div>
      </div>
      <!---->
      <div class="row" v-bind:class="[this.tab1 ? '' : 'vpc_nav_item_selected_form']">
        <listSelector
          selectedItem="name"
          listName="مجموعه"
          listSource="cropCategoryForSellerEvidence"
          :getSource="this.$store.state.formSellerEvidence.cropCategoryForSellerEvidence"
          :lastValue="data.crop_category_id"
          @selectid=" data.crop_category_id = $event.id "
        ></listSelector>
        <listSelectorOptional
          selectedItem="name"
          listName="وضعیت"
          :getSource="status"
          :lastValue="data.status"
          @selectid=" data.status = $event.id "
        ></listSelectorOptional>
      </div>

      <div class="row" v-bind:class="[this.tab2 ? '' : 'vpc_nav_item_selected_form']">
        <singleInput type="text" inputTitle="نام فروشگاه" v-model="data.storename"></singleInput>
        <singleInput type="text" inputTitle="مالک فروشگاه" v-model="data.owner"></singleInput>
        <singleInput type="text" inputTitle="نوع" v-model="data.type"></singleInput>
        <singleInput type="number" inputTitle="کد اقتصادی" v-model="data.economiccode"></singleInput>
        <singleInput type="number" inputTitle="شماره ثبت" v-model="data.companynumber"></singleInput>
        <singleInput type="number" inputTitle="شماره ملی شرکت" v-model="data.companynationalcode"></singleInput>
        <singleInput type="number" inputTitle="شماره حساب" v-model="data.cardnumber"></singleInput>
      </div>
      <div class="row" v-bind:class="[this.tab3 ? '' : 'vpc_nav_item_selected_form']">
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
        <singleInput type="text" inputTitle="آدرس فروشگاه" v-model="data.address"></singleInput>
        <singleInput type="number" inputTitle="کدپستی" v-model="data.postcode"></singleInput>
        <singleInput type="number" inputTitle="تلفن" v-model="data.phonenumber"></singleInput>
      </div>
      <div class="row" v-bind:class="[this.tab4 ? '' : 'vpc_nav_item_selected_form']">
        <imageInput
          :lastImageProp="data.license"
          @file="data.license = $event"
          imageTitle="گواهی نامه"
        ></imageInput>
        <imageInput
          :lastImageProp="data.stewardship"
          @file="data.stewardship = $event"
          imageTitle="کارت مباشرت 2"
        ></imageInput>
        <imageInput
          :lastImageProp="data.nationalcard"
          @file="data.nationalcard = $event"
          imageTitle="کارت ملی"
        ></imageInput>
        <imageInput
          :lastImageProp="data.officialnewspaper"
          @file="data.officialnewspaper = $event"
          imageTitle="روزنامه رسمی"
        ></imageInput>
        <imageInput
          :lastImageProp="data.activitypermission"
          @file="data.activitypermission = $event"
          imageTitle="مجوز فعالیت"
        ></imageInput>
        <imageInput
          :lastImageProp="data.formalrequest"
          @file="data.formalrequest = $event"
          imageTitle="درخواست مکتوب"
        ></imageInput>
        <imageInput
          :lastImageProp="data.latestofficialnewspaper"
          @file="data.latestofficialnewspaper = $event"
          imageTitle="آخرین روزنامه رسمی"
        ></imageInput>
        <imageInput
          :lastImageProp="data.registration"
          @file="data.registration = $event"
          imageTitle="آخرین روزنامه رسمی"
        ></imageInput>
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
  name: "sellerEvidenceConfirmForm",
  data() {
    return {
      refreshPage: true,
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      window: {
        headerid: "sellerEvidenceConfirmForm",
        title: "تاییدیه مدارک فروشگاه",
        titleLine: "فروشگاه/ تشکیل پرونده/ فروشگاه ها/تاییدیه مدارک فروشگاه",
      },
      status: [
        { id: "غیر فعال", name: "غیر فعال" },
        { id: "فعال", name: "فعال" },
      ],
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editSellerEvidence/",
        response: "selectSellerEvidence",
      },
      editDisactiveStore: {
        buttonTitle: "لغو فعال سازی",
        axiosUrl: "/api/v1/deactivateSeller/",
        response: "selectSellerEvidence",
      },
      editJustActiveStore: {
        buttonTitle: "فعال سازی",
        axiosUrl: "/api/v1/activeSeller/",
        response: "selectSellerEvidence",
      },
      editActiveStore: {
        buttonTitle: "ایجاد پرونده",
        axiosUrl: "/api/v1/createCase/",
        response: "selectSellerEvidence",
      },

      data: {
        id: "",
        storename: "",
        type: "",
        status: "",
        owner: "",
        economiccode: "",
        companynumber: "",
        companynationalcode: "",
        cardnumber: "",
        postcode: "",
        phonenumber: "",
        address: "",
        area_state_id: "",
        area_city_id: "",
        area_zone_id: "",
        registration: "",
        license: "",
        stewardship: "",
        nationalcard: "",
        officialnewspaper: "",
        activitypermission: "",
        formalrequest: "",
        latestofficialnewspaper: "",
        crop_category_id: "",
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
    lastStoreName: function () {
      this.data.storename = this.lastStoreName;
    },
    lastType: function () {
      this.data.type = this.lastType;
    },
    lastStatus: function () {
      this.data.status = this.lastStatus;
    },
    lastOwner: function () {
      this.data.owner = this.lastOwner;
    },
    lastPostCode: function () {
      this.data.postcode = this.lastPostCode;
    },
    lastPhoneNumber: function () {
      this.data.phonenumber = this.lastPhoneNumber;
    },
    lastAddress: function () {
      this.data.address = this.lastAddress;
    },
    lastCardNumber: function () {
      this.data.cardnumber = this.lastCardNumber;
    },
    lastEconomicCode: function () {
      this.data.economiccode = this.lastEconomicCode;
    },
    lastCompanyNumber: function () {
      this.data.companynumber = this.lastCompanyNumber;
    },
    lastCompanyNationalCode: function () {
      this.data.companynationalcode = this.lastCompanyNationalCode;
    },
    lastLicense: function () {
      this.data.license = this.lastLicense;
    },
    lastStewardship: function () {
      this.data.stewardship = this.lastLicense;
    },
    lastNationalcard: function () {
      this.data.nationalcard = this.lastStewardship;
    },
    lastOfficialNewspaper: function () {
      this.data.officialnewspaper = this.lastOfficialNewspaper;
    },
    lastRegistration: function () {
      this.data.registration = this.lastRegistration;
    },

    lastActivityPermission: function () {
      this.data.activitypermission = this.lastActivityPermission;
    },
    lastFormalRequest: function () {
      this.data.formalrequest = this.lastFormalRequest;
    },
    lastLatestOfficialNewspaper: function () {
      this.data.latestofficialnewspaper = this.lastLatestOfficialNewspaper;
    },
    last_crop_category_id: function () {
      this.data.crop_category_id = this.last_crop_category_id;
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
  //compute
  computed: {
    lastId: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence.id;
      },
    },
    lastStoreName: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .storename;
      },
    },
    lastType: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence.type;
      },
    },
    lastStatus: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence.status;
      },
    },
    lastOwner: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence.owner;
      },
    },
    lastPostCode: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .postcode;
      },
    },
    lastPhoneNumber: {
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
    lastCardNumber: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .cardnumber;
      },
    },
    lastEconomicCode: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .economiccode;
      },
    },
    lastCompanyNumber: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .companynumber;
      },
    },
    lastCompanyNationalCode: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .companynationalcode;
      },
    },
    lastLicense: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .license;
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
    lastOfficialNewspaper: {
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
    lastActivityPermission: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .activitypermission;
      },
    },
    lastFormalRequest: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .formalrequest;
      },
    },
    lastLatestOfficialNewspaper: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .latestofficialnewspaper;
      },
    },
    last_crop_category_id: {
      get() {
        return this.$store.state.formSellerEvidence.selectSellerEvidence
          .crop_category_id;
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

