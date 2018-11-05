<template>
  <div class="welfare-introduce">
    <div class="welfare-introduce__list flex">
      <div
        class="welfare-introduce__list__item col-lg-3 col-md-4 col-sm-6 col-xs-12"
        v-for="(item,index) of list"
        :key="index"
      >
        <div
          class="iconfont"
          :style="handleStyle(index,item)"
          @mouseover="handleMouseover(index,item.color)"
          @mouseout="handleMouseout(item.color)"
          v-html="item.iconfont"
        ></div>
        <h2 class="widget-title-welfare">{{item.title}}</h2>
        <p class="widget-content">{{item.content}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WelfareIntroduce',
    data () {
      return {
        activeIndex: -1,
        style: {
          'color': '#ccc',
          'background': '#fff'
        }
      }
    },
    props: {
      list: Array
    },
    methods: {
      handleStyle (index,item) {
        return index===this.activeIndex ? this.style : {color:item.color}
      },
      handleMouseover (index, color) {
        this.activeIndex = index
        this.style = {
          'color': '#fff',
          'background': color
        }
      },
      handleMouseout (color) {
        this.style = {
          'color': color,
          'background': '#fff'
        }
      }
    }
  }
</script>
