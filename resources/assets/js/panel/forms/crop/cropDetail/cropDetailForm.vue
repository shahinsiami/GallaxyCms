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
        <singleInput type="text" inputTitle="نام زیر مجموعه" v-model="data.name"></singleInput>
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <listSelector
          selectedItem="name"
          listName="زیر دسته"
          listSource="cropSubSegmentForCropDetail"
          :getSource="this.$store.state.formCropDetail.cropSubSegmentForCropDetail"
          :lastValue="null"
          @selectid=" data.crop_sub_segment_id = $event.id"
        ></listSelector>
        <multiChoiceInput title="خصوصیات" lastvalue="[]" @newMultiChoice="data.attribute = $event"></multiChoiceInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cropDetailForm",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "cropDetailForm",
        title: "ثبت خصوصیات محصول",
        titleLine: "محصولات/خصوصیات/خصوصیات/ثبت خصوصیات محصول",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registerCropDetail",
      },
      data: {
        name: "",
        description: "",
        crop_sub_segment_id: "",
        attribute: "",
      },
    };
  },
  //model
  //method
  methods: {
    // refresh
    refresh() {
      this.refreshPage = false;
      for (let key in this.data) {
        this.data[key] = "";
      }
      setTimeout(() => {
        this.refreshPage = true;
      }, 1000);
    },
    // refresh
  },
  //method
};
</script>

