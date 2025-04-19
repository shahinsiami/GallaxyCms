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
  name: "cropEventTable",
  data() {
    return {
      window: {
        headerid: "cropEventTable",
        title: "رخدادهای محصولات",
        titleLine: "محصولات/خصوصیات/رویداد/رخدادهای محصولات",
      },
      table: {
        selectStore: "formCropEvent",
        getData: "cropEventTable",
        openSelectRow: ["panel", "cropEventEdit", "ویرایش دخداد محصولات"],
        selectRow: "selectCropEvent",
        deleteRow: "/api/v1/deleteCropEvent/",
        excel: "/api/v1/excelEvent",
        fileNmae: "event.xls",
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
            title: "name",
            type: "string",
            headerType: "headerName",
            col: "col-2",
            headerType: "headerOrder",
            headerTitle: "نام",
          },
          {
            title: "image",
            type: "img",
            headerType: "headerTitle",
            headerTitle: "تصویر",
            col: "col-2",
          },
          {
            title: "description",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "توضیحات",
            col: "col-4",
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

