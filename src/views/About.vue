<template>
  <div class="about">
    <app-picture :pictureData="pictureData" />
    <about-detail/>
  </div>
</template>

<script>
import AboutDetail from '@/components/shared/AboutDetail'

  export default {
    name: 'About',
    components: {
      AboutDetail
    },
    data () {
      return {
        pictureData: {
          'imgUrl': 'http://www.kooboo.org/uploads/banner/14.jpg',
          'title': '主动做事 低调做人',
          'content': 'BE ACTIVE IN WORK BUT BE MODEST IN LIFE'
        }
      }
    }
  }
</script>
