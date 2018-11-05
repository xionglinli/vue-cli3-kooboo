<template>
  <div class="project-detail">
    <ul class="project-detail__list flex">
      <li
        class="project-detail__list__item col-lg-4 col-md-6 col-sm-12 col-xs-12"
        v-for="item of list"
        :key="item.title"
      >
        <div class="image-wrapper">
          <img class="image" :src="item.imgUrl">
        </div>
        <h2 class="widget-title-project">{{item.title}}</h2>
        <p class="widget-content">{{item.content}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ProjectDetail',
    props: {
      list: {
        type: Array,
        required: true
      }
    }
  }
</script>
