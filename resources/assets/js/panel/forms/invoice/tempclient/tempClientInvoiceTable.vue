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
  name: "tempClientInvoiceTable",
  data() {
    return {
      window: {
        headerid: "tempClientInvoiceTable",
        title: "فاکتور کاربران غیر عضو",
        titleLine: "فاکتور ها/فاکتور کاربران غیر عضو",
      },
      table: {
        selectStore: "formInvoiceTempClient",
        getData: "tempClientInvoiceTable",
        openSelectRow: ["panel", "tempClientInvoiceForm", "جزییات فاکتور"],
        selectRow: "selectTempClientInvoice",
        // excel: "/api/v1/excelCategory",
        // fileNmae: "categories.xls",
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
              title: "price_with_discount",
              type: "string",
              headerType: "headerOrder",
              headerTitle: "مبلغ پرداختی",
              col: "col-2",
              searchable: "true",
            },
            {
              title: "operation",
              type: "operatoinWithoutDelete",
              headerType: "headerOperation",
              col: "col-2",
            },
        ],
      },
    };
  },
};
</script>
