<template>
  <div class="header-wrapper">
    <div class="header">
      <img src="http://www.kooboo.org/images/logo.png">
      <div class="header__menu">
        <div
          class="header__menu__btn iconfont"
          @click="handleMenuBtnClick"
        >
          &#xe66d;
        </div>
        <ul
          class="header__menu__list"
          :class="{'header__menu__list-show': isShowMenuList}"
        >
          <li
            v-for="item of list"
            :key="item.id"
            @click="handleMenuBtnClick"
          >
            <router-link class="header__menu__list__item" :to='item.to'>
              {{item.text}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TheHeader',
    data () {
      return {
        isShowMenuList: false,
        list: [{
          'id': '001',
          'to': '/',
          'text': '首页'
        }, {
          'id': '002',
          'to': '/about',
          'text': '关于我们'
        }, {
          'id': '003',
          'to': '/project',
          'text': '项目展示'
        }, {
          'id': '004',
          'to': '/join',
          'text': '招聘信息'
        }, {
          'id': '005',
          'to': '/welfare',
          'text': '成长福利'
        }, {
          'id': '006',
          'to': '/contact',
          'text': '联系我们'
        }]
      }
    },
    methods: {
      handleMenuBtnClick () {
        this.isShowMenuList = !this.isShowMenuList
      }
    }
  }
</script>
