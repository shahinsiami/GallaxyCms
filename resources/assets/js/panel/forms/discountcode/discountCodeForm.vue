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
        <singleInput type="text" inputTitle="عنوان " v-model="data.name"></singleInput>
        <singleInput type="text" inputTitle="کد" v-model="data.code"></singleInput>
        <singleInput type="number" inputTitle="درصد" v-model="data.percentage"></singleInput>
        <listSelectorOptional
          selectedItem="name"
          listName="وضعیت"
          :getSource="this.stutsOption"
          :lastValue="data.status"
          @selectid=" data.status = $event.id "
        ></listSelectorOptional>
        <singleInput type="number" inputTitle="حداقل قیمت " v-model="data.minprice"></singleInput>
        <singleInput type="number" inputTitle="حداکثر قیمت " v-model="data.maxprice"></singleInput>
        <singleInput type="number" inputTitle="تعداد " v-model="data.count"></singleInput>
  
                <datePicker inputTitle="تاریخ شروع" v-model="data.startdate"></datePicker>
                <datePicker inputTitle="تاریخ پایان" v-model="data.enddate"></datePicker>
       
      </div>
    </div>
  </div>
</template>
<script>
var moment = require("moment-jalaali");

export default {
  name: "discountCodeForm",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "discountCodeForm",
        title: "ثبت کد تخفیف محصول",
        titleLine: "بن تخفیف/بن تخفیف/ثبت کد تخفیف محصول",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registDiscount",
      },
      stutsOption: [
        { id: 0, name: "غیر فعال" },
        { id: 1, name: "فعال" },
      ],
      data: {
        name: "",
        code: "",
        count: "",
        minprice: "",
        maxprice: "",
        percentage: "",
        status: "",
        startdate: "",
        enddate: "",
      },
    };
  },
  //model
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

