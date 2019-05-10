import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      student_id: '',
      realname: '',
      email: '',
      role: '',
      token: '',
      type: ''
    }
  },
  getters: {
    getToken: state => `${state.user.type} ${state.user.token}`
  },
  mutations: {
    setUserMessage: (state, data) => {
      state.user.student_id = data.student_id
      state.user.realname = data.realname
      state.user.email = data.email
      state.user.role = data.role
      state.user.token = data.token
      state.user.type = data.type
    },
    logout: state => {
      state.user.student_id = ''
      state.user.realname = ''
      state.user.email = ''
      state.user.role = ''
      state.user.token = ''
      state.user.type = ''
    }
  },
  actions: {
    login: async (context) => {
      const res = await axios.get('http://localhost:8080/ssm/user/getinftocheck')
      context.commit('setUserMessage', res.data)
    }
  }
})
