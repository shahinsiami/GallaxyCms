const state = {
    twoColumnHome:[],
    twoColumnProduct:[],
    twoColumnNews:[],
    twoColumnBlog:[],
    twoColumnService:[],
    twoColumnAbout:[],
    twoColumnContact:[],
    twoColumnStatic:[],
    twoColumnSupport:[],
    twoColumnVote:[],
    twoColumnLearning:[],
    twoColumnGallery:[],
    twoColumnSientific:[],
    twoColumnRegister:[],
    twoColumnOffice:[],
    twoColumnProductDetail:[],
}
const getters = {}
const mutations = {

    twoColumnHome(state,twoColumn) {
        state.twoColumnHome = twoColumn;
    },
    twoColumnProduct(state,twoColumn) {
        state.twoColumnProduct = twoColumn;
    },
    twoColumnNews(state,twoColumn) {
        state.twoColumnNews = twoColumn;
    },
    twoColumnBlog(state,twoColumn) {
        state.twoColumnBlog = twoColumn;
    },
    twoColumnService(state,twoColumn) {
        state.twoColumnService = twoColumn;
    },
    twoColumnAbout(state,twoColumn) {
        state.twoColumnAbout = twoColumn;
    },
    twoColumnContact(state,twoColumn) {
        state.twoColumnContact = twoColumn;
    },
    twoColumnStatic(state,twoColumn) {
        state.twoColumnStatic = twoColumn;
    },
    twoColumnSupport(state,twoColumn) {
        state.twoColumnSupport = twoColumn;
    },
    twoColumnVote(state,twoColumn) {
        state.twoColumnVote = twoColumn;
    },
    twoColumnLearning(state,twoColumn) {
        state.twoColumnLearning = twoColumn;
    },
    twoColumnGallery(state,twoColumn) {
        state.twoColumnGallery = twoColumn;
    },
    twoColumnSientific(state,twoColumn) {
        state.twoColumnSientific = twoColumn;
    },
    twoColumnRegister(state,twoColumn) {
        state.twoColumnRegister = twoColumn;
    },
    twoColumnOffice(state,twoColumn) {
        state.twoColumnOffice = twoColumn;
    },
    twoColumnProductDetail(state,twoColumn) {
        state.twoColumnProductDetail = twoColumn;
    },
}
const actions = {

    viewTwoColumn(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewTwoColumn',form)
                .then(response => {
                    const twoColumn = response.data
                    if (template == 1){
                        context.commit('twoColumnHome', twoColumn)
                    }
                    if (template == 2){
                        context.commit('twoColumnProduct', twoColumn)
                    }
                    if (template == 3){
                        context.commit('twoColumnNews', twoColumn)
                    }
                    if (template == 4){
                        context.commit('twoColumnBlog', twoColumn)
                    }
                    if (template == 5){
                        context.commit('twoColumnService', twoColumn)
                    }
                    if (template == 6){
                        context.commit('twoColumnAbout', twoColumn)
                    }
                    if (template == 7){
                        context.commit('twoColumnContact', twoColumn)
                    }
                    if (template == 8){
                        context.commit('twoColumnStatic', twoColumn)
                    }
                    if (template == 9){
                        context.commit('twoColumnSupport', twoColumn)
                    }
                    if (template == 10){
                        context.commit('twoColumnVote', twoColumn)
                    }
                    if (template == 11){
                        context.commit('twoColumnLearning', twoColumn)
                    }
                    if (template == 12){
                        context.commit('twoColumnGallery', twoColumn)
                    }
                    if (template == 13){
                        context.commit('twoColumnSientific', twoColumn)
                    }
                    if (template == 14){
                        context.commit('twoColumnRegister', twoColumn)
                    }
                    if (template == 15){
                        context.commit('twoColumnOffice', twoColumn)
                    }
                    if (template == 16){
                        context.commit('twoColumnProductDetail', twoColumn)
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

