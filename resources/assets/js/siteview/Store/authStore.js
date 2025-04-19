const state = {
    loginToken: ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null),
}
const getters = {}
const mutations = {
    loginToken(state, loginToken) {
        state.loginToken = loginToken;
    },
    detroyToken(state) {
        state.loginToken = null;
    },
    
}
const actions = {
    loginToken(context, credentials) {
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/clientLogin', {
                username: credentials.username,
                password: credentials.password,
            })
                .then(response => {
                    const loginToken = response.data.access_token
                    let expireDate = new Date;
                    expireDate.setTime(expireDate.getTime() + 8*60*60*1000);
                    // expireDate.toGMTString();
                    document.cookie =  "token=" + loginToken + ";path=/;expires=" + 0;
                    context.commit('loginToken', loginToken)
                    resolve(resolve)//
 
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    detroyToken(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/logout')
                .then(response => {
                    document.cookie =  "token= null"
                    context.commit('detroyToken')
                    resolve(resolve)//
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
}
export default {
    state, mutations, actions, getters
}

