<template>
  <div class="content">
    <div class="row p-2">
      <div
        class="col-6 d-flex flex-row justify-content-center align-items-center"
      ></div>
      <div class="col-6">
        <windowHeader
          :windowTitle="this.window.title"
          :windowTitleLine="this.window.titleLine"
        ></windowHeader>
      </div>
    </div>
    <vpcWindowTableEditable
      :selectStore="this.table.selectStore"
      :getData="this.table.getData"
      :tableColumn="this.table.column"
      :fileName="this.table.fileNmae"
      :selectRow="this.table.selectRow"
      :openSelectRow="this.table.openSelectRow"
      :deleteRow="this.table.deleteRow"
      :editColumn="this.table.editcolumnt"
      :editData="this.table.editData"
      firstColumnSearch="id"
    ></vpcWindowTableEditable>
  </div>
</template>
<style scoped></style>
<script>
export default {
  name: "statusInvoiceTable",
  data() {
    return {
      window: {
        headerid: "statusInvoiceTable",
        title: "فاکتور کاربران",
        titleLine: "فاکتور ها/فاکتور کاربران",
      },
      table: {
        selectStore: "formInvoice",
        getData: "statusInvoiceTable",
        openSelectRow: ["panel", "statusInvoiceForm", "جزییات فاکتور"],
        selectRow: "selectStatusInvoice",
        editcolumnt: "/api/v1/editInvoiceColumnt",
        editData: ["status"],
        excel: "/api/v1/excelCategory",
        fileNmae: "categories.xls",
        column: [
          {
            title: "id",
            type: "number",
            headerType: "headerOrder",
            col: "col-1",
            headerTitle: "شماره",
            searchable: "true",
          },
          {
            title: "client",
            relation: "name",
            type: "relation",
            headerType: "headerTitle",
            col: "col-1",
            headerTitle: "نام خریدار",
          },
          {
            title: "price",
            type: "string",
            headerType: "headerOrder",
            headerTitle: "مبلغ کل",
            col: "col-2",
            searchable: "true",
          },
          {
            title: "discount",
            type: "string",
            headerType: "headerOrder",
            headerTitle: "تخفیف",
            col: "col-2",
            searchable: "true",
          },
          {
            title: "status",
            type: "selectbox",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "شماره",
            searchable: "true",
            selectBox: [
              { id: 1, name: "در انتظار پرداخت" },
              { id: 2, name: "در حال پردازش" },
              { id: 3, name: "تحویل شده" },
              { id: 4, name: "مرجوعی" },
              { id: 5, name: "لغو شده" },
            ],
          },
          {
            title: "amount_paid",
            type: "string",
            headerType: "headerOrder",
            headerTitle: "مبلغ پرداختی",
            col: "col-2",
            searchable: "true",
          },
          {
            title: "operation",
            type: "operationEditColumn",
            headerType: "headerOperation",
            col: "col-2",
          },
        ],
      },
    };
  },
};
</script>
