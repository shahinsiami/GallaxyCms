      <template>
  <div class="content">
    <div class="row p-2">
      <div class="col-6 d-flex flex-row justify-content-center align-items-center">
        <submitBtn
          :refresh="true"
          @needRefresh="this.refresh"
          :axiosUrl="this.submit.axiosUrl"
          :formData="this.data"
          :buttonTitle="this.submit.buttonTitle"
        ></submitBtn>
      </div>
      <div class="col-6">
        <windowHeader :windowTitle="this.window.title" :windowTitleLine="this.window.titleLine"></windowHeader>
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
          :lastValue="null"
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
  name: "sellerEvidenceForm",
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      refreshPage: true,
      window: {
        headerid: "sellerEvidenceForm",
        title: "ثبت مشخصات فروشگاه",
        titleLine: "فروشگاه/ تشکیل پرونده/ثبت پرونده/ثبت مشخصات فروشگاه",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registerSellerEvidence",
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
  //method
  methods: {
    refresh() {
      this.refreshPage = false;
      for (let key in this.data) {
        this.data[key] = "";
      }
      setTimeout(() => {
        this.refreshPage = true;
      }, 1000);
    },
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
  created() {
    this.$store.dispatch("allStateForEvidence");
  },
  //compute
};
</script>
