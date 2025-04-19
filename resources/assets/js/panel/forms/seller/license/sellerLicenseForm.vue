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
    <div v-if="this.refreshPage" class="container-fluid">
      <div class="row" style="direction:rtl">
        <listSelectorBySelection
          selectedItem="name"
          listName="زیر مجموعه"
          listSource="subcategoryForSellerLicence"
          :getAllSource="this.$store.state.formSellerContract.subcategoryForSellerLicence"
          :lastValue="this.data.crop_sub_category_id"
          @selectid=" data.crop_sub_category_id = $event.id "
          :selectionId="data.crop_category_id"
          selectionList="subcategoryForSellerLicenceBySelection"
          :getSource="this.$store.state.formSellerContract.subcategoryForSellerLicenceBySelection"
        ></listSelectorBySelection>
        <listSelectorBySelection
          selectedItem="name"
          listName="دسته"
          listSource="segmentForSellerLicence"
          :getAllSource="this.$store.state.formSellerContract.segmentForSellerLicence"
          :lastValue="this.data.crop_segment_id"
          @selectid=" data.crop_segment_id = $event.id "
          :selectionId="data.crop_sub_category_id"
          selectionList="segmentForSellerLicenceBySelection"
          :getSource="this.$store.state.formSellerContract.segmentForSellerLicenceBySelection"
        ></listSelectorBySelection>
        <listSelectorBySelection
          selectedItem="name"
          listName="زیر دسته"
          listSource="subSegmentForSellerLicence"
          :getAllSource="this.$store.state.formSellerContract.subSegmentForSellerLicence"
          :lastValue="this.data.crop_sub_segment_id"
          @selectid=" data.crop_sub_segment_id = $event.id "
          :selectionId="data.crop_segment_id"
          selectionList="subSegmentForSellerLicenceBySelection"
          :getSource="this.$store.state.formSellerContract.subSegmentForSellerLicenceBySelection"
        ></listSelectorBySelection>
        <singleInput type="text" inputTitle="درصد سایت" v-model="data.percentage"></singleInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sellerLicenseForm",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "sellerLicenseForm",
        title: "ثبت مجوز",
        titleLine: "فروشگاه/ مجوز/مجوز فروش/ثبت مجوز",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registSellerLicence",
      },
      data: {
        crop_category_id: "",
        crop_sub_category_id: "",
        crop_segment_id: "",
        crop_sub_segment_id: "",
        percentage: "",
        seller_id: "",
      },
    };
  },
  //model
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    last_crop_category_id: function () {
      this.data.crop_category_id = this.last_crop_category_id;
    },
    lastPercentage: function () {
      this.data.percentage = this.lastPercentage;
    },
    last_seller_id: function () {
      this.data.seller_id = this.last_seller_id;
    },
  },
  //watch
  computed: {
    last_crop_category_id: {
      get() {
        if (this.$store.state.formSellerContract.selectSellerLicense) {
          return this.$store.state.formSellerContract.selectSellerLicense
            .crop_category_id;
        }
      },
    },
    lastPercentage: {
      get() {
        return this.$store.state.formSellerContract.selectSellerLicense
          .percentage;
      },
    },
    last_seller_id: {
      get() {
        return this.$store.state.formSellerContract.selectSellerLicense.id;
      },
    },
  },
  //compute
  //method
  methods: {
    refresh() {
      this.refreshPage = false;
      (this.data.percentage = ""),
        setTimeout(() => {
          this.refreshPage = true;
        }, 1000);
    },
  },
  //method
};
</script>

