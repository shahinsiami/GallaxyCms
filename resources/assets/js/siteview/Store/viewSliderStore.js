const state = {
    sliderHome:[],
    sliderProduct:[],
    sliderNews:[],
    sliderBlog:[],
    sliderService:[],
    sliderAbout:[],
    sliderContact:[],
    sliderStatic:[],
    sliderSupport:[],
    sliderVote:[],
    sliderLearning:[],
    sliderGallery:[],
    sliderSientific:[],
    sliderRegister:[],
    sliderOffice:[],
    sliderProductDetail:[],
}
const getters = {}
const mutations = {

    sliderHome(state,slider) {
        state.sliderHome = slider;
    },
    sliderProduct(state,slider) {
        state.sliderProduct = slider;
    },
    sliderNews(state,slider) {
        state.sliderNews = slider;
    },
    sliderBlog(state,slider) {
        state.sliderBlog = slider;
    },
    sliderService(state,slider) {
        state.sliderService = slider;
    },
    sliderAbout(state,slider) {
        state.sliderAbout = slider;
    },
    sliderContact(state,slider) {
        state.sliderContact = slider;
    },
    sliderStatic(state,slider) {
        state.sliderStatic = slider;
    },
    sliderSupport(state,slider) {
        state.sliderSupport = slider;
    },
    sliderVote(state,slider) {
        state.sliderVote = slider;
    },
    sliderLearning(state,slider) {
        state.sliderLearning = slider;
    },
    sliderGallery(state,slider) {
        state.sliderGallery = slider;
    },
    sliderSientific(state,slider) {
        state.sliderSientific = slider;
    },
    sliderRegister(state,slider) {
        state.sliderRegister = slider;
    },
    sliderOffice(state,slider) {
        state.sliderOffice = slider;
    },
    sliderProductDetail(state,slider) {
        state.sliderProductDetail = slider;
    },

}
const actions = {

    viewSlider(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewSlider',form)
                .then(response => {
                    const slider = response.data
                    if (template == 1){
                        context.commit('sliderHome', slider)
                    }
                    if (template == 2){
                        context.commit('sliderProduct', slider)
                    }
                    if (template == 3){
                        context.commit('sliderNews', slider)
                    }
                    if (template == 4){
                        context.commit('sliderBlog', slider)
                    }
                    if (template == 5){
                        context.commit('sliderService', slider)
                    }
                    if (template == 6){
                        context.commit('sliderAbout', slider)
                    }
                    if (template == 7){
                        context.commit('sliderContact', slider)
                    }
                    if (template == 8){
                        context.commit('sliderStatic', slider)
                    }
                    if (template == 9){
                        context.commit('sliderSupport', slider)
                    }
                    if (template == 10){
                        context.commit('sliderVote', slider)
                    }
                    if (template == 11){
                        context.commit('sliderLearning', slider)
                    }
                    if (template == 12){
                        context.commit('sliderGallery', slider)
                    }
                    if (template == 13){
                        context.commit('sliderSientific', slider)
                    }
                    if (template == 14){
                        context.commit('sliderRegister', slider)
                    }
                    if (template == 15){
                        context.commit('sliderOffice', slider)
                    }
                    if (template == 16){
                        context.commit('sliderProductDetail', slider)
                    }
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

