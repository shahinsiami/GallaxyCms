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
  name: "cropMediaTable",
  data() {
    return {
      window: {
        headerid: "cropMediaTable",
        title: "فایل های محصولات",
        titleLine: "محصولات/محصولات/فایل/ فایل های محصولات",
      },
      table: {
        selectStore: "formCropMedia",
        getData: "cropMediaTable",
        openSelectRow: ["panel", "cropMediaEdit", "ویرایش فایل محصولات"],
        selectRow: "selectCropMedia",
        deleteRow: "/api/v1/deleteCropMedia/",
        excel: "/api/v1/excelProduct",
        fileNmae: "products.xls",
        column: [
          {
            title: "id",
            type: "number",
            headerType: "headerId",
            col: "col-2",
            headerType: "headerOrder",
            headerTitle: "شماره",
          },
          {
            title: "crop_id",
            type: "string",
            col: "col-2",
            headerType: "headerTitle",
            headerTitle: "شماره محصول",
          },
          {
            title: "file",
            type: "string",
            col: "col-6",
            headerType: "headerTitle",
            headerTitle: "فایل",
          },
          {
            title: "operation",
            type: "operatoinWithoutEdit",
            headerType: "headerOperation",
            col: "col-2",
          },
        ],
      },
    };
  },
};
</script>

