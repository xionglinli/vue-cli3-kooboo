<template>
  <ul class="home-technology flex">
    <li
      class="home-technology__item col-lg-4 col-md-4 col-sm-12 col-xs-12"
      v-for="item of list"
      :key="item.id"
    >
      <div class="home-technology__item__img-wrapper">
        <img class="home-technology__item__img" :src="item.imgUrl">
      </div>
      <h2 class="widget-title-technology">{{item.title}}</h2>
      <p
        class="widget-content"
        v-for="(content,index) of item.content"
        :key="index"
      >
        {{content}}
      </p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'HomeTechnology',
    props: {
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>