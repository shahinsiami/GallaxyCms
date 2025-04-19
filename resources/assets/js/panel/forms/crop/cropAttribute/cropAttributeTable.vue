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
  name: "cropAttributeTable",
  data() {
    return {
      window: {
        headerid: "cropAttributeTable",
        title: "جزئیات محصولات",
        titleLine: "محصولات/جزئیات/جزئیات محصولات",
      },
      table: {
        selectStore: "formCropAttribute",
        getData: "cropAttributeTable",
        openSelectRow: ["panel", "cropAttributeEdit", "ویرایش خصوصیات محصولات"],
        selectRow: "selectCropAttribute",
        deleteRow: "/api/v1/deleteCropAttribute/",
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
            title: "details",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "خصوصیات",
            col: "col-8",
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

