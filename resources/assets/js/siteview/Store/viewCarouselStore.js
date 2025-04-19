const state = {
    carouselHome:[],
    carouselProduct:[],
    carouselNews:[],
    carouselBlog:[],
    carouselService:[],
    carouselAbout:[],
    carouselContact:[],
    carouselStatic:[],
    carouselSupport:[],
    carouselVote:[],
    carouselLearning:[],
    carouselGallery:[],
    carouselSientific:[],
    carouselRegister:[],
    carouselOffice:[],
    carouselProductDetail:[],

}
const getters = {}
const mutations = {

    carouselHome(state,carousel) {
        state.carouselHome = carousel;
    },
    carouselProduct(state,carousel) {
        state.carouselProduct = carousel;
    },
    carouselNews(state,carousel) {
        state.carouselNews = carousel;
    },
    carouselBlog(state,carousel) {
        state.carouselBlog = carousel;
    },
    carouselService(state,carousel) {
        state.carouselService = carousel;
    },
    carouselAbout(state,carousel) {
        state.carouselAbout = carousel;
    },
    carouselContact(state,carousel) {
        state.carouselContact = carousel;
    },
    carouselStatic(state,carousel) {
        state.carouselStatic = carousel;
    },
    carouselSupport(state,carousel) {
        state.carouselSupport = carousel;
    },
    carouselVote(state,carousel) {
        state.carouselVote = carousel;
    },
    carouselLearning(state,carousel) {
        state.carouselLearning = carousel;
    },
    carouselGallery(state,carousel) {
        state.carouselGallery = carousel;
    },
    carouselSientific(state,carousel) {
        state.carouselSientific = carousel;
    },
    carouselRegister(state,carousel) {
        state.carouselRegister = carousel;
    },
    carouselOffice(state,carousel) {
        state.carouselOffice = carousel;
    },
    carouselProductDetail(state,carousel) {
        state.carouselProductDetail = carousel;
    },


}
const actions = {

    viewCarousel(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewCarousel',form)
                .then(response => {
                    const carousel = response.data
                    if (template == 1){
                        context.commit('carouselHome', carousel)
                    }
                    if (template == 2){
                        context.commit('carouselProduct', carousel)
                    }
                    if (template == 3){
                        context.commit('carouselNews', carousel)
                    }
                    if (template == 4){
                        context.commit('carouselBlog', carousel)
                    }
                    if (template == 5){
                        context.commit('carouselService', carousel)
                    }
                    if (template == 6){
                        context.commit('carouselAbout', carousel)
                    }
                    if (template == 7){
                        context.commit('carouselContact', carousel)
                    }
                    if (template == 8){
                        context.commit('carouselStatic', carousel)
                    }
                    if (template == 9){
                        context.commit('carouselSupport', carousel)
                    }
                    if (template == 10){
                        context.commit('carouselVote', carousel)
                    }
                    if (template == 11){
                        context.commit('carouselLearning', carousel)
                    }
                    if (template == 12){
                        context.commit('carouselGallery', carousel)
                    }
                    if (template == 13){
                        context.commit('carouselSientific', carousel)
                    }
                    if (template == 14){
                        context.commit('carouselRegister', carousel)
                    }
                    if (template == 15){
                        context.commit('carouselOffice', carousel)
                    }
                    if (template == 16){
                        context.commit('carouselProductDetail', carousel)
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

