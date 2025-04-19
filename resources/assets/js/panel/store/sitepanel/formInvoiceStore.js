const state = {
    clientInvoiceTable: "",
    storeInvoiceTable: "",
    statusInvoiceTable: "",
    selectClientInvoice: [],
    selectClientInvoiceAdditional: [],
    selectStoreInvoice: [],
    selectStoreInvoiceAdditional: [],
    selectStatusInvoice: [],
    selectStatusInvoiceAdditional: [],
};
const getters = {};
const mutations = {
    clientInvoiceTable(state, clientInvoiceTable) {
        state.clientInvoiceTable = clientInvoiceTable;
    },
    storeInvoiceTable(state, storeInvoiceTable) {
        state.storeInvoiceTable = storeInvoiceTable;
    },
    statusInvoiceTable(state, statusInvoiceTable) {
        state.statusInvoiceTable = statusInvoiceTable;
    },
    selectClientInvoice(state, selectClientInvoice) {
        state.selectClientInvoice = selectClientInvoice;
    },
    selectClientInvoiceAdditional(state, selectClientInvoiceAdditional) {
        state.selectClientInvoiceAdditional = selectClientInvoiceAdditional;
    },
    selectStoreInvoice(state, selectStoreInvoice) {
        state.selectStoreInvoice = selectStoreInvoice;
    },
    selectStoreInvoiceAdditional(state, selectStoreInvoiceAdditional) {
        state.selectStoreInvoiceAdditional = selectStoreInvoiceAdditional;
    },
    selectStatusInvoice(state, selectStatusInvoice) {
        state.selectStatusInvoice = selectStatusInvoice;
    },
    selectStatusInvoiceAdditional(state, selectStatusInvoiceAdditional) {
        state.selectStatusInvoiceAdditional = selectStatusInvoiceAdditional;
    },
};
const actions = {
    clientInvoiceTable(context, data) {
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
                .post("api/v1/clientInvoiceTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const clientInvoiceTable = response.data;
                    context.commit("clientInvoiceTable", clientInvoiceTable);
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
    storeInvoiceTable(context, data) {
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
                .post("api/v1/storeInvoiceTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const storeInvoiceTable = response.data;
                    context.commit("storeInvoiceTable", storeInvoiceTable);
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
    statusInvoiceTable(context, data) {
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
                .post("api/v1/statusInvoiceTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const statusInvoiceTable = response.data;
                    context.commit("statusInvoiceTable", statusInvoiceTable);
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
    selectClientInvoice(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectClientInvoice/" + id)
                .then(response => {
                    const selectClientInvoice = response.data;
                    context.commit("selectClientInvoice", selectClientInvoice);
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
    selectClientInvoiceAdditional(context, [data,id]) {
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
                .post("api/v1/selectClientInvoiceAdditional/"+ id + "?page=" + data.pageNum, form)
                .then(response => {
                    const selectClientInvoiceAdditional = response.data;
                    context.commit("selectClientInvoiceAdditional", selectClientInvoiceAdditional);
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
    selectStoreInvoice(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectStoreInvoice/" + id)
                .then(response => {
                    const selectStoreInvoice = response.data;
                    context.commit("selectStoreInvoice", selectStoreInvoice);
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
    selectStoreInvoiceAdditional(context, [data,id]) {
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
                .post("api/v1/selectStoreInvoiceAdditional/"+ id + "?page=" + data.pageNum, form)
                .then(response => {
                    const selectStoreInvoiceAdditional = response.data;
                    context.commit("selectStoreInvoiceAdditional", selectStoreInvoiceAdditional);
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
    selectStatusInvoice(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectStatusInvoice/" + id)
                .then(response => {
                    const selectStatusInvoice = response.data;
                    context.commit("selectStatusInvoice", selectStatusInvoice);
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
    selectStatusInvoiceAdditional(context, [data,id]) {
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
                .post("api/v1/selectStatusInvoiceAdditional/"+ id + "?page=" + data.pageNum, form)
                .then(response => {
                    const selectStatusInvoiceAdditional = response.data;
                    context.commit("selectStatusInvoiceAdditional", selectStatusInvoiceAdditional);
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
