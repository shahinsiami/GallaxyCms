const state = {
    slideMenu:false,
}
const getters = {}
const mutations = {
    slideMenu(state,active) {
        state.slideMenu =  active
    },
}
const actions = {
    slideMenu(context,active) {
        context.commit('slideMenu',active)
        },
}



export default {
    state, mutations, actions, getters
}

