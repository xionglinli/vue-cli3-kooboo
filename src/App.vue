<template>
  <div id="app">
    <the-header/>
    <router-view/>
    <the-footer/>
  </div>
</template>

<script>
  import TheHeader from '@/components/TheHeader'
  import TheFooter from '@/components/TheFooter'
  export default {
    name: 'app',
    components: {
      TheHeader,
      TheFooter
    }
  }
</script>
