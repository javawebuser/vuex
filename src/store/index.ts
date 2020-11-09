import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    n: 1
  },
  // 用于调用修改全局数据函数
  mutations: {
    add (state, step) {
      state.count += step
    },
    jian (state, step) {
      state.count -= step
    },
    changeNumber (state, step) {
      state.n = parseInt(step)
    }
  },
  // 用于触发异步修改数据
  actions: {
    addAsync (context, step) {
      setTimeout(() => {
        context.commit('add', step)
      }, 1000)
    },
    jianAsync (context, step) {
      setTimeout(() => {
        context.commit('jian', step)
      }, 1000)
    }
  },
  modules: {
  }
})
