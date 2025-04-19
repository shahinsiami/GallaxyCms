const state = {
    galleryHome:[],
    galleryProduct:[],
    galleryNews:[],
    galleryBlog:[],
    galleryService:[],
    galleryAbout:[],
    galleryContact:[],
    galleryStatic:[],
    gallerySupport:[],
    galleryVote:[],
    galleryLearning:[],
    galleryGallery:[],
    gallerySientific:[],
    galleryRegister:[],
    galleryOffice:[],
    galleryProductDetail:[],
}
const getters = {}
const mutations = {

    galleryHome(state,gallery) {
        state.galleryHome = gallery;
    },
    galleryProduct(state,gallery) {
        state.galleryProduct = gallery;
    },
    galleryNews(state,gallery) {
        state.galleryNews = gallery;
    },
    galleryBlog(state,gallery) {
        state.galleryBlog = gallery;
    },
    galleryService(state,gallery) {
        state.galleryService = gallery;
    },
    galleryAbout(state,gallery) {
        state.galleryAbout = gallery;
    },
    galleryContact(state,gallery) {
        state.galleryContact = gallery;
    },
    galleryStatic(state,gallery) {
        state.galleryStatic = gallery;
    },
    gallerySupport(state,gallery) {
        state.gallerySupport = gallery;
    },
    galleryVote(state,gallery) {
        state.galleryVote = gallery;
    },
    galleryLearning(state,gallery) {
        state.galleryLearning = gallery;
    },
    galleryGallery(state,gallery) {
        state.galleryGallery = gallery;
    },
    gallerySientific(state,gallery) {
        state.gallerySientific = gallery;
    },
    galleryRegister(state,gallery) {
        state.galleryRegister = gallery;
    },
    galleryOffice(state,gallery) {
        state.galleryOffice = gallery;
    },
    galleryProductDetail(state,gallery) {
        state.galleryProductDetail = gallery;
    },

}
const actions = {

    viewGallery(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewGallery',form)
                .then(response => {
                    const gallery = response.data
                    if (template == 1){
                        context.commit('galleryHome', gallery)
                    }
                    if (template == 2){
                        context.commit('galleryProduct', gallery)
                    }
                    if (template == 3){
                        context.commit('galleryNews', gallery)
                    }
                    if (template == 4){
                        context.commit('galleryBlog', gallery)
                    }
                    if (template == 5){
                        context.commit('galleryService', gallery)
                    }
                    if (template == 6){
                        context.commit('galleryAbout', gallery)
                    }
                    if (template == 7){
                        context.commit('galleryContact', gallery)
                    }
                    if (template == 8){
                        context.commit('galleryStatic', gallery)
                    }
                    if (template == 9){
                        context.commit('gallerySupport', gallery)
                    }
                    if (template == 10){
                        context.commit('galleryVote', gallery)
                    }
                    if (template == 11){
                        context.commit('galleryLearning', gallery)
                    }
                    if (template == 12){
                        context.commit('galleryGallery', gallery)
                    }
                    if (template == 13){
                        context.commit('gallerySientific', gallery)
                    }
                    if (template == 14){
                        context.commit('galleryRegister', gallery)
                    }
                    if (template == 15){
                        context.commit('galleryOffice', gallery)
                    }
                    if (template == 16){
                        context.commit('galleryProductDetail', gallery)
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

