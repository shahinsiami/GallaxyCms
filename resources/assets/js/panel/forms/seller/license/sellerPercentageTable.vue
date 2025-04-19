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
  name: "sellerPercentageTable",
  data() {
    return {
      window: {
        headerid: "sellerPercentageTable",
        title: "درصدهای فروش",
        titleLine: "فروشگاه/ مجوز/درصد فروش/ درصدهای فروش",
      },
      table: {
        selectStore: "formSellerContract",
        getData: "sellerPerecentageTable",
        openSelectRow: ["panel", "sellerPercentageEdit", "ویرایش درصد فروش"],
        selectRow: "selectSellerPrecentage",
        deleteRow: "/api/v1/deletStoreSubSegment/",
        excel: "/api/v1/excelSubCategory",
        fileNmae: "subCategories.xls",
        column: [
          {
            headerTitle: "شماره",
            title: "id",
            type: "number",
            headerType: "headerOrder",
            col: "col-2",
          },
          {
            title: "storename",
            headerTitle: "نام",
            type: "string",
            headerType: "headerTitle",
            col: "col-2",
            searchable: "true",
          },
          {
            title: "subsegmentname",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "مجموعه",
            col: "col-4",
            searchable: "true",
          },
          {
            title: "percentage",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "درصد حاصله",
            col: "col-2",
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

