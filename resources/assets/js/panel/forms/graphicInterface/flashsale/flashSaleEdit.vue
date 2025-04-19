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
        <singleInput type="text" inputTitle="عنوان اول" v-model="data.title1"></singleInput>
        <singleInput type="text" inputTitle="عنوان دوم" v-model="data.title2"></singleInput>
        <singleInput type="text" inputTitle="عنوان سوم" v-model="data.title3"></singleInput>
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <singleInput type="text" inputTitle="موتور جستجو" v-model="data.seo"></singleInput>
        <listSelectorOptional
          selectedItem="name"
          listName="وضعیت"
          :getSource="this.statusOption"
          :lastValue="data.status"
          @selectid=" data.status = $event.id "
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

        <datePicker inputTitle="تاریخ شروع" v-model="data.startdate"></datePicker>
  <datePicker inputTitle="تاریخ پایان" v-model="data.enddate"></datePicker>
     
        <imageInput :lastImageProp="data.image1" @file="data.image1 = $event" imageTitle="تصویر 1"></imageInput>
        <imageInput :lastImageProp="data.image2" @file="data.image2 = $event" imageTitle="تصویر 2"></imageInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "flashSaleEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "flashSaleEdit",
        title: "ویرایش ثانیه شمار",
        titleLine: "ماژول/ماژول های گرافیکی/ثانیه شمار/ویرایش ثانیه شمار ",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editFlashSale/",
        response: "selectFlashSale",
      },
      statusOption: [
        { id: 0, name: "غیر فعال" },
        { id: 1, name: "فعال" },
      ],
      data: {
        id: "",
        image1: "",
        image2: "",
        title1: "",
        title2: "",
        title3: "",
        description: "",
        link: "",
        seo: "",
        status: "",
        type: "",
        page_template_id: "",
        page_language_id: "",
        startDate: "1970-03-21 00:00:00",
        endDate: "2070-03-21 00:00:00",
      },
    };
  },

  //model
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    lastTitle1: function () {
      this.data.title1 = this.lastTitle1;
    },
    lastTitle2: function () {
      this.data.title2 = this.lastTitle2;
    },
    lastTitle3: function () {
      this.data.title3 = this.lastTitle3;
    },
    lastDescription: function () {
      this.data.description = this.lastDescription;
    },
    lastStatus: function () {
      this.data.status = this.lastStatus;
    },
    lastLink: function () {
      this.data.link = this.lastLink;
    },
    lastSeo: function () {
      this.data.seo = this.lastSeo;
    },
    lastImage1: function () {
      this.data.image1 = this.lastImage1;
    },
    lastImage2: function () {
      this.data.image2 = this.lastImage2;
    },
    last_page_template_id: function () {
      this.data.page_template_id = this.last_page_template_id;
    },
    last_page_language_id: function () {
      this.data.page_language_id = this.last_page_language_id;
    },
    lastStartDate: function () {
      this.data.startDate = this.lastStartDate;
    },
    lastEndDate: function () {
      this.data.endDate = this.lastEndDate;
    },
  },
  //watch
  //compute
  computed: {
    lastId: {
      get() {
        if (this.$store.state.ComponentFlashSale.selectFlashSale.id) {
          return this.$store.state.ComponentFlashSale.selectFlashSale.id;
        } else {
          return "";
        }
      },
    },
    lastTitle1: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.title1;
      },
    },
    lastTitle2: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.title2;
      },
    },
    lastTitle3: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.title3;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.description;
      },
    },
    lastStatus: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.status;
      },
    },
    lastLink: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.link;
      },
    },
    lastSeo: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.seo;
      },
    },
    lastImage1: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.image1;
      },
    },
    lastImage2: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.image2;
      },
    },
    last_page_language_id: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale
          .page_language_id;
      },
    },
    last_page_template_id: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale
          .page_template_id;
      },
    },
    lastStartDate: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.startDate;
      },
    },
    lastEndDate: {
      get() {
        return this.$store.state.ComponentFlashSale.selectFlashSale.endDate;
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


