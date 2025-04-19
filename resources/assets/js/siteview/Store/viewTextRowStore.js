const state = {
    textRowHome:[],
    textRowProduct:[],
    textRowNews:[],
    textRowBlog:[],
    textRowService:[],
    textRowAbout:[],
    textRowContact:[],
    textRowStatic:[],
    textRowSupport:[],
    textRowVote:[],
    textRowLearning:[],
    textRowGallery:[],
    textRowSientific:[],
    textRowRegister:[],
    textRowOffice:[],
    textRowProductDetail:[],

}
const getters = {}
const mutations = {

    textRowHome(state,textRow) {
        state.textRowHome = textRow;
    },
    textRowProduct(state,textRow) {
        state.textRowProduct = textRow;
    },
    textRowNews(state,textRow) {
        state.textRowNews = textRow;
    },
    textRowBlog(state,textRow) {
        state.textRowBlog = textRow;
    },
    textRowService(state,textRow) {
        state.textRowService = textRow;
    },
    textRowAbout(state,textRow) {
        state.textRowAbout = textRow;
    },
    textRowContact(state,textRow) {
        state.textRowContact = textRow;
    },
    textRowStatic(state,textRow) {
        state.textRowStatic = textRow;
    },
    textRowSupport(state,textRow) {
        state.textRowSupport = textRow;
    },
    textRowVote(state,textRow) {
        state.textRowVote = textRow;
    },
    textRowLearning(state,textRow) {
        state.textRowLearning = textRow;
    },
    textRowGallery(state,textRow) {
        state.textRowGallery = textRow;
    },
    textRowSientific(state,textRow) {
        state.textRowSientific = textRow;
    },
    textRowRegister(state,textRow) {
        state.textRowRegister = textRow;
    },
    textRowOffice(state,textRow) {
        state.textRowOffice = textRow;
    },
    textRowProductDetail(state,textRow) {
        state.textRowProductDetail = textRow;
    },


}
const actions = {

    viewTextRow(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewTextRow',form)
                .then(response => {
                    const textRow = response.data
                    if (template == 1){
                        context.commit('textRowHome', textRow)
                    }
                    if (template == 2){
                        context.commit('textRowProduct', textRow)
                    }
                    if (template == 3){
                        context.commit('textRowNews', textRow)
                    }
                    if (template == 4){
                        context.commit('textRowBlog', textRow)
                    }
                    if (template == 5){
                        context.commit('textRowService', textRow)
                    }
                    if (template == 6){
                        context.commit('textRowAbout', textRow)
                    }
                    if (template == 7){
                        context.commit('textRowContact', textRow)
                    }
                    if (template == 8){
                        context.commit('textRowStatic', textRow)
                    }
                    if (template == 9){
                        context.commit('textRowSupport', textRow)
                    }
                    if (template == 10){
                        context.commit('textRowVote', textRow)
                    }
                    if (template == 11){
                        context.commit('textRowLearning', textRow)
                    }
                    if (template == 12){
                        context.commit('textRowGallery', textRow)
                    }
                    if (template == 13){
                        context.commit('textRowSientific', textRow)
                    }
                    if (template == 14){
                        context.commit('textRowRegister', textRow)
                    }
                    if (template == 15){
                        context.commit('textRowOffice', textRow)
                    }
                    if (template == 16){
                        context.commit('textRowProductDetail', textRow)
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

