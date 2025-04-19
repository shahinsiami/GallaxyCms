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
        <listSelectorOptional
          selectedItem="name"
          listName="نوع"
          :getSource="this.typeOption"
          :lastValue="this.data.type"
          @selectid=" data.type = $event.id "
        ></listSelectorOptional>

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
        <imageInput :lastImageProp="data.image1" @file="data.image1 = $event" imageTitle="تصویر 1"></imageInput>
        <imageInput :lastImageProp="data.image2" @file="data.image2 = $event" imageTitle="تصویر 2"></imageInput>
      </div>
    </div>
    <!---->
  </div>
</template>
<script>
export default {
  name: "infoEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "infoEdit",
        title: "ویرایش مشخصات",
        titleLine: "ماژول/ماژول های ارتباطی/مشخصات/ ویرایش مشخصات",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editInfo/",
        response: "selectInfo",
      },
      typeOption: [
        { id: 0, name: "آدرس" },
        { id: 1, name: "تلفن" },
        { id: 2, name: "فکس" },
        { id: 3, name: "ایمیل" },
        { id: 4, name: "کدپستی" },
      ],
      data: {
        id: "",
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
    lastAddress: function () {
      this.data.address = this.lastAddress;
    },
    lastStatus: function () {
      this.data.status = this.lastStatus;
    },
    lastType: function () {
      this.data.type = this.lastType;
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
  },
  //watch
  //compute

  computed: {
    lastId: {
      get() {
        if (this.$store.state.ComponentInfo.selectInfo.id) {
          return this.$store.state.ComponentInfo.selectInfo.id;
        } else {
          return "";
        }
      },
    },
    lastTitle1: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.title1;
      },
    },
    lastTitle2: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.title2;
      },
    },
    lastTitle3: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.title3;
      },
    },
    lastAddress: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.address;
      },
    },
    lastStatus: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.status;
      },
    },
    lastType: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.type;
      },
    },
    lastLink: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.link;
      },
    },
    lastSeo: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.seo;
      },
    },
    lastImage1: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.image1;
      },
    },
    lastImage2: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.image2;
      },
    },
    last_page_language_id: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.page_language_id;
      },
    },
    last_page_template_id: {
      get() {
        return this.$store.state.ComponentInfo.selectInfo.page_template_id;
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
