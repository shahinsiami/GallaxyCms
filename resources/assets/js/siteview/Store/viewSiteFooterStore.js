const state = {
    siteFooterHome:[],
    siteFooterProduct:[],
    siteFooterNews:[],
    siteFooterBlog:[],
    siteFooterService:[],
    siteFooterAbout:[],
    siteFooterContact:[],
    siteFooterStatic:[],
    siteFooterSupport:[],
    siteFooterVote:[],
    siteFooterLearning:[],
    siteFooterGallery:[],
    siteFooterSientific:[],
    siteFooterRegister:[],
    siteFooterOffice:[],
    siteFooterProductDetail:[],

}
const getters = {}
const mutations = {

    siteFooterHome(state,siteFooter) {
        state.siteFooterHome = siteFooter;
    },
    siteFooterProduct(state,siteFooter) {
        state.siteFooterProduct = siteFooter;
    },
    siteFooterNews(state,siteFooter) {
        state.siteFooterNews = siteFooter;
    },
    siteFooterBlog(state,siteFooter) {
        state.siteFooterBlog = siteFooter;
    },
    siteFooterService(state,siteFooter) {
        state.siteFooterService = siteFooter;
    },
    siteFooterAbout(state,siteFooter) {
        state.siteFooterAbout = siteFooter;
    },
    siteFooterContact(state,siteFooter) {
        state.siteFooterContact = siteFooter;
    },
    siteFooterStatic(state,siteFooter) {
        state.siteFooterStatic = siteFooter;
    },
    siteFooterSupport(state,siteFooter) {
        state.siteFooterSupport = siteFooter;
    },
    siteFooterVote(state,siteFooter) {
        state.siteFooterVote = siteFooter;
    },
    siteFooterLearning(state,siteFooter) {
        state.siteFooterLearning = siteFooter;
    },
    siteFooterGallery(state,siteFooter) {
        state.siteFooterGallery = siteFooter;
    },
    siteFooterSientific(state,siteFooter) {
        state.siteFooterSientific = siteFooter;
    },
    siteFooterRegister(state,siteFooter) {
        state.siteFooterRegister = siteFooter;
    },
    siteFooterOffice(state,siteFooter) {
        state.siteFooterOffice = siteFooter;
    },
    siteFooterProductDetail(state,siteFooter) {
        state.siteFooterProductDetail = siteFooter;
    },


}
const actions = {
    viewSiteFooter(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewSiteFooter',form)
                .then(response => {
                    const siteFooter = response.data
                    if (template == 1){
                         context.commit('siteFooterHome', siteFooter)
                    }
                    if (template == 2){
                        context.commit('siteFooterProduct', siteFooter)
                    }
                    if (template == 3){
                        context.commit('siteFooterNews', siteFooter)
                    }
                    if (template == 4){
                        context.commit('siteFooterBlog', siteFooter)
                    }
                    if (template == 5){
                        context.commit('siteFooterService', siteFooter)
                    }
                    if (template == 6){
                        context.commit('siteFooterAbout', siteFooter)
                    }
                    if (template == 7){
                        context.commit('siteFooterContact', siteFooter)
                    }
                    if (template == 8){
                        context.commit('siteFooterStatic', siteFooter)
                    }
                    if (template == 9){
                        context.commit('siteFooterSupport', siteFooter)
                    }
                    if (template == 10){
                        context.commit('siteFooterVote', siteFooter)
                    }
                    if (template == 11){
                        context.commit('siteFooterLearning', siteFooter)
                    }
                    if (template == 12){
                        context.commit('siteFooterGallery', siteFooter)
                    }
                    if (template == 13){
                        context.commit('siteFooterSientific', siteFooter)
                    }
                    if (template == 14){
                        context.commit('siteFooterRegister', siteFooter)
                    }
                    if (template == 15){
                        context.commit('siteFooterOffice', siteFooter)
                    }
                    if (template == 16){
                        context.commit('siteFooterProductDetail', siteFooter)
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

