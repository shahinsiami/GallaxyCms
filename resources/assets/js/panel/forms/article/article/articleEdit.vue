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
      <div style="direction:rtl">
        <div class="row">
          <div class="d-flex flex-row w-100 justify-content-start align-items-center vpc_nav">
            <div
              @click="showTab1"
              v-bind:class="[this.tab1 ? 'vpc_nav_item_selected' : '']"
              class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
            >زیر مجموعه</div>
            <div
              @click="showTab2"
              v-bind:class="[this.tab2 ? 'vpc_nav_item_selected' : '']"
              class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
            >مشخصات مقاله</div>
            <div
              @click="showTab3"
              v-bind:class="[this.tab3 ? 'vpc_nav_item_selected' : '']"
              class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
            >متن مقاله</div>
            <div
              @click="showTab4"
              v-bind:class="[this.tab4 ? 'vpc_nav_item_selected' : '']"
              class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
            >تصاویر</div>
          </div>
        </div>
        <!---->
        <div class="row" v-bind:class="[this.tab1 ? '' : 'vpc_nav_item_selected_form']">
          <listSelector
            selectedItem="name"
            listName="مجموعه"
            listSource="categoryForArticle"
            :getSource="this.$store.state.formArticle.categoryForArticle"
            :lastValue="data.web_category_id"
            @selectid=" data.web_category_id = $event.id "
          ></listSelector>
          <listSelectorBySelection
            selectedItem="name"
            listName="زیر مجموعه"
            listSource="subCategoryForArticle"
            :getAllSource="this.$store.state.formArticle.subCategoryForArticle"
            :lastValue="data.web_sub_category_id"
            @selectid=" data.web_sub_category_id = $event.id "
            :selectionId="data.web_category_id"
            selectionList="subCategoryForArticleBySelection"
            :getSource="this.$store.state.formArticle.subCategoryForArticleBySelection"
          ></listSelectorBySelection>
          <listSelectorBySelection
            selectedItem="name"
            listName="دسته"
            listSource="SegmentForArticle"
            :getAllSource="this.$store.state.formArticle.SegmentForArticle"
            :lastValue="data.web_segment_id"
            @selectid=" data.web_segment_id = $event.id "
            :selectionId="data.web_sub_category_id"
            selectionList="SegmentForArticleBySelection"
            :getSource="this.$store.state.formArticle.SegmentForArticleBySelection"
          ></listSelectorBySelection>
          <listSelector
            selectedItem="name"
            listName="زبان"
            listSource="language"
            :getSource="this.$store.state.mainStore.language"
            :lastValue="data.page_language_id"
            @selectid=" data.page_language_id = $event.id "
          ></listSelector>
        </div>
        <!---->
        <div class="row" v-bind:class="[this.tab2 ? '' : 'vpc_nav_item_selected_form']">
          <singleInput type="text" inputTitle="عنوان مقاله" v-model="data.title"></singleInput>
          <singleInput type="text" inputTitle="موتور جستجو" v-model="data.seo"></singleInput>
          <singleInput type="number" inputTitle="اولویت" v-model="data.priority"></singleInput>
          <singleInput type="text" inputTitle="توضیحات کوتاه" v-model="data.shortdescription"></singleInput>
          <singleInput type="text" inputTitle="نویسنده" v-model="data.writer"></singleInput>
          <multiChoiceInput title="برچسب ها" :lastvalue="data.tag" @newMultiChoice="data.tag = $event"></multiChoiceInput>
        </div>
        <!---->
        <div class="row" v-bind:class="[this.tab3 ?'' : 'vpc_nav_item_selected_form']">
          <div class="col-12 col-6 my-2">
            <ckeditor
              @input="data.editor"
              :editor="editor"
              v-model="data.description"
              :config="editorConfig"
              @ready="onReady"
            ></ckeditor>
          </div>
        </div>
        <!---->
        <div class="row" v-bind:class="[this.tab4 ? '' : 'vpc_nav_item_selected_form']">
          <imageInput
            :lastImageProp="this.data.image1"
            @file="data.image1 = $event"
            imageTitle="تصویر 1"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.image2"
            @file="data.image2 = $event"
            imageTitle="تصویر 2"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.image3"
            @file="data.image3 = $event"
            imageTitle="تصویر 3"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.image4"
            @file="data.image4 = $event"
            imageTitle="تصویر 4"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.image5"
            @file="data.image5 = $event"
            imageTitle="تصویر 5"
          ></imageInput>
          <imageInput
            :lastImageProp="this.data.image6"
            @file="data.image6 = $event"
            imageTitle="تصویر 6"
          ></imageInput>
        </div>
        <!---->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
::-webkit-scrollbar {
  width: 3px;
  height: 3px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb:hover {
  background: #bdbdbd;
}
 .vpc_nav_item_selected_form{
   display: none;
  }  
</style>
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
  name: "articleEdit",
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      refreshPage: true,
      window: {
        headerid: "articleEdit",
        title: "ویرایش مقاله",
        titleLine: "مقاله / ویرایش مقاله",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editArticle/",
        response: "selectArticle",
      },
      data: {
        id: "",
        title: "",
        shortdescription: "",
        description: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        image6: "",
        seo: "",
        writer: "",
        tag: "[]",
        web_category_id: "",
        web_sub_category_id: "",
        web_segment_id: "",
        page_language_id: "",
        priority: "",
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
    // refresh
    refresh() {
      (this.refreshPage = false),
        setTimeout(() => {
          this.refreshPage = true;
        }, 800);
    },
    // refresh
    showTab1() {
      this.tab1 = true;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = false;
    },
    showTab2() {
      this.tab1 = false;
      this.tab2 = true;
      this.tab3 = false;
      this.tab4 = false;
    },
    showTab3() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = true;
      this.tab4 = false;
    },
    showTab4() {
      this.tab1 = false;
      this.tab2 = false;
      this.tab3 = false;
      this.tab4 = true;
    },
  },
  //method
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    lastTitle: function () {
      this.data.title = this.lastTitle;
    },
    lastDescription: function () {
      this.data.description = this.lastDescription;
    },
    lastShortDescription: function () {
      this.data.shortdescription = this.lastShortDescription;
    },
    lastImage1: function () {
      this.data.image1 = this.lastImage1;
    },
    lastImage2: function () {
      this.data.image2 = this.lastImage2;
    },
    lastImage3: function () {
      this.data.image3 = this.lastImage3;
    },
    lastImage4: function () {
      this.data.image4 = this.lastImage4;
    },
    lastImage5: function () {
      this.data.image5 = this.lastImage5;
    },
    lastImage6: function () {
      this.data.image6 = this.lastImage6;
    },
    lastTag: function () {
      this.data.tag = this.lastTag;
    },

    lastSeo: function () {
      this.data.seo = this.lastSeo;
    },
    lastWriter: function () {
      this.data.writer = this.lastWriter;
    },
    last_web_category_id: function () {
      this.data.web_category_id = this.last_web_category_id;
    },
    last_web_sub_category_id: function () {
      this.data.web_sub_category_id = this.last_web_sub_category_id;
    },
    last_web_segment_id: function () {
      this.data.web_segment_id = this.last_web_segment_id;
    },
    last_page_language_id: function () {
      this.data.page_language_id = this.last_page_language_id;
    },
    last_priority: function () {
      this.data.priority = this.last_priority;
    },
  },
  //watch
  //compute

  computed: {
    lastId: {
      get() {
        if (this.$store.state.formArticle.selectArticle.id) {
          return this.$store.state.formArticle.selectArticle.id;
        } else {
          return "";
        }
      },
    },
    lastTitle: {
      get() {
        return this.$store.state.formArticle.selectArticle.title;
      },
    },
    lastDescription: {
      get() {
        return this.$store.state.formArticle.selectArticle.description;
      },
    },
    lastShortDescription: {
      get() {
        return this.$store.state.formArticle.selectArticle.shortdescription;
      },
    },

    lastImage1: {
      get() {
        return this.$store.state.formArticle.selectArticle.image1;
      },
    },
    lastImage2: {
      get() {
        return this.$store.state.formArticle.selectArticle.image2;
      },
    },
    lastImage3: {
      get() {
        return this.$store.state.formArticle.selectArticle.image3;
      },
    },
    lastImage4: {
      get() {
        return this.$store.state.formArticle.selectArticle.image4;
      },
    },
    lastImage5: {
      get() {
        return this.$store.state.formArticle.selectArticle.image5;
      },
    },
    lastImage6: {
      get() {
        return this.$store.state.formArticle.selectArticle.image6;
      },
    },
    lastTag: {
      get() {
        if (this.$store.state.formArticle.selectArticle.tag) {
          return this.$store.state.formArticle.selectArticle.tag;
        } else {
          return "[]";
        }
      },
    },
    lastSeo: {
      get() {
        return this.$store.state.formArticle.selectArticle.seo;
      },
    },
    lastWriter: {
      get() {
        return this.$store.state.formArticle.selectArticle.writer;
      },
    },
    last_web_category_id: {
      get() {
        if (this.$store.state.formArticle.selectArticle.web_category_id) {
          return this.$store.state.formArticle.selectArticle.web_category_id;
        } else {
          return "";
        }
      },
    },
    last_web_sub_category_id: {
      get() {
        if (this.$store.state.formArticle.selectArticle.web_sub_category_id) {
          return this.$store.state.formArticle.selectArticle
            .web_sub_category_id;
        } else {
          return "";
        }
      },
    },
    last_web_segment_id: {
      get() {
        if (this.$store.state.formArticle.selectArticle.web_segment_id) {
          return this.$store.state.formArticle.selectArticle.web_segment_id;
        } else {
          return "";
        }
      },
    },
    last_page_language_id: {
      get() {
        return this.$store.state.formArticle.selectArticle.page_language_id;
      },
    },
    last_priority: {
      get() {
        return this.$store.state.formArticle.selectArticle.priority;
      },
    },
  },
  //compute
  created() {},
};
</script>