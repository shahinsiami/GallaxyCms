const state = {
    allCroptForMedia: [],
    cropMediaTable: [],
    selectCropMedia: []
};
const getters = {};
const mutations = {
    allCroptForMedia(state, allCroptForMedia) {
        state.allCroptForMedia = allCroptForMedia;
    },
    cropMediaTable(state, cropMediaTable) {
        state.cropMediaTable = cropMediaTable;
    },
    selectCropMedia(state, selectCropMedia) {
        state.selectCropMedia = selectCropMedia;
    }
};
const actions = {
    allCroptForMedia(context, data) {
        const form = new FormData();
        form.append("searchName", data.searchName);
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/allCroptForMedia", form)
                .then(response => {
                    const allCroptForMedia = response.data;
                    context.commit("allCroptForMedia", allCroptForMedia);
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
    cropMediaTable(context, data) {
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
                .post("api/v1/cropMediaTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const cropMediaTable = response.data;
                    context.commit("cropMediaTable", cropMediaTable);
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
    selectCropMedia(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCropMedia/" + id)
                .then(response => {
                    const selectCropMedia = response.data;
                    context.commit("selectCropMedia", selectCropMedia);
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
