const state = {
    infoHome:[],
    infoProduct:[],
    infoNews:[],
    infoBlog:[],
    infoService:[],
    infoAbout:[],
    infoContact:[],
    infoStatic:[],
    infoSupport:[],
    infoVote:[],
    infoLearning:[],
    infoGallery:[],
    infoSientific:[],
    infoRegister:[],
    infoOffice:[],
    infoProductDetail:[],
}
const getters = {}
const mutations = {

    infoHome(state,info) {
        state.infoHome = info;
    },
    infoProduct(state,info) {
        state.infoProduct = info;
    },
    infoNews(state,info) {
        state.infoNews = info;
    },
    infoBlog(state,info) {
        state.infoBlog = info;
    },
    infoService(state,info) {
        state.infoService = info;
    },
    infoAbout(state,info) {
        state.infoAbout = info;
    },
    infoContact(state,info) {
        state.infoContact = info;
    },
    infoStatic(state,info) {
        state.infoStatic = info;
    },
    infoSupport(state,info) {
        state.infoSupport = info;
    },
    infoVote(state,info) {
        state.infoVote = info;
    },
    infoLearning(state,info) {
        state.infoLearning = info;
    },
    infoGallery(state,info) {
        state.infoGallery = info;
    },
    infoSientific(state,info) {
        state.infoSientific = info;
    },
    infoRegister(state,info) {
        state.infoRegister = info;
    },
    infoOffice(state,info) {
        state.infoOffice = info;
    },
    infoProductDetail(state,info) {
        state.infoProductDetail = info;
    },


}
const actions = {
    viewInfo(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewInfo',form)
                .then(response => {
                    const info = response.data
                    if (template == 1){
                         context.commit('infoHome', info)
                    }
                    if (template == 2){
                        context.commit('infoProduct', info)
                    }
                    if (template == 3){
                        context.commit('infoNews', info)
                    }
                    if (template == 4){
                        context.commit('infoBlog', info)
                    }
                    if (template == 5){
                        context.commit('infoService', info)
                    }
                    if (template == 6){
                        context.commit('infoAbout', info)
                    }
                    if (template == 7){
                        context.commit('infoContact', info)
                    }
                    if (template == 8){
                        context.commit('infoStatic', info)
                    }
                    if (template == 9){
                        context.commit('infoSupport', info)
                    }
                    if (template == 10){
                        context.commit('infoVote', info)
                    }
                    if (template == 11){
                        context.commit('infoLearning', info)
                    }
                    if (template == 12){
                        context.commit('infoGallery', info)
                    }
                    if (template == 13){
                        context.commit('infoSientific', info)
                    }
                    if (template == 14){
                        context.commit('infoRegister', info)
                    }
                    if (template == 15){
                        context.commit('infoOffice', info)
                    }
                    if (template == 16){
                        context.commit('infoProductDetail', info)
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

