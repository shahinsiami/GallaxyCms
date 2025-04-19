const state = {
    blogCategoryArticles: [],
    blogSubCategoryArticles: [],
    blogSegmentArticles: [],
    recentArticles: [],
    ArticleArchiveByYear: [],
    articleBySelectedMonth: [],
    selectedCategory: [],
    selectedSubCategory: [],
    selectedSegment: [],
    selectedArticleWithAllParent: [],
    selectedSubArticleWithArticle: [],

}
const getters = {}
const mutations = {
    blogCategoryArticles(state, blogCategoryArticles) {
        state.blogCategoryArticles = blogCategoryArticles;
    },
    blogSubCategoryArticles(state, blogSubCategoryArticles) {
        state.blogSubCategoryArticles = blogSubCategoryArticles;
    },
    blogSegmentArticles(state, blogSegmentArticles) {
        state.blogSegmentArticles = blogSegmentArticles;
    },
    recentArticles(state, recentArticles) {
        state.recentArticles = recentArticles;
    },
    ArticleArchiveByYear(state, ArticleArchiveByYear) {
        state.ArticleArchiveByYear = ArticleArchiveByYear;
    },
    articleBySelectedMonth(state, articleBySelectedMonth) {
        state.articleBySelectedMonth = articleBySelectedMonth;
    },
    selectedCategory(state, selectedCategory) {
        state.selectedCategory = selectedCategory;
    },
    selectedSubCategory(state, selectedSubCategory) {
        state.selectedSubCategory = selectedSubCategory;
    },
    selectedSegment(state, selectedSegment) {
        state.selectedSegment = selectedSegment;
    },
    selectedArticleWithAllParent(state, selectedArticleWithAllParent) {
        state.selectedArticleWithAllParent = selectedArticleWithAllParent;
    },
    selectedSubArticleWithArticle(state, selectedSubArticleWithArticle) {
        state.selectedSubArticleWithArticle = selectedSubArticleWithArticle;
    },
}
const actions = {
    blogCategoryArticles(context,[language]) {
            const form = new FormData()
            form.append('language', language)
            return new Promise((resolve, reject) => {
                axios.post('api/v1/blogCategoryArticles',form)
                    .then(response => {
                        const blogCategoryArticles = response.data
                        context.commit('blogCategoryArticles', blogCategoryArticles)
                        resolve(resolve)//

                    })
                    .catch(error => {
                        return {
                    
                        }
                        reject(error)
                    })
            })
        },
        blogSubCategoryArticles(context,[language]) {
            const form = new FormData()
            form.append('language', language)
            return new Promise((resolve, reject) => {
                axios.post('api/v1/blogSubCategoryArticles',form)
                    .then(response => {
                        const blogSubCategoryArticles = response.data
                        context.commit('blogSubCategoryArticles', blogSubCategoryArticles)
                        resolve(resolve)//

                    })
                    .catch(error => {
                        return {
                    
                        }
                        reject(error)
                    })
            })
        },
        blogSegmentArticles(context,[language]) {
            const form = new FormData()
            form.append('language', language)
            return new Promise((resolve, reject) => {
                axios.post('api/v1/blogSegmentArticles',form)
                    .then(response => {
                        const blogSegmentArticles = response.data
                        context.commit('blogSegmentArticles', blogSegmentArticles)
                        resolve(resolve)//

                    })
                    .catch(error => {
                        return {
                    
                        }
                        reject(error)
                    })
            })
        },
    recentArticles(context,[language]) {
        const form = new FormData()
        form.append('language', language)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/recentArticles',form)
                .then(response => {
                    const recentArticles = response.data
                    context.commit('recentArticles', recentArticles)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    ArticleArchiveByYear(context) {
        return new Promise((resolve, reject) => {
            axios.post('api/v1/ArticleArchiveByYear')
                .then(response => {
                    const ArticleArchiveByYear = response.data
                    context.commit('ArticleArchiveByYear', ArticleArchiveByYear)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    articleBySelectedMonth(context,[year,month]) {
        const form = new FormData()
        form.append('year', year)
        form.append('month', month)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/articleBySelectedMonth',form)
                .then(response => {
                    const articleBySelectedMonth = response.data
                    context.commit('articleBySelectedMonth', articleBySelectedMonth)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    selectedCategory(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/selectedCategory',form)
                .then(response => {
                    const selectedCategory = response.data
                    context.commit('selectedCategory', selectedCategory)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    selectedSubCategory(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/selectedSubCategory',form)
                .then(response => {
                    const selectedSubCategory = response.data
                    context.commit('selectedSubCategory', selectedSubCategory)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    selectedSegment(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/selectedSegment',form)
                .then(response => {
                    const selectedSegment = response.data
                    context.commit('selectedSegment', selectedSegment)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    
    selectedArticleWithAllParent(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/selectedArticleWithAllParent',form)
                .then(response => {
                    const selectedArticleWithAllParent = response.data
                    context.commit('selectedArticleWithAllParent', selectedArticleWithAllParent)
                    resolve(resolve)//

                })
                .catch(error => {
                    return {
                       
                    }
                    reject(error)
                })
        })
    },
    selectedSubArticleWithArticle(context,[slug]) {
        const form = new FormData()
        form.append('slug', slug)
        return new Promise((resolve, reject) => {
            axios.post('api/v1/selectedSubArticleWithArticle',form)
                .then(response => {
                    const selectedSubArticleWithArticle = response.data
                    context.commit('selectedSubArticleWithArticle', selectedSubArticleWithArticle)
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
//
export default {
    state, mutations, actions, getters
}




