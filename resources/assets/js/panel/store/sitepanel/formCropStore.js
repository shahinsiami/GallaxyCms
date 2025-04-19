const state = {
    cropCategoryForCrops: [],
    cropSubcategoryForCrops: [],
    cropSubcategoryForCropsBySelection: [],
    cropSegmentForCrops: [],
    cropSegmentForCropsBySelection: [],
    cropSubSegmentForCrops: [],
    cropSubSegmentForCropsBySelection: [],
    cropDetailForCrops: [],
    cropTable: [],
    selectCrop: []
};
const getters = {};
const mutations = {
    cropCategoryForCrops(state, cropCategoryForCrops) {
        state.cropCategoryForCrops = cropCategoryForCrops;
    },
    cropSubcategoryForCrops(state, cropSubcategoryForCrops) {
        state.cropSubcategoryForCrops = cropSubcategoryForCrops;
    },
    cropSubcategoryForCropsBySelection(
        state,
        cropSubcategoryForCropsBySelection
    ) {
        state.cropSubcategoryForCropsBySelection = cropSubcategoryForCropsBySelection;
    },
    cropSegmentForCrops(state, cropSegmentForCrops) {
        state.cropSegmentForCrops = cropSegmentForCrops;
    },
    cropSegmentForCropsBySelection(state, cropSegmentForCropsBySelection) {
        state.cropSegmentForCropsBySelection = cropSegmentForCropsBySelection;
    },
    cropSubSegmentForCrops(state, cropSubSegmentForCrops) {
        state.cropSubSegmentForCrops = cropSubSegmentForCrops;
    },
    cropSubSegmentForCropsBySelection(
        state,
        cropSubSegmentForCropsBySelection
    ) {
        state.cropSubSegmentForCropsBySelection = cropSubSegmentForCropsBySelection;
    },
    cropDetailForCrops(state, cropDetailForCrops) {
        state.cropDetailForCrops = cropDetailForCrops;
    },
    cropTable(state, cropTable) {
        state.cropTable = cropTable;
    },
    selectCrop(state, selectCrop) {
        state.selectCrop = selectCrop;
    }
};
const actions = {
    cropCategoryForCrops(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropCategoryForCrops")
                .then(response => {
                    const cropCategoryForCrops = response.data;
                    context.commit(
                        "cropCategoryForCrops",
                        cropCategoryForCrops
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
    cropSubcategoryForCrops(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropSubcategoryForCrops")
                .then(response => {
                    const cropSubcategoryForCrops = response.data;
                    context.commit(
                        "cropSubcategoryForCrops",
                        cropSubcategoryForCrops
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
    cropSubcategoryForCropsBySelection(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropSubcategoryForCropsBySelection/" + id)
                .then(response => {
                    const cropSubcategoryForCropsBySelection = response.data;
                    context.commit(
                        "cropSubcategoryForCropsBySelection",
                        cropSubcategoryForCropsBySelection
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
    cropSegmentForCrops(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropSegmentForCrops")
                .then(response => {
                    const cropSegmentForCrops = response.data;
                    context.commit("cropSegmentForCrops", cropSegmentForCrops);
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
    cropSegmentForCropsBySelection(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropSegmentForCropsBySelection/" + id)
                .then(response => {
                    const cropSegmentForCropsBySelection = response.data;
                    context.commit(
                        "cropSegmentForCropsBySelection",
                        cropSegmentForCropsBySelection
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
    cropSubSegmentForCrops(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropSubSegmentForCrops")
                .then(response => {
                    const cropSubSegmentForCrops = response.data;
                    context.commit(
                        "cropSubSegmentForCrops",
                        cropSubSegmentForCrops
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
    cropSubSegmentForCropsBySelection(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropSubSegmentForCropsBySelection/" + id)
                .then(response => {
                    const cropSubSegmentForCropsBySelection = response.data;
                    context.commit(
                        "cropSubSegmentForCropsBySelection",
                        cropSubSegmentForCropsBySelection
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
    cropDetailForCrops(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropDetailForCrops/" + id)
                .then(response => {
                    const cropDetailForCrops = response.data;
                    context.commit("cropDetailForCrops", cropDetailForCrops);
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
    cropTable(context, data) {
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
                .post("api/v1/cropTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const cropTable = response.data;
                    context.commit("cropTable", cropTable);
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
    selectCrop(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCrop/" + id)
                .then(response => {
                    const selectCrop = response.data;
                    context.commit("selectCrop", selectCrop);
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
