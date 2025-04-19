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
  name: "statusInvoiceTempClientTable",
  data() {
    return {
      window: {
        headerid: "statusInvoiceTempClientTable",
        title: "فاکتور کاربران غیر عضو",
        titleLine: "فاکتور ها/فاکتور کاربران غیر عضو",
      },
      table: {
        selectStore: "formInvoiceTempClient",
        getData: "statusInvoiceTempClientTable",
        // openSelectRow: ["panel", "statusInvoiceForm", "جزییات فاکتور"],
        // selectRow: "selectStatusInvoice",
        editcolumnt: "/api/v1/editInvoiceTempClientColumn",
        editData: ["status"],
        // excel: "/api/v1/excelCategory",
        // fileNmae: "categories.xls",
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
            title: "temp_client",
            relation: "family",
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
            headerTitle: "وضعیت",
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
            title: "price_with_discount",
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
