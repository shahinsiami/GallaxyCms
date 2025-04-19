const state = {
    shoppingLocalStore : JSON.parse(localStorage.getItem("product")),
    tempProduct:'',
}
const getters = {}
const mutations = {
    tempProduct(state,tempProduct) {
        state.tempProduct = tempProduct;
    },
}
const actions = {
    tempProduct(context,[pid]) {
        const form = new FormData()
        form.append('pid', pid)
        return new Promise((resolve, reject) => {
            axios.post('/api/v1/tempProduct',form)
                .then(response => {
                    const tempProduct = response.data
                    context.commit('tempProduct',tempProduct)
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

