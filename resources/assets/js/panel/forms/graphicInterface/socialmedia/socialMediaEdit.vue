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
        <singleInput type="text" inputTitle="عنوان " v-model="data.title"></singleInput>

        <singleInput type="text" inputTitle="لینک " v-model="data.link"></singleInput>

        <!---->
        <!--upload-->

        <imageInput :lastImageProp="data.image1" @file="data.image1 = $event" imageTitle="تصویر 1"></imageInput>
      </div>
    </div>
    <!---->
  </div>
</template>
<script>
export default {
  name: "socialMediaEdit",

  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "socialMediaEdit",
        title: "ویرایش شبکه اجتماعی",
        titleLine: "ماژول/ماژول های ارتباطی/شبکه اجتماعی/ویرایش شبکه اجتماعی ",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editSocialMedia/",
        response: "selectSocialMedia",
      },

      data: {
        id: "",
        image1: "",
        title: "",
        link: "",
      },
    };
  },

  //model
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    lastTitle: function () {
      this.data.title = this.lastTitle;
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
  },
  //watch
  //compute

  computed: {
    lastId: {
      get() {
        if (this.$store.state.ComponentSocialMedia.selectSocialMedia.id) {
          return this.$store.state.ComponentSocialMedia.selectSocialMedia.id;
        } else {
          return "";
        }
      },
    },
    lastTitle: {
      get() {
        return this.$store.state.ComponentSocialMedia.selectSocialMedia.title;
      },
    },

    lastLink: {
      get() {
        return this.$store.state.ComponentSocialMedia.selectSocialMedia.link;
      },
    },

    lastImage1: {
      get() {
        return this.$store.state.ComponentSocialMedia.selectSocialMedia.image1;
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