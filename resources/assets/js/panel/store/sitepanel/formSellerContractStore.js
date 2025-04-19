const state = {
    sellerLicenseTable: "",
    selectSellerLicense: "",
    categoryForSellerLicence: [],
    subcategoryForSellerLicence: [],
    subcategoryForSellerLicenceBySelection: [],
    segmentForSellerLicence: [],
    segmentForSellerLicenceBySelection: [],
    subSegmentForSellerLicence: [],
    subSegmentForSellerLicenceBySelection: [],
    sellerPerecentageTable: "",
    selectSellerPrecentage: ""
};
const getters = {};
const mutations = {
    categoryForSellerLicence(state, categoryForSellerLicence) {
        state.categoryForSellerLicence = categoryForSellerLicence;
    },
    subcategoryForSellerLicence(state, subcategoryForSellerLicence) {
        state.subcategoryForSellerLicence = subcategoryForSellerLicence;
    },
    subcategoryForSellerLicenceBySelection(
        state,
        subcategoryForSellerLicenceBySelection
    ) {
        state.subcategoryForSellerLicenceBySelection = subcategoryForSellerLicenceBySelection;
    },
    segmentForSellerLicence(state, segmentForSellerLicence) {
        state.segmentForSellerLicence = segmentForSellerLicence;
    },
    segmentForSellerLicenceBySelection(
        state,
        segmentForSellerLicenceBySelection
    ) {
        state.segmentForSellerLicenceBySelection = segmentForSellerLicenceBySelection;
    },
    subSegmentForSellerLicence(state, subSegmentForSellerLicence) {
        state.subSegmentForSellerLicence = subSegmentForSellerLicence;
    },
    subSegmentForSellerLicenceBySelection(
        state,
        subSegmentForSellerLicenceBySelection
    ) {
        state.subSegmentForSellerLicenceBySelection = subSegmentForSellerLicenceBySelection;
    },

    sellerPerecentageTable(state, sellerPerecentageTable) {
        state.sellerPerecentageTable = sellerPerecentageTable;
    },

    selectSellerLicense(state, selectSellerLicense) {
        state.selectSellerLicense = selectSellerLicense;
    },
    sellerLicenseTable(state, sellerLicenseTable) {
        state.sellerLicenseTable = sellerLicenseTable;
    },
    selectSellerPrecentage(state, selectSellerPrecentage) {
        state.selectSellerPrecentage = selectSellerPrecentage;
    }
};
const actions = {
    categoryForSellerLicence(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/categoryForSellerLicence")
                .then(response => {
                    const categoryForSellerLicence = response.data;
                    context.commit(
                        "categoryForSellerLicence",
                        categoryForSellerLicence
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
    subcategoryForSellerLicence(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/subcategoryForSellerLicence")
                .then(response => {
                    const subcategoryForSellerLicence = response.data;
                    context.commit(
                        "subcategoryForSellerLicence",
                        subcategoryForSellerLicence
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
    subcategoryForSellerLicenceBySelection(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/subcategoryForSellerLicenceBySelection/" + id)
                .then(response => {
                    const subcategoryForSellerLicenceBySelection =
                        response.data;
                    context.commit(
                        "subcategoryForSellerLicenceBySelection",
                        subcategoryForSellerLicenceBySelection
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
    segmentForSellerLicence(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/segmentForSellerLicence")
                .then(response => {
                    const segmentForSellerLicence = response.data;
                    context.commit(
                        "segmentForSellerLicence",
                        segmentForSellerLicence
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
    segmentForSellerLicenceBySelection(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/segmentForSellerLicenceBySelection/" + id)
                .then(response => {
                    const segmentForSellerLicenceBySelection = response.data;
                    context.commit(
                        "segmentForSellerLicenceBySelection",
                        segmentForSellerLicenceBySelection
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
    subSegmentForSellerLicence(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/subSegmentForSellerLicence")
                .then(response => {
                    const subSegmentForSellerLicence = response.data;
                    context.commit(
                        "subSegmentForSellerLicence",
                        subSegmentForSellerLicence
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
    subSegmentForSellerLicenceBySelection(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/subSegmentForSellerLicenceBySelection/" + id)
                .then(response => {
                    const subSegmentForSellerLicenceBySelection = response.data;
                    context.commit(
                        "subSegmentForSellerLicenceBySelection",
                        subSegmentForSellerLicenceBySelection
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
    sellerPerecentageTable(context, data) {
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
                    "api/v1/sellerPerecentageTable" + "?page=" + data.pageNum,
                    form
                )
                .then(response => {
                    const sellerPerecentageTable = response.data;
                    context.commit(
                        "sellerPerecentageTable",
                        sellerPerecentageTable
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
    sellerLicenseTable(context, data) {
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
                    "api/v1/sellerLicenseTable" + "?page=" + data.pageNum,
                    form
                )
                .then(response => {
                    const sellerLicenseTable = response.data;
                    context.commit("sellerLicenseTable", sellerLicenseTable);
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
    selectSellerLicense(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectSellerLicense/" + id)
                .then(response => {
                    const selectSellerLicense = response.data;
                    context.commit("selectSellerLicense", selectSellerLicense);
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
    selectSellerPrecentage(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectSellerPrecentage/" + id)
                .then(response => {
                    const selectSellerPrecentage = response.data;
                    context.commit(
                        "selectSellerPrecentage",
                        selectSellerPrecentage
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
