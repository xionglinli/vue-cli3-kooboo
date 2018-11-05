<template>
  <div class="contact-address">
    <ul class="contact-address__list flex">
      <li
        class="contact-address__item col-lg-3 col-md-6 col-sm-6 col-xs-12"
        v-for="item of list"
        :key="item.title"
      >
        <div class="image-wrapper">
          <img class="image" :src="item.imgUrl">
        </div>
        <div class="widget-content">
          <span class="iconfont">&#xe601;</span>
          <p class="detail">{{item.phone}}</p>
        </div>
        <div class="widget-content">
          <span class="iconfont">&#xe612;</span>
          <p class="detail">{{item.address}}</p>
        </div>
        <div class="widget-content">
          <span
            class="iconfont"
            v-if="item.email"
          >&#xe694;</span>
          <p class="detail">{{item.email}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ContactAddress',
    props: {
      list: Array
    }
  }
</script>
