const state = {
    cropDetailTable: "",
    selectCropDetail: [],
    cropSubSegmentForCropDetail: []
};
const getters = {};
const mutations = {
    cropDetailTable(state, cropDetailTable) {
        state.cropDetailTable = cropDetailTable;
    },
    selectCropDetail(state, selectCropDetail) {
        state.selectCropDetail = selectCropDetail;
    },
    cropSubSegmentForCropDetail(state, cropSubSegmentForCropDetail) {
        state.cropSubSegmentForCropDetail = cropSubSegmentForCropDetail;
    }
};
const actions = {
    cropSubSegmentForCropDetail(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropSubSegmentForCropDetail")
                .then(response => {
                    const cropSubSegmentForCropDetail = response.data;
                    context.commit(
                        "cropSubSegmentForCropDetail",
                        cropSubSegmentForCropDetail
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
    cropDetailTable(context, data) {
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
                .post("api/v1/cropDetailTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const cropDetailTable = response.data;
                    context.commit("cropDetailTable", cropDetailTable);
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
    selectCropDetail(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCropDetail/" + id)
                .then(response => {
                    const selectCropDetail = response.data;
                    context.commit("selectCropDetail", selectCropDetail);
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
