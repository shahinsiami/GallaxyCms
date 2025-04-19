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
            >محصول</div>
            <div
              @click="showTab2"
              v-bind:class="[this.tab2 ? 'vpc_nav_item_selected' : '']"
              class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
            >توضیحات</div>
          </div>
        </div>
        <!---->
        <div class="row" v-bind:class="[this.tab1 ? '' : 'vpc_nav_item_selected_form']">
          <listSelector
            selectedItem="name"
            listName="محصول"
            listSource="allCroptForDescription"
            :getSource="this.$store.state.formCropDescription.allCroptForDescription"
            :lastValue="data.crop_id"
            @selectid=" data.crop_id = $event.id "
          ></listSelector>
        </div>
        <div class="row" v-bind:class="[this.tab2 ? '' : 'vpc_nav_item_selected_form']">
          <div class="col-12 col-6 my-2">
            <ckeditor
              @input="data.editor"
              :editor="editor"
              v-model="data.full_description"
              :config="editorConfig"
              @ready="onReady"
            ></ckeditor>
          </div>
        </div>
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
            Authorization: "Bearer " + localStorage.getItem("access_token"),
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
  name: "cropDescriptionEdit",
  data() {
    return {
      refreshPage: true,
      tab1: true,
      tab2: false,
      window: {
        headerid: "cropDescriptionEdit",
        title: "ویرایش توضیحات محصول",
        titleLine: "محصولات/توضیحات/ویرایش توضیحات محصول",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editCropDescription/",
        response: "selectCropDescription",
      },
      data: {
        crop_id: "",
        full_description: "",
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
    // method
    refresh() {
      (this.refreshPage = false),
        setTimeout(() => {
          this.refreshPage = true;
        }, 800);
    },
    // method
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
  },
  //compute
  computed: {
    lastId: {
      get() {
        if (this.$store.state.formCropDescription.selectCropDescription.id) {
          return this.$store.state.formCropDescription.selectCropDescription.id;
        } else {
          return "";
        }
      },
    },
    last_crop_id: {
      get() {
        return this.$store.state.formCropDescription.selectCropDescription
          .crop_id;
      },
    },
    last_crop_id_value: {
      get() {
        if (this.$store.state.formCropDescription.selectCropDescription.crop) {
          return this.$store.state.formCropDescription.selectCropDescription
            .crop;
        }
      },
    },
    last_full_description: {
      get() {
        return this.$store.state.formCropDescription.selectCropDescription
          .full_description;
      },
    },
  },
  //compute
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    last_crop_id: function () {
      this.data.crop_id = this.last_crop_id;
    },
    last_full_description: function () {
      this.data.full_description = this.last_full_description;
    },
  },
  //watch
};
</script>

