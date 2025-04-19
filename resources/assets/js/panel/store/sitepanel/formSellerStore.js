const state = {
    selectStore: [],
    tableSeller: "",
    allStore: [],
    categoryForStore: [],
    allStateForStore: [],
    allCityForStore: [],
    allZoneForStore: [],
    choiceZoneForStore: [],
    choiceCityForStore: []
};
const getters = {};
const mutations = {
    selectStore(state, selectStore) {
        state.selectStore = selectStore;
    },
    tableSeller(state, tableSeller) {
        state.tableSeller = tableSeller;
    },
    allStore(state, allStore) {
        state.allStore = allStore;
    },

    categoryForStore(state, categoryForStore) {
        state.categoryForStore = categoryForStore;
    },
    allStateForStore(state, allStateForStore) {
        state.allStateForStore = allStateForStore;
    },
    allCityForStore(state, allCityForStore) {
        state.allCityForStore = allCityForStore;
    },
    allZoneForStore(state, allZoneForStore) {
        state.allZoneForStore = allZoneForStore;
    },
    choiceZoneForStore(state, choiceZoneForStore) {
        state.choiceZoneForStore = choiceZoneForStore;
    },
    choiceCityForStore(state, choiceCityForStore) {
        state.choiceCityForStore = choiceCityForStore;
    }
};
const actions = {
    allStore(context, search) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allactivestore/" + search)
                .then(response => {
                    const allStore = response.data;
                    context.commit("allStore", allStore);
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
    selectStore(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectStore/" + id)
                .then(response => {
                    const selectStore = response.data;
                    context.commit("selectStore", selectStore);
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

    tableSeller(context, data) {
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
                .post("api/v1/tableSeller" + "?page=" + data.pageNum, form)
                .then(response => {
                    const tableSeller = response.data;
                    context.commit("tableSeller", tableSeller);
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

    categoryForStore(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/categoryForStore")
                .then(response => {
                    const categoryForStore = response.data;
                    context.commit("categoryForStore", categoryForStore);
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

    allStateForStore(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allStateForStore")
                .then(response => {
                    const allStateForStore = response.data;
                    context.commit("allStateForStore", allStateForStore);
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

    allCityForStore(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allCityForStore")
                .then(response => {
                    const allCityForStore = response.data;
                    context.commit("allCityForStore", allCityForStore);
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
    allZoneForStore(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allZoneForStore")
                .then(response => {
                    const allZoneForStore = response.data;
                    context.commit("allZoneForStore", allZoneForStore);
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

    choiceCityForStore(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/choiceCityForStore/" + id)
                .then(response => {
                    const choiceCityForStore = response.data;
                    context.commit("choiceCityForStore", choiceCityForStore);
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

    choiceZoneForStore(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/choiceZoneForStore/" + id)
                .then(response => {
                    const choiceZoneForStore = response.data;
                    context.commit("choiceZoneForStore", choiceZoneForStore);
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
