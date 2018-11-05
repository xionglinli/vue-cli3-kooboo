<template>
  <div class="app-timeline">
    <h2 class="app-timeline__year">{{list.year}}</h2>
    <div class="app-timeline__list flex">
      <div
        class="app-timeline__list__item-wrapper col-lg-6 col-md-6 col-sm-12 col-xs-12"
        v-for="(item,index) of list['list']"
        :key="index"
      >
        <div class="app-timeline__list__item">
          <div class="image-wrapper">
            <img class="image" :src="item.imgUrl">
          </div>
          <h2 class="title">{{item.title}}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'AppTimeline',
    props: {
      list: Object
    }
  }
</script>
