const state = {
    socialMedia:'',


}
const getters = {}
const mutations = {

    socialMedia(state, socialMedia) {
        state.socialMedia = socialMedia;
    },
}
const actions = {

    viewSocialMedia(context) {
        return new Promise((resolve, reject) => {
            axios.get('api/v1/viewSocialMedia/')
                .then(response => {
                    const socialMedia = response.data
                    context.commit('socialMedia', socialMedia)
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

