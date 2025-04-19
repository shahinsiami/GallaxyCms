const state = {
    baseMenu: '',
}
const getters = {}
const mutations = {
    baseMenu(state, baseMenu) {
        state.baseMenu = baseMenu;
    },
}
const actions = {
    baseMenu(context,[language]) {
        const form = new FormData()
        form.append('language', language)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/baseMenu',form)
                .then(response => {
                    const baseMenu = response.data
                    context.commit('baseMenu', baseMenu)
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

