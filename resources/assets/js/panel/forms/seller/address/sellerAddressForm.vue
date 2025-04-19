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
          :lastValue="data.area_state_id"
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
          :lastValue="data.area_state_id"
          @selectid=" data.area_zone_id = $event.id;data.zone = $event.name "
          selectionList="selectZoneForAddress"
          :selectionId="data.area_city_id "
          :getAllSource="this.$store.state.formAddress.allZoneForAddress"
        ></listSelectorBySelection>
        <singleInput type="text" inputTitle="آدرس" v-model="data.superscription"></singleInput>
        <singleInput type="text" inputTitle="کدپستی" v-model="data.postcode"></singleInput>
      </div>
    </div>
    <!---->
  </div>
</template>
<script>
export default {
  name: "sellerAddressForm",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "sellerAddressForm",
        title: "ثبت آدرس فروشگاه",
        titleLine: "فروشگاه/نشانی فروشگاه/ ثبت آدرس فروشگاه",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registSellerAddress",
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
  },
  //method
};
</script>
