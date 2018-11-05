<template>
  <div class="welfare">
    <app-picture :pictureData="pictureData"/>
    <welfare-introduce :list="introduceList"/>
    <welfare-tour/>
  </div>
</template>

<script>
  import WelfareIntroduce from '@/components/shared/WelfareIntroduce'
  import WelfareTour from '@/components/shared/WelfareTour'

  export default {
    name: 'Welfare',
    components: {
      WelfareIntroduce,
      WelfareTour
    },
    data () {
      return {
        pictureData: {
          'imgUrl': 'http://www.kooboo.org/uploads/banner/soccer.jpg',
          'title': '人人生而平等',
          'content': 'All MEN ARE CREATED EQUAL'
        },
        introduceList: [{
          'iconfont': '&#xe60d;',
          'color': '#00aeef',
          'title': '成长激励',
          'content': '人才推荐奖、年度评优、长期激励等独特而有竞争力的奖励，鼓励专业人才的长期发展，更有社团交流会奖金池等你拿'
        }, {
          'iconfont': '&#xe613;',
          'color': '#c1c1c1',
          'title': '学习培优',
          'content': '量身定做的实习生培训，优秀导师亲自指导，更有不定期技术交流会和外派培训的机会让你的技能直线up'
        }, {
          'iconfont': '&#xe693;',
          'color': '#f90',
          'title': '社会保障',
          'content': '为每个员工缴纳社保五险一金（养老、医疗、失业、工伤、生育、住房公积金）'
        }, {
          'iconfont': '&#xe602;',
          'color': '#9c3',
          'title': '交通便捷',
          'content': '有沿线班车和交通补贴，若有加班可报销车费，为较远的实习生安排公寓'
        }, {
          'iconfont': '&#xe628;',
          'color': '#f90',
          'title': '温馨假期',
          'content': '国家法定假、带薪年假、婚假、产假等等，劳逸结合'
        }, {
          'iconfont': '&#xe632;',
          'color': '#9c3',
          'title': '人性化考勤',
          'content': '弹性工作制，并有早、晚班可以选择。每周5天8小时工作制，按照国家规定实行假期制度。'
        }, {
          'iconfont': '&#xe621;',
          'color': '#00aeef',
          'title': '健康关怀',
          'content': '健康免费的工作餐，更有年度健康体检关心你的健康'
        }, {
          'iconfont': '&#xe652;',
          'color': '#c1c1c1',
          'title': '精彩活动',
          'content': '公司超豪华室内活动室，每季度组织多彩的户外活动、集体聚餐、年度境外旅游嗨不停'
        }, {
          'iconfont': '&#xe61c;',
          'color': '#00aeef',
          'title': '贴心礼金',
          'content': '每月举办生日会、寿星生日礼物，小伙伴们一起欢乐生日Party'
        }, {
          'iconfont': '&#xe625;',
          'color': '#f90',
          'title': '吃吃喝喝',
          'content': '公司每日不限量提供各种小食、咖啡饮料、更有新鲜水果、休闲下午茶提供'
        }, {
          'iconfont': '&#xe671;',
          'color': '#9c3',
          'title': '户籍挂靠',
          'content': '公司办理人事代理，可提供个人档案的挂靠和户口落户'
        }]
      }
    }
  }
</script>
