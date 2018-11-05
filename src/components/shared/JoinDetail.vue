<template>
  <div class="join-detail">
    <div class="join-detail__title-wrapper">
      <div
        class="join-detail__title"
        v-for="(item,index) of title"
        :key="index"
      >
        {{item}}
      </div>
    </div>
    <div
      class="join-detail__list"
      v-for="(item,index) of list"
      :key="index"
    >
      <div
        class="join-detail__list__item-wrapper"
        :class="{'join-detail__list__item-wrapper-active':index===activeIndex && showDetail}"
        @click="handleClick(index)"
      >
        <div class="join-detail__list__item">{{item.job}}</div>
        <div class="join-detail__list__item">{{item.type}}</div>
      </div>
      <div class="join-detail__require" v-show="index===activeIndex && showDetail">
        <h2 class="join-detail__require__title">{{requireData.title}}</h2>
        <p
          class="desc"
          v-for="(request,index) of item.desc"
          :key="index"
        >
          {{index+1}}.{{request}}
        </p>
        <p class="join-detail__require__explain" v-html="requireData.explain"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JoinDetial',
  data () {
    return {
      title: ['职位名称', '职位类型'],
      activeIndex: 0,
      showDetail: false,
      requireData: {
        title: '职位职责和要求',
        explain: `请在公司授权发布的网站上投递简历；或者将简历随附件发送到指定邮箱：<span class="email">hr@kooboo.com</span>，邮件标题格式为“岗位全称 + 姓名"
接到面试通知后请持相关证件，个人作品（初级以上请务必携带）至公司参加面试`
      }
    }
  },
  props: {
    list: Array
  },
  methods: {
    handleClick (index) {
      this.showDetail = index === this.activeIndex ? !this.showDetail : true
      this.activeIndex = index
    }
  },
  watch: {
    list () {
      this.showDetail = false
    }
  }
}
</script>
