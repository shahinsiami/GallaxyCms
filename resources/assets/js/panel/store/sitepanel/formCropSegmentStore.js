const state = {
    cropSegmentTable: "",
    selectCropSegment: [],
    cropCategoryForCropSegment: [],
    cropSubCategoryForCropSegment: [],
    choiceCropSubCategory: []
};
const getters = {};
const mutations = {
    cropSegmentTable(state, cropSegmentTable) {
        state.cropSegmentTable = cropSegmentTable;
    },
    selectCropSegment(state, selectCropSegment) {
        state.selectCropSegment = selectCropSegment;
    },
    cropCategoryForCropSegment(state, cropCategoryForCropSegment) {
        state.cropCategoryForCropSegment = cropCategoryForCropSegment;
    },
    cropSubCategoryForCropSegment(state, cropSubCategoryForCropSegment) {
        state.cropSubCategoryForCropSegment = cropSubCategoryForCropSegment;
    },
    choiceCropSubCategory(state, choiceCropSubCategory) {
        state.choiceCropSubCategory = choiceCropSubCategory;
    }
};
const actions = {
    cropCategoryForCropSegment(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropCategoryForCropSegment")
                .then(response => {
                    const cropCategoryForCropSegment = response.data;
                    context.commit(
                        "cropCategoryForCropSegment",
                        cropCategoryForCropSegment
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

    cropSegmentTable(context, data) {
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
                .post("api/v1/cropSegmentTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const cropSegmentTable = response.data;
                    context.commit("cropSegmentTable", cropSegmentTable);
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

    selectCropSegment(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCropSegment/" + id)
                .then(response => {
                    const selectCropSegment = response.data;
                    context.commit("selectCropSegment", selectCropSegment);
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
    cropSubCategoryForCropSegment(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropSubCategoryForCropSegment")
                .then(response => {
                    const cropSubCategoryForCropSegment = response.data;
                    context.commit(
                        "cropSubCategoryForCropSegment",
                        cropSubCategoryForCropSegment
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
    choiceCropSubCategory(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("/api/v1/choiceCropSubCategory/" + id)
                .then(response => {
                    const choiceCropSubCategory = response.data;
                    context.commit(
                        "choiceCropSubCategory",
                        choiceCropSubCategory
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
