import Vue from 'vue'
import Vuex from 'vuex'
import { UPDATE_HOLIDAY } from "./mutation-types"

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    holiday: {},
  },
  getters: {
    holidayList(state) {
      return state.holiday
    }
  },
  mutations: {
    [UPDATE_HOLIDAY](state, payload) {
      state.holiday = payload
    },
  },
  actions: {
    [UPDATE_HOLIDAY]({ commit }, payload) {
      commit(UPDATE_HOLIDAY, payload)
    },
  },
  modules: {
  }
})
