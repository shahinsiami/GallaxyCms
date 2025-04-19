const state = {
    categoryForSubCategories: [],
    subCategoryTable: "",
    selectSubCategory: []
};
const getters = {};
const mutations = {
    categoryForSubCategories(state, categoryForSubCategories) {
        state.categoryForSubCategories = categoryForSubCategories;
    },
    subCategoryTable(state, subCategoryTable) {
        state.subCategoryTable = subCategoryTable;
    },
    selectSubCategory(state, selectSubCategory) {
        state.selectSubCategory = selectSubCategory;
    }
};
const actions = {
    categoryForSubCategories(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/categoryForSubCategories")
                .then(response => {
                    const categoryForSubCategories = response.data;
                    context.commit(
                        "categoryForSubCategories",
                        categoryForSubCategories
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

    subCategoryTable(context, data) {
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
                .post("api/v1/subCategoryTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const subCategoryTable = response.data;
                    context.commit("subCategoryTable", subCategoryTable);
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

    selectSubCategory(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectSubCategory/" + id)
                .then(response => {
                    const selectSubCategory = response.data;
                    context.commit("selectSubCategory", selectSubCategory);
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
