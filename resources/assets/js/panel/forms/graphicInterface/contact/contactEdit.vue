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
        <singleInput type="text" inputTitle="عنوان اول" v-model="data.title1"></singleInput>
        <singleInput type="text" inputTitle="عنوان دوم" v-model="data.title2"></singleInput>
        <singleInput type="text" inputTitle="عنوان سوم" v-model="data.title3"></singleInput>
        <singleInput type="text" inputTitle="موتور جستجو" v-model="data.seo"></singleInput>
        <listSelectorOptional
          selectedItem="name"
          listName="وضعیت"
          :getSource="this.statusOption"
          :lastValue="data.status"
          @selectid=" data.status = $event.id "
        ></listSelectorOptional>
                 <listSelectorOptional
          selectedItem="name"
          listName="عنوان"
          :getSource="this.typeOption"
          :lastValue="data.type"
          @selectid=" data.type = $event.id "
        ></listSelectorOptional>
        <singleInput type="text" inputTitle="لینک صفحه" v-model="data.link"></singleInput>
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
        <div class="col-12 col-6 my-2">
          <ckeditor
            @input="data.editor"
            :editor="editor"
            v-model="data.description"
            :config="editorConfig"
            @ready="onReady"
          ></ckeditor>
        </div>
        <imageInput :lastImageProp="data.image1" @file="data.image1 = $event" imageTitle="تصویر 1"></imageInput>
        <imageInput :lastImageProp="data.image2" @file="data.image2 = $event" imageTitle="تصویر 2"></imageInput>
      </div>
    </div>
  </div>
</template>
<script>
//uploadAdapter
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

class UploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }
  upload() {
    return this.loader.file.then((uploadedFile) => {
      return new Promise((resolve, reject) => {
        const data = new FormData();
        data.append("upload", uploadedFile);
        data.append("title", "product");
        axios({
          url: "api/v1/ckUpload",
          method: "post",
          data,
          headers: {
            "Content-Type": "multipart/form-data;",
            Authorization:
              "Bearer " +
              (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null),
          },
          withCredentials: false,
        })
          .then((response) => {
            resolve({
              default: response.data.url,
            });
          })
          .catch((response) => {
            reject("Upload failed");
          });
      });
    });
  }
}

//uploadAdapter
export default {
  name: "contactEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "contactEdit",
        title: "ویرایش ارتباط با ما",
        titleLine: "ماژول/ماژول های ارتباطی/ارتباط با ما/ویرایش ارتباط با ما",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editContact/",
        response: "selectContact",
      },
      statusOption: [
        { id: 0, name: "غیر فعال" },
        { id: 1, name: "فعال" },
      ],
            typeOption:[
        { id: 0, name: "تلفن" },
        { id: 1, name: "فکس" },
        { id: 2, name: "ایمیل" },
        { id: 3, name: "نقشه" },
        { id: 4, name: "آدرس" },
        { id: 5, name: "شماره موبایل" },
        { id: 6, name: "شماره حساب" },
        { id: 7, name: "ساعت کاری" },
        { id: 8, name: "کد پستی" },
      ],
      data: {
        id: "",
        image1: "",
        image2: "",
        title1: "",
        title2: "",
        title3: "",
        description: "",
        link: "",
        seo: "",
        status: "",
        type: "",
        page_template_id: "",
        page_language_id: "",
      },
      // ckEditor,
      editor: DecoupledEditor,
      editorData: " ",
      editorConfig: {
        extraPlugins: [this.viraUploadFile],
        contentsLangDirection: "rtl",
        language: "fa",
      },
      // ckEditor
    };
  },
  //model
  //method
  methods: {
    // ckEditor
    onReady(editor) {
      editor.ui
        .getEditableElement()
        .parentElement.insertBefore(
          editor.ui.view.toolbar.element,
          editor.ui.getEditableElement()
        );
    },
    viraUploadFile(editor) {
      editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        return new UploadAdapter(loader);
      };
    },
    // ckEditor
    //refresh
    refresh() {
      (this.refreshPage = false),
        setTimeout(() => {
          this.refreshPage = true;
        }, 800);
    },
    //refresh
  },
  //method
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    lastTitle1: function () {
      this.data.title1 = this.lastTitle1;
    },
    lastTitle2: function () {
      this.data.title2 = this.lastTitle2;
    },
    lastTitle3: function () {
      this.data.title3 = this.lastTitle3;
    },
    lastDescription: function () {
      this.data.description = this.lastDescription;
    },
    lastStatus: function () {
      this.data.status = this.lastStatus;
    },
    lastLink: function () {
      this.data.link = this.lastLink;
    },
    lastSeo: function () {
      this.data.seo = this.lastSeo;
    },
    lastImage1: function () {
      this.data.image1 = this.lastImage1;
    },
    lastImage2: function () {
      this.data.image2 = this.lastImage2;
    },
    last_page_template_id: function () {
      this.data.page_template_id = this.last_page_template_id;
    },
    last_page_language_id: function () {
      this.data.page_language_id = this.last_page_language_id;
    },
      last_type: function () {
      this.data.type = this.last_type;
    },
  },
  //watch
  //compute
  computed: {
    lastId: {
      get() {
        if (this.$store.state.ComponentContact.selectContact.id) {
          return this.$store.state.ComponentContact.selectContact.id;
        } else {
          return "";
        }
      },
    },
    lastTitle1: {
      get() {
        return this.$store.state.ComponentContact.selectContact.title1;
      },
    },
    lastTitle2: {
      get() {
        return this.$store.state.ComponentContact.selectContact.title2;
      },
    },
    lastTitle3: {
      get() {
        return this.$store.state.ComponentContact.selectContact.title3;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.ComponentContact.selectContact.description;
      },
    },
    lastStatus: {
      get() {
        return this.$store.state.ComponentContact.selectContact.status;
      },
    },
    lastLink: {
      get() {
        return this.$store.state.ComponentContact.selectContact.link;
      },
    },
    lastSeo: {
      get() {
        return this.$store.state.ComponentContact.selectContact.seo;
      },
    },
    lastImage1: {
      get() {
        return this.$store.state.ComponentContact.selectContact.image1;
      },
    },
    lastImage2: {
      get() {
        return this.$store.state.ComponentContact.selectContact.image2;
      },
    },
    last_page_language_id: {
      get() {
        return this.$store.state.ComponentContact.selectContact
          .page_language_id;
      },
    },
    last_page_template_id: {
      get() {
        return this.$store.state.ComponentContact.selectContact
          .page_template_id;
      },
    },
    last_type:{
       get() {
        return this.$store.state.ComponentContact.selectContact
          .type;
      },
    }
  },
  //compute
};
</script>