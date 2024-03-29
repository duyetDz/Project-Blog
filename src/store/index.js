import Vue from 'vue'
import Vuex from 'vuex'
import listBlogs from '../mock/blogs'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        listBlogs,
        isLogin: false
    },
    getters: {

    },
    mutations: {
        SET_LOGIN(state, isLogin = false) {
            state.isLogin = isLogin
        }
    }
    ,
    actions: {
        checkLogin({ commit }, { email, password }) {
            if (email === 'admin@gmail.com' && password === '1234') {
                commit('SET_LOGIN', true)
                return true
            } else {
                commit('SET_LOGIN',false);
                return false
            }
        },
        logout({ commit }) {
            commit('SET_LOGIN',false)
        }
    }
})

export default store;