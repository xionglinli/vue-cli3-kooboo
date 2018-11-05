<template>
  <div
    class="swiper"
    :style="{'padding-bottom': paddingBottom+'%'}"
  >
    <!-- carousel -->
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide
        v-for="item of list"
        :key="item.id"
      >
        <img class="swiper__img" :src="item.imgUrl">
      </swiper-slide>
    </swiper>
    <!-- page turn button -->
    <div class="swiper__button-prev iconfont"
         @click="handleSildePrev">&#xe62f;</div>
    <div class="swiper__button-next iconfont"
         @click="handleSlideNext">&#xe62e;</div>
  </div>
</template>

<script>
export default {
  name: 'AppSwiper',
  data () {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: this.slides
      },
      paddingBottom: this.pBottom
    }
  },
  props: {
    list: {
      type: Array,
      required: true 
    },
    slides: {
      type: Number,
      default: 1
    },
    pBottom: {
      type: Number,
      default: 43
    }
  },
  watch: {
    slides () {
      this.swiperOption.slidesPerView = this.slides
    },
    pBottom () {
      this.paddingBottom = this.pBottom
    }
  },
  methods: {
    handleSildePrev () {
      this.swiper.slidePrev()
    },
    handleSlideNext () {
      this.swiper.slideNext()
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>
