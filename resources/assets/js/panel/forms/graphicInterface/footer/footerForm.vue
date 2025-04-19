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
                        <singleInput type="text" inputTitle="نام" v-model="data.name"></singleInput>
                        <singleInput type="text" inputTitle="عنوان اول" v-model="data.title1"></singleInput>
                        <singleInput type="text" inputTitle="عنوان دوم" v-model="data.title2"></singleInput>
                        <singleInput type="text" inputTitle="عنوان سوم" v-model="data.title3"></singleInput>
                        <singleInput type="text" inputTitle="عنوان چهارم" v-model="data.title4"></singleInput>
                        <singleInput type="text" inputTitle="عنوان پنجم" v-model="data.title5"></singleInput>
                        <singleInput type="text" inputTitle="عنوان ششم" v-model="data.title6"></singleInput>
                       <div class="col-12 col-6 my-2">
          <ckeditor 
            @input="data.editor"
            :editor="editor"
            v-model="data.description"
            :config="editorConfig"
            @ready="onReady"
          ></ckeditor>
        </div>
                        <singleInput type="text" inputTitle=" موتور جستجو" v-model="data.seo"></singleInput>
                        <singleInput type="text" inputTitle="لینک صفحه" v-model="data.link"></singleInput>
                        <listSelectorOptional
                             selectedItem="name"
                          listName="وضعیت"
                          :getSource="this.statusOption"
                          :lastValue="data.status"
                          @selectid=" data.status = $event.id "
                        ></listSelectorOptional>
                        <listSelector
                             selectedItem="name"
                          listName="قالب"
                          listSource="template"
                          :getSource="this.$store.state.mainStore.template"
                          :lastValue="data.page_template_id"
                          @selectid=" data.page_template_id = $event.id "
                        ></listSelector>
                        <listSelectorOptional
                             selectedItem="name"
                          listName="قسمت"
                          :getSource="this.$store.state.mainStore.section"
                          @selectid=" data.section = $event.id "
                          :lastValue="data.section"
                        ></listSelectorOptional>
                        <listSelector
                             selectedItem="name"
                          listName="زبان"
                          listSource="language"
                          :getSource="this.$store.state.mainStore.language"
                          :lastValue="data.page_language_id"
                          @selectid=" data.page_language_id = $event.id "
                        ></listSelector>

                        <imageInput
                          :lastImageProp="this.data.image1"
                          @file="data.image1 = $event"
                          imageTitle="تصویر"
                        ></imageInput>
                        <imageInput
                          :lastImageProp="this.data.image2"
                          @file="data.image2 = $event"
                          imageTitle="تصویر"
                        ></imageInput>
                  
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
    return this.loader.file.then(uploadedFile => {
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
                : null)
          },
          withCredentials: false
        })
          .then(response => {
            resolve({
              default: response.data.url
            });
          })
          .catch(response => {
            reject("Upload failed");
          });
      });
    });
  }
}

//uploadAdapter
export default {
  name: "footerForm",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "footerForm",
        title: "ثبت پاورقی",
        titleLine: "ماژول/ماژول های گرافیکی/پاورقی/ثبت پاورقی"
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registerFooter"
      },
      statusOption: [
        { id: 0, name: "غیر فعال" },
        { id: 1, name: "فعال" }
      ],
      data: {
        name: "",
        image1: "",
        image2: "",
        title1: "",
        title2: "",
        title3: "",
        section: "",
        title4: "",
        title5: "",
        title6: "",
        description: "",
        link: "",
        seo: "",
        status: "",
        type: "",
        page_template_id: "",
        page_language_id: ""
      },
           // ckEditor,
      editor: DecoupledEditor,
      editorData: " ",
      editorConfig: {
        extraPlugins: [this.viraUploadFile],
        contentsLangDirection: "rtl",
        language: "fa"
      }
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
      editor.plugins.get("FileRepository").createUploadAdapter = loader => {
        return new UploadAdapter(loader);
      };
    },
    // ckEditor
    refresh() {
      this.refreshPage = false;
      for (let key in this.data) {
        this.data[key] = "";
      }
      setTimeout(() => {
        this.refreshPage = true;
      }, 1000);
    }
  },
  //method
};
</script>
