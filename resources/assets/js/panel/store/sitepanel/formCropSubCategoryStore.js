const state = {
    cropCategoryForCropSubCategories: [],
    cropSubCategoryTable: "",
    selectCropSubCategory: []
};
const getters = {};
const mutations = {
    cropCategoryForCropSubCategories(state, cropCategoryForCropSubCategories) {
        state.cropCategoryForCropSubCategories = cropCategoryForCropSubCategories;
    },
    cropSubCategoryTable(state, cropSubCategoryTable) {
        state.cropSubCategoryTable = cropSubCategoryTable;
    },
    selectCropSubCategory(state, selectCropSubCategory) {
        state.selectCropSubCategory = selectCropSubCategory;
    }
};
const actions = {
    cropCategoryForCropSubCategories(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropCategoryForCropSubCategories")
                .then(response => {
                    const cropCategoryForCropSubCategories = response.data;
                    context.commit(
                        "cropCategoryForCropSubCategories",
                        cropCategoryForCropSubCategories
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

    cropSubCategoryTable(context, data) {
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
                    "api/v1/cropSubCategoryTable" + "?page=" + data.pageNum,
                    form
                )
                .then(response => {
                    const cropSubCategoryTable = response.data;
                    context.commit(
                        "cropSubCategoryTable",
                        cropSubCategoryTable
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

    selectCropSubCategory(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCropSubCategory/" + id)
                .then(response => {
                    const selectCropSubCategory = response.data;
                    context.commit(
                        "selectCropSubCategory",
                        selectCropSubCategory
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
    }
};
export default {
    state,
    mutations,
    actions,
    getters
};
