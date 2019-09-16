import Vue from 'vue'
import Vuex from 'vuex'

//导入 author
import * as author from '@/utils/author'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: author.getAuthor()
  },
  mutations: {
    //设置user
    setUser(state, user) {
      author.setAuthor(user)
      //给user赋值
      state.user = user
      console.log(state.user)
    }
  },
  actions: {

  }
})
