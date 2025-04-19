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
        <listSelectorOptional
          selectedItem="name"
          listName="نوع"
          :getSource="this.typeOption"
          :lastValue="null"
          @selectid=" data.type = $event.id "
        ></listSelectorOptional>

        <singleInput type="text" inputTitle="لینک صفحه" v-model="data.link"></singleInput>
        <listSelector
          selectedItem="name"
          listName="قالب"
          listSource="template"
          :getSource="this.$store.state.mainStore.template"
          :lastValue="data.page_template_id"
          @selectid=" data.page_template_id = $event.id "
        ></listSelector>
        <listSelector
          selectedItem="name"
          listName="زبان"
          listSource="language"
          :getSource="this.$store.state.mainStore.language"
          :lastValue="data.page_language_id"
          @selectid=" data.page_language_id = $event.id "
        ></listSelector>

        <singleInput type="text" inputTitle="مشخصات" v-model="data.address"></singleInput>
        <imageInput :lastImageProp="this.data.image1" @file="data.image1 = $event" imageTitle="تصویر"></imageInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "infoForm",
  data() {
    return {
      setRefresh: true,
      window: {
        headerid: "infoForm",
        title: "ثبت مشخصات",
        titleLine: " ماژول/ماژول های ارتباطی/مشخصات/ ثبت مشخصات",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registerInfo",
      },
      typeOption: [
        { id: 0, name: "آدرس" },
        { id: 1, name: "تلفن" },
        { id: 2, name: "فکس" },
        { id: 3, name: "ایمیل" },
        { id: 4, name: "کدپستی" },
      ],
      data: {
        image1: "",
        image2: "",
        title1: "",
        title2: "",
        title3: "",
        address: "",
        link: "",
        seo: "",
        status: "",
        type: "",
        page_template_id: "",
        page_language_id: "",
      },
    };
  },
  //model
  //method
  methods: {
    refresh() {
      this.setRefresh = false;
      for (let key in this.data) {
        this.data[key] = "";
      }
      setTimeout(() => {
        this.setRefresh = true;
      }, 1000);
    },
  },
  //method
};
</script>

