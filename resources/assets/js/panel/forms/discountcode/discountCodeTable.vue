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
  name: "discountCodeTable",
  data() {
    return {
      window: {
        headerid: "discountCodeTable",
        title: "کدهای تخفیف محصولات",
                titleLine: "بن تخفیف/بن تخفیف/کدهای تخفیف محصولات",
      },
      table: {
        selectStore: "formDiscount",
        getData: "tableDiscount",
        openSelectRow: ["panel", "discountCodeEdit","ویرایش تخفیف محصولات"],
        selectRow: "selectDiscount",
        deleteRow: "/api/v1/deletDiscount/",
        excel: "/api/v1/excelDiscount",
        fileNmae: "discount.xls",
        column: [
          {
            title: "id",
            type: "number",
            headerType: "headerOrder",
            headerTitle: "شماره",
            col: "col-2",
          },
          {
            title: "name",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "عنوان",
            col: "col-2",
            searchable: "true",
          },
          {
            title: "code",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "کد",
            col: "col-2",
            searchable: "true",
          },
          {
            title: "count",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "تعداد",
            col: "col-2",
            searchable: "true",
          },
          {
            title: "enddate",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "تاریخ پایان",
            col: "col-2",
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

