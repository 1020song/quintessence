
export default {
  state: {
    selectList: '',
    selectshop: '',
    totalPrice: 0,
    deliveryFee: 0
  },
  mutations: {
    setselectshop (state, value) {
      state.selectshop = value
    }
  }
}
