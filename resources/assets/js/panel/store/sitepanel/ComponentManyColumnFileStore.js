const state = {
    manyColumnFileTable: "",
    selectManyColumnFile: []
};
const getters = {};
const mutations = {
    manyColumnFileTable(state, manyColumnFileTable) {
        state.manyColumnFileTable = manyColumnFileTable;
    },
    selectManyColumnFile(state, selectManyColumnFile) {
        state.selectManyColumnFile = selectManyColumnFile;
    }
};
const actions = {
    manyColumnFileTable(context, data) {
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
                    "api/v1/manyColumnFileTable" + "?page=" + data.pageNum,
                    form
                )
                .then(response => {
                    const manyColumnFileTable = response.data;
                    context.commit("manyColumnFileTable", manyColumnFileTable);
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

    selectManyColumnFile(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectManyColumnFile/" + id)
                .then(response => {
                    const selectManyColumnFile = response.data;
                    context.commit(
                        "selectManyColumnFile",
                        selectManyColumnFile
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
