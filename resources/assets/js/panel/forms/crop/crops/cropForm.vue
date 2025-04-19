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
          >مجموعه محصول</div>
          <div
            @click="showTab2"
            v-bind:class="[this.tab2 ? 'vpc_nav_item_selected' : '']"
            class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
          >مشخصات</div>
          <div
            @click="showTab3"
            v-bind:class="[this.tab3 ? 'vpc_nav_item_selected' : '']"
            class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
          >توضیحات</div>
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
          listSource="cropCategoryForCrops"
          :getSource="this.$store.state.formCrop.cropCategoryForCrops"
          :lastValue="null"
          @selectid=" temp.crop_category_id = $event.id "
        ></listSelector>
        <listSelectorBySelection
          selectedItem="name"
          listName="زیر مجموعه"
          listSource="cropSubcategoryForCrops"
          :getAllSource="this.$store.state.formCrop.cropSubcategoryForCrops"
          lastValue="null"
          @selectid=" temp.crop_sub_category_id = $event.id "
          :selectionId="temp.crop_category_id"
          selectionList="cropSubcategoryForCropsBySelection"
          :getSource="this.$store.state.formCrop.cropSubcategoryForCropsBySelection"
        ></listSelectorBySelection>
        <listSelectorBySelection
          selectedItem="name"
          listName="دسته"
          listSource="cropSegmentForCrops"
          :getAllSource="this.$store.state.formCrop.cropSegmentForCrops"
          lastValue="null"
          @selectid=" temp.crop_segment_id = $event.id "
          :selectionId="temp.crop_sub_category_id"
          selectionList="cropSegmentForCropsBySelection"
          :getSource="this.$store.state.formCrop.cropSegmentForCropsBySelection"
        ></listSelectorBySelection>
        <listSelectorBySelection
          selectedItem="name"
          listName="زیر دسته"
          listSource="cropSubSegmentForCrops"
          :getAllSource="this.$store.state.formCrop.cropSubSegmentForCrops"
          lastValue="null"
          @selectid=" data.crop_sub_segment_id = $event.id "
          :selectionId="temp.crop_segment_id"
          selectionList="cropSubSegmentForCropsBySelection"
          :getSource="this.$store.state.formCrop.cropSubSegmentForCropsBySelection"
        ></listSelectorBySelection>
      </div>
      <div class="row" v-bind:class="[this.tab2 ? '' : 'vpc_nav_item_selected_form']">
        <singleInput type="text" inputTitle="نام محصول" v-model="data.name"></singleInput>
        <singleInput type="text" inputTitle="برند" v-model="data.brand"></singleInput>
        <singleInput type="text" inputTitle="کشور سازنده" v-model="data.madein"></singleInput>
        <singleInput type="text" inputTitle="کلید واژه" v-model="data.meta"></singleInput>
        <singleInput type="number" inputTitle="بیشترین قیمت" v-model="data.maxprice"></singleInput>
        <singleInput type="number" inputTitle="کمترین قیمت" v-model="data.minprice"></singleInput>
        <listSelectorOptional
          selectedItem="name"
          listName="بسته بندی"
          :getSource="this.statusOption"
          :lastValue="null"
          @selectid=" data.packet = $event.id "
        ></listSelectorOptional>
      </div>
      <div class="row" v-bind:class="[this.tab3 ? '' : 'vpc_nav_item_selected_form']">
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
      <div class="row" v-bind:class="[this.tab4 ? '' : 'vpc_nav_item_selected_form']">
        <imageInput :lastImageProp="data.image1" @file="data.image1 = $event" imageTitle="تصویر 1"></imageInput>
        <imageInput :lastImageProp="data.image2" @file="data.image2 = $event" imageTitle="تصویر 2"></imageInput>
        <imageInput :lastImageProp="data.image3" @file="data.image3 = $event" imageTitle="تصویر 3"></imageInput>
        <imageInput :lastImageProp="data.image4" @file="data.image4 = $event" imageTitle="تصویر 4"></imageInput>
        <imageInput :lastImageProp="data.image5" @file="data.image5 = $event" imageTitle="تصویر 5"></imageInput>
        <imageInput :lastImageProp="data.image6" @file="data.image6 = $event" imageTitle="تصویر 6"></imageInput>
        <imageInput :lastImageProp="data.image7" @file="data.image7 = $event" imageTitle="تصویر 7"></imageInput>
        <imageInput :lastImageProp="data.image8" @file="data.image8 = $event" imageTitle="تصویر 8"></imageInput>
        <imageInput :lastImageProp="data.image9" @file="data.image9 = $event" imageTitle="تصویر 9"></imageInput>
        <imageInput
          :lastImageProp="data.image10"
          @file="data.image10 = $event"
          imageTitle="تصویر 10"
        ></imageInput>
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
  name: "cropForm",
  data() {
    return {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
     refreshPage: true,
      window: {
        headerid: "cropForm",
        title: "ثبت محصول",
        titleLine: "محصولات/محصولات/محصول/ثبت محصول",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registerCrop",
      },
      statusOption: [
        { id: 0, name: "بزرگ" },
        { id: 1, name: "متوسط" },
        { id: 2, name: "کوچک" },
      ],
      temp: {
        crop_category_id: "",
        crop_sub_category_id: "",
        crop_segment_id: "",
      },
      data: {
        crop_sub_segment_id: "",
        name: "",
        brand: "",
        madein: "",
        description: "",
        meta: "",
        maxprice: "",
        minprice: "",
        packet: "",
        image1: "",
        image2: "",
        image3: "",
        image4: "",
        image5: "",
        image6: "",
        image7: "",
        image8: "",
        image9: "",
        image10: "",
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
};
</script>