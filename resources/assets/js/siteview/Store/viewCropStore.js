const state = {
    viewAllCrop:[],
    viewSingleCrop:[],
    cropByCategory:[],
    cropBySubCategory:[],
    cropBySegment:[],
    cropBySubSegment:[],
    cropDetail:[],
    cropCategory:[],
    cropSubCategory:[],
    cropSegment:[],
    cropSubSegment:[],
}
const getters = {}
const mutations = {

    viewAllCrop(state,viewAllCrop) {
        state.viewAllCrop = viewAllCrop;
    },
    viewSingleCrop(state,viewSingleCrop) {
        state.viewSingleCrop = viewSingleCrop;
    },
    cropByCategory(state,cropByCategory) {
        state.cropByCategory = cropByCategory;
    },
    cropBySubCategory(state,cropBySubCategory) {
        state.cropBySubCategory = cropBySubCategory;
    },
    cropBySegment(state,cropBySegment) {
        state.cropBySegment = cropBySegment;
    },
    cropBySubSegment(state,cropBySubSegment) {
        state.cropBySubSegment = cropBySubSegment;
    },   
    cropDetail(state,cropDetail) {
        state.cropDetail = cropDetail;
    },
    cropCategory(state,cropCategory) {
        state.cropCategory = cropCategory;
    },
    cropSubCategory(state,cropCategory) {
        state.cropCategory = cropCategory;
    },
    cropSegment(state,cropCategory) {
        state.cropCategory = cropCategory;
    },
    cropSubSegment(state,cropCategory) {
        state.cropCategory = cropCategory;
    },
}
const actions = {
    viewAllCrop(context) {
    return new Promise((resolve, reject) => {
        axios.post('api/v1/viewAllCrop')
                .then(response => {
                    const viewAllCrop = response.data
                    context.commit('viewAllCrop', viewAllCrop)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                        
                    }
                    reject(error)
                })
        })
    },
    viewSingleCrop(context,[slug]) {
    const form = new FormData()
    form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/viewSingleCrop',form)
                .then(response => {
                    const viewSingleCrop = response.data
                    context.commit('viewSingleCrop', viewSingleCrop)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                        
                    }
                    reject(error)
                })
        })
    },
    cropByCategory(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/cropByCategory',form)
                .then(response => {
                    const cropByCategory = response.data
                    context.commit('cropByCategory', cropByCategory)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                    
                    }
                    reject(error)
                })
        })
    },
    cropBySubCategory(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/cropBySubCategory',form)
                .then(response => {
                    const cropBySubCategory = response.data
                    context.commit('cropBySubCategory', cropBySubCategory)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                    
                    }
                    reject(error)
                })
        })
    },
    cropBySegment(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/cropBySegment',form)
                .then(response => {
                    const cropBySegment = response.data
                    context.commit('cropBySegment', cropBySegment)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                    
                    }
                    reject(error)
                })
        })
    },
    cropBySubSegment(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/cropBySubSegment',form)
                .then(response => {
                    const cropBySubSegment = response.data
                    context.commit('cropBySubSegment', cropBySubSegment)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                    
                    }
                    reject(error)
                })
        })
    },
    cropDetail(context,slug) {
        const form = new FormData()
        form.append('slug', slug)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/cropDetail',form)
                .then(response => {
                    const cropDetail = response.data
                    context.commit('cropDetail', cropDetail)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                    
                    }
                    reject(error)
                })
        })
    },
    cropCategory(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/cropCategory',form)
                .then(response => {
                    const cropCategory = response.data
                    context.commit('cropCategory', cropCategory)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                    
                    }
                    reject(error)
                })
        })
    },
    cropSubCategory(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/cropSubCategory',form)
                .then(response => {
                    const cropSubCategory = response.data
                    context.commit('cropSubCategory', cropSubCategory)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                    
                    }
                    reject(error)
                })
        })
    },
    cropSegment(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/cropSegment',form)
                .then(response => {
                    const cropSegment = response.data
                    context.commit('cropSegment', cropSegment)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                    
                    }
                    reject(error)
                })
        })
    },
    cropSubSegment(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + ((document.cookie.match('(^|;) ?token=([^;]*)(;|$)')) ?  document.cookie.match('(^|;) ?token=([^;]*)(;|$)')[2] :  null)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/cropSubSegment',form)
                .then(response => {
                    const cropSubSegment = response.data
                    context.commit('cropSubSegment', cropSubSegment)
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

