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
        <singleInput type="text" inputTitle="نام زیردسته" v-model="data.name"></singleInput>
        <singleInput type="number" inputTitle="اولویت" v-model="data.priority"></singleInput>
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>

        <listSelector
          selectedItem="name"
          listName="والد"
          listSource="cropSegmentForCropSubSegment"
          :getSource="this.$store.state.formCropSubSegment.cropSegmentForCropSubSegment"
          :lastValue="data.crop_segment_id"
          @selectid=" data.crop_segment_id = $event.id "
        ></listSelector>
        <listSelector
          listName="رخداد"
          listSource="cropEventForCropSubSegment"
          :getSource="this.$store.state.formCropSubSegment.cropEventForCropSubSegment"
          :lastValue="data.crop_event_id"
          @selectid=" data.crop_event_id = $event.id "
        ></listSelector>
        <imageInput @file="data.image = $event" imageTitle="تصویر" :lastImageProp="this.data.image"></imageInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cropSubSegmentEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "cropSubSegmentEdit",
        title: "ویرایش زیردسته محصول",
        titleLine: "محصولات/دسته بندی/زیردسته/ویرایش زیردسته محصول",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editCropSubSegment/",
        response: "selectCropSubSegment",
      },
      data: {
        id: "",
        name: "",
        description: "",
        priority: "",
        image: "",
        crop_segment_id: "",
        crop_event_id: "",
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
    last_crop_segment_id: function () {
      this.data.crop_segment_id = this.last_crop_segment_id;
    },
    last_crop_event_id: function () {
      this.data.crop_event_id = this.last_crop_event_id;
    },
  },
  //watch
  computed: {
    lastId: {
      get() {
        if (this.$store.state.formCropSubSegment.selectCropSubSegment.id) {
          return this.$store.state.formCropSubSegment.selectCropSubSegment.id;
        } else {
          return "";
        }
      },
    },
    lastname: {
      get() {
        return this.$store.state.formCropSubSegment.selectCropSubSegment.name;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.formCropSubSegment.selectCropSubSegment
          .description;
      },
    },
    lastPriority: {
      get() {
        return this.$store.state.formCropSubSegment.selectCropSubSegment
          .priority;
      },
    },
    lastImage: {
      get() {
        return this.$store.state.formCropSubSegment.selectCropSubSegment.image;
      },
    },
    last_crop_segment_id: {
      get() {
        return this.$store.state.formCropSubSegment.selectCropSubSegment
          .crop_segment_id;
      },
    },
    last_crop_event_id: {
      get() {
        return this.$store.state.formCropSubSegment.selectCropSubSegment
          .crop_event_id;
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
