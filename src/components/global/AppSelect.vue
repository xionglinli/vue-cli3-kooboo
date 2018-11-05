<template>
  <div class="select">
    <ul class="select__list">
      <li
        class="select__list__item btn btn-select"
        :class="{'btn-select-active':index==activeIndex}"
        v-for="(item,index) of list"
        :key="item.id"
        @click="handleClick(index)"
      >
        {{item.text}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'AppSelect',
    data () {
      return {
        activeIndex: 0
      }
    },
    props: {
      list: Array
    },
    methods: {
      handleClick (index) {
        this.activeIndex = index
        this.$emit('change', this.list[index]['id'])
      }
    }
  }
</script>
