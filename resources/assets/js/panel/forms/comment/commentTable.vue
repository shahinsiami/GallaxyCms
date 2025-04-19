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
      :acceptRow="this.table.acceptRow"
      :rejectRow="this.table.rejectRow"
      firstColumnSearch="id"
    ></windowTableWithoutExcel>
  </div>
</template>
<style scoped>
</style>


<script>
export default {
  name: "commentTable",
  data() {
    return {
      window: {
        headerid: "commentTable",
        title: "نظرات",
        titleLine: "نظرات / محتوای نظرات ",
      },
      table: {
        selectStore: "formComment",
        getData: "commentTable",
        acceptRow: "/api/v1/accecptComment/",
        rejectRow: "/api/v1/rejectComment/",
        excel: "/api/v1/excelArticle",
        fileNmae: "categories.xls",
        column: [
          {
            title: "status",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "وضعیت",
            searchable: "true",
          },
          {
            title: "title",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "نام",
            searchable: "true",
          },
          {
            title: "body",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "توضیحات",
            col: "col-4",
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
            type: "acceptAndReject",
            headerType: "headerOperation",
            col: "col-2",
          },
        ],
      },
    };
  },
};
</script>

