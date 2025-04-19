const state = {
    fourColumnHome:[],
    fourColumnProduct:[],
    fourColumnNews:[],
    fourColumnBlog:[],
    fourColumnService:[],
    fourColumnAbout:[],
    fourColumnContact:[],
    fourColumnStatic:[],
    fourColumnSupport:[],
    fourColumnVote:[],
    fourColumnLearning:[],
    fourColumnGallery:[],
    fourColumnSientific:[],
    fourColumnRegister:[],
    fourColumnOffice:[],
    fourColumnProductDetail:[],

}
const getters = {}
const mutations = {

    fourColumnHome(state,fourColumn) {
        state.fourColumnHome = fourColumn;
    },
    fourColumnProduct(state,fourColumn) {
        state.fourColumnProduct = fourColumn;
    },
    fourColumnNews(state,fourColumn) {
        state.fourColumnNews = fourColumn;
    },
    fourColumnBlog(state,fourColumn) {
        state.fourColumnBlog = fourColumn;
    },
    fourColumnService(state,fourColumn) {
        state.fourColumnService = fourColumn;
    },
    fourColumnAbout(state,fourColumn) {
        state.fourColumnAbout = fourColumn;
    },
    fourColumnContact(state,fourColumn) {
        state.fourColumnContact = fourColumn;
    },
    fourColumnStatic(state,fourColumn) {
        state.fourColumnStatic = fourColumn;
    },
    fourColumnSupport(state,fourColumn) {
        state.fourColumnSupport = fourColumn;
    },
    fourColumnVote(state,fourColumn) {
        state.fourColumnVote = fourColumn;
    },
    fourColumnLearning(state,fourColumn) {
        state.fourColumnLearning = fourColumn;
    },
    fourColumnGallery(state,fourColumn) {
        state.fourColumnGallery = fourColumn;
    },
    fourColumnSientific(state,fourColumn) {
        state.fourColumnSientific = fourColumn;
    },
    fourColumnRegister(state,fourColumn) {
        state.fourColumnRegister = fourColumn;
    },
    fourColumnOffice(state,fourColumn) {
        state.fourColumnOffice = fourColumn;
    },
    fourColumnProductDetail(state,fourColumn) {
        state.fourColumnProductDetail = fourColumn;
    },
}
const actions = {
    viewFourColumn(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewFourColumn',form)
                .then(response => {
                    const fourColumn = response.data
                    if (template == 1){
                        context.commit('fourColumnHome', fourColumn)
                    }
                    if (template == 2){
                        context.commit('fourColumnProduct', fourColumn)
                    }
                    if (template == 3){
                        context.commit('fourColumnNews', fourColumn)
                    }
                    if (template == 4){
                        context.commit('fourColumnBlog', fourColumn)
                    }
                    if (template == 5){
                        context.commit('fourColumnService', fourColumn)
                    }
                    if (template == 6){
                        context.commit('fourColumnAbout', fourColumn)
                    }
                    if (template == 7){
                        context.commit('fourColumnContact', fourColumn)
                    }
                    if (template == 8){
                        context.commit('fourColumnStatic', fourColumn)
                    }
                    if (template == 9){
                        context.commit('fourColumnSupport', fourColumn)
                    }
                    if (template == 10){
                        context.commit('fourColumnVote', fourColumn)
                    }
                    if (template == 11){
                        context.commit('fourColumnLearning', fourColumn)
                    }
                    if (template == 12){
                        context.commit('fourColumnGallery', fourColumn)
                    }
                    if (template == 13){
                        context.commit('fourColumnSientific', fourColumn)
                    }
                    if (template == 14){
                        context.commit('fourColumnRegister', fourColumn)
                    }
                    if (template == 15){
                        context.commit('fourColumnOffice', fourColumn)
                    }
                    if (template == 16){
                        context.commit('fourColumnProductDetail', fourColumn)
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

