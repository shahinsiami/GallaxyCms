const state = {
    shoppingCart:'',
}
const getters = {}
const mutations = {
    shoppingCart(state,shoppingCart) {
        state.shoppingCart = shoppingCart;
    },
}
const actions = {
    shoppingCart(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/shoppingCart')
                .then(response => {
                    const shoppingCart = response.data
                    context.commit('shoppingCart',shoppingCart)
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

