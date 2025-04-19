const state = {
    viewFilterCropByLowPrice: "",
    viewFilterCropByHighPrice: "",
    viewFilterCropByBetweenTwoPrices: "",
    viewFilterCropByLowPriceInSubSegment: "",
    viewFilterCropByHighPriceInSubSegment: "",
    viewFilterCropByBetweenTwoPricesInSubSegment: "",

    viewFilterCropByLowDiscount: "",
    viewFilterCropByHighDiscount: "",
    viewFilterCropByBetweenTwoDiscounts: "",
    viewFilterCropByLowDiscountInSubSegment: "",
    viewFilterCropByHighDiscountInSubSegment: "",
    viewFilterCropByBetweenTwoDiscountsInSubSegment: "",

    viewFilterCropByRateInSegment: "",



    viewFilterCropByAmountInSegment: "",
    viewFilterCropByAmountCountInSegment: "",
    
    
    viewFilterCropByBrand: "",

    

};
const getters = {};
const mutations = {
    viewFilterCropByLowPrice(state, viewFilterCropByLowPrice) {
        state.viewFilterCropByLowPrice = viewFilterCropByLowPrice;
    },
    viewFilterCropByHighPrice(state, viewFilterCropByHighPrice) {
        state.viewFilterCropByHighPrice = viewFilterCropByHighPrice;
    },
    viewFilterCropByBetweenTwoPrices(state, viewFilterCropByBetweenTwoPrices) {
        state.viewFilterCropByBetweenTwoPrices = viewFilterCropByBetweenTwoPrices;
    },
    viewFilterCropByLowPriceInSubSegment(
        state,
        viewFilterCropByLowPriceInSubSegment
    ) {
        state.viewFilterCropByLowPriceInSubSegment = viewFilterCropByLowPriceInSubSegment;
    },
    viewFilterCropByHighPriceInSubSegment(
        state,
        viewFilterCropByHighPriceInSubSegment
    ) {
        state.viewFilterCropByHighPriceInSubSegment = viewFilterCropByHighPriceInSubSegment;
    },
    viewFilterCropByBetweenTwoPricesInSubSegment(
        state,
        viewFilterCropByBetweenTwoPricesInSubSegment
    ) {
        state.viewFilterCropByBetweenTwoPricesInSubSegment = viewFilterCropByBetweenTwoPricesInSubSegment;
    },


    viewFilterCropByLowDiscount(state, viewFilterCropByLowDiscount) {
        state.viewFilterCropByLowDiscount = viewFilterCropByLowDiscount;
    },
    viewFilterCropByHighDiscount(state, viewFilterCropByHighDiscount) {
        state.viewFilterCropByHighDiscount = viewFilterCropByHighDiscount;
    },
    viewFilterCropByBetweenTwoDiscounts(state, viewFilterCropByBetweenTwoDiscounts) {
        state.viewFilterCropByBetweenTwoDiscounts = viewFilterCropByBetweenTwoDiscounts;
    },
    viewFilterCropByLowDiscountInSubSegment(
        state,
        viewFilterCropByLowDiscountInSubSegment
    ) {
        state.viewFilterCropByLowDiscountInSubSegment = viewFilterCropByLowDiscountInSubSegment;
    },
    viewFilterCropByHighDiscountInSubSegment(
        state,
        viewFilterCropByHighDiscountInSubSegment
    ) {
        state.viewFilterCropByHighDiscountInSubSegment = viewFilterCropByHighDiscountInSubSegment;
    },
    viewFilterCropByBetweenTwoDiscountsInSubSegment(
        state,
        viewFilterCropByBetweenTwoDiscountsInSubSegment
    ) {
        state.viewFilterCropByBetweenTwoDiscountsInSubSegment = viewFilterCropByBetweenTwoDiscountsInSubSegment;
    },

    viewFilterCropByRateInSegment(
        state,
        viewFilterCropByRateInSegment
    ) {
        state.viewFilterCropByRateInSegment = viewFilterCropByRateInSegment;
    },

    viewFilterCropByAmountInSegment(
        state,
        viewFilterCropByAmountInSegment
    ) {
        state.viewFilterCropByAmountInSegment = viewFilterCropByAmountInSegment;
    },
    viewFilterCropByAmountCountInSegment(
        state,
        viewFilterCropByAmountCountInSegment
    ) {
        state.viewFilterCropByAmountCountInSegment = viewFilterCropByAmountCountInSegment;
    },
    viewFilterCropByBrand(
        state,
        viewFilterCropByBrand
    ) {
        state.viewFilterCropByBrand = viewFilterCropByBrand;
    },
    

    
};
const actions = {
    viewFilterCropByLowPrice(context) {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByLowPrice")
                .then(response => {
                    const viewFilterCropByLowPrice = response.data;
                    context.commit(
                        "viewFilterCropByLowPrice",
                        viewFilterCropByLowPrice
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    viewFilterCropByHighPrice(context) {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByHighPrice")
                .then(response => {
                    const viewFilterCropByHighPrice = response.data;
                    context.commit(
                        "viewFilterCropByHighPrice",
                        viewFilterCropByHighPrice
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    viewFilterCropByBetweenTwoPrices(context, [low, high]) {
        const form = new FormData()
        form.append("low", low);
        form.append("high", high);
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByBetweenTwoPrices")
                .then(response => {
                    const viewFilterCropByBetweenTwoPrices = response.data;
                    context.commit(
                        "viewFilterCropByBetweenTwoPrices",
                        viewFilterCropByBetweenTwoPrices
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    viewFilterCropByLowPriceInSubSegment(context,[subsegment]) {
        const form = new FormData()
        form.append("subsegment", subsegment);
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByLowPriceInSubSegment",form)
                .then(response => {
                    const viewFilterCropByLowPriceInSubSegment = response.data;
                    context.commit(
                        "viewFilterCropByLowPriceInSubSegment",
                        viewFilterCropByLowPriceInSubSegment
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    viewFilterCropByHighPriceInSubSegment(context,[subsegment]) {
        const form = new FormData()
        form.append("subsegment", subsegment);
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByHighPriceInSubSegment",form)
                .then(response => {
                    const viewFilterCropByHighPriceInSubSegment = response.data;
                    context.commit(
                        "viewFilterCropByHighPriceInSubSegment",
                        viewFilterCropByHighPriceInSubSegment
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    viewFilterCropByBetweenTwoPricesInSubSegment(context, [low, high,subsegment]) {
        const form = new FormData()
        form.append("low", low);
        form.append("high", high);
        form.append("subsegment", subsegment);
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByBetweenTwoPricesInSubSegment",form)
                .then(response => {
                    const viewFilterCropByBetweenTwoPricesInSubSegment =
                        response.data;
                    context.commit(
                        "viewFilterCropByBetweenTwoPricesInSubSegment",
                        viewFilterCropByBetweenTwoPricesInSubSegment
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },



    viewFilterCropByLowDiscount(context) {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByLowDiscount")
                .then(response => {
                    const viewFilterCropByLowDiscount = response.data;
                    context.commit(
                        "viewFilterCropByLowDiscount",
                        viewFilterCropByLowDiscount
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    viewFilterCropByHighDiscount(context) {
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByHighDiscount")
                .then(response => {
                    const viewFilterCropByHighDiscount = response.data;
                    context.commit(
                        "viewFilterCropByHighDiscount",
                        viewFilterCropByHighDiscount
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    viewFilterCropByBetweenTwoDiscounts(context, [low, high]) {
        const form = new FormData()
        form.append("low", low);
        form.append("high", high);
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByBetweenTwoDiscounts")
                .then(response => {
                    const viewFilterCropByBetweenTwoDiscounts = response.data;
                    context.commit(
                        "viewFilterCropByBetweenTwoDiscounts",
                        viewFilterCropByBetweenTwoDiscounts
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    viewFilterCropByLowDiscountInSubSegment(context,[subsegment]) {
        const form = new FormData()
        form.append("subsegment", subsegment);
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByLowDiscountInSubSegment",form)
                .then(response => {
                    const viewFilterCropByLowDiscountInSubSegment = response.data;
                    context.commit(
                        "viewFilterCropByLowDiscountInSubSegment",
                        viewFilterCropByLowDiscountInSubSegment
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    viewFilterCropByHighDiscountInSubSegment(context,[subsegment]) {
        const form = new FormData()
        form.append("subsegment", subsegment);
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByHighDiscountInSubSegment",form)
                .then(response => {
                    const viewFilterCropByHighDiscountInSubSegment = response.data;
                    context.commit(
                        "viewFilterCropByHighDiscountInSubSegment",
                        viewFilterCropByHighDiscountInSubSegment
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },
    viewFilterCropByBetweenTwoDiscountsInSubSegment(context, [low, high,subsegment]) {
        const form = new FormData()
        form.append("low", low);
        form.append("high", high);
        form.append("subsegment", subsegment);
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByBetweenTwoDiscountsInSubSegment",form)
                .then(response => {
                    const viewFilterCropByBetweenTwoDiscountsInSubSegment =
                        response.data;
                    context.commit(
                        "viewFilterCropByBetweenTwoDiscountsInSubSegment",
                        viewFilterCropByBetweenTwoDiscountsInSubSegment
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },

    viewFilterCropByRateInSegment(context, [subsegment]) {
        const form = new FormData()
        form.append("subsegment", subsegment);
        return new Promise((resolve, reject) => {
            axios
                .post("/api/v1/viewFilterCropByRateInSegment",form)
                .then(response => {
                    const viewFilterCropByRateInSegment =
                        response.data;
                    context.commit(
                        "viewFilterCropByRateInSegment",
                        viewFilterCropByRateInSegment
                    );
                    resolve(resolve); //
                })
                .catch(error => {
                    return {};
                    reject(error);
                });
        });
    },


    

viewFilterCropByAmountInSegment(context, [subsegment]) {
    const form = new FormData()
    form.append("subsegment", subsegment);
    return new Promise((resolve, reject) => {
        axios
            .post("/api/v1/viewFilterCropByAmountInSegment",form)
            .then(response => {
                const viewFilterCropByAmountInSegment =
                    response.data;
                context.commit(
                    "viewFilterCropByAmountInSegment",
                    viewFilterCropByAmountInSegment
                );
                resolve(resolve); //
            })
            .catch(error => {
                return {};
                reject(error);
            });
    });
},
viewFilterCropByAmountCountInSegment(context, [subsegment]) {
    const form = new FormData()
    form.append("subsegment", subsegment);
    return new Promise((resolve, reject) => {
        axios
            .post("/api/v1/viewFilterCropByAmountCountInSegment",form)
            .then(response => {
                const viewFilterCropByAmountCountInSegment =
                    response.data;
                context.commit(
                    "viewFilterCropByAmountCountInSegment",
                    viewFilterCropByAmountCountInSegment
                );
                resolve(resolve); //
            })
            .catch(error => {
                return {};
                reject(error);
            });
    });
},
viewFilterCropByBrand(context, [brand]) {
    const form = new FormData()
    form.append("brand", brand);
    return new Promise((resolve, reject) => {
        axios
            .post("/api/v1/viewFilterCropByBrand",form)
            .then(response => {
                const viewFilterCropByBrand =
                    response.data;
                context.commit(
                    "viewFilterCropByBrand",
                    viewFilterCropByBrand
                );
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
