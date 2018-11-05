import AppSwiper from './AppSwiper'
import AppResponse from './AppResponse'
import AppPicture from './AppPicture'
import AppSelect from './AppSelect'
import AppTimeline from './AppTimeline'

export default function (Vue) {
  Vue.component('app-swiper', AppSwiper)
  Vue.component('app-response', AppResponse)
  Vue.component('app-picture', AppPicture)
  Vue.component('app-select', AppSelect)
  Vue.component('app-timeline', AppTimeline)
}
