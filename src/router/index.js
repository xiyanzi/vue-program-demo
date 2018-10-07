import Vue from 'vue'
import Router from 'vue-router'
//引入外部css文件
import '../../static/css/reset.css'
import '../../static/css/common.css'
//引入外部js文件
import '../../static/js/rem.js'
// 首页的tab导航栏
import goods from 'components/tabNavList/goods'
import ratings from 'components/tabNavList/ratings'
import seller from 'components/tabNavList/seller'
// 底部导航栏
import index from 'components/index/index'
import home from 'components/index/footerNav/home'
import circle from 'components/index/footerNav/circle'
import store from 'components/index/footerNav/store'
import my from 'components/index/footerNav/my'

import other from 'components/other/other'
import map from 'components/map/map'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index,
      redirect: '/home',//定向到首页
      children: [
        {
          path: '/home',//首页
          component: home,
          children: [
            {
              path: '/goods',//商品
              component: goods,  
            },
            {
              path: '/ratings',//评价
              component: ratings,  
            },
            {
              path: '/seller',//商家
              component: seller,  
            },
          ]
        },
        {
          path: '/circle',//圈子
          component: circle,  
        },
        {
          path: '/store',//商城
          component: store
        },
        {
          path: '/my',//我的
          component: my
        },
      ],
    },
    {
      path: '/other',
      component: other
    },
    {
      path: '/map',//百度地图
      component: map
    },
  ],
})