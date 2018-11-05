<template>
  <div class="project">
    <app-picture :pictureData="pictureData"/>
    <app-select
      :list="selectList"
      @change="handleChange"
    />
    <project-detail :list="detailData"/>
  </div>
</template>

<script>
  import ProjectDetail from '@/components/shared/ProjectDetail'
  export default {
    name: 'Project',
    components: {
      ProjectDetail
    },
    data () {
      return {
        pictureData: {
          'imgUrl': 'http://www.kooboo.org/uploads/banner/board2.jpg',
          'title': '细节决定成败',
          'content': 'DETAILS MAKE A DIFFERENCE'
        },
        selectList: [{
          'id': 'all',
          'text': '全部'
        }, {
          'id': 'customer',
          'text': '客户项目'
        }, {
          'id': 'research',
          'text': '研发产品'
        }],
        detailIndex: 'all',
        allDetailData: [{
          'category': ['all', 'customer'],
          'imgUrl': 'http://www.kooboo.org/uploads/case/list/webshop-img.jpg',
          'title': 'Webshop',
          'content': '独立创建一个自己的网上商店'
        }, {
          'category': ['all', 'customer'],
          'imgUrl': 'http://www.kooboo.org/uploads/case/list/Vitaminstore-img.jpg',
          'title': 'Vitaminstore',
          'content': '属于你的私人营养师'
        }, {
          'category': ['all', 'customer'],
          'imgUrl': 'http://www.kooboo.org/uploads/case/list/T-mobile-img.jpg',
          'title': 'T-Mobile',
          'content': '可以用积分消费的移动商城'
        }, {
          'category': ['all', 'customer'],
          'imgUrl': 'http://www.kooboo.org/uploads/case/list/pinnacle-img.jpg',
          'title': 'Pinnacle',
          'content': '专注诚信的博彩胜地'
        }, {
          'category': ['all', 'customer'],
          'imgUrl': 'http://www.kooboo.org/uploads/case/list/Nuon-img.jpg',
          'title': 'Nuon',
          'content': '超级忠诚计划'
        }, {
          'category': ['all', 'customer'],
          'imgUrl': 'http://www.kooboo.org/uploads/case/list/meetingselect-img.jpg',
          'title': 'MeetingSelect',
          'content': '选择最适合的会议室'
        }, {
          'category': ['all', 'customer'],
          'imgUrl': 'http://www.kooboo.org/uploads/case/list/Gobear-img.jpg',
          'title': 'Gobear',
          'content': '来自一只熊的贴心理财'
        }, {
          'category': ['all', 'customer'],
          'imgUrl': 'http://www.kooboo.org/uploads/case/list/didix-img.jpg',
          'title': 'Didix',
          'content': '独特的创意——礼品卡'
        }, {
          'category': ['all', 'customer'],
          'imgUrl': 'http://www.kooboo.org/uploads/case/list/bookchoice-img.jpg',
          'title': 'BookChoice',
          'content': '电子书的俱乐部'
        }]
      }
    },
    methods: {
      handleChange (id) {
        this.detailIndex = id
      }
    },
    computed: {
      detailData () {
        let that = this
        return this.allDetailData.filter((item) => {
          return item['category'].indexOf(that.detailIndex) !== -1
        })
      }
    }
  }
</script>
