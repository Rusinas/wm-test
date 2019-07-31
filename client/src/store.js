import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    authorized: false,
    username: null,
    traffic: null,
    minutes: null
  },
  mutations: {
    setAuthorization(state) {
      state.authorized = true
    },
    setUserData(state, payload) {
      const { username, traffic, minutes } = payload
      state.username = username
      state.traffic = traffic
      state.minutes = minutes
    },
    clearUserData(state) {
      state.authorized = false
      state.username = null
      state.traffic = null
      state.minutes = null
    }
  },
  actions: {
    async login({ commit }, user) {
      // const { username, password } = user
      try {
        const { data } = await api.post('/check', user)
        commit('setAuthorization')
        commit('setUserData', data)
      } catch (error) {
        throw error
      }
    },
    logout({ commit }) {
      commit('clearUserData')
    }
  },
  getters: {
    getUsername: state => state.username,
    getDataForDashboardCard: state => type => state[type]
  }
})
