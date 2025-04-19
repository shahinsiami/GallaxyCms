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
  name: "footerTable",
  data() {
    return {
      window: {
        headerid: "footerTable",
        title: "پاورقی ها",
                titleLine: "ماژول/ماژول های گرافیکی/پاورقی/پاورقی ها",
      },
      table: {
        selectStore: "ComponentFooter",
        getData: "footerTable",
        openSelectRow: ["panel", "footerEdit","ویرایش پاورقی"],
        selectRow: "selectFooter",
        deleteRow: "/api/v1/deleteFooter/",
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
            title: "name",
            type: "string",
            headerType: "headerOrder",
            col: "col-2",
            headerTitle: "نام",
            searchable: "true",
          },
          {
            title: "description",
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

