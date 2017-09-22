import * as types from './mutation-types'

export const addToCart = ({commit}, product) => {
    if (product.inventory > 0) {
        commit("cart/" + types.ADD_TO_CART, {
            id: product.id
        })
        commit("products/" + types.ADD_TO_CART, {
            id: product.id
        })
    }
}
export const remove = ({commit}, product) => {
    if (product.inventory > 0) {
        commit("products/" + types.REMOVE_PRODUCTS, {
            id: product.id
        })
    }
}
