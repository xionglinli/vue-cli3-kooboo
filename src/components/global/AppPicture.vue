<template>
  <div class="picture">
    <div class="image-wrapper image--width image--shade">
      <img class="image" :src="pictureData.imgUrl">
    </div>
    <div class="picture__word">
      <h2 class="picture__word__chinese">{{pictureData.title}}</h2>
      <p class="picture__word__english">{{pictureData.content}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Picture',
  props: {
    pictureData: {
      imgUrl: {
        type: String,
        required:true
      },
      title: {
        type: String,
        required:true
      },
      content: {
        type: String,
        required:true
      }
    }
  }
}
</script>
