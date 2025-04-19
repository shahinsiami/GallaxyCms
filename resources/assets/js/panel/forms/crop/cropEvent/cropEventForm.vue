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
        <singleInput type="text" inputTitle="نام رخداد" v-model="data.name"></singleInput>
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <singleInput type="number" inputTitle="درصد" v-model="data.percentage"></singleInput>
        <imageInput :lastImageProp="this.data.image" @file="data.image = $event" imageTitle="تصویر"></imageInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cropEventForm",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "cropEventForm",
        title: " ثبت رخداد محصول",
        titleLine: "محصولات/خصوصیات/رویداد/ثبت رخداد محصول",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registerCropEvent",
      },
      data: {
        name: "",
        description: "",
        percentage: "",
        image: "",
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

