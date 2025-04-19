const state = {
    allStateForClient: [],
    allCityForClient: [],
    allZoneForClient: [],
    selectCityForClient: [],
    selectZoneForClient: [],
    clientAddress: [],
    selectClientAddress: []
};
const getters = {};
const mutations = {
    allStateForClient(state, allStateForClient) {
        state.allStateForClient = allStateForClient;
    },
    allCityForClient(state, allCityForClient) {
        state.allCityForClient = allCityForClient;
    },
    allZoneForClient(state, allZoneForClient) {
        state.allZoneForClient = allZoneForClient;
    },
    selectCityForClient(state, selectCityForClient) {
        state.selectCityForClient = selectCityForClient;
    },
    selectZoneForClient(state, selectZoneForClient) {
        state.selectZoneForClient = selectZoneForClient;
    },
    clientAddress(state, clientAddress) {
        state.clientAddress = clientAddress;
    },
    selectClientAddress(state, selectClientAddress) {
        state.selectClientAddress = selectClientAddress;
    }
};
const actions = {
    allStateForClient(context) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allStateForClient/")
                .then(response => {
                    const allStateForClient = response.data;
                    context.commit("allStateForClient", allStateForClient);
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
    //allStateForClient
    //    allStateForClient
    allCityForClient(context) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allCityForClient/")
                .then(response => {
                    const allCityForClient = response.data;
                    context.commit("allCityForClient", allCityForClient);
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
    //allStateForClient
    //    allZoneForClient
    allZoneForClient(context) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/allZoneForClient/")
                .then(response => {
                    const allZoneForClient = response.data;
                    context.commit("allZoneForClient", allZoneForClient);
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
    //allZoneForClient

    //    selectCityForClient
    selectCityForClient(context, id) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectCityForClient/" + id)
                .then(response => {
                    const selectCityForClient = response.data;
                    context.commit("selectCityForClient", selectCityForClient);
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
    //selectCityForClient
    //    selectZoneForClient
    selectZoneForClient(context, id) {
        return new Promise((resolve, reject) => {
            axios
                .get("api/v1/selectZoneForClient/" + id)
                .then(response => {
                    const selectZoneForClient = response.data;
                    context.commit("selectZoneForClient", selectZoneForClient);
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
    //selectZoneForClient
    //    clientAddress
    clientAddress(context) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
            axios
                .get("api/v1/clientAddress/")
                .then(response => {
                    const clientAddress = response.data;
                    context.commit("clientAddress", clientAddress);
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
    //clientAddress
       //    selectClientAddress
       selectClientAddress(context,id) {
        return new Promise((resolve, reject) => {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
            axios
                .post("api/v1/selectClientAddress/"+id)
                .then(response => {
                    const selectClientAddress = response.data;
                    context.commit("selectClientAddress", selectClientAddress);
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
    //selectClientAddress
    
};
export default {
    state,
    mutations,
    actions,
    getters
};
