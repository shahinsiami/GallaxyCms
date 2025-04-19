const state = {
    cropCategoryMenu:[],
    cropSubCategoryMenu:[],
    cropSegmentMenu:[],
    cropSubSegmentMenu:[],
}
const getters = {}
const mutations = {
    cropCategoryMenu(state,cropCategoryMenu) {
        state.cropCategoryMenu = cropCategoryMenu;
    },
    cropSubCategoryMenu(state,cropSubCategoryMenu) {
        state.cropSubCategoryMenu = cropSubCategoryMenu;
    },
    cropSegmentMenu(state,cropSegmentMenu) {
        state.cropSegmentMenu = cropSegmentMenu;
    },
 
    cropSubSegmentMenu(state,cropSubSegmentMenu) {
        state.cropSubSegmentMenu = cropSubSegmentMenu;
    },
}
const actions = {
    cropCategoryMenu(context) {
        return new Promise((resolve, reject) => {
            axios.post('api/v1/cropCategoryMenu')
                    .then(response => {
                        const cropCategoryMenu = response.data
                        context.commit('cropCategoryMenu', cropCategoryMenu)
                        resolve(resolve)//
    
                    })
                    .catch(error => {
                        return {
                            
                        }
                        reject(error)
                    })
            })
        },
        cropSubCategoryMenu(context) {
            return new Promise((resolve, reject) => {
                axios.post('api/v1/cropSubCategoryMenu')
                        .then(response => {
                            const cropSubCategoryMenu = response.data
                            context.commit('cropSubCategoryMenu', cropSubCategoryMenu)
                            resolve(resolve)//
        
                        })
                        .catch(error => {
                            return {
                                
                            }
                            reject(error)
                        })
                })
            },
            cropSegmentMenu(context) {
                return new Promise((resolve, reject) => {
                    axios.post('api/v1/cropSegmentMenu')
                            .then(response => {
                                const cropSegmentMenu = response.data
                                context.commit('cropSegmentMenu', cropSegmentMenu)
                                resolve(resolve)//
            
                            })
                            .catch(error => {
                                return {
                                    
                                }
                                reject(error)
                            })
                    })
                },
                cropSubSegmentMenu(context) {
                    return new Promise((resolve, reject) => {
                        axios.post('api/v1/cropSubSegmentMenu')
                                .then(response => {
                                    const cropSubSegmentMenu = response.data
                                    context.commit('cropSubSegmentMenu', cropSubSegmentMenu)
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

