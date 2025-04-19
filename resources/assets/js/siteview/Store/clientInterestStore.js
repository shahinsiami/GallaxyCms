const state = {
    clientInfo:'',
}
const getters = {}
const mutations = {
    clientInfo(state,clientInfo) {
        state.clientInfo = clientInfo;
    },
}
const actions = {
    clientInfo(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/clientInfo')
                .then(response => {
                    const clientInfo = response.data
                    context.commit('clientInfo',clientInfo)
                    resolve(resolve)//
                })
                .catch(error => {
                    return {
                      
                    }
                    reject(error)
                })
        })
    },

    

}
export default {
    state, mutations, actions, getters
}

