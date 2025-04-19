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
      <div class="row" style="direction:rtl">
        <singleInputDisabled type="text" inputTitle="فروشگاه" v-model="data.storename"></singleInputDisabled>
        <singleInputDisabled type="text" inputTitle="مجموعه مجاز" v-model="data.subsegmentname"></singleInputDisabled>
        <singleInput type="number" inputTitle="درصد حاصله" v-model="data.percentage"></singleInput>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "sellerPercentageEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "sellerPercentageEdit",
        title: "ویرایش درصد فروش",
        titleLine: "فروشگاه/ مجوز/درصد فروش/ ویرایش درصد فروش ",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editSellerPrecentage/",
        response: "selectSellerPrecentage",
      },
      data: {
        id: "",
        subsegmentname: "",
        storename: "",
        seller_store_id: "",
        percentage: "",
      },
    };
  },
  ///////////////////////////////////////////////////////////////////////model
  ///////////////////////////////////////////////////////////////////////watch

  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    last_sub_segment_id: function () {
      this.data.subsegmentname = this.last_sub_segment_id;
    },
    lastStoreName: function () {
      this.data.storename = this.lastStoreName;
    },
    last_seller_store_id: function () {
      this.data.seller_store_id = this.last_seller_store_id;
    },
    lastPercentage: function () {
      this.data.percentage = this.lastPercentage;
    },
  },
  ///////////////////////////////////////////////////////////////////////watch
  computed: {
    lastId: {
      get() {
        return this.$store.state.formSellerContract.selectSellerPrecentage.id;
      },
    },
    last_sub_segment_id: {
      get() {
        return this.$store.state.formSellerContract.selectSellerPrecentage
          .subsegmentname;
      },
    },
    lastStoreName: {
      get() {
        return this.$store.state.formSellerContract.selectSellerPrecentage
          .storename;
      },
    },
    last_seller_store_id: {
      get() {
        return this.$store.state.formSellerContract.selectSellerPrecentage
          .seller_id;
      },
    },
    lastPercentage: {
      get() {
        return this.$store.state.formSellerContract.selectSellerPrecentage
          .percentage;
      },
    },
  },
  ///////////////////////////////////////////////////////////////////////compute
  //method
  methods: {
    refresh() {
      (this.refreshPage = false),
        setTimeout(() => {
          this.refreshPage = true;
        }, 800);
    },
  },
  //method
  created() {},
};
</script>

