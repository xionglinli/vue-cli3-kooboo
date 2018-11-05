import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'styles/reset.scss'
import 'styles/iconfont.scss'
import 'swiper/dist/css/swiper.css'
import '@/sass/app.scss'
import GComponents from './components/global'
import BaiduMap from 'vue-baidu-map'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(GComponents)
Vue.use(BaiduMap, {
  ak: 'PfPRcf7m22CyKBo6cEGgakIrsoYbpyXU'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
