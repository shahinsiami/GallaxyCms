const state = {
    resultCrop: [],
    resultArticle: [],

}
const getters = {}
const mutations = {

    resultCrop(state, resultCrop) {
        state.resultCrop = resultCrop;
    },
    resultArticle(state, resultArticle) {
        state.resultArticle = resultArticle;
    },

}
const actions = {
    viewResultCrop(context, search) {
        const form = new FormData()
        form.append('search', search)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewResultCrop', form)
                .then(response => {
                    const resultCrop = response.data
                    context.commit('resultCrop', resultCrop)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                      
                    }
                    reject(error)
                })
        })
    },
//
    viewResultArticle(context, search) {
        const form = new FormData()
        form.append('search', search)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewResultArticle', form)
                .then(response => {
                    const resultArticle = response.data
                    context.commit('resultArticle', resultArticle)
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

