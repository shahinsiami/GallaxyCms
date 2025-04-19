const state = {
    manyColumnFileHome:[],
    manyColumnFileProduct:[],
    manyColumnFileNews:[],
    manyColumnFileBlog:[],
    manyColumnFileService:[],
    manyColumnFileAbout:[],
    manyColumnFileContact:[],
    manyColumnFileStatic:[],
    manyColumnFileSupport:[],
    manyColumnFileVote:[],
    manyColumnFileLearning:[],
    manyColumnFileGallery:[],
    manyColumnFileSientific:[],
    manyColumnFileRegister:[],
    manyColumnFileOffice:[],
    manyColumnFileProductDetail:[],
}
const getters = {}
const mutations = {

    manyColumnFileHome(state,manyColumnFile) {
        state.manyColumnFileHome = manyColumnFile;
    },
    manyColumnFileProduct(state,manyColumnFile) {
        state.manyColumnFileProduct = manyColumnFile;
    },
    manyColumnFileNews(state,manyColumnFile) {
        state.manyColumnFileNews = manyColumnFile;
    },
    manyColumnFileBlog(state,manyColumnFile) {
        state.manyColumnFileBlog = manyColumnFile;
    },
    manyColumnFileService(state,manyColumnFile) {
        state.manyColumnFileService = manyColumnFile;
    },
    manyColumnFileAbout(state,manyColumnFile) {
        state.manyColumnFileAbout = manyColumnFile;
    },
    manyColumnFileContact(state,manyColumnFile) {
        state.manyColumnFileContact = manyColumnFile;
    },
    manyColumnFileStatic(state,manyColumnFile) {
        state.manyColumnFileStatic = manyColumnFile;
    },
    manyColumnFileSupport(state,manyColumnFile) {
        state.manyColumnFileSupport = manyColumnFile;
    },
    manyColumnFileVote(state,manyColumnFile) {
        state.manyColumnFileVote = manyColumnFile;
    },
    manyColumnFileLearning(state,manyColumnFile) {
        state.manyColumnFileLearning = manyColumnFile;
    },
    manyColumnFileGallery(state,manyColumnFile) {
        state.manyColumnFileGallery = manyColumnFile;
    },
    manyColumnFileSientific(state,manyColumnFile) {
        state.manyColumnFileSientific = manyColumnFile;
    },
    manyColumnFileRegister(state,manyColumnFile) {
        state.manyColumnFileRegister = manyColumnFile;
    },
    manyColumnFileOffice(state,manyColumnFile) {
        state.manyColumnFileOffice = manyColumnFile;
    },
    manyColumnFileProductDetail(state,manyColumnFile) {
        state.manyColumnFileProductDetail = manyColumnFile;
    },


}
const actions = {
    viewManyColumnFile(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewManyColumnFile',form)
                .then(response => {
                    const manyColumnFile = response.data
                    if (template == 1){
                         context.commit('manyColumnFileHome', manyColumnFile)
                    }
                    if (template == 2){
                        context.commit('manyColumnFileProduct', manyColumnFile)
                    }
                    if (template == 3){
                        context.commit('manyColumnFileNews', manyColumnFile)
                    }
                    if (template == 4){
                        context.commit('manyColumnFileBlog', manyColumnFile)
                    }
                    if (template == 5){
                        context.commit('manyColumnFileService', manyColumnFile)
                    }
                    if (template == 6){
                        context.commit('manyColumnFileAbout', manyColumnFile)
                    }
                    if (template == 7){
                        context.commit('manyColumnFileContact', manyColumnFile)
                    }
                    if (template == 8){
                        context.commit('manyColumnFileStatic', manyColumnFile)
                    }
                    if (template == 9){
                        context.commit('manyColumnFileSupport', manyColumnFile)
                    }
                    if (template == 10){
                        context.commit('manyColumnFileVote', manyColumnFile)
                    }
                    if (template == 11){
                        context.commit('manyColumnFileLearning', manyColumnFile)
                    }
                    if (template == 12){
                        context.commit('manyColumnFileGallery', manyColumnFile)
                    }
                    if (template == 13){
                        context.commit('manyColumnFileSientific', manyColumnFile)
                    }
                    if (template == 14){
                        context.commit('manyColumnFileRegister', manyColumnFile)
                    }
                    if (template == 15){
                        context.commit('manyColumnFileOffice', manyColumnFile)
                    }
                    if (template == 16){
                        context.commit('manyColumnFileProductDetail', manyColumnFile)
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

