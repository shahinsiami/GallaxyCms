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
  name: "sellerEvidenceTable",
  data() {
    return {
      window: {
        headerid: "sellerEvidenceTable",
        title: " مشاهده مدارک فروشگاه ها",
        titleLine: "فروشگاه/ تشکیل پرونده/ویرایش پرونده/مشاهده مدارک فروشگاه ها",
      },
      table: {
        selectStore: "formSellerEvidence",
        getData: "sellerEvidenceTable",
        openSelectRow: ["panel", "sellerEvidenceEdit"," مدارک"],
        selectRow: "selectSellerEvidence",
        deleteRow: "/api/v1/deleteSellerEvidence/",
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
            title: "storename",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "نام",
            searchable: "true",
          },
          {
            title: "status",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "وضعیت",
            searchable: "true",
          },
          {
            title: "owner",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "مالک",
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
