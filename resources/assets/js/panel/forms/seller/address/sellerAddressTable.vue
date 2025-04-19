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
  name: "sellerAddressTable",
  data() {
    return {
      window: {
        headerid: "sellerAddressTable",
        title: "آدرس فروشگاه ها",
        titleLine: "فروشگاه/نشانی فروشگاه/ آدرس فروشگاه ها ",
      },
      table: {
        selectStore: "formAddress",
        getData: "sellerAddressTable",
        openSelectRow: ["panel", "sellerAddressEdit", "ویرایش آدرس"],
        selectRow: "selectSellerAddress",
        deleteRow: "/api/v1/deletSellerAddress/",
        excel: "/api/v1/excelCategory",
        fileNmae: "categories.xls",
        column: [
          {
            title: "id",
            type: "number",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "شماره",
            searchable: "true",
          },
          {
            title: "state",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "استان",
            searchable: "true",
          },
          {
            title: "city",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "شهر",
            searchable: "true",
          },
          {
            title: "zone",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "منطقه",
            searchable: "true",
          },
          {
            title: "superscription",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "آدرس",
            searchable: "true",
          },
          {
            title: "operation",
            type: "operatoin",
            headerType: "headerOperation",
            col: "col-2",
          },
        ],
      },
    };
  },
};
</script>
