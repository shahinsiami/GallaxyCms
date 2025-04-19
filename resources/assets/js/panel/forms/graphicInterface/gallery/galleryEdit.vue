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
        <singleInput type="text" inputTitle="نام" v-model="data.name"></singleInput>
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
        <listSelectorOptional
          selectedItem="name"
          listName="قسمت"
          :getSource="this.$store.state.mainStore.section"
          @selectid=" data.section = $event.id "
          :lastValue="data.section"
        ></listSelectorOptional>
        <listSelector
          selectedItem="name"
          listName="زبان"
          listSource="language"
          :getSource="this.$store.state.mainStore.language"
          :lastValue="data.page_language_id"
          @selectid=" data.page_language_id = $event.id "
        ></listSelector>
        <imageInput :lastImageProp="data.image1" @file="data.image1 = $event" imageTitle="تصویر 1"></imageInput>
        <imageInput :lastImageProp="data.image2" @file="data.image2 = $event" imageTitle="تصویر 2"></imageInput>
      </div>
    </div>
    <!---->
  </div>
</template>


<style scoped>
</style>

<script>
export default {
  name: "galleryEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "galleryEdit",
        title: "ویرایش گالری",
        titleLine: "ماژول/ماژول های گرافیکی/گالری/ویرایش تصویر ",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editGallery/",
        response: "selectGallery",
      },
      statusOption: [
        { id: 0, name: "غیر فعال" },
        { id: 1, name: "فعال" },
      ],
      data: {
        id: "",
        name: "",
        image1: "",
        image2: "",
        title1: "",
        title2: "",
        title3: "",
        section: "",
        description: "",
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
    lastName: function () {
      this.data.name = this.lastName;
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
    lastSection: function () {
      this.data.section = this.lastSection;
    },
  },
  //watch
  //compute

  computed: {
    lastId: {
      get() {
        if (this.$store.state.ComponentGallery.selectGallery.id) {
          return this.$store.state.ComponentGallery.selectGallery.id;
        } else {
          return "";
        }
      },
    },
    lastName: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery.name;
      },
    },
    lastTitle1: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery.title1;
      },
    },
    lastTitle2: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery.title2;
      },
    },
    lastTitle3: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery.title3;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery
          .description;
      },
    },
    lastStatus: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery.status;
      },
    },
    lastLink: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery.link;
      },
    },
    lastSeo: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery.seo;
      },
    },
    lastImage1: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery.image1;
      },
    },
    lastImage2: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery.image2;
      },
    },
    last_page_language_id: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery
          .page_language_id;
      },
    },
    last_page_template_id: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery
          .page_template_id;
      },
    },
    lastSection: {
      get() {
        return this.$store.state.ComponentGallery.selectGallery.section;
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