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
        <singleInput type="text" inputTitle="نام مجموعه" v-model="data.name"></singleInput>
        <singleInput type="number" inputTitle="اولویت" v-model="data.priority"></singleInput>

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
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <imageInput @file="data.image = $event" imageTitle="تصویر" :lastImageProp="this.data.image"></imageInput>
      </div>
    </div>
    <!---->
  </div>
</template>
<style scoped>
</style>

<script>
export default {
  name: "cropCategoryEdit",
  //model
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "cropCategoryEdit",
        title: "ویرایش مجموعه محصولات",
        titleLine: "محصولات/دسته بندی/مجموعه/ویرایش مجموعه محصولات",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editCropCategory/",
        response: "selectCropCategory",
      },
      data: {
        id: "",
        name: "",
        description: "",
        priority: "",
        image: "",
        page_tempalte_id: "",
        page_language_id: "",
      },
    };
  },
  //model
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
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    lastname: function () {
      this.data.name = this.lastname;
    },
    lastDescription: function () {
      this.data.description = this.lastDescription;
    },
    lastPriority: function () {
      this.data.priority = this.lastPriority;
    },
    lastImage: function () {
      this.data.image = this.lastImage;
    },
    last_page_template_id: function () {
      this.data.page_template_id = this.last_page_template_id;
    },
    last_page_language_id: function () {
      this.data.page_language_id = this.last_page_language_id;
    },
  },
  //watch
  computed: {
    lastId: {
      get() {
        if (this.$store.state.formCropCategory.selectCropCategory.id) {
          return this.$store.state.formCropCategory.selectCropCategory.id;
        } else {
          return "";
        }
      },
    },
    lastname: {
      get() {
        return this.$store.state.formCropCategory.selectCropCategory.name;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.formCropCategory.selectCropCategory
          .description;
      },
    },
    lastPriority: {
      get() {
        return this.$store.state.formCropCategory.selectCropCategory.priority;
      },
    },
    lastImage: {
      get() {
        return this.$store.state.formCropCategory.selectCropCategory.image;
      },
    },
    last_page_language_id: {
      get() {
        return this.$store.state.formCropCategory.selectCropCategory
          .page_language_id;
      },
    },
    last_page_template_id: {
      get() {
        return this.$store.state.formCropCategory.selectCropCategory
          .page_template_id;
      },
    },
  },
  //compute
  created() {},
};
</script>
