const state = {
    viewAbout:[],

}
const getters = {}
const mutations = {

    viewAbout(state,viewAbout) {
        state.viewAbout = viewAbout;
    },
}
const actions = {

    viewAbout(context,[template,language]) {
    const form = new FormData()
    form.append('language', language)
    form.append('template', template)
    return new Promise((resolve, reject) => {
        axios.post('api/v1/viewAbout',form)
                .then(response => {
                    const viewAbout = response.data
                    context.commit('viewAbout', viewAbout)
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
}
export default {
    state, mutations, actions, getters
}

