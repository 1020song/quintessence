export default {
  state: {
    userId: '',
    userName: '',
    city: '',
    balance: '',
    point: '',
    addresses: ''
  },
  mutations: {
    getUserName (state, value) {
      state.products = value
    }
  }
}
