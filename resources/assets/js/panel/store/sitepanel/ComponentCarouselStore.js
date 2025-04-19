const state = {
    carouselTable: "",
    selectCarousel: []
};
const getters = {};
const mutations = {
    carouselTable(state, carouselTable) {
        state.carouselTable = carouselTable;
    },
    selectCarousel(state, selectCarousel) {
        state.selectCarousel = selectCarousel;
    }
};
const actions = {
    carouselTable(context, data) {
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
                .post("api/v1/carouselTable" + "?page=" + data.pageNum, form)
                .then(response => {
                    const carouselTable = response.data;
                    context.commit("carouselTable", carouselTable);
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

    selectCarousel(context, id) {
        axios.defaults.headers.common["Authorization"] =
            "Bearer " +
            (document.cookie.match("(^|;) ?token=([^;]*)(;|$)")
                ? document.cookie.match("(^|;) ?token=([^;]*)(;|$)")[2]
                : null);
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCarousel/" + id)
                .then(response => {
                    const selectCarousel = response.data;
                    context.commit("selectCarousel", selectCarousel);
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
