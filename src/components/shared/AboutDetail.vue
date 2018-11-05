<template>
  <div class="about-detail">
    <div class="about-detail__guide">
      <router-link class="widget-link" :to="'/'">
        <span class="iconfont home">&#xe608; > </span>
      </router-link>
      <router-link class="widget-link" :to="$route.path">
        <span>关于我们 > </span>
      </router-link>
      <span class="about-detail__guide__current">{{title}}</span>
    </div>
    <div class="about-detail__content">
      <div class="about-detail__content__left">
        <ul class="list">
          <li
            class="item"
            v-for="(item,index) of list"
            :key="item.id"
            @click="handleClick(item.id,index)"
          >{{item.text}}</li>
        </ul>
      </div>
      <div class="about-detail__content__right">
        <h1 class="title">{{content.title}}</h1>
        <h2 class="subTitle"
            v-for="(item,index) of content.subTitle"
            :key="'sub-'+index"
            v-if="content.subTitle"
        >{{item}}</h2>
        <div class="para"
             v-for="(item,index) of content.para"
             :key="index"
        >
          <h3 class="para-title"
              v-if="item.title"
          >{{item.title}}</h3>
          <p class="para-content">{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'AboutDetail',
    data () {
      return {
        axiosData: '',
        content: '',
        title: '企业文化',
        list: [{
          'id': 'info',
          'text': '公司简介 | INFO'
        }, {
          'id': 'tech',
          'text': '技术创新 | TECH'
        }, {
          'id': 'culture',
          'text': '企业文化 | CULTURE'
        }]
      }
    },
    methods: {
      getDetailInfo () {
        axios.get('/api/detail.json')
          .then(this.handleGetDataSucc)
      },
      handleGetDataSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          this.axiosData = res.data
          this.content = res.data.culture
        }
      },
      handleClick (id, index) {
        this.title = this.list[index]['text'].substring(0, 4)
        this.content = this.axiosData[id]
      }
    },
    mounted () {
      this.getDetailInfo()
    }
  }
</script>
