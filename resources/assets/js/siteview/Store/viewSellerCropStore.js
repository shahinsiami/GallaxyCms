const state = {
    sellerProductByCategory: [],
    sellerProductBySubCategory: [],
    sellerProductBySegment: [],
    sellerProductBySubSegment: [],

};
const getters = {};
const mutations = {
    sellerProductByCategory(state, sellerProductByCategory) {
        state.sellerProductByCategory = sellerProductByCategory;
    },
    sellerProductBySubCategory(state, sellerProductBySubCategory) {
        state.sellerProductBySubCategory = sellerProductBySubCategory;
    },
    sellerProductBySegment(state, sellerProductBySegment) {
        state.sellerProductBySegment = sellerProductBySegment;
    },
    sellerProductBySubSegment(state, sellerProductBySubSegment) {
        state.sellerProductBySubSegment = sellerProductBySubSegment;
    },
};
const actions = {
    sellerProductByCategory(context, [category, language]) {
        const form = new FormData();
        form.append("category", category);
        form.append("language", language);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/viewSellerProductByCategory", form)
                .then(response => {
                    const sellerProductByCategory = response.data;
                        context.commit("sellerProductByCategory", sellerProductByCategory);
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    sellerProductBySubCategory(context, [subcategory]) {
        const form = new FormData();
        form.append("subcategory", subcategory);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/viewSellerProductBySubCategory", form)
                .then(response => {
                    const sellerProductBySubCategory = response.data;
                        context.commit("sellerProductBySubCategory", sellerProductBySubCategory);
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    sellerProductBySegment(context, [segment]) {
        const form = new FormData();
        form.append("segment", segment);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/viewSellerProductBySegment", form)
                .then(response => {
                    const sellerProductBySegment = response.data;
                        context.commit("sellerProductBySegment", sellerProductBySegment);
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    sellerProductBySubSegment(context, [subsegment ]) {
        const form = new FormData();
        form.append("subsegment", subsegment);
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/viewSellerProductBySubSegment", form)
                .then(response => {
                    const sellerProductBySubSegment = response.data;
                        context.commit("sellerProductBySubSegment", sellerProductBySubSegment);
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
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
