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
        <singleInput type="text" inputTitle="توضیحات" v-model="data.description"></singleInput>
        <listSelector
          selectedItem="name"
          listName="والد"
          listSource="subCategoryForSegment"
          :getSource="this.$store.state.formSegment.subCategoryForSegment"
          :lastValue="null"
          @selectid=" data.web_sub_category_id = $event.id "
        ></listSelector>
        <listSelector
          selectedItem="name"
          listName="والد"
          listSource="subCategoryForSegment"
          :getSource="this.$store.state.formSegment.subCategoryForSegment"
          :lastValue="data.web_sub_category_id"
          @selectid=" data.web_sub_category_id = $event.id "
        ></listSelector>

        <listSelector
          selectedItem="name"
          listName="قالب"
          listSource="template"
          :getSource="this.$store.state.mainStore.template"
          :lastValue="data.page_template_id"
          @selectid=" data.page_template_id = $event.id "
        ></listSelector>
        <multiChoiceInput
          title="برچسب ها"
          :lastvalue="data.tag"
          @newMultiChoice="data.tag = $event"
        ></multiChoiceInput>

        <imageInput @file="data.image = $event" imageTitle="تصویر" :lastImageProp="this.data.image"></imageInput>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "segmentEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "segmentEdit",
        title: "ویرایش دسته",
        titleLine: "دسته / ویرایش دسته ",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editSegment/",
        response: "selectSegment",
      },
      data: {
        id: "",
        name: "",
        description: "",
        priority: "",
        image: "",
        page_tempalte_id: "",
        web_sub_category_id: "",
        page_language_id: "",
        tag: "[]",
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
    last_page_template_id: function () {
      this.data.page_template_id = this.last_page_template_id;
    },
    last_web_sub_category_id: function () {
      this.data.web_sub_category_id = this.last_web_sub_category_id;
    },
    last_page_language_id: function () {
      this.data.page_language_id = this.last_page_language_id;
    },
    lastTag: function () {
      this.data.tag = this.lastTag;
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
        if (this.$store.state.formSegment.selectSegment.id) {
          return this.$store.state.formSegment.selectSegment.id;
        } else {
          return "";
        }
      },
    },
    lastname: {
      get() {
        return this.$store.state.formSegment.selectSegment.name;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.formSegment.selectSegment.description;
      },
    },
    lastPriority: {
      get() {
        return this.$store.state.formSegment.selectSegment.priority;
      },
    },
    lastImage: {
      get() {
        return this.$store.state.formSegment.selectSegment.image;
      },
    },
    last_web_sub_category_id: {
      get() {
        return this.$store.state.formSegment.selectSegment.web_sub_category_id;
      },
    },
    last_page_template_id: {
      get() {
        return this.$store.state.formSegment.selectSegment.page_template_id;
      },
    },
    last_page_language_id: {
      get() {
        return this.$store.state.formSegment.selectSegment.page_language_id;
      },
    },
    lastTag: {
      get() {
        if (this.$store.state.formSegment.selectSegment.tag) {
          return this.$store.state.formSegment.selectSegment.tag;
        } else {
          return "[]";
        }
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
