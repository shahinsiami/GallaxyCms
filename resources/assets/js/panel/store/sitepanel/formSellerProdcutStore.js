const state = {
    allCropSubSegmentForSellerProdcut: [],
    productForSellerProduct: [],
    productForSellerProdcutBySelection: [],
    allEventForSellerProduct: [],
    sellerAddressForSellerProdcut: [],
    sellerProductTable: [],
    selectSellerProduct: [],
};
const getters = {};
const mutations = {
    allCropSubSegmentForSellerProdcut(state, allCropSubSegmentForSellerProdcut) {
        state.allCropSubSegmentForSellerProdcut = allCropSubSegmentForSellerProdcut;
    },
    productForSellerProduct(state, productForSellerProduct) {
        state.productForSellerProduct = productForSellerProduct;
    },
    productForSellerProdcutBySelection(state, productForSellerProdcutBySelection) {
        state.productForSellerProdcutBySelection = productForSellerProdcutBySelection;
    },
    allEventForSellerProduct(state, allEventForSellerProduct) {
        state.allEventForSellerProduct = allEventForSellerProduct;
    },
    sellerAddressForSellerProdcut(state, sellerAddressForSellerProdcut) {
        state.sellerAddressForSellerProdcut = sellerAddressForSellerProdcut;
    },
    sellerProductTable(state, sellerProductTable) {
        state.sellerProductTable = sellerProductTable;
    },
    selectSellerProduct(state, selectSellerProduct) {
        state.selectSellerProduct = selectSellerProduct;
    },
    
};
const actions = {
    allCropSubSegmentForSellerProdcut(context) {
        axios.defaults.headers.common["Authorization"] =
        "Bearer " +
        (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
            ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
            : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allCropSubSegmentForSellerProdcut/")
                .then(response => {
                    const allCropSubSegmentForSellerProdcut = response.data;
                    context.commit("allCropSubSegmentForSellerProdcut", allCropSubSegmentForSellerProdcut);
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
    productForSellerProduct(context) {
        axios.defaults.headers.common["Authorization"] =
        "Bearer " +
        (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
            ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
            : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/productForSellerProduct/")
                .then(response => {
                    const productForSellerProduct = response.data;
                    context.commit("productForSellerProduct", productForSellerProduct);
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
    productForSellerProdcutBySelection(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/productForSellerProdcutBySelection/" + id)
                .then(response => {
                    const productForSellerProdcutBySelection = response.data;
                    context.commit(
                        "productForSellerProdcutBySelection",
                        productForSellerProdcutBySelection
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
    allEventForSellerProduct(context) {
        axios.defaults.headers.common["Authorization"] =
        "Bearer " +
        (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
            ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
            : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allEventForSellerProduct/")
                .then(response => {
                    const allEventForSellerProduct = response.data;
                    context.commit("allEventForSellerProduct", allEventForSellerProduct);
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
    sellerAddressForSellerProdcut(context) {
        axios.defaults.headers.common["Authorization"] =
        "Bearer " +
        (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
            ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
            : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/sellerAddressForSellerProdcut/")
                .then(response => {
                    const sellerAddressForSellerProdcut = response.data;
                    context.commit("sellerAddressForSellerProdcut", sellerAddressForSellerProdcut);
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
    sellerProductTable(context, data) {
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
                    "api/v1/sellerProductTable" + "?page=" + data.pageNum,
                    form
                )
                .then(response => {
                    const sellerProductTable = response.data;
                    context.commit("sellerProductTable", sellerProductTable);
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
    selectSellerProduct(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectSellerProduct/" + id)
                .then(response => {
                    const selectSellerProduct = response.data;
                    context.commit(
                        "selectSellerProduct",
                        selectSellerProduct
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
    
    
};
export default {
    state,
    mutations,
    actions,
    getters
};
