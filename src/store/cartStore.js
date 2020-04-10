module.exports = {
    state: {
        cart: []
    },
    mutations: {
        ADD_TO_CART(state, { product, quantity }) {
            let exists = state.cart.find(item => { return item.product.id === product.id })
            if (exists) {
                exists.quantity += quantity
                return
            }
            state.cart.push({ product, quantity })
            localStorage.setItem('cart', JSON.stringify(state.cart))


        },
        DELETE_FROM_CART(state, id) {
            state.cart = state.cart.filter(item => { return item.product.id !== id })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }

    },
    actions: {
        addProductToCart({ commit }, { product, quantity }) {
            commit('ADD_TO_CART', { product, quantity })
        },
        deleteProductFromCart({ commit }, id) {
            commit('DELETE_FROM_CART', id)
        }
    },
    getters: {
        shoppingCart(state) {
            let json = localStorage.getItem('cart')
            if(state.cart.length == 0 && json) {
                state.cart = JSON.parse(json)
            }
            return state.cart
        },
        shoppingCartTotal(state) {
            let total = 0
            if (state.cart.length !== 0) {
                state.cart.forEach(item => {
                    total += item.product.price * item.quantity
                })
            }
            return total
        },
        shoppingCartItemCount(state) {
            let items = 0
            state.cart.forEach(item => {
                items += item.quantity
            })
            return items
        }
    }
}