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
  name: "cropDescriptionTable",
  data() {
    return {
      window: {
        headerid: "cropDescriptionTable",
        title: "توضیحات محصولات",
        titleLine: "محصولات/توضیحات/توضیحات محصولات",
      },
      table: {
        selectStore: "formCropDescription",
        getData: "cropDescriptionTable",
        openSelectRow: [
          "panel",
          "cropDescriptionEdit",
          "ویرایش توضیحات محصولات",
        ],
        selectRow: "selectCropDescription",
        deleteRow: "/api/v1/deleteCropDescription/",
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
            title: "full_description",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "توضیحات",
            col: "col-8",
            headerTitle: "توضیحات",
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

