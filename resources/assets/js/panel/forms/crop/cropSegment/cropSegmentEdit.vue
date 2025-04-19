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
        <singleInput type="text" inputTitle="نام دسته" v-model="data.name"></singleInput>
        <singleInput type="number" inputTitle="اولویت" v-model="data.priority"></singleInput>
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <listSelector
          selectedItem="name"
          listName="والد"
          listSource="cropSubCategoryForCropSegment"
          :getSource="this.$store.state.formCropSegment.cropSubCategoryForCropSegment"
          :lastValue="data.crop_sub_category_id"
          @selectid=" data.crop_sub_category_id = $event.id "
        ></listSelector>
        <imageInput @file="data.image = $event" imageTitle="تصویر" :lastImageProp="this.data.image"></imageInput>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "cropSegmentEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "cropSegmentEdit",
        title: "ویرایش دسته محصول",
        titleLine: "محصولات/دسته بندی/دسته/ویرایش دسته محصول",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editCropSegment/",
        response: "selectCropSegment",
      },
      data: {
        id: "",
        name: "",
        description: "",
        priority: "",
        image: "",
        crop_sub_category_id: "",
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

    last_crop_sub_category_id: function () {
      this.data.crop_sub_category_id = this.last_crop_sub_category_id;
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
        if (this.$store.state.formCropSegment.selectCropSegment.id) {
          return this.$store.state.formCropSegment.selectCropSegment.id;
        } else {
          return "";
        }
      },
    },
    lastname: {
      get() {
        return this.$store.state.formCropSegment.selectCropSegment.name;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.formCropSegment.selectCropSegment.description;
      },
    },
    lastPriority: {
      get() {
        return this.$store.state.formCropSegment.selectCropSegment.priority;
      },
    },
    lastImage: {
      get() {
        return this.$store.state.formCropSegment.selectCropSegment.image;
      },
    },
    last_crop_sub_category_id: {
      get() {
        return this.$store.state.formCropSegment.selectCropSegment
          .crop_sub_category_id;
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
