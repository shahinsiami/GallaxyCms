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
    <div style="direction:rtl" v-if="this.refreshPage" class="container-fluid">
      <div class="row">
        <div class="d-flex flex-row w-100 justify-content-start align-items-center vpc_nav">
          <div
            @click="showTab1"
            v-bind:class="[this.tab1 ? 'vpc_nav_item_selected' : '']"
            class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
          >مقاله اصلی</div>
          <div
            @click="showTab2"
            v-bind:class="[this.tab2 ? 'vpc_nav_item_selected' : '']"
            class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
          >مشخصات زیر مقاله</div>
          <div
            @click="showTab3"
            v-bind:class="[this.tab3 ? 'vpc_nav_item_selected' : '']"
            class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
          >متن زیر مقاله</div>
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
          selectedItem="title"
          listName="محتوا"
          listSource="articleForArticleSub"
          parameter="title"
          :getSource="this.$store.state.formArticleSub.articleForArticleSub"
          :lastValue="data.web_article_id"
          @selectid=" data.web_article_id = $event.id "
        ></listSelector>
      </div>
      <!---->
      <div class="row" v-bind:class="[this.tab2 ? '' : 'vpc_nav_item_selected_form']">
        <singleInput type="text" inputTitle="عنوان مقاله" v-model="data.title"></singleInput>
        <singleInput type="text" inputTitle="موتور جستجو" v-model="data.seo"></singleInput>
        <singleInput type="number" inputTitle="اولویت" v-model="data.priority"></singleInput>
        <singleInput type="text" inputTitle="توضیحات کوتاه" v-model="data.shortdescription"></singleInput>
        <multiChoiceInput title="برچسب ها" lastvalue="[]" @newMultiChoice="data.tag = $event"></multiChoiceInput>
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
.vpc_nav_item_selected_form {
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
  name: "articleSubForm",
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      refreshPage: true,
      window: {
        headerid: "articleSubForm",
        title: "ثبت زیر مقاله",
        titleLine: "زیر مقاله / ثبت زیر مقاله",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registerArticleSub",
      },

      data: {
        web_article_id: "",
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
        tag: "",
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
      this.setRefresh = false;
      for (let key in this.data) {
        this.data[key] = "";
      }
      setTimeout(() => {
        this.setRefresh = true;
      }, 1000);
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
};
</script>




