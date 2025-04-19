const state = {
    threeColumnHome:[],
    threeColumnProduct:[],
    threeColumnNews:[],
    threeColumnBlog:[],
    threeColumnService:[],
    threeColumnAbout:[],
    threeColumnContact:[],
    threeColumnStatic:[],
    threeColumnSupport:[],
    threeColumnVote:[],
    threeColumnLearning:[],
    threeColumnGallery:[],
    threeColumnSientific:[],
    threeColumnRegister:[],
    threeColumnOffice:[],
    threeColumnProductDetail:[],
}
const getters = {}
const mutations = {

    threeColumnHome(state,threeColumn) {
        state.threeColumnHome = threeColumn;
    },
    threeColumnProduct(state,threeColumn) {
        state.threeColumnProduct = threeColumn;
    },
    threeColumnNews(state,threeColumn) {
        state.threeColumnNews = threeColumn;
    },
    threeColumnBlog(state,threeColumn) {
        state.threeColumnBlog = threeColumn;
    },
    threeColumnService(state,threeColumn) {
        state.threeColumnService = threeColumn;
    },
    threeColumnAbout(state,threeColumn) {
        state.threeColumnAbout = threeColumn;
    },
    threeColumnContact(state,threeColumn) {
        state.threeColumnContact = threeColumn;
    },
    threeColumnStatic(state,threeColumn) {
        state.threeColumnStatic = threeColumn;
    },
    threeColumnSupport(state,threeColumn) {
        state.threeColumnSupport = threeColumn;
    },
    threeColumnVote(state,threeColumn) {
        state.threeColumnVote = threeColumn;
    },
    threeColumnLearning(state,threeColumn) {
        state.threeColumnLearning = threeColumn;
    },
    threeColumnGallery(state,threeColumn) {
        state.threeColumnGallery = threeColumn;
    },
    threeColumnSientific(state,threeColumn) {
        state.threeColumnSientific = threeColumn;
    },
    threeColumnRegister(state,threeColumn) {
        state.threeColumnRegister = threeColumn;
    },
    threeColumnOffice(state,threeColumn) {
        state.threeColumnOffice = threeColumn;
    },
    threeColumnProductDetail(state,threeColumn) {
        state.threeColumnProductDetail = threeColumn;
    },

}
const actions = {

    viewThreeColumn(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewThreeColumn',form)
                .then(response => {
                    const threeColumn = response.data
                    if (template == 1){
                        context.commit('threeColumnHome', threeColumn)
                    }
                    if (template == 2){
                        context.commit('threeColumnProduct', threeColumn)
                    }
                    if (template == 3){
                        context.commit('threeColumnNews', threeColumn)
                    }
                    if (template == 4){
                        context.commit('threeColumnBlog', threeColumn)
                    }
                    if (template == 5){
                        context.commit('threeColumnService', threeColumn)
                    }
                    if (template == 6){
                        context.commit('threeColumnAbout', threeColumn)
                    }
                    if (template == 7){
                        context.commit('threeColumnContact', threeColumn)
                    }
                    if (template == 8){
                        context.commit('threeColumnStatic', threeColumn)
                    }
                    if (template == 9){
                        context.commit('threeColumnSupport', threeColumn)
                    }
                    if (template == 10){
                        context.commit('threeColumnVote', threeColumn)
                    }
                    if (template == 11){
                        context.commit('threeColumnLearning', threeColumn)
                    }
                    if (template == 12){
                        context.commit('threeColumnGallery', threeColumn)
                    }
                    if (template == 13){
                        context.commit('threeColumnSientific', threeColumn)
                    }
                    if (template == 14){
                        context.commit('threeColumnRegister', threeColumn)
                    }
                    if (template == 15){
                        context.commit('threeColumnOffice', threeColumn)
                    }
                    if (template == 16){
                        context.commit('threeColumnProductDetail', threeColumn)
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

