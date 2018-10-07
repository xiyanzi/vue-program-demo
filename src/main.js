// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    eventHub: new Vue() //在项目初始化时先给data添加名为eventHub的空Vue对象，作用是让任何组件都可以调用事件发射和接收的方法
  }
})
