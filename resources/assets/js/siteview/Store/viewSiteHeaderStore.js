const state = {
    siteHeaderHome:[],
    siteHeaderProduct:[],
    siteHeaderNews:[],
    siteHeaderBlog:[],
    siteHeaderService:[],
    siteHeaderAbout:[],
    siteHeaderContact:[],
    siteHeaderStatic:[],
    siteHeaderSupport:[],
    siteHeaderVote:[],
    siteHeaderLearning:[],
    siteHeaderGallery:[],
    siteHeaderSientific:[],
    siteHeaderRegister:[],
    siteHeaderOffice:[],
    siteHeaderProductDetail:[],

}
const getters = {}
const mutations = {

    siteHeaderHome(state,siteHeader) {
        state.siteHeaderHome = siteHeader;
    },
    siteHeaderProduct(state,siteHeader) {
        state.siteHeaderProduct = siteHeader;
    },
    siteHeaderNews(state,siteHeader) {
        state.siteHeaderNews = siteHeader;
    },
    siteHeaderBlog(state,siteHeader) {
        state.siteHeaderBlog = siteHeader;
    },
    siteHeaderService(state,siteHeader) {
        state.siteHeaderService = siteHeader;
    },
    siteHeaderAbout(state,siteHeader) {
        state.siteHeaderAbout = siteHeader;
    },
    siteHeaderContact(state,siteHeader) {
        state.siteHeaderContact = siteHeader;
    },
    siteHeaderStatic(state,siteHeader) {
        state.siteHeaderStatic = siteHeader;
    },
    siteHeaderSupport(state,siteHeader) {
        state.siteHeaderSupport = siteHeader;
    },
    siteHeaderVote(state,siteHeader) {
        state.siteHeaderVote = siteHeader;
    },
    siteHeaderLearning(state,siteHeader) {
        state.siteHeaderLearning = siteHeader;
    },
    siteHeaderGallery(state,siteHeader) {
        state.siteHeaderGallery = siteHeader;
    },
    siteHeaderSientific(state,siteHeader) {
        state.siteHeaderSientific = siteHeader;
    },
    siteHeaderRegister(state,siteHeader) {
        state.siteHeaderRegister = siteHeader;
    },
    siteHeaderOffice(state,siteHeader) {
        state.siteHeaderOffice = siteHeader;
    },
    siteHeaderProductDetail(state,siteHeader) {
        state.siteHeaderProductDetail = siteHeader;
    },


}
const actions = {
    viewSiteHeader(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewSiteHeader',form)
                .then(response => {
                    const siteHeader = response.data
                    if (template == 1){
                         context.commit('siteHeaderHome', siteHeader)
                    }
                    if (template == 2){
                        context.commit('siteHeaderProduct', siteHeader)
                    }
                    if (template == 3){
                        context.commit('siteHeaderNews', siteHeader)
                    }
                    if (template == 4){
                        context.commit('siteHeaderBlog', siteHeader)
                    }
                    if (template == 5){
                        context.commit('siteHeaderService', siteHeader)
                    }
                    if (template == 6){
                        context.commit('siteHeaderAbout', siteHeader)
                    }
                    if (template == 7){
                        context.commit('siteHeaderContact', siteHeader)
                    }
                    if (template == 8){
                        context.commit('siteHeaderStatic', siteHeader)
                    }
                    if (template == 9){
                        context.commit('siteHeaderSupport', siteHeader)
                    }
                    if (template == 10){
                        context.commit('siteHeaderVote', siteHeader)
                    }
                    if (template == 11){
                        context.commit('siteHeaderLearning', siteHeader)
                    }
                    if (template == 12){
                        context.commit('siteHeaderGallery', siteHeader)
                    }
                    if (template == 13){
                        context.commit('siteHeaderSientific', siteHeader)
                    }
                    if (template == 14){
                        context.commit('siteHeaderRegister', siteHeader)
                    }
                    if (template == 15){
                        context.commit('siteHeaderOffice', siteHeader)
                    }
                    if (template == 16){
                        context.commit('siteHeaderProductDetail', siteHeader)
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

