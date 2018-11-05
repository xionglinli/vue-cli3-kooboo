<template>
  <div class="footer">
    <div class="footer__top flex">
      <div class="footer__top__left col-lg-6 col-md-6 col-sm-12 col-xs-12">
        <h2 class="widget-title">{{intro.title}}</h2>
        <p class="widget-content">{{intro.content}}</p>
      </div>
      <div class="footer__top__center col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <h2 class="widget-title">{{link.title}}</h2>
        <ul>
          <li
            class="widget-content"
            v-for="(item,index) of link.content"
            :key="index"
          >
            <a class="widget-link" :href="item.to">{{item.text}}</a>
          </li>
        </ul>
      </div>
      <div class="footer__top__right col-lg-3 col-md-3 col-sm-12 col-xs-12">
        <h2 class="widget-title">{{contact.title}}</h2>
        <div
          class="widget-content"
          v-for="(item,index) of contact.content"
          :key="index"
        >
          <div class="widget-title">{{item.title}}</div>
          <div>{{item.content}}</div>
        </div>
      </div>
    </div>
    <div class="footer__bottom">{{copyright}}</div>
  </div>
</template>

<script>
  export default {
    name: 'TheFooter',
    data () {
      return {
        intro: {
          title: '关于我们',
          content: '亚尔迪创办于2007年，属于外商投资企业，位于厦门软件园三期，主要从事互联网技术研发，从底层的技术研发到互联网产品都有一定的积累。 与厦门大学以及华侨大学保持长期的合作关系。与华侨大学共同设立智能电子商务研发中心，从事大数据处理，人工智能方面的前沿研究工作。技术研发方面处于世界领先水平，长期向欧美企业输出技术。'
        },
        link: {
          title: '相关链接',
          content: [{
            text: '关于我们',
            to: '/about'
          }, {
            text: '项目展示',
            to: '/project'
          }, {
            text: '招聘信息',
            to: '/join'
          }, {
            text: '联系我们',
            to: '/contact'
          }]
        },
        contact: {
          title: '联系我们',
          content: [{
            title: '电话',
            content: '0592-5550586'
          }, {
            title: '邮件',
            content: 'hr@kooboo.com'
          }, {
            title: '地址',
            content: '厦门市集美软件园三期A03栋1401-1402'
          }]
        },
        copyright: '© 2017 亚尔迪(厦门)科技有限公司'
      }
    }
  }
</script>
