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
          >انتخاب کالا</div>
          <div
            @click="showTab2"
            v-bind:class="[this.tab2 ? 'vpc_nav_item_selected' : '']"
            class="vpc_nav_item d-flex flex-row justify-content-center align-items-center"
          >جزییات کالا</div>
        </div>
      </div>
      <!---->
      <div class="row" v-bind:class="[this.tab1 ? '' : 'vpc_nav_item_selected_form']">
        <listSelector
          selectedItem="name"
          listName="مجموعه"
          listSource="allCropSubSegmentForSellerProdcut"
          :getSource="this.$store.state.formSellerProdcut.allCropSubSegmentForSellerProdcut"
          :lastValue="null"
          @selectid=" data.crop_sub_segment_id = $event.id "
        ></listSelector>
        <listSelectorBySelection
          selectedItem="name"
          listName="محصول"
          listSource="productForSellerProduct"
          :getAllSource="this.$store.state.formSellerProdcut.productForSellerProduct"
          :lastValue="data.crop_id"
          @selectid=" data.crop_id = $event.id "
          :selectionId="data.crop_sub_segment_id"
          selectionList="productForSellerProdcutBySelection"
          :getSource="this.$store.state.formSellerProdcut.productForSellerProdcutBySelection"
        ></listSelectorBySelection>
        <listSelector
          selectedItem="name"
          listName="رویداد"
          listSource="allEventForSellerProduct"
          :getSource="this.$store.state.formSellerProdcut.allEventForSellerProduct"
          :lastValue="null"
          @selectid=" data.crop_event_id = $event.id "
        ></listSelector>
        <listSelector
          selectedItem="superscription"
          listName="شعبه فروش"
          listSource="sellerAddressForSellerProdcut"
          :getSource="this.$store.state.formSellerProdcut.sellerAddressForSellerProdcut"
          :lastValue="null"
          @selectid=" data.seller_addresse_id = $event.id "
        ></listSelector>
      </div>
      <div class="row" v-bind:class="[this.tab2 ? '' : 'vpc_nav_item_selected_form']">
        <singleInput type="number" inputTitle="قیمت (تومان)" v-model="data.seller_price"></singleInput>
        <singleInput type="number" inputTitle="موجودی (عدد)" v-model="data.count"></singleInput>
        <singleInput type="number" inputTitle="درصد تخفیف" v-model="data.discount"></singleInput>
        <singleInput type="text" inputTitle="گارانتی" v-model="data.guarantee"></singleInput>
        <multiChoiceInput lastvalue="[]" title="سایز" @newMultiChoice="data.size = $event"></multiChoiceInput>
        <colorInput lastvalue="[]" @addColor=" data.color = $event "></colorInput>
   
<datePicker inputTitle="تاریخ شروع" v-model="data.startdate"></datePicker>
<datePicker inputTitle="تاریخ پایان" v-model="data.enddate"></datePicker>

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
  name: "sellerProductForm",
  data() {
    return {
      tab1: true,
      tab2: false,
      refreshPage: true,
      window: {
        headerid: "sellerProductForm",
        title: "ثبت محصول برای فروش",
        titleLine: "فروش/ محصولات در حال فروش/ثبت محصول برای فروش ",
      },
      submit: {
        buttonTitle: "ثبت",
        axiosUrl: "/api/v1/registerSellerProduct",
      },

      data: {
        seller_price: "",
        count: "",
        discount: "",
        color: "[]",
        size: "[]",
        guarantee: "",
        crop_event_id: "",
        crop_sub_segment_id: "",
        crop_id: "",
        startdate: "",
        enddate: "",
        seller_addresse_id: "",
      },
    };
  },
  //method
  methods: {
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
  },
  //method
};
</script>




