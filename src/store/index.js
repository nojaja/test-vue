import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  getters: {// state の参照
    countWithSuffix (state) {
      return `${state.count} 回`
    }
  },
  mutations: { // stateを変更する為の処理(同期処理のみ)
    increment (state) {
      state.count++
    }
  },
  actions: { // ミューテーションをコミットする関数(外部APIとの連携や非同期処理もここ)
    increment (context) {
      context.commit('increment')
    }
  },
  modules: {
  }
})
