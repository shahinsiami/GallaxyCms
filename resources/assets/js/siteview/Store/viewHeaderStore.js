const state = {
    categoryHeaderHome:[],
    categoryHeaderProduct:[],
    categoryHeaderNews:[],
    categoryHeaderBlog:[],
    categoryHeaderService:[],
    categoryHeaderAbout:[],
    categoryHeaderContact:[],
    categoryHeaderStatic:[],
    categoryHeaderSupport:[],
    categoryHeaderVote:[],
    categoryHeaderLearning:[],
    categoryHeaderGallery:[],
    categoryHeaderSientific:[],
    categoryHeaderRegister:[],
    categoryHeaderOffice:[],
    categoryProductDetail:[],
    subCategoryHeaderHome:[],
    subCategoryHeaderProduct:[],
    subCategoryHeaderNews:[],
    subCategoryHeaderBlog:[],
    subCategoryHeaderService:[],
    subCategoryHeaderAbout:[],
    subCategoryHeaderContact:[],
    subCategoryHeaderStatic:[],
    subCategoryHeaderSupport:[],
    subCategoryHeaderVote:[],
    subCategoryHeaderLearning:[],
    subCategoryHeaderGallery:[],
    subCategoryHeaderSientific:[],
    subCategoryHeaderRegister:[],
    subCategoryHeaderOffice:[],
    subCategoryProductDetail:[],
    segmentHeaderHome:[],
    segmentHeaderProduct:[],
    segmentHeaderNews:[],
    segmentHeaderBlog:[],
    segmentHeaderService:[],
    segmentHeaderAbout:[],
    segmentHeaderContact:[],
    segmentHeaderStatic:[],
    segmentHeaderSupport:[],
    segmentHeaderVote:[],
    segmentHeaderLearning:[],
    segmentHeaderGallery:[],
    segmentHeaderSientific:[],
    segmentHeaderRegister:[],
    segmentHeaderOffice:[],
    segmentProductDetail:[],
}
const getters = {}
const mutations = {
    categoryHeaderHome(state,categoryHeader) {
        state.categoryHeaderHome = categoryHeader;
    },
    categoryHeaderProduct(state,categoryHeader) {
        state.categoryHeaderProduct = categoryHeader;
    },
    categoryHeaderNews(state,categoryHeader) {
        state.categoryHeaderNews = categoryHeader;
    },
    categoryHeaderBlog(state,categoryHeader) {
        state.categoryHeaderBlog = categoryHeader;
    },
    categoryHeaderService(state,categoryHeader) {
        state.categoryHeaderService = categoryHeader;
    },
    categoryHeaderAbout(state,categoryHeader) {
        state.categoryHeaderAbout = categoryHeader;
    },
    categoryHeaderContact(state,categoryHeader) {
        state.categoryHeaderContact = categoryHeader;
    },
    categoryHeaderStatic(state,categoryHeader) {
        state.categoryHeaderStatic = categoryHeader;
    },
    categoryHeaderSupport(state,categoryHeader) {
        state.categoryHeaderSupport = categoryHeader;
    },
    categoryHeaderVote(state,categoryHeader) {
        state.categoryHeaderVote = categoryHeader;
    },
    categoryHeaderLearning(state,categoryHeader) {
        state.categoryHeaderLearning = categoryHeader;
    },
    categoryHeaderGallery(state,categoryHeader) {
        state.categoryHeaderGallery = categoryHeader;
    },
    categoryHeaderSientific(state,categoryHeader) {
        state.categoryHeaderSientific = categoryHeader;
    },
    categoryHeaderRegister(state,categoryHeader) {
        state.categoryHeaderRegister = categoryHeader;
    },
    categoryHeaderOffice(state,categoryHeader) {
        state.categoryHeaderOffice = categoryHeader;
    },
    categoryProductDetail(state,categoryHeader) {
        state.categoryProductDetail = categoryHeader;
    },
    subCategoryHeaderHome(state,subCategoryHeader) {
        state.subCategoryHeaderHome = subCategoryHeader;
    },
    subCategoryHeaderProduct(state,subCategoryHeader) {
        state.subCategoryHeaderProduct = subCategoryHeader;
    },
    subCategoryHeaderNews(state,subCategoryHeader) {
        state.subCategoryHeaderNews = subCategoryHeader;
    },
    subCategoryHeaderBlog(state,subCategoryHeader) {
        state.subCategoryHeaderBlog = subCategoryHeader;
    },
    subCategoryHeaderService(state,subCategoryHeader) {
        state.subCategoryHeaderService = subCategoryHeader;
    },
    subCategoryHeaderAbout(state,subCategoryHeader) {
        state.subCategoryHeaderAbout = subCategoryHeader;
    },
    subCategoryHeaderContact(state,subCategoryHeader) {
        state.subCategoryHeaderContact = subCategoryHeader;
    },
    subCategoryHeaderStatic(state,subCategoryHeader) {
        state.subCategoryHeaderStatic = subCategoryHeader;
    },
    subCategoryHeaderSupport(state,subCategoryHeader) {
        state.subCategoryHeaderSupport = subCategoryHeader;
    },
    subCategoryHeaderVote(state,subCategoryHeader) {
        state.subCategoryHeaderVote = subCategoryHeader;
    },
    subCategoryHeaderLearning(state,subCategoryHeader) {
        state.subCategoryHeaderLearning = subCategoryHeader;
    },
    subCategoryHeaderGallery(state,subCategoryHeader) {
        state.subCategoryHeaderGallery = subCategoryHeader;
    },
    subCategoryHeaderSientific(state,subCategoryHeader) {
        state.subCategoryHeaderSientific = subCategoryHeader;
    },
    subCategoryHeaderRegister(state,subCategoryHeader) {
        state.subCategoryHeaderRegister = subCategoryHeader;
    },
    subCategoryHeaderOffice(state,subCategoryHeader) {
        state.subCategoryHeaderOffice = subCategoryHeader;
    },
    subCategoryProductDetail(state,subCategoryHeader) {
        state.subCategoryProductDetail = subCategoryHeader;
    },
    segmentHeaderHome(state,segmentHeader) {
        state.segmentHeaderHome = segmentHeader;
    },
    segmentHeaderProduct(state,segmentHeader) {
        state.segmentHeaderProduct = segmentHeader;
    },
    segmentHeaderNews(state,segmentHeader) {
        state.segmentHeaderNews = segmentHeader;
    },
    segmentHeaderBlog(state,segmentHeader) {
        state.segmentHeaderBlog = segmentHeader;
    },
    segmentHeaderService(state,segmentHeader) {
        state.segmentHeaderService = segmentHeader;
    },
    segmentHeaderAbout(state,segmentHeader) {
        state.segmentHeaderAbout = segmentHeader;
    },
    segmentHeaderContact(state,segmentHeader) {
        state.segmentHeaderContact = segmentHeader;
    },
    segmentHeaderStatic(state,segmentHeader) {
        state.segmentHeaderStatic = segmentHeader;
    },
    segmentHeaderSupport(state,segmentHeader) {
        state.segmentHeaderSupport = segmentHeader;
    },
    segmentHeaderVote(state,segmentHeader) {
        state.segmentHeaderVote = segmentHeader;
    },
    segmentHeaderLearning(state,segmentHeader) {
        state.segmentHeaderLearning = segmentHeader;
    },
    segmentHeaderGallery(state,segmentHeader) {
        state.segmentHeaderGallery = segmentHeader;
    },
    segmentHeaderSientific(state,segmentHeader) {
        state.segmentHeaderSientific = segmentHeader;
    },
    segmentHeaderRegister(state,segmentHeader) {
        state.segmentHeaderRegister = segmentHeader;
    },
    segmentHeaderOffice(state,segmentHeader) {
        state.segmentHeaderOffice = segmentHeader;
    },
    segmentProductDetail(state,segmentHeader) {
        state.segmentProductDetail = segmentHeader;
    },
}
const actions = {
    viewCategoryHeader(context,[slug,template]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewCategoryHeader',form)
                .then(response => {
                    const categoryHeader = response.data
                    if (template == 1){
                        context.commit('categoryHeaderHome', categoryHeader)
                    }
                    if (template == 2){
                        context.commit('categoryHeaderProduct', categoryHeader)
                    }
                    if (template == 3){
                        context.commit('categoryHeaderNews', categoryHeader)
                    }
                    if (template == 4){
                        context.commit('categoryHeaderBlog', categoryHeader)
                    }
                    if (template == 5){
                        context.commit('categoryHeaderService', categoryHeader)
                    }
                    if (template == 6){
                        context.commit('categoryHeaderAbout', categoryHeader)
                    }
                    if (template == 7){
                        context.commit('categoryHeaderContact', categoryHeader)
                    }
                    if (template == 8){
                        context.commit('categoryHeaderStatic', categoryHeader)
                    }
                    if (template == 9){
                        context.commit('categoryHeaderSupport', categoryHeader)
                    }
                    if (template == 10){
                        context.commit('categoryHeaderVote', categoryHeader)
                    }
                    if (template == 11){
                        context.commit('categoryHeaderLearning', categoryHeader)
                    }
                    if (template == 12){
                        context.commit('categoryHeaderGallery', categoryHeader)
                    }
                    if (template == 13){
                        context.commit('categoryHeaderSientific', categoryHeader)
                    }
                    if (template == 14){
                        context.commit('categoryHeaderRegister', categoryHeader)
                    }
                    if (template == 15){
                        context.commit('categoryHeaderOffice', categoryHeader)
                    }
                    if (template == 16){
                        context.commit('categoryProductDetail', categoryHeader)
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
    viewSubCategoryHeader(context,[slug,template]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewSubCategoryHeader',form)
                .then(response => {
                    const subCategoryHeader = response.data
                    if (template == 1){
                        context.commit('subCategoryHeaderHome', subCategoryHeader)
                    }
                    if (template == 2){
                        context.commit('subCategoryHeaderProduct', subCategoryHeader)
                    }
                    if (template == 3){
                        context.commit('subCategoryHeaderNews', subCategoryHeader)
                    }
                    if (template == 4){
                        context.commit('subCategoryHeaderBlog', subCategoryHeader)
                    }
                    if (template == 5){
                        context.commit('subCategoryHeaderService', subCategoryHeader)
                    }
                    if (template == 6){
                        context.commit('subCategoryHeaderAbout', subCategoryHeader)
                    }
                    if (template == 7){
                        context.commit('subCategoryHeaderContact', subCategoryHeader)
                    }
                    if (template == 8){
                        context.commit('subCategoryHeaderStatic', subCategoryHeader)
                    }
                    if (template == 9){
                        context.commit('subCategoryHeaderSupport', subCategoryHeader)
                    }
                    if (template == 10){
                        context.commit('subCategoryHeaderVote', subCategoryHeader)
                    }
                    if (template == 11){
                        context.commit('subCategoryHeaderLearning', subCategoryHeader)
                    }
                    if (template == 12){
                        context.commit('subCategoryHeaderGallery', subCategoryHeader)
                    }
                    if (template == 13){
                        context.commit('subCategoryHeaderSientific', subCategoryHeader)
                    }
                    if (template == 14){
                        context.commit('subCategoryHeaderRegister', subCategoryHeader)
                    }
                    if (template == 15){
                        context.commit('subCategoryHeaderOffice', subCategoryHeader)
                    }
                    if (template == 16){
                        context.commit('subCategoryProductDetail', subCategoryHeader)
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
    viewSegmentHeader(context,[slug,template]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewSegmentHeader',form)
                .then(response => {
                    const segmentHeader = response.data
                    if (template == 1){
                        context.commit('segmentHeaderHome', segmentHeader)
                    }
                    if (template == 2){
                        context.commit('segmentHeaderProduct', segmentHeader)
                    }
                    if (template == 3){
                        context.commit('segmentHeaderNews', segmentHeader)
                    }
                    if (template == 4){
                        context.commit('segmentHeaderBlog', segmentHeader)
                    }
                    if (template == 5){
                        context.commit('segmentHeaderService', segmentHeader)
                    }
                    if (template == 6){
                        context.commit('segmentHeaderAbout', segmentHeader)
                    }
                    if (template == 7){
                        context.commit('segmentHeaderContact', segmentHeader)
                    }
                    if (template == 8){
                        context.commit('segmentHeaderStatic', segmentHeader)
                    }
                    if (template == 9){
                        context.commit('segmentHeaderSupport', segmentHeader)
                    }
                    if (template == 10){
                        context.commit('segmentHeaderVote', segmentHeader)
                    }
                    if (template == 11){
                        context.commit('segmentHeaderLearning', segmentHeader)
                    }
                    if (template == 12){
                        context.commit('segmentHeaderGallery', segmentHeader)
                    }
                    if (template == 13){
                        context.commit('segmentHeaderSientific', segmentHeader)
                    }
                    if (template == 14){
                        context.commit('segmentHeaderRegister', segmentHeader)
                    }
                    if (template == 15){
                        context.commit('segmentHeaderOffice', segmentHeader)
                    }
                    if (template == 16){
                        context.commit('segmentProductDetail', segmentHeader)
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
}
export default {
    state, mutations, actions, getters
}

