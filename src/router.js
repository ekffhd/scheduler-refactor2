import Vue from 'vue'
import Router from 'vue-router'
import InputInform from './views/InputInform.vue'
import Loading from './views/Loading.vue'
import ResultList from './views/ResultList.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
          path: '/',
          name: 'InputInform',
          component: InputInform,
      },
      {
          path: '/loading',
          name: 'Loading',
          component: Loading,
      },
      {
          path: '/result_list',
          name: 'ResultList',
          component: ResultList,
      }
  ]
})
