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
        <singleInput type="text" inputTitle="عنوان " v-model="data.name"></singleInput>
        <singleInput type="text" inputTitle="کد" v-model="data.code"></singleInput>
        <singleInput type="number" inputTitle="درصد" v-model="data.percentage"></singleInput>
        <listSelectorOptional
          selectedItem="name"
          listName="وضعیت"
          :getSource="this.stutsOption"
          :lastValue="data.status"
          @selectid=" data.status = $event.id "
        ></listSelectorOptional>
        <singleInput type="number" inputTitle="حداقل قیمت " v-model="data.minprice"></singleInput>
        <singleInput type="number" inputTitle="حداکثر قیمت " v-model="data.maxprice"></singleInput>
        <singleInput type="number" inputTitle="تعداد " v-model="data.count"></singleInput>

         <datePicker inputTitle="تاریخ شروع" v-model="data.startdate"></datePicker>
     
        <datePicker inputTitle="تاریخ پایان" v-model="data.enddate"></datePicker>
      </div>
    </div>
  </div>
</template>
<script>
var moment = require("moment-jalaali");
export default {
  name: "discountCodeEdit",
  data() {
    return {
      refreshPage: true,
      window: {
        headerid: "discountCodeEdit",
        title: "ویرایش کد تخفیف محصول",
        titleLine: "بن تخفیف/بن تخفیف/ویرایش کد تخفیف محصول",
      },
      edit: {
        buttonTitle: "ویرایش",
        axiosUrl: "/api/v1/editDiscount/",
        response: "selectDiscount",
      },
      stutsOption: [
        { id: 0, name: "غیر فعال" },
        { id: 1, name: "فعال" },
      ],
      data: {
        name: "",
        code: "",
        count: "",
        minprice: "",
        maxprice: "",
        percentage: "",
        status: "",
        startdate: "",
        enddate: "",
      },
    };
  },
  //model
  //watch
  watch: {
    lastId: function () {
      this.data.id = this.lastId;
    },
    lastname: function () {
      this.data.name = this.lastname;
    },
    lastcode: function () {
      this.data.code = this.lastcode;
    },
    lastcount: function () {
      this.data.count = this.lastcount;
    },
    lastminprice: function () {
      this.data.minprice = this.lastminprice;
    },
    lastmaxprice: function () {
      this.data.maxprice = this.lastmaxprice;
    },
    lastpercentage: function () {
      this.data.percentage = this.lastpercentage;
    },
    lastStatus: function () {
      this.data.status = this.lastStatus;
    },
    lastStartDate: function () {
      this.data.startdate = this.lastStartDate;
    },
    lastEndDate: function () {
      this.data.enddate = this.lastEndDate;
    },
  },
  //watch
  //compute

  computed: {
    lastId: {
      get() {
        return this.$store.state.formDiscount.selectDiscount.id;
      },
    },
    lastname: {
      get() {
        return this.$store.state.formDiscount.selectDiscount.name;
      },
    },
    lastcode: {
      get() {
        return this.$store.state.formDiscount.selectDiscount.code;
      },
    },
    lastcount: {
      get() {
        return this.$store.state.formDiscount.selectDiscount.count;
      },
    },
    lastminprice: {
      get() {
        return this.$store.state.formDiscount.selectDiscount.minprice;
      },
    },
    lastmaxprice: {
      get() {
        return this.$store.state.formDiscount.selectDiscount.maxprice;
      },
    },
    lastpercentage: {
      get() {
        return this.$store.state.formDiscount.selectDiscount.percentage;
      },
    },
    lastStatus: {
      get() {
        return this.$store.state.formDiscount.selectDiscount.status;
      },
    },
    lastStartDate: {
      get() {
        if (this.$store.state.formDiscount.selectDiscount.startdate) {
          return moment(
            this.$store.state.formDiscount.selectDiscount.startdate,
            "YYYY-MM-DD HH:mm:ss"
          ).format("jYYYY-jMM-jDD HH:mm:ss");
        }
      },
    },
    lastEndDate: {
      get() {
        if (this.$store.state.formDiscount.selectDiscount.enddate) {
          return moment(
            this.$store.state.formDiscount.selectDiscount.enddate,
            "YYYY-MM-DD HH:mm:ss"
          ).format("jYYYY-jMM-jDD HH:mm:ss");
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

