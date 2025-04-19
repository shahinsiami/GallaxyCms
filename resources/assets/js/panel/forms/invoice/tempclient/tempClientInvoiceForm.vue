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
    <vpcWindowTableEditable v-if="this.$store.state.formInvoiceTempClient.selectTempClientInvoice.id"
      :selectStore="this.table.selectStore"
      :getData="this.table.getData"
      :tableColumn="this.table.column"
      :fileName="this.table.fileNmae"
      :selectRow="this.table.selectRow"
      :openSelectRow="this.table.openSelectRow"
      :deleteRow="this.table.deleteRow"
      :editColumn="this.table.editcolumnt"
      :editData="this.table.editData"
      :selectedId=this.$store.state.formInvoiceTempClient.selectTempClientInvoice.id
      firstColumnSearch="id"
    ></vpcWindowTableEditable>
  </div>
</template>
<style scoped></style>
<script>
export default {
  name: "clientInvoiceForm",
  data() {
    return {
      window: {
        headerid: "clientInvoiceTable",
        title: "فاکتور کاربران",
        titleLine: "فاکتور ها/فاکتور کاربران",
      },
      table: {
        selectStore: "formInvoiceTempClient",
        getData: "selectTempClientInvoiceAdditional",
        openSelectRow: ["panel", "clientInvoiceForm", "جزییات فاکتور"],
        selectRow: "selectClientInvoice",
        editcolumnt: "/api/v1/editInvoiceColumnt",
        editData: ['discount'],
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
            title: "seller_product",
            relation: "price",
            type: "relation",
            headerType: "headerTitle",
            col: "col-2",
            headerTitle: "قیمت",
          },
     {
            title: "seller_product",
            relation: "discount",
            type: "relation",
            headerType: "headerTitle",
            col: "col-2",
            headerTitle: "تخفیف",
          },
              {
            title: "color",
            type: "string",
            headerType: "headerOrder",
            headerTitle: "رنگ",
            col: "col-2",
            searchable: "true",
          },
                  {
            title: "size",
            type: "string",
            headerType: "headerOrder",
            headerTitle: "سایز",
            col: "col-2",
            searchable: "true",
          },
         {
            title: "seller_product",
            relationTitle: "seller",
            relation: "name",
            type: "manyRelationSingleObject",
            headerType: "headerTitle",
            col: "col-2",
            headerTitle: "نام خریدار",
          },
        ],
      },
    };
  },
};
</script>
