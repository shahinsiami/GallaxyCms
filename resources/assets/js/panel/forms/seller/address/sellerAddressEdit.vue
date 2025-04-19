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
        <listSelector
          selectedItem="name"
          listName="استان"
          listSource="allStateForAddress"
          :getSource="this.$store.state.formAddress.allStateForAddress"
          :lastValue="data.area_state_id"
          @selectid=" data.area_state_id = $event.id;data.state = $event.name "
        ></listSelector>
        <listSelectorBySelection
          selectedItem="name"
          listName="شهر"
          listSource="allCityForAddress"
          :getSource="this.$store.state.formAddress.selectCityForAddress"
          :lastValue="data.area_city_id"
          @selectid=" data.area_city_id = $event.id;data.city = $event.name "
          selectionList="selectCityForAddress"
          :selectionId="data.area_state_id"
          :getAllSource="this.$store.state.formAddress.allCityForAddress"
        ></listSelectorBySelection>
        <listSelectorBySelection
          selectedItem="name"
          listName="منطقه"
          listSource="allZoneForAddress"
          :getSource="this.$store.state.formAddress.selectZoneForAddress"
          :lastValue="data.area_zone_id"
          @selectid=" data.area_zone_id = $event.id;data.zone = $event.name "
          selectionList="selectZoneForAddress"
          :selectionId="data.area_city_id "
          :getAllSource="this.$store.state.formAddress.allZoneForAddress"
        ></listSelectorBySelection>
        <singleInput type="text" inputTitle="آدرس" v-model="data.superscription"></singleInput>
        <singleInput type="text" inputTitle="کدپستی" v-model="data.postcode"></singleInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sellerAddressEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "sellerAddressEdit",
        title: "ویرایش آدرس فروشگاه",
        titleLine: "فروشگاه/نشانی فروشگاه/ ویرایش آدرس فروشگاه",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editSellerAddress/",
        response: "selectCategory",
      },
      data: {
        superscription: "",
        postcode: "",
        area_state_id: "",
        area_city_id: "",
        area_zone_id: "",
        state: "",
        city: "",
        zone: "",
        map: "",
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
    lastSuperscription: function () {
      this.data.superscription = this.lastSuperscription;
    },
    lastPostcode: function () {
      this.data.postcode = this.lastPostcode;
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
    lastState: function () {
      this.data.state = this.lastState;
    },
    lastCityd: function () {
      this.data.city = this.lastCityd;
    },
    lastZone: function () {
      this.data.zone = this.lastZone;
    },
    lastMap: function () {
      this.data.map = this.lastMap;
    },
  },
  //watch
  computed: {
    lastId: {
      get() {
        if (this.$store.state.formAddress.selectSellerAddress.id) {
          return this.$store.state.formAddress.selectSellerAddress.id;
        } else {
          return "";
        }
      },
    },
    lastSuperscription: {
      get() {
        return this.$store.state.formAddress.selectSellerAddress.superscription;
      },
    },
    lastPostcode: {
      get() {
        return this.$store.state.formAddress.selectSellerAddress.postcode;
      },
    },
    last_area_state_id: {
      get() {
        return this.$store.state.formAddress.selectSellerAddress.area_state_id;
      },
    },
    last_area_city_id: {
      get() {
        return this.$store.state.formAddress.selectSellerAddress.area_city_id;
      },
    },
    last_area_zone_id: {
      get() {
        return this.$store.state.formAddress.selectSellerAddress.area_zone_id;
      },
    },
    lastState: {
      get() {
        return this.$store.state.formAddress.selectSellerAddress.state;
      },
    },
    lastCityd: {
      get() {
        return this.$store.state.formAddress.selectSellerAddress.city;
      },
    },
    lastZone: {
      get() {
        return this.$store.state.formAddress.selectSellerAddress.zone;
      },
    },
    lastMap: {
      get() {
        return this.$store.state.formAddress.selectSellerAddress.map;
      },
    },
  },
  //compute
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
};
</script>
