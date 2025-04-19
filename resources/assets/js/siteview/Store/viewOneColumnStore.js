const state = {
    oneColumnHome:[],
    oneColumnProduct:[],
    oneColumnNews:[],
    oneColumnBlog:[],
    oneColumnService:[],
    oneColumnAbout:[],
    oneColumnContact:[],
    oneColumnStatic:[],
    oneColumnSupport:[],
    oneColumnVote:[],
    oneColumnLearning:[],
    oneColumnGallery:[],
    oneColumnSientific:[],
    oneColumnRegister:[],
    oneColumnOffice:[],
    oneColumnProductDetail:[],
}
const getters = {}
const mutations = {

    oneColumnHome(state,oneColumn) {
        state.oneColumnHome = oneColumn;
    },
    oneColumnProduct(state,oneColumn) {
        state.oneColumnProduct = oneColumn;
    },
    oneColumnNews(state,oneColumn) {
        state.oneColumnNews = oneColumn;
    },
    oneColumnBlog(state,oneColumn) {
        state.oneColumnBlog = oneColumn;
    },
    oneColumnService(state,oneColumn) {
        state.oneColumnService = oneColumn;
    },
    oneColumnAbout(state,oneColumn) {
        state.oneColumnAbout = oneColumn;
    },
    oneColumnContact(state,oneColumn) {
        state.oneColumnContact = oneColumn;
    },
    oneColumnStatic(state,oneColumn) {
        state.oneColumnStatic = oneColumn;
    },
    oneColumnSupport(state,oneColumn) {
        state.oneColumnSupport = oneColumn;
    },
    oneColumnVote(state,oneColumn) {
        state.oneColumnVote = oneColumn;
    },
    oneColumnLearning(state,oneColumn) {
        state.oneColumnLearning = oneColumn;
    },
    oneColumnGallery(state,oneColumn) {
        state.oneColumnGallery = oneColumn;
    },
    oneColumnSientific(state,oneColumn) {
        state.oneColumnSientific = oneColumn;
    },
    oneColumnRegister(state,oneColumn) {
        state.oneColumnRegister = oneColumn;
    },
    oneColumnOffice(state,oneColumn) {
        state.oneColumnOffice = oneColumn;
    },
    oneColumnProductDetail(state,oneColumn) {
        state.oneColumnProductDetail = oneColumn;
    },

}
const actions = {

    viewOneColumn(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewOneColumn',form)
                .then(response => {
                    const oneColumn = response.data
                    if (template == 1){
                        context.commit('oneColumnHome', oneColumn)
                    }
                    if (template == 2){
                        context.commit('oneColumnProduct', oneColumn)
                    }
                    if (template == 3){
                        context.commit('oneColumnNews', oneColumn)
                    }
                    if (template == 4){
                        context.commit('oneColumnBlog', oneColumn)
                    }
                    if (template == 5){
                        context.commit('oneColumnService', oneColumn)
                    }
                    if (template == 6){
                        context.commit('oneColumnAbout', oneColumn)
                    }
                    if (template == 7){
                        context.commit('oneColumnContact', oneColumn)
                    }
                    if (template == 8){
                        context.commit('oneColumnStatic', oneColumn)
                    }
                    if (template == 9){
                        context.commit('oneColumnSupport', oneColumn)
                    }
                    if (template == 10){
                        context.commit('oneColumnVote', oneColumn)
                    }
                    if (template == 11){
                        context.commit('oneColumnLearning', oneColumn)
                    }
                    if (template == 12){
                        context.commit('oneColumnGallery', oneColumn)
                    }
                    if (template == 13){
                        context.commit('oneColumnSientific', oneColumn)
                    }
                    if (template == 14){
                        context.commit('oneColumnRegister', oneColumn)
                    }
                    if (template == 15){
                        context.commit('oneColumnOffice', oneColumn)
                    }
                    if (template == 16){
                        context.commit('oneColumnProductDetail', oneColumn)
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

