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
        <singleInput type="text" inputTitle="نام زیردسته" v-model="data.name"></singleInput>
        <singleInput type="number" inputTitle="اولویت" v-model="data.priority"></singleInput>
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <listSelector
          selectedItem="name"
          listName="والد"
          listSource="cropSegmentForCropSubSegment"
          :getSource="this.$store.state.formCropSubSegment.cropSegmentForCropSubSegment"
          :lastValue="null"
          @selectid=" data.crop_segment_id = $event.id "
        ></listSelector>
        <listSelector
          selectedItem="name"
          listName="رخداد"
          listSource="cropEventForCropSubSegment"
          :getSource="this.$store.state.formCropSubSegment.cropEventForCropSubSegment"
          :lastValue="null"
          @selectid=" data.crop_event_id = $event.id "
        ></listSelector>
        <imageInput :lastImageProp="this.data.image" @file="data.image = $event" imageTitle="تصویر"></imageInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cropSubSegmentForm",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "cropSubSegmentForm",
        title: "ثبت زیردسته محصول",
        titleLine: "محصولات/دسته بندی/زیردسته/ثبت زیردسته محصول",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registerCropSubSegment",
      },
      data: {
        name: "",
        description: "",
        priority: "",
        image: "",
        crop_segment_id: "",
        crop_event_id: "",
      },
    };
  },
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

