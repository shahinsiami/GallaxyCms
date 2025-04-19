const state = {
    allCroptForDescription: [],
    cropDescriptionTable: [],
    selectCropDescription: []
};
const getters = {};
const mutations = {
    allCroptForDescription(state, allCroptForDescription) {
        state.allCroptForDescription = allCroptForDescription;
    },
    cropDescriptionTable(state, cropDescriptionTable) {
        state.cropDescriptionTable = cropDescriptionTable;
    },
    selectCropDescription(state, selectCropDescription) {
        state.selectCropDescription = selectCropDescription;
    }
};
const actions = {
    allCroptForDescription(context, data) {
        const form = new FormData();
        form.append("searchName", data.searchName);
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/allCroptForDescription", form)
                .then(response => {
                    const allCroptForDescription = response.data;
                    context.commit(
                        "allCroptForDescription",
                        allCroptForDescription
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
    cropDescriptionTable(context, data) {
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
                    "api/v1/cropDescriptionTable" + "?page=" + data.pageNum,
                    form
                )
                .then(response => {
                    const cropDescriptionTable = response.data;
                    context.commit(
                        "cropDescriptionTable",
                        cropDescriptionTable
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
    selectCropDescription(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCropDescription/" + id)
                .then(response => {
                    const selectCropDescription = response.data;
                    context.commit(
                        "selectCropDescription",
                        selectCropDescription
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
