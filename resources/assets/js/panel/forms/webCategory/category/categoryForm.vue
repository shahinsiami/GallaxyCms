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
        <singleInput type="text" inputTitle="نام مجموعه" v-model="data.name"></singleInput>
        <singleInput type="number" inputTitle="اولویت" v-model="data.priority"></singleInput>
        <listSelector
          listName="قالب"
          selectedItem="name"
          listSource="template"
          :getSource="this.$store.state.mainStore.template"
          :lastValue="data.page_template_id"
          @selectid=" data.page_template_id = $event.id "
        ></listSelector>
        <listSelector
          listName="زبان"
          selectedItem="name"
          listSource="language"
          :getSource="this.$store.state.mainStore.language"
          :lastValue="data.page_language_id"
          @selectid=" data.page_language_id = $event.id "
        ></listSelector>
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <multiChoiceInput title="برچسب ها" lastvalue="[]" @newMultiChoice="data.tag = $event"></multiChoiceInput>
        <imageInput :lastImageProp="this.data.image" @file="data.image = $event" imageTitle="تصویر"></imageInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "categoryForm",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "categoryForm",
        title: "ثبت مجموعه",
        titleLine: "مجموعه / ثبت مجموعه",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registCategory",
      },
      data: {
        name: "",
        description: "",
        priority: "",
        image: "",
        page_template_id: "",
        page_language_id: "",
        tag: "[]",
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
