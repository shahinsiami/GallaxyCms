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
  name: "clientInvoiceTable",
  data() {
    return {
      window: {
        headerid: "clientInvoiceTable",
        title: "فاکتور کاربران",
        titleLine: "فاکتور ها/فاکتور کاربران",
      },
      table: {
        selectStore: "formInvoice",
        getData: "clientInvoiceTable",
        openSelectRow: ["panel", "clientInvoiceForm", "جزییات فاکتور"],
        selectRow: "selectClientInvoice",
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
            title: "client",
            relation: "name",
            type: "relation",
            headerType: "headerTitle",
            col: "col-2",
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
              title: "amount_paid",
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
        //  {
        //     title: "discount",
        //     type: "selectbox",
        //     headerType: "headerOrder",
        //     col: "col-2",
        //     headerTitle: "شماره",
        //     searchable: "true",
        //     selectBox:[{id:1,name:'در انتظار پرداخت'},{id:2,name:'در حال پردازش'},{id:3,name:'تحویل شده'},{id:4,name:'مرجوعی'},{id:5,name:'لغو شده'}],
        //   },
        //   {
        //     title: "discount",
        //     type: "input",
        //     headerType: "headerOrder",
        //     col: "col-2",
        //     headerTitle: "شماره",
        //     searchable: "true",
        //   },
        //   {
        //     title: "operation",
        //     type: "operationEditColumn",
        //     headerType: "headerOperation",
        //     col: "col-2",
        //   },
        ],
      },
    };
  },
};
</script>
