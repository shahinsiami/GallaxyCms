const state = {
    rowHome:[],
    rowProduct:[],
    rowNews:[],
    rowBlog:[],
    rowService:[],
    rowAbout:[],
    rowContact:[],
    rowStatic:[],
    rowSupport:[],
    rowVote:[],
    rowLearning:[],
    rowGallery:[],
    rowSientific:[],
    rowRegister:[],
    rowOffice:[],
    rowProductDetail:[],

}
const getters = {}
const mutations = {

    rowHome(state,row) {
        state.rowHome = row;
    },
    rowProduct(state,row) {
        state.rowProduct = row;
    },
    rowNews(state,row) {
        state.rowNews = row;
    },
    rowBlog(state,row) {
        state.rowBlog = row;
    },
    rowService(state,row) {
        state.rowService = row;
    },
    rowAbout(state,row) {
        state.rowAbout = row;
    },
    rowContact(state,row) {
        state.rowContact = row;
    },
    rowStatic(state,row) {
        state.rowStatic = row;
    },
    rowSupport(state,row) {
        state.rowSupport = row;
    },
    rowVote(state,row) {
        state.rowVote = row;
    },
    rowLearning(state,row) {
        state.rowLearning = row;
    },
    rowGallery(state,row) {
        state.rowGallery = row;
    },
    rowSientific(state,row) {
        state.rowSientific = row;
    },
    rowRegister(state,row) {
        state.rowRegister = row;
    },
    rowOffice(state,row) {
        state.rowOffice = row;
    },
    rowProductDetail(state,row) {
        state.rowProductDetail = row;
    },


}
const actions = {
    viewRow(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewRow',form)
                .then(response => {
                    const row = response.data
                    if (template == 1){
                         context.commit('rowHome', row)
                    }
                    if (template == 2){
                        context.commit('rowProduct', row)
                    }
                    if (template == 3){
                        context.commit('rowNews', row)
                    }
                    if (template == 4){
                        context.commit('rowBlog', row)
                    }
                    if (template == 5){
                        context.commit('rowService', row)
                    }
                    if (template == 6){
                        context.commit('rowAbout', row)
                    }
                    if (template == 7){
                        context.commit('rowContact', row)
                    }
                    if (template == 8){
                        context.commit('rowStatic', row)
                    }
                    if (template == 9){
                        context.commit('rowSupport', row)
                    }
                    if (template == 10){
                        context.commit('rowVote', row)
                    }
                    if (template == 11){
                        context.commit('rowLearning', row)
                    }
                    if (template == 12){
                        context.commit('rowGallery', row)
                    }
                    if (template == 13){
                        context.commit('rowSientific', row)
                    }
                    if (template == 14){
                        context.commit('rowRegister', row)
                    }
                    if (template == 15){
                        context.commit('rowOffice', row)
                    }
                    if (template == 16){
                        context.commit('rowProductDetail', row)
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

