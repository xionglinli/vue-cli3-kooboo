<template>
  <div class="response">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Response',
  data () {
    return {
      screenWidth: 0,
      timer: null
    }
  },
  props: {
    callback: String
  },
  methods: {
    handleResize () {
      this.screenWidth = document.body.clientWidth
      // 触发回调函数
      this.callback && this.$emit(this.callback, this.screenWidth)
    }
  },
  mounted () {
    this.handleResize()
    window.addEventListener('resize', () => {
      if (this.timer) {
        window.clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.handleResize()
      }, 50)
    }, false)
  }
}
</script>
