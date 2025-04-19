const state = {
    awaitingPayment: [],
    processing: [],
    delivered: [],
    returned: [],
    abolition: [],
    clientPurchaseDetail: [],
};
const getters = {};
const mutations = {
    awaitingPayment(state, awaitingPayment) {
        state.awaitingPayment = awaitingPayment;
    },
    processing(state, processing) {
        state.processing = processing;
    },
    delivered(state, delivered) {
        state.delivered = delivered;
    },
    returned(state, returned) {
        state.returned = returned;
    },
    abolition(state, abolition) {
        state.abolition = abolition;
    },
    clientPurchaseDetail(state, clientPurchaseDetail) {
        state.clientPurchaseDetail = clientPurchaseDetail;
    },
    
};
const actions = {
    awaitingPayment(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/awaitingPayment")
                .then(response => {
                    const awaitingPayment = response.data;
                    context.commit("awaitingPayment", awaitingPayment);
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
    processing(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/processing")
                .then(response => {
                    const processing = response.data;
                    context.commit("processing", processing);
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
    delivered(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/delivered")
                .then(response => {
                    const delivered = response.data;
                    context.commit("delivered", delivered);
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
    returned(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/returned")
                .then(response => {
                    const returned = response.data;
                    context.commit("returned", returned);
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
    abolition(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/abolition")
                .then(response => {
                    const abolition = response.data;
                    context.commit("abolition", abolition);
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
    clientPurchaseDetail(context,[id]) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        const form = new FormData()
        form.append('id', id)
        return new Promise((resolve, reject) => {
            axios
                .post("api/v1/clientPurchaseDetail",form)
                .then(response => {
                    const clientPurchaseDetail = response.data;
                    context.commit("clientPurchaseDetail", clientPurchaseDetail);
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
