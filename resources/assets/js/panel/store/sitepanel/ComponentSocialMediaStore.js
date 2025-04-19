const state = {
    socialMediaTable: "",
    selectSocialMedia: []
};
const getters = {};
const mutations = {
    socialMediaTable(state, socialMediaTable) {
        state.socialMediaTable = socialMediaTable;
    },
    selectSocialMedia(state, selectSocialMedia) {
        state.selectSocialMedia = selectSocialMedia;
    }
};
const actions = {
    socialMediaTable(context, data) {
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
                .post("api/v1/socialMediaTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const socialMediaTable = response.data;
                    context.commit("socialMediaTable", socialMediaTable);
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

    selectSocialMedia(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectSocialMedia/" + id)
                .then(response => {
                    const selectSocialMedia = response.data;
                    context.commit("selectSocialMedia", selectSocialMedia);
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
    //
};
export default {
    state,
    mutations,
    actions,
    getters
};
