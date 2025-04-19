const state = {
    flashSalesHome:[],
    flashSalesProduct:[],
    flashSalesNews:[],
    flashSalesBlog:[],
    flashSalesService:[],
    flashSalesAbout:[],
    FlashSalesContact:[],
    flashSalesStatic:[],
    flashSalesSupport:[],
    flashSalesVote:[],
    flashSalesLearning:[],
    flashSalesGallery:[],
    flashSalesSientific:[],
    flashSalesRegister:[],
    flashSalesOffice:[],
    flashSalesProductDetail:[],

}
const getters = {}
const mutations = {
    flashSalesHome(state,flashSales) {
        state.flashSalesHome = flashSales;
    },
    flashSalesProduct(state,flashSales) {
        state.flashSalesProduct = flashSales;
    },
    flashSalesNews(state,flashSales) {
        state.flashSalesNews = flashSales;
    },
    flashSalesBlog(state,flashSales) {
        state.flashSalesBlog = flashSales;
    },
    flashSalesService(state,flashSales) {
        state.flashSalesService = flashSales;
    },
    flashSalesAbout(state,flashSales) {
        state.flashSalesAbout = flashSales;
    },
    FlashSalesContact(state,flashSales) {
        state.FlashSalesContact = flashSales;
    },
    flashSalesStatic(state,flashSales) {
        state.flashSalesStatic = flashSales;
    },
    flashSalesSupport(state,flashSales) {
        state.flashSalesSupport = flashSales;
    },
    flashSalesVote(state,flashSales) {
        state.flashSalesVote = flashSales;
    },
    flashSalesLearning(state,flashSales) {
        state.flashSalesLearning = flashSales;
    },
    flashSalesGallery(state,flashSales) {
        state.flashSalesGallery = flashSales;
    },
    flashSalesSientific(state,flashSales) {
        state.flashSalesSientific = flashSales;
    },
    flashSalesRegister(state,flashSales) {
        state.flashSalesRegister = flashSales;
    },
    flashSalesOffice(state,flashSales) {
        state.flashSalesOffice = flashSales;
    },
    flashSalesProductDetail(state,flashSales) {
        state.flashSalesProductDetail = flashSales;
    },
}
const actions = {


    viewFlashSales(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewFlashSales',form)
            .then(response => {
                const flashSales = response.data
                if (template == 1){
                    context.commit('flashSalesHome', flashSales)
                }
                if (template == 2){
                    context.commit('flashSalesProduct', flashSales)
                }
                if (template == 3){
                    context.commit('flashSalesNews', flashSales)
                }
                if (template == 4){
                    context.commit('flashSalesBlog', flashSales)
                }
                if (template == 5){
                    context.commit('flashSalesService', flashSales)
                }
                if (template == 6){
                    context.commit('flashSalesAbout', flashSales)
                }
                if (template == 7){
                    context.commit('FlashSalesContact', flashSales)
                }
                if (template == 8){
                    context.commit('flashSalesStatic', flashSales)
                }
                if (template == 9){
                    context.commit('flashSalesSupport', flashSales)
                }
                if (template == 10){
                    context.commit('flashSalesVote', flashSales)
                }
                if (template == 11){
                    context.commit('flashSalesLearning', flashSales)
                }
                if (template == 12){
                    context.commit('flashSalesGallery', flashSales)
                }
                if (template == 13){
                    context.commit('flashSalesSientific', flashSales)
                }
                if (template == 14){
                    context.commit('flashSalesRegister', flashSales)
                }
                if (template == 15){
                    context.commit('flashSalesOffice', flashSales)
                }
                if (template == 16){
                    context.commit('flashSalesProductDetail', flashSales)
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

