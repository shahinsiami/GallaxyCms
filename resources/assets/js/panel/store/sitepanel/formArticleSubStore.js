const state = {
    articleForArticleSub: [],
    articleSubTable: "",
    selectArticleSub: []
};
const getters = {};
const mutations = {
    articleForArticleSub(state, articleForArticleSub) {
        state.articleForArticleSub = articleForArticleSub;
    },
    articleSubTable(state, articleSubTable) {
        state.articleSubTable = articleSubTable;
    },
    selectArticleSub(state, selectArticleSub) {
        state.selectArticleSub = selectArticleSub;
    }
};
const actions = {
    articleSubTable(context, data) {
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
                .post("api/v1/articleSubTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const articleSubTable = response.data;
                    context.commit("articleSubTable", articleSubTable);
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
    selectArticleSub(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectArticleSub/" + id)
                .then(response => {
                    const selectArticleSub = response.data;
                    context.commit("selectArticleSub", selectArticleSub);
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

    articleForArticleSub(context) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/articleForArticleSub")
                .then(response => {
                    const articleForArticleSub = response.data;
                    context.commit(
                        "articleForArticleSub",
                        articleForArticleSub
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
