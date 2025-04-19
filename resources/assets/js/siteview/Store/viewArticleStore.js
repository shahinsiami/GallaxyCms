const state = {
    singleArticle:[],
    lastArticleByCategory:[],
    lastArticleBySubCategory:[],
    lastArticleBySegment:[],
    articlesByCategory:[],
    articlesByCategoryWithoutPagination:[],
    articlesBySubCategory:[],
    articlesBySubCategoryWithoutPagination:[],
    articlesBySegment:[],
    articlesBySegmentWithoutPagination:[],
    singleSubArticle:[],
    subArticles:[],
}
const getters = {}
const mutations = {

    singleArticle(state,singleArticle) {
        state.singleArticle = singleArticle;
    },  
    lastArticleByCategory(state,lastArticleByCategory) {
        state.lastArticleByCategory = lastArticleByCategory;
    },
    lastArticleBySubCategory(state,lastArticleBySubCategory) {
        state.lastArticleBySubCategory = lastArticleBySubCategory;
    },
    lastArticleBySegment(state,lastArticleBySegment) {
        state.lastArticleBySegment = lastArticleBySegment;
    },
    articlesByCategory(state,articlesByCategory) {
        state.articlesByCategory = articlesByCategory;
    },
    articlesByCategoryWithoutPagination(state,articlesByCategoryWithoutPagination) {
        state.articlesByCategoryWithoutPagination = articlesByCategoryWithoutPagination;
    },
    articlesBySubCategory(state,articlesBySubCategory) {
        state.articlesBySubCategory = articlesBySubCategory;
    },
    articlesBySubCategoryWithoutPagination(state,articlesBySubCategoryWithoutPagination) {
        state.articlesBySubCategoryWithoutPagination = articlesBySubCategoryWithoutPagination;
    },
    articlesBySegment(state,articlesBySegment) {
        state.articlesBySegment = articlesBySegment;
    },
    articlesBySegmentWithoutPagination(state,articlesBySegmentWithoutPagination) {
        state.articlesBySegmentWithoutPagination = articlesBySegmentWithoutPagination;
    },
    singleSubArticle(state,singleSubArticle) {
        state.singleSubArticle = singleSubArticle;
    },
    subArticles(state,subArticles) {
        state.subArticles = subArticles;
    },  
}
const actions = {
    singleArticle(context,slug) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/singleArticle',form)
                .then(response => {
                    const singleArticle = response.data
                    context.commit('singleArticle', singleArticle)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    lastArticleByCategory(context,slug) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/lastArticleByCategory',form)
                .then(response => {
                    const lastArticleByCategory = response.data
                        context.commit('lastArticleByCategory', lastArticleByCategory)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    lastArticleBySubCategory(context,slug) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/lastArticleBySubCategory',form)
                .then(response => {
                    const lastArticleBySubCategory = response.data
                    context.commit('lastArticleBySubCategory', lastArticleBySubCategory)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    lastArticleBySegment(context,slug) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/lastArticleBySegment',form)
                .then(response => {
                    const lastArticleBySegment = response.data
                    context.commit('lastArticleBySegment', lastArticleBySegment)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    articlesByCategory(context,[slug,page]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/articlesByCategory?page=' + page,form)
                .then(response => {
                    const articlesByCategory = response.data
                    context.commit('articlesByCategory', articlesByCategory)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    articlesByCategoryWithoutPagination(context,slug) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/articlesByCategoryWithoutPagination',form)
                .then(response => {
                    const articlesByCategoryWithoutPagination = response.data
                    context.commit('articlesByCategoryWithoutPagination', articlesByCategoryWithoutPagination)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    articlesBySubCategory(context,[slug,page]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/articlesBySubCategory?page=' + page,form)
                .then(response => {
                    const articlesBySubCategory = response.data
                    context.commit('articlesBySubCategory', articlesBySubCategory)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    articlesBySubCategoryWithoutPagination(context,slug) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/articlesBySubCategoryWithoutPagination',form)
                .then(response => {
                    const articlesBySubCategoryWithoutPagination = response.data
                    context.commit('articlesBySubCategoryWithoutPagination', articlesBySubCategoryWithoutPagination)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    articlesBySegment(context,[slug,page]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/articlesBySegment?page=' + page,form)
                .then(response => {
                    const articlesBySegment = response.data
                    context.commit('articlesBySegment', articlesBySegment)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    articlesBySegmentWithoutPagination(context,slug) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/articlesBySegmentWithoutPagination',form)
                .then(response => {
                    const articlesBySegmentWithoutPagination = response.data
                    context.commit('articlesBySegmentWithoutPagination', articlesBySegmentWithoutPagination)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    singleSubArticle(context,slug) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/singleSubArticle',form)
                .then(response => {
                    const singleSubArticle = response.data
                    context.commit('singleSubArticle', singleSubArticle)
                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    }, 
    subArticles(context,slug) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/subArticles',form)
                .then(response => {
                    const subArticles = response.data
                    context.commit('subArticles', subArticles)
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

