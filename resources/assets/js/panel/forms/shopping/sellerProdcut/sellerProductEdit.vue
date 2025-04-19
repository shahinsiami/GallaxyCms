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
            :lastValue="data.crop_sub_segment_id"
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
            :lastValue="data.crop_event_id"
            @selectid=" data.crop_event_id = $event.id "
          ></listSelector>
          <listSelector
            selectedItem="superscription"
            listName="شعبه فروش"
            listSource="sellerAddressForSellerProdcut"
            :getSource="this.$store.state.formSellerProdcut.sellerAddressForSellerProdcut"
            :lastValue="data.seller_addresse_id"
            @selectid=" data.seller_addresse_id = $event.id "
          ></listSelector>
        </div>
        <div class="row" v-bind:class="[this.tab2 ? '' : 'vpc_nav_item_selected_form']">
          <singleInput type="number" inputTitle="قیمت (تومان)" v-model="data.seller_price"></singleInput>
          <singleInput type="number" inputTitle="موجودی (عدد)" v-model="data.count"></singleInput>
          <singleInput type="number" inputTitle="درصد تخفیف" v-model="data.discount"></singleInput>
          <singleInput type="text" inputTitle="گارانتی" v-model="data.guarantee"></singleInput>
          <multiChoiceInput
            :lastvalue="data.size"
            title="سایز"
            @newMultiChoice="data.size = $event"
          ></multiChoiceInput>
          <colorInput :lastvalue="data.color" @addColor=" data.color = $event "></colorInput>
     
<datePicker inputTitle="تاریخ شروع" v-model="data.startdate"></datePicker>
<datePicker inputTitle="تاریخ پایان" v-model="data.enddate"></datePicker>
   
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
  name: "sellerProductEdit",
  data() {
    return {
      tab1: true,
      tab2: false,
      refreshPage: true,
      window: {
        headerid: "sellerProductEdit",
        title: "ویرایش محصول در حال فروش",
        titleLine: "فروش/ محصولات در حال فروش/ویرایش محصول در حال فروش",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editSellerProduct/",
        response: "selectArticle",
      },
      data: {
        id: "",
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
  //model
  //method
  methods: {
    // refresh
    refresh() {
      (this.refreshPage = false),
        setTimeout(() => {
          this.refreshPage = true;
        }, 800);
    },
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
    // refresh
  },
  //method
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    last_seller_price: function () {
      this.data.seller_price = this.last_seller_price;
    },
    lastCount: function () {
      this.data.count = this.lastCount;
    },
    lastDiscount: function () {
      this.data.discount = this.lastDiscount;
    },
    lastColor: function () {
      this.data.color = this.lastColor;
    },
    lastSize: function () {
      this.data.size = this.lastSize;
    },
    lastGuarantee: function () {
      this.data.guarantee = this.lastGuarantee;
    },
    last_crop_event_id: function () {
      this.data.crop_event_id = this.last_crop_event_id;
    },
    last_crop_sub_segment_id: function () {
      this.data.crop_sub_segment_id = this.last_crop_sub_segment_id;
    },
    last_crop_id: function () {
      this.data.crop_id = this.last_crop_id;
    },
    lastStartdate: function () {
      this.data.startdate = this.lastStartdate;
    },
    lastEnddate: function () {
      this.data.enddate = this.lastEnddate;
    },
    last_seller_addresse_id: function () {
      this.data.seller_addresse_id = this.last_seller_addresse_id;
    },
  },
  //watch
  //compute
  computed: {
    lastId: {
      get() {
        if (this.$store.state.formSellerProdcut.selectSellerProduct.pid) {
          return this.$store.state.formSellerProdcut.selectSellerProduct.pid;
        } else {
          return "";
        }
      },
    },
    crop: {
      get() {
        if (this.$store.state.formSellerProdcut.selectSellerProduct) {
          if (this.$store.state.formSellerProdcut.selectSellerProduct.product) {
            return this.$store.state.formSellerProdcut.selectSellerProduct
              .product.name;
          }
        } else {
          return "";
        }
      },
    },
    last_seller_price: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct
          .seller_price;
      },
    },
    lastCount: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct.count;
      },
    },
    lastDiscount: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct.discount;
      },
    },
    lastColor: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct.color;
      },
    },
    lastSize: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct.size;
      },
    },
    lastGuarantee: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct
          .guarantee;
      },
    },
    last_crop_event_id: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct
          .crop_event_id;
      },
    },
    last_crop_sub_segment_id: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct
          .crop_sub_segment_id;
      },
    },
    last_crop_id: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct.crop_id;
      },
    },
    lastStartdate: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct
          .startdate;
      },
    },
    lastEnddate: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct.enddate;
      },
    },
    last_seller_addresse_id: {
      get() {
        return this.$store.state.formSellerProdcut.selectSellerProduct
          .seller_addresse_id;
      },
    },
  },
  //compute
  created() {},
};
</script>








