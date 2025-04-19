const state = {
    segmentTable: "",
    selectSegment: [],
    categoryForSegment: [],
    subCategoryForSegment: [],
    choiceSubCategory: []
};
const getters = {};
const mutations = {
    segmentTable(state, segmentTable) {
        state.segmentTable = segmentTable;
    },
    selectSegment(state, selectSegment) {
        state.selectSegment = selectSegment;
    },
    categoryForSegment(state, categoryForSegment) {
        state.categoryForSegment = categoryForSegment;
    },
    subCategoryForSegment(state, subCategoryForSegment) {
        state.subCategoryForSegment = subCategoryForSegment;
    },
    choiceSubCategory(state, choiceSubCategory) {
        state.choiceSubCategory = choiceSubCategory;
    }
};
const actions = {
    categoryForSegment(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/categoryForSegment")
                .then(response => {
                    const categoryForSegment = response.data;
                    context.commit("categoryForSegment", categoryForSegment);
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

    segmentTable(context, data) {
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
                .post("api/v1/segmentTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const segmentTable = response.data;
                    context.commit("segmentTable", segmentTable);
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

    selectSegment(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectSegment/" + id)
                .then(response => {
                    const selectSegment = response.data;
                    context.commit("selectSegment", selectSegment);
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
    subCategoryForSegment(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/subCategoryForSegment")
                .then(response => {
                    const subCategoryForSegment = response.data;
                    context.commit(
                        "subCategoryForSegment",
                        subCategoryForSegment
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
    choiceSubCategory(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("/api/v1/choiceSubCategory/" + id)
                .then(response => {
                    const choiceSubCategory = response.data;
                    context.commit("choiceSubCategory", choiceSubCategory);
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
