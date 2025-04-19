const state = {
    sellerAddressTable: [],
    selectSellerAddress: [],
    allStateForAddress: [],
    allCityForAddress: [],
    allZoneForAddress: [],
    selectZoneForAddress: [],
    selectCityForAddress: [],
    allMallForAddress: []
};
const getters = {};
const mutations = {
    sellerAddressTable(state, sellerAddressTable) {
        state.sellerAddressTable = sellerAddressTable;
    },
    selectSellerAddress(state, selectSellerAddress) {
        state.selectSellerAddress = selectSellerAddress;
    },
    allStateForAddress(state, allStateForAddress) {
        state.allStateForAddress = allStateForAddress;
    },
    allCityForAddress(state, allCityForAddress) {
        state.allCityForAddress = allCityForAddress;
    },
    allZoneForAddress(state, allZoneForAddress) {
        state.allZoneForAddress = allZoneForAddress;
    },
    selectZoneForAddress(state, selectZoneForAddress) {
        state.selectZoneForAddress = selectZoneForAddress;
    },
    selectCityForAddress(state, selectCityForAddress) {
        state.selectCityForAddress = selectCityForAddress;
    },
    allMallForAddress(state, allMallForAddress) {
        state.allMallForAddress = allMallForAddress;
    }
};
const actions = {
    sellerAddressTable(context, data) {
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
                    "api/v1/sellerAddressTable" + "?page=" + data.pageNum,
                    form
                )
                .then(response => {
                    const sellerAddressTable = response.data;
                    context.commit("sellerAddressTable", sellerAddressTable);
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

    selectSellerAddress(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectSellerAddress/" + id)
                .then(response => {
                    const selectSellerAddress = response.data;
                    context.commit("selectSellerAddress", selectSellerAddress);
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
    allStateForAddress(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allStateForAddress")
                .then(response => {
                    const allStateForAddress = response.data;
                    context.commit("allStateForAddress", allStateForAddress);
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

    allCityForAddress(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allCityForAddress")
                .then(response => {
                    const allCityForAddress = response.data;
                    context.commit("allCityForAddress", allCityForAddress);
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
    allZoneForAddress(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allZoneForAddress")
                .then(response => {
                    const allZoneForAddress = response.data;
                    context.commit("allZoneForAddress", allZoneForAddress);
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

    selectCityForAddress(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCityForAddress/" + id)
                .then(response => {
                    const selectCityForAddress = response.data;
                    context.commit(
                        "selectCityForAddress",
                        selectCityForAddress
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

    selectZoneForAddress(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectZoneForAddress/" + id)
                .then(response => {
                    const selectZoneForAddress = response.data;
                    context.commit(
                        "selectZoneForAddress",
                        selectZoneForAddress
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
    allMallForAddress(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allMallForAddress")
                .then(response => {
                    const allMallForAddress = response.data;
                    context.commit("allMallForAddress", allMallForAddress);
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
