const state = {
    cropSubSegmentTable: "",
    selectCropSubSegment: [],
    cropSegmentForCropSubSegment: [],
    cropEventForCropSubSegment: []
};
const getters = {};
const mutations = {
    cropSubSegmentTable(state, cropSubSegmentTable) {
        state.cropSubSegmentTable = cropSubSegmentTable;
    },
    selectCropSubSegment(state, selectCropSubSegment) {
        state.selectCropSubSegment = selectCropSubSegment;
    },
    cropSegmentForCropSubSegment(state, cropSegmentForCropSubSegment) {
        state.cropSegmentForCropSubSegment = cropSegmentForCropSubSegment;
    },
    cropEventForCropSubSegment(state, cropEventForCropSubSegment) {
        state.cropEventForCropSubSegment = cropEventForCropSubSegment;
    }
};
const actions = {
    cropSegmentForCropSubSegment(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropSegmentForCropSubSegment")
                .then(response => {
                    const cropSegmentForCropSubSegment = response.data;
                    context.commit(
                        "cropSegmentForCropSubSegment",
                        cropSegmentForCropSubSegment
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
    cropEventForCropSubSegment(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropEventForCropSubSegment")
                .then(response => {
                    const cropEventForCropSubSegment = response.data;
                    context.commit(
                        "cropEventForCropSubSegment",
                        cropEventForCropSubSegment
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
    cropSubSegmentTable(context, data) {
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
                    "api/v1/cropSubSegmentTable" + "?page=" + data.pageNum,
                    form
                )
                .then(response => {
                    const cropSubSegmentTable = response.data;
                    context.commit("cropSubSegmentTable", cropSubSegmentTable);
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

    selectCropSubSegment(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCropSubSegment/" + id)
                .then(response => {
                    const selectCropSubSegment = response.data;
                    context.commit(
                        "selectCropSubSegment",
                        selectCropSubSegment
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
