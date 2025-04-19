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
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <listSelector
          selectedItem="name"
          listName="زیر دسته"
          listSource="cropSubSegmentForCropDetail"
          :getSource="this.$store.state.formCropDetail.cropSubSegmentForCropDetail"
          :lastValue="data.crop_sub_segment_id"
          @selectid=" data.crop_sub_segment_id = $event.id"
        ></listSelector>
        <multiChoiceInput
          title="خصوصیات"
          :lastvalue="data.attribute"
          @newMultiChoice="data.attribute = $event"
        ></multiChoiceInput>
      </div>
    </div>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "cropDetailEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "cropDetailEdit",
        title: "ویرایش خصوصیات محصول",
        titleLine: "محصولات/خصوصیات/خصوصیات/ویرایش خصوصیات محصول",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editCropDetail/",
        response: "selectCropDetail",
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
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    lastName: function () {
      this.data.name = this.lastName;
    },
    lastDescription: function () {
      this.data.description = this.lastDescription;
    },
    last_crop_sub_segment_id: function () {
      this.data.crop_sub_segment_id = this.last_crop_sub_segment_id;
    },
    lastAttribute: function () {
      this.data.attribute = this.lastAttribute;
    },
  },
  //watch
  computed: {
    lastId: {
      get() {
        if (this.$store.state.formCropDetail.selectCropDetail.id) {
          return this.$store.state.formCropDetail.selectCropDetail.id;
        } else {
          return "";
        }
      },
    },
    lastName: {
      get() {
        return this.$store.state.formCropDetail.selectCropDetail.name;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.formCropDetail.selectCropDetail.description;
      },
    },
    last_crop_sub_segment_id: {
      get() {
        return this.$store.state.formCropDetail.selectCropDetail
          .crop_sub_segment_id;
      },
    },
    lastAttribute: {
      get() {
        return this.$store.state.formCropDetail.selectCropDetail.attribute;
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
