import shop from '../../api/shop'
import * as types from '../mutation-types'

// initial state
const state = {
  all: []
}

// getters
const getters = {
  allProducts: state => state.all
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts(products => {
      commit(types.RECEIVE_PRODUCTS, { products })
    })
  }
}

// mutations
const mutations = {
  [types.RECEIVE_PRODUCTS] (state, { products }) {
    state.all = products
  },

  [types.ADD_TO_CART] (state, { id }) {
    state.all.find(p => p.id === id).inventory--
  },
  [types.REMOVE_PRODUCTS](state, { id }){
      for(let i=0;i<state.all.length;i++){
          if (state.all[i].id == id){
              state.all.splice(i,1);
              break;
          }
      }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
