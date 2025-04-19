const state = {
    contactHome:[],
    contactProduct:[],
    contactNews:[],
    contactBlog:[],
    contactService:[],
    contactAbout:[],
    contactContact:[],
    contactStatic:[],
    contactSupport:[],
    contactVote:[],
    contactLearning:[],
    contactGallery:[],
    contactSientific:[],
    contactRegister:[],
    contactOffice:[],
    contactProductDetail:[],

}
const getters = {}
const mutations = {
    contactHome(state,contact) {
        state.contactHome = contact;
    },
    contactProduct(state,contact) {
        state.contactProduct = contact;
    },
    contactNews(state,contact) {
        state.contactNews = contact;
    },
    contactBlog(state,contact) {
        state.contactBlog = contact;
    },
    contactService(state,contact) {
        state.contactService = contact;
    },
    contactAbout(state,contact) {
        state.contactAbout = contact;
    },
    contactContact(state,contact) {
        state.contactContact = contact;
    },
    contactStatic(state,contact) {
        state.contactStatic = contact;
    },
    contactSupport(state,contact) {
        state.contactSupport = contact;
    },
    contactVote(state,contact) {
        state.contactVote = contact;
    },
    contactLearning(state,contact) {
        state.contactLearning = contact;
    },
    contactGallery(state,contact) {
        state.contactGallery = contact;
    },
    contactSientific(state,contact) {
        state.contactSientific = contact;
    },
    contactRegister(state,contact) {
        state.contactRegister = contact;
    },
    contactOffice(state,contact) {
        state.contactOffice = contact;
    },
    contactProductDetail(state,contact) {
        state.contactProductDetail = contact;
    },
}
const actions = {


    viewContact(context,[template,language]) {
        const form = new FormData()
        form.append('language', language)
        form.append('template', template)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewContact',form)
            .then(response => {
                const contact = response.data
                if (template == 1){
                    context.commit('contactHome', contact)
                }
                if (template == 2){
                    context.commit('contactProduct', contact)
                }
                if (template == 3){
                    context.commit('contactNews', contact)
                }
                if (template == 4){
                    context.commit('contactBlog', contact)
                }
                if (template == 5){
                    context.commit('contactService', contact)
                }
                if (template == 6){
                    context.commit('contactAbout', contact)
                }
                if (template == 7){
                    context.commit('contactContact', contact)
                }
                if (template == 8){
                    context.commit('contactStatic', contact)
                }
                if (template == 9){
                    context.commit('contactSupport', contact)
                }
                if (template == 10){
                    context.commit('contactVote', contact)
                }
                if (template == 11){
                    context.commit('contactLearning', contact)
                }
                if (template == 12){
                    context.commit('contactGallery', contact)
                }
                if (template == 13){
                    context.commit('contactSientific', contact)
                }
                if (template == 14){
                    context.commit('contactRegister', contact)
                }
                if (template == 15){
                    context.commit('contactOffice', contact)
                }
                if (template == 16){
                    context.commit('contactProductDetail', contact)
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

