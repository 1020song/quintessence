
export default {
  state: {
    selectList: '',
    totalPrice: 0,
    deliveryFee: 0
  },
  mutations: {
    getUserName (state, value) {
      state.products = value
    }
  }
}
