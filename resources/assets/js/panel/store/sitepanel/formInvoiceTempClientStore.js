const state = {
    statusInvoiceTempClientTable: "",
    tempClientInvoiceTable: "",
    selectTempClientInvoice: [],
    selectTempClientInvoiceAdditional: [],
};
const getters = {};
const mutations = {
    statusInvoiceTempClientTable(state, statusInvoiceTempClientTable) {
        state.statusInvoiceTempClientTable = statusInvoiceTempClientTable;
    },
    tempClientInvoiceTable(state, tempClientInvoiceTable) {
        state.tempClientInvoiceTable = tempClientInvoiceTable;
    },
    selectTempClientInvoice(state, selectTempClientInvoice) {
        state.selectTempClientInvoice = selectTempClientInvoice;
    },
    selectTempClientInvoiceAdditional(state, selectTempClientInvoiceAdditional ) {
        state.selectTempClientInvoiceAdditional = selectTempClientInvoiceAdditional ;
    },
};
const actions = {
    statusInvoiceTempClientTable(context, data) {
        const form = new FormData();
        form.append("search", data.searchName);
        form.append("searchColumn", data.searchColumn);
        form.append("order", data.order);
        form.append("name", data.name);
        form.append("startDate", data.startDate);
        form.append("endDate", data.endDate);
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/statusInvoiceTempClientTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const statusInvoiceTempClientTable = response.data;
                    context.commit("statusInvoiceTempClientTable", statusInvoiceTempClientTable);
                    resolve(resolve); //
                })
                .catch(error => {
                    return {
                        type: "error",
                        title: "عملیات با خطلا 1501",
                        text: "لطفا با پشتیبانی ارتباط برقرار کنید"
                    };
                    reject(error);
                });
        });
    },
    tempClientInvoiceTable(context, data) {
        const form = new FormData();
        form.append("search", data.searchName);
        form.append("searchColumn", data.searchColumn);
        form.append("order", data.order);
        form.append("name", data.name);
        form.append("startDate", data.startDate);
        form.append("endDate", data.endDate);
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/tempClientInvoiceTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const tempClientInvoiceTable = response.data;
                    context.commit("tempClientInvoiceTable", tempClientInvoiceTable);
                    resolve(resolve); //
                })
                .catch(error => {
                    return {
                        type: "error",
                        title: "عملیات با خطلا 1501",
                        text: "لطفا با پشتیبانی ارتباط برقرار کنید"
                    };
                    reject(error);
                });
        });
    },
    selectTempClientInvoice(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectTempClientInvoice/" + id)
                .then(response => {
                    const selectTempClientInvoice = response.data;
                    context.commit("selectTempClientInvoice", selectTempClientInvoice);
                    resolve(resolve); //
                })
                .catch(error => {
                    return {
                        type: "error",
                        title: "عملیات با خطلا 1501",
                        text: "لطفا با پشتیبانی ارتباط برقرار کنید"
                    };
                    reject(error);
                });
        });
    },
    selectTempClientInvoiceAdditional(context, [data,id]) {
        const form = new FormData();
        form.append("search", data.searchName);
        form.append("searchColumn", data.searchColumn);
        form.append("order", data.order);
        form.append("name", data.name);
        form.append("startDate", data.startDate);
        form.append("endDate", data.endDate);
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/selectTempClientInvoiceAdditional/"+ id + "?page=" + data.pageNum, form)
                .then(response => {
                    const selectTempClientInvoiceAdditional = response.data;
                    context.commit("selectTempClientInvoiceAdditional", selectTempClientInvoiceAdditional);
                    resolve(resolve); //
                })
                .catch(error => {
                    return {
                        type: "error",
                        title: "عملیات با خطلا 1501",
                        text: "لطفا با پشتیبانی ارتباط برقرار کنید"
                    };
                    reject(error);
                });
        });
    },
};
export default {
    state,
    mutations,
    actions,
    getters
};
