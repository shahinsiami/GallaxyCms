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
      firstColumnSearch="pid"
    ></windowTableWithoutExcel>
  </div>
</template>
<style scoped>
</style>


<script>
export default {
  name: "sellerProductTable",
  data() {
    return {
      window: {
        headerid: "sellerProductTable",
        title: "مشاهده محصولات در حال فروش",
        titleLine: "فروش/ محصولات در حال فروش/مشاهده محصولات در حال فروش",
      },
      table: {
        selectStore: "formSellerProdcut",
        getData: "sellerProductTable",
        openSelectRow: ["panel", "sellerProductEdit","ویرایش محصول در حال فروش"],
        selectRow: "selectSellerProduct",
        deleteRow: "/api/v1/deletSellerProduct/",
        excel: "/api/v1/excelArticle",
        fileNmae: "categories.xls",
        column: [
          {
            title: "pid",
            type: "number",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "شماره",
            searchable: "true",
          },
          {
            title: "product",
            relation: "name",
            type: "relation",
            headerType: "headerTitle",
            headerTitle: "محصول",
            col: "col-4",
          },
          {
            title: "price",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "قیمت",
            col: "col-2",
          },
          {
            title: "discount",
            type: "string",
            headerType: "headerTitle",
            headerTitle: "تخفیف",
            col: "col-2",
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
  ///////////////////////////////////////////////////////////////////////compute
  computed: {
    minimizeRight: {
      get() {
        return (
          "right:" +
          15 *
            this.$store.state.mainStore.minnumber.indexOf(this.$options.name) +
          "% !important"
        );
      },
    },
  },
};
</script>

