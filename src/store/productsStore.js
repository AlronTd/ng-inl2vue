const axios = require('axios')

module.exports = {

    state: {
        products: [],
        product: null
    },

    mutations: {

        GET_PRODUCT_BY_ID(state, id) {
            console.log(state.products)
            let product = state.products.filter((p) => {
 
                return p._id == id
            })[0]
            console.log(product)
            if(!product){
                console.error('product with id ' + id + ' not found. its value: ' + product);
            }else{
                state.product = product
                console.log(state.product)
            }
        },
        OVERWRITE_PRODUCTS(state, data) {
            state.products = data
            console.log(data)
        },
        OVERWRITE_PRODUCT(state, data) {
            console.log('overwriting:');
            
            state.product = data
            console.log('data:' + data)
            console.log('product:' + state.product)
        }
    },

    actions: {

        getProductById({ commit }, id) {
            console.log('getting product by id ' + id )
            commit('GET_PRODUCT_BY_ID', id)
        },
        
        initProducts({ commit }, serverIP) {
            console.log('initProducts')
            axios.get(serverIP + '/api/products/').then(res => {
                let data = res.data
                if (data && data.length > 0) {
                    commit('OVERWRITE_PRODUCTS', data)
                }
            }).catch((error) => console.error(error))
        },
        
        
        initProduct({ commit }, id){
            console.log('initProducts: ' + require('@/serverIP') + '/api/products/' + id);
            axios.get(require('@/serverIP') + '/api/products/' + id).then(res => {
                
                let data = res.data
                if (data) {
                    commit('OVERWRITE_PRODUCT', data)
                }
            }).catch((error) => console.error(error))
        }
    },
    
    getters: {

        products(state) {
            return state.products
        },
        product(state) {
            return state.product
        }

    }
}