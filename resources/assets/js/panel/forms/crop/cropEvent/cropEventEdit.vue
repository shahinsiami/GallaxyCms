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
        <singleInput type="text" inputTitle="نام رخداد" v-model="data.name"></singleInput>
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <singleInput type="number" inputTitle="درصد" v-model="data.percentage"></singleInput>
        <imageInput @file="data.image = $event" imageTitle="تصویر" :lastImageProp="this.data.image"></imageInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cropEventEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "cropEventEdit",
        title: "ویرایش رخداد محصول",
        titleLine: "محصولات/خصوصیات/رویداد/ویرایش رخداد محصول",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editCropEvent/",
        response: "selectCropEvent",
      },
      data: {
        id: "",
        name: "",
        description: "",
        percentage: "",
        image: "",
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
    lastPercentage: function () {
      this.data.percentage = this.lastPercentage;
    },
    lastImage: function () {
      this.data.image = this.lastImage;
    },
  },
  //watch
  computed: {
    lastId: {
      get() {
        if (this.$store.state.formCropEvent.selectCropEvent.id) {
          return this.$store.state.formCropEvent.selectCropEvent.id;
        } else {
          return "";
        }
      },
    },
    lastname: {
      get() {
        return this.$store.state.formCropEvent.selectCropEvent.name;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.formCropEvent.selectCropEvent.description;
      },
    },
    lastPercentage: {
      get() {
        return this.$store.state.formCropEvent.selectCropEvent.percentage;
      },
    },
    lastImage: {
      get() {
        return this.$store.state.formCropEvent.selectCropEvent.image;
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

