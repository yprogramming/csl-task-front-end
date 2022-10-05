import Vue from 'vue'
import Vuex from 'vuex'
import userModule from '@/store/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user: userModule
    }
})