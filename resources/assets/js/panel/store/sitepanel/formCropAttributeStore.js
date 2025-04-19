const state = {
    allCroptForAttribute: [],
    cropAttributeTable: [],
    selectCropAttribute: [],
    cropDetailForCropsAttribute: []
};
const getters = {};
const mutations = {
    allCroptForAttribute(state, allCroptForAttribute) {
        state.allCroptForAttribute = allCroptForAttribute;
    },
    cropAttributeTable(state, cropAttributeTable) {
        state.cropAttributeTable = cropAttributeTable;
    },
    selectCropAttribute(state, selectCropAttribute) {
        state.selectCropAttribute = selectCropAttribute;
    },
    cropDetailForCropsAttribute(state, cropDetailForCropsAttribute) {
        state.cropDetailForCropsAttribute = cropDetailForCropsAttribute;
    }
};
const actions = {
    cropDetailForCropsAttribute(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropDetailForCropsAttribute/" + id)
                .then(response => {
                    const cropDetailForCropsAttribute = response.data;
                    context.commit(
                        "cropDetailForCropsAttribute",
                        cropDetailForCropsAttribute
                    );
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
    allCroptForAttribute(context, data) {
        const form = new FormData();
        form.append("searchName", data.searchName);
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/allCroptForAttribute", form)
                .then(response => {
                    const allCroptForAttribute = response.data;
                    context.commit(
                        "allCroptForAttribute",
                        allCroptForAttribute
                    );
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
    cropAttributeTable(context, data) {
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
                .post(
                    "api/v1/cropAttributeTable" + "?page=" + data.pageNum,
                    form
                )
                .then(response => {
                    const cropAttributeTable = response.data;
                    context.commit("cropAttributeTable", cropAttributeTable);
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
    selectCropAttribute(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCropAttribute/" + id)
                .then(response => {
                    const selectCropAttribute = response.data;
                    context.commit("selectCropAttribute", selectCropAttribute);
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
    }
};
export default {
    state,
    mutations,
    actions,
    getters
};
