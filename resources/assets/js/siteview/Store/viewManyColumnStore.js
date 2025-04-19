const state = {
    manyColumnHome:[],
    manyColumnProduct:[],
    manyColumnNews:[],
    manyColumnBlog:[],
    manyColumnService:[],
    manyColumnAbout:[],
    manyColumnContact:[],
    manyColumnStatic:[],
    manyColumnSupport:[],
    manyColumnVote:[],
    manyColumnLearning:[],
    manyColumnGallery:[],
    manyColumnSientific:[],
    manyColumnRegister:[],
    manyColumnOffice:[],
    manyColumnProductDetail:[],
}
const getters = {}
const mutations = {

    manyColumnHome(state,manyColumn) {
        state.manyColumnHome = manyColumn;
    },
    manyColumnProduct(state,manyColumn) {
        state.manyColumnProduct = manyColumn;
    },
    manyColumnNews(state,manyColumn) {
        state.manyColumnNews = manyColumn;
    },
    manyColumnBlog(state,manyColumn) {
        state.manyColumnBlog = manyColumn;
    },
    manyColumnService(state,manyColumn) {
        state.manyColumnService = manyColumn;
    },
    manyColumnAbout(state,manyColumn) {
        state.manyColumnAbout = manyColumn;
    },
    manyColumnContact(state,manyColumn) {
        state.manyColumnContact = manyColumn;
    },
    manyColumnStatic(state,manyColumn) {
        state.manyColumnStatic = manyColumn;
    },
    manyColumnSupport(state,manyColumn) {
        state.manyColumnSupport = manyColumn;
    },
    manyColumnVote(state,manyColumn) {
        state.manyColumnVote = manyColumn;
    },
    manyColumnLearning(state,manyColumn) {
        state.manyColumnLearning = manyColumn;
    },
    manyColumnGallery(state,manyColumn) {
        state.manyColumnGallery = manyColumn;
    },
    manyColumnSientific(state,manyColumn) {
        state.manyColumnSientific = manyColumn;
    },
    manyColumnRegister(state,manyColumn) {
        state.manyColumnRegister = manyColumn;
    },
    manyColumnOffice(state,manyColumn) {
        state.manyColumnOffice = manyColumn;
    },
    manyColumnProductDetail(state,manyColumn) {
        state.manyColumnProductDetail = manyColumn;
    },

}
const actions = {

    viewManyColumn(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewManyColumn',form)
                .then(response => {
                    const manyColumn = response.data
                    if (template == 1){
                        context.commit('manyColumnHome', manyColumn)
                    }
                    if (template == 2){
                        context.commit('manyColumnProduct', manyColumn)
                    }
                    if (template == 3){
                        context.commit('manyColumnNews', manyColumn)
                    }
                    if (template == 4){
                        context.commit('manyColumnBlog', manyColumn)
                    }
                    if (template == 5){
                        context.commit('manyColumnService', manyColumn)
                    }
                    if (template == 6){
                        context.commit('manyColumnAbout', manyColumn)
                    }
                    if (template == 7){
                        context.commit('manyColumnContact', manyColumn)
                    }
                    if (template == 8){
                        context.commit('manyColumnStatic', manyColumn)
                    }
                    if (template == 9){
                        context.commit('manyColumnSupport', manyColumn)
                    }
                    if (template == 10){
                        context.commit('manyColumnVote', manyColumn)
                    }
                    if (template == 11){
                        context.commit('manyColumnLearning', manyColumn)
                    }
                    if (template == 12){
                        context.commit('manyColumnGallery', manyColumn)
                    }
                    if (template == 13){
                        context.commit('manyColumnSientific', manyColumn)
                    }
                    if (template == 14){
                        context.commit('manyColumnRegister', manyColumn)
                    }
                    if (template == 15){
                        context.commit('manyColumnOffice', manyColumn)
                    }
                    if (template == 16){
                        context.commit('manyColumnProductDetail', manyColumn)
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

