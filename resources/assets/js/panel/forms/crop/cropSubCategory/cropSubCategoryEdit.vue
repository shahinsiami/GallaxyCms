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
        <singleInput type="text" inputTitle="نام زیر مجموعه" v-model="data.name"></singleInput>
        <singleInput type="number" inputTitle="اولویت" v-model="data.priority"></singleInput>
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <listSelector
          selectedItem="name"
          listName="والد"
          listSource="cropCategoryForCropSubCategories"
          :getSource="this.$store.state.formCropSubCategory.cropCategoryForCropSubCategories"
          :lastValue="data.crop_category_id"
          @selectid=" data.crop_category_id = $event.id "
        ></listSelector>
        <imageInput :lastImageProp="this.data.image" @file="data.image = $event" imageTitle="تصویر"></imageInput>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cropSubCategoryEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "cropSubCategoryEdit",
        title: "ویرایش زیرمجموعه محصول",
        titleLine: "محصولات/دسته بندی/زیرمجموعه/ویرایش زیرمجموعه محصول",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editCropSubCategory/",
        response: "selectCropSubCategory",
      },
      data: {
        id: "",
        name: "",
        description: "",
        priority: "",
        image: "",
        crop_category_id: "",
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

    last_crop_category_id: function () {
      this.data.crop_category_id = this.last_crop_category_id;
    },
  },
  //watch
  computed: {
    minimizeRight: {
      get() {
        return (
          "right:" +
          15 *
            this.$store.state.mainStore.minnumber.indexOf(this.$options.name) +
          "% !important"
        );
      },
    },
    lastId: {
      get() {
        if (this.$store.state.formCropSubCategory.selectCropSubCategory.id) {
          return this.$store.state.formCropSubCategory.selectCropSubCategory.id;
        } else {
          return "";
        }
      },
    },
    lastname: {
      get() {
        return this.$store.state.formCropSubCategory.selectCropSubCategory.name;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.formCropSubCategory.selectCropSubCategory
          .description;
      },
    },
    lastPriority: {
      get() {
        return this.$store.state.formCropSubCategory.selectCropSubCategory
          .priority;
      },
    },
    lastImage: {
      get() {
        return this.$store.state.formCropSubCategory.selectCropSubCategory
          .image;
      },
    },

    last_crop_category_id: {
      get() {
        return this.$store.state.formCropSubCategory.selectCropSubCategory
          .crop_category_id;
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

