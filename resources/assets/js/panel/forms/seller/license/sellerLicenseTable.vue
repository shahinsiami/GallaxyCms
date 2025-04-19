<template>
  <div class="content">
    <div class="row p-2">
      <div class="col-6 d-flex flex-row justify-content-center align-items-center"></div>
      <div class="col-6">
        <windowHeader :windowTitle="this.window.title" :windowTitleLine="this.window.titleLine"></windowHeader>
      </div>
    </div>
    <windowTableWithoutExcel
      :selectStore="this.table.selectStore"
      :getData="this.table.getData"
      :excel="this.table.excel"
      :tableColumn="this.table.column"
      :fileName="this.table.fileNmae"
      :selectRow="this.table.selectRow"
      :openSelectRow="this.table.openSelectRow"
      :deleteRow="this.table.deleteRow"
      firstColumnSearch="id"
    ></windowTableWithoutExcel>
  </div>
</template>
<style scoped>
</style>
<script>
export default {
  name: "sellerLicenseTable",
  data() {
    return {
      window: {
        headerid: "sellerLicenseTable",
        title: "مجوز ها",
        titleLine: "فروشگاه/ مجوز/مجوز فروش/ مجوزها",
      },
      table: {
        selectStore: "formSellerContract",
        getData: "sellerLicenseTable",
        openSelectRow: ["panel", "sellerLicenseForm", "ویرایش مجوز"],
        selectRow: "selectSellerLicense",
        deleteRow: null,
        excel: "/api/v1/excelStoreSubSegment",
        fileNmae: "storesegment.xls",
        column: [
          {
            headerTitle: "شماره",
            title: "id",
            type: "number",
            headerType: "headerOrder",
            col: "col-2",
          },
          {
            title: "name",
            headerTitle: "نام",
            type: "string",
            headerType: "headerTitle",
            col: "col-2",
            searchable: "true",
          },
          {
            title: "imagestore1",
            type: "img",
            headerType: "headerTitle",
            headerTitle: "تصویر",
            col: "col-4",
          },
          {
            title: "crop_category_id",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "دسته بندی",
            col: "col-2",
            searchable: "true",
          },
          {
            title: "operation",
            type: "operatoinWithoutDelete",
            headerType: "headerOperation",
            col: "col-2",
          },
        ],
      },
    };
  },
};
</script>

