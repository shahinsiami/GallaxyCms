const state = {
    sellerEvidenceTable: "",
    selectSellerEvidence: [],
    allStateForEvidence: [],
    allCityForEvidence: [],
    allZoneForEvidence: [],
    selectCityForEvidence: [],
    selectZoneForEvidence: [],
    cropCategoryForSellerEvidence: []
};
const getters = {};
const mutations = {
    sellerEvidenceTable(state, sellerEvidenceTable) {
        state.sellerEvidenceTable = sellerEvidenceTable;
    },
    selectSellerEvidence(state, selectSellerEvidence) {
        state.selectSellerEvidence = selectSellerEvidence;
    },
    allStateForEvidence(state, allStateForEvidence) {
        state.allStateForEvidence = allStateForEvidence;
    },
    allCityForEvidence(state, allCityForEvidence) {
        state.allCityForEvidence = allCityForEvidence;
    },
    allZoneForEvidence(state, allZoneForEvidence) {
        state.allZoneForEvidence = allZoneForEvidence;
    },
    selectCityForEvidence(state, selectCityForEvidence) {
        state.selectCityForEvidence = selectCityForEvidence;
    },
    selectZoneForEvidence(state, selectZoneForEvidence) {
        state.selectZoneForEvidence = selectZoneForEvidence;
    },
    cropCategoryForSellerEvidence(state, cropCategoryForSellerEvidence) {
        state.cropCategoryForSellerEvidence = cropCategoryForSellerEvidence;
    }
};
const actions = {
    sellerEvidenceTable(context, data) {
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
                    "api/v1/sellerEvidenceTable" + "?page=" + data.pageNum,
                    form
                )
                .then(response => {
                    const sellerEvidenceTable = response.data;
                    context.commit("sellerEvidenceTable", sellerEvidenceTable);
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
    selectSellerEvidence(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectSellerEvidence/" + id)
                .then(response => {
                    const selectSellerEvidence = response.data;
                    context.commit(
                        "selectSellerEvidence",
                        selectSellerEvidence
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
    //    allStateForEvidence
    allStateForEvidence(context) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allStateForEvidence/")
                .then(response => {
                    const allStateForEvidence = response.data;
                    context.commit("allStateForEvidence", allStateForEvidence);
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
    //allStateForEvidence
    //    allStateForEvidence
    allCityForEvidence(context) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allCityForEvidence/")
                .then(response => {
                    const allCityForEvidence = response.data;
                    context.commit("allCityForEvidence", allCityForEvidence);
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
    //allStateForEvidence
    //    allZoneForEvidence
    allZoneForEvidence(context) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allZoneForEvidence/")
                .then(response => {
                    const allZoneForEvidence = response.data;
                    context.commit("allZoneForEvidence", allZoneForEvidence);
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
    //allZoneForEvidence

    //    selectCityForEvidence
    selectCityForEvidence(context, id) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCityForEvidence/" + id)
                .then(response => {
                    const selectCityForEvidence = response.data;
                    context.commit(
                        "selectCityForEvidence",
                        selectCityForEvidence
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
    //selectCityForEvidence
    //    selectZoneForEvidence
    selectZoneForEvidence(context, id) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectZoneForEvidence/" + id)
                .then(response => {
                    const selectZoneForEvidence = response.data;
                    context.commit(
                        "selectZoneForEvidence",
                        selectZoneForEvidence
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
    //selectZoneForEvidence
    //cropCategoryForSellerEvidence
    cropCategoryForSellerEvidence(context) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/cropCategoryForSellerEvidence/")
                .then(response => {
                    const cropCategoryForSellerEvidence = response.data;
                    context.commit(
                        "cropCategoryForSellerEvidence",
                        cropCategoryForSellerEvidence
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
    //cropCategoryForSellerEvidence
};
export default {
    state,
    mutations,
    actions,
    getters
};
