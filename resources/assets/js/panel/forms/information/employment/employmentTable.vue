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
  name: "تصویر",
  data() {
    return {
      window: {
        headerid: "تصویر",
        title: "فرم های ارسالی",
        titleLine: "ارتباطات/استخدام/فرم ارسالی/ فرم های ارسالی",
      },
      table: {
        selectStore: "informationEmployment",
        getData: "تصویر",
        openSelectRow: ["panel", "employmentView","استخدادم"],
        selectRow: "selectEmployment",
        deleteRow: "/api/v1/deleteEmployment/",
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
            title: "name",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "نام",
            searchable: "true",
          },
          {
            title: "family",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "نام خانوادگی",
            searchable: "true",
          },
          {
            title: "job_position",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "موقعیت شغلی",
            searchable: "true",
          },
          {
            title: "created_at",
            type: "date",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "تاریخ ایجاد",
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
