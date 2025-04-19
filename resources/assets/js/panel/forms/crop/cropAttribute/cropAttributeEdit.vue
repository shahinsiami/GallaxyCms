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
            >جزییات محصول</div>
          </div>
        </div>
        <!---->
        <div class="row" v-bind:class="[this.tab1 ? '' : 'vpc_nav_item_selected_form']">
          <keyValueInput
            :sourceId="this.crop_sub_segment_id"
            source="cropDetailForCrops"
            :getSource="this.$store.state.formCrop.cropDetailForCrops"
            @result="data.details = $event"
            :lastKeyValue="this.lastDetails"
          ></keyValueInput>
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
export default {
  name: "cropAttributeEdit",
  //model
  data() {
    return {
      tab1: true,
      refreshPage: true,
      window: {
        headerid: "cropAttributeEdit",
        title: "ویرایش جزئیات محصول",
        titleLine: "محصولات/جزئیات/ ویرایش جزئیات محصول ",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editCropAttribute/",
        response: "selectCropAttribute",
      },
      crop_sub_segment_id: "",
      data: {
        crop_id: "",
        details: "",
      },
    };
  },
  //model
  //method
  methods: {
    refresh() {
      (this.refreshPage = false),
        setTimeout(() => {
          this.refreshPage = true;
        }, 800);
    },
    showTab1() {
      this.tab1 = true;
    },
  },
  //method
  //compute
  computed: {
    lastId: {
      get() {
        if (this.$store.state.formCropAttribute.selectCropAttribute.id) {
          return this.$store.state.formCropAttribute.selectCropAttribute.id;
        } else {
          return "";
        }
      },
    },

    last_crop_id_value: {
      get() {
        if (this.$store.state.formCropAttribute.selectCropAttribute.crop) {
          return this.$store.state.formCropAttribute.selectCropAttribute.crop
            .crop_sub_segment_id;
        }
      },
    },
    lastDetails: {
      get() {
        if (this.$store.state.formCropAttribute.selectCropAttribute) {
          return this.$store.state.formCropAttribute.selectCropAttribute
            .details;
        }
      },
    },
    last_crop_id: {
      get() {
        if (this.$store.state.formCropAttribute.selectCropAttribute) {
          return this.$store.state.formCropAttribute.selectCropAttribute
            .crop_id;
        }
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
    lastDetails: function () {
      this.data.details = this.lastDetails;
    },
    last_crop_id_value: function () {
      this.crop_sub_segment_id = " ";
      setTimeout(() => {
        this.crop_sub_segment_id = this.last_crop_id_value;
      }, 100);
    },
  },
  //watch
};
</script>

