const state = {
    categoryForArticle: [],
    subCategoryForArticle: [],
    subCategoryForArticleBySelection: [],
    SegmentForArticle: [],
    SegmentForArticleBySelection: [],
    articleTable: "",
    selectArticle: []
};
const getters = {};
const mutations = {
    categoryForArticle(state, categoryForArticle) {
        state.categoryForArticle = categoryForArticle;
    },
    subCategoryForArticle(state, subCategoryForArticle) {
        state.subCategoryForArticle = subCategoryForArticle;
    },
    subCategoryForArticleBySelection(state, subCategoryForArticleBySelection) {
        state.subCategoryForArticleBySelection = subCategoryForArticleBySelection;
    },
    SegmentForArticle(state, SegmentForArticle) {
        state.SegmentForArticle = SegmentForArticle;
    },
    SegmentForArticleBySelection(state, SegmentForArticleBySelection) {
        state.SegmentForArticleBySelection = SegmentForArticleBySelection;
    },
    articleTable(state, articleTable) {
        state.articleTable = articleTable;
    },
    selectArticle(state, selectArticle) {
        state.selectArticle = selectArticle;
    }
};
const actions = {
    articleTable(context, data) {
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
                .post("api/v1/articleTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const articleTable = response.data;
                    context.commit("articleTable", articleTable);
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

    selectArticle(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectArticle/" + id)
                .then(response => {
                    const selectArticle = response.data;
                    context.commit("selectArticle", selectArticle);
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

    categoryForArticle(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/categoryForArticle")
                .then(response => {
                    const categoryForArticle = response.data;
                    context.commit("categoryForArticle", categoryForArticle);
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
    subCategoryForArticle(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/subCategoryForArticle")
                .then(response => {
                    const subCategoryForArticle = response.data;
                    context.commit(
                        "subCategoryForArticle",
                        subCategoryForArticle
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
    subCategoryForArticleBySelection(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/subCategoryForArticleBySelection/" + id)
                .then(response => {
                    const subCategoryForArticleBySelection = response.data;
                    context.commit(
                        "subCategoryForArticleBySelection",
                        subCategoryForArticleBySelection
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
    SegmentForArticle(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/SegmentForArticle")
                .then(response => {
                    const SegmentForArticle = response.data;
                    context.commit("SegmentForArticle", SegmentForArticle);
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
    SegmentForArticleBySelection(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/SegmentForArticleBySelection/" + id)
                .then(response => {
                    const SegmentForArticleBySelection = response.data;
                    context.commit(
                        "SegmentForArticleBySelection",
                        SegmentForArticleBySelection
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
