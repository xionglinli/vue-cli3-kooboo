<template>
  <div class="welfare-tour">
    <app-timeline
      v-for="(data,index) of tourData"
      :key="index"
      :list="data"
    />
  </div>
</template>

<script>
  export default {
    name: 'WelfareTour',
    data () {
      return {
        tourData: [{
          'year': '2017',
          'list': [{
            'imgUrl': 'http://www.kooboo.org/uploads/timeline/2017Ten-years.jpg',
            'title': 'Yardi十周岁了！'
          }]
        }, {
          'year': '2016',
          'list': [{
            'imgUrl': 'http://www.kooboo.org/uploads/timeline/2016Bali.jpg',
            'title': '巴厘岛之旅'
          }, {
            'imgUrl': 'http://www.kooboo.org/uploads/timeline/2016-11.jpg',
            'title': '软三拔河亚军！'
          }]
        }, {
          'year': '2015',
          'list': [{
            'imgUrl': 'http://www.kooboo.org/uploads/timeline/2015Tailand.jpg',
            'title': '泰国行'
          }]
        }, {
          'year': '2012',
          'list': [{
            'imgUrl': 'http://www.kooboo.org/uploads/timeline/2012Netherlands.jpg',
            'title': '荷兰'
          }]
        }, {
          'year': '未来，也有你的一份',
          'list': []
        }]
      }
    }
  }
</script>
