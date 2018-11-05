<template>
  <div class="home-introduce">
    <h2 class="home-introduce__title">{{title}}</h2>
    <h3 class="home-introduce__subtitle">{{subtitle}}</h3>
    <p class="home-introduce__paragrah">{{paragraph}}</p>
    <button class="btn">{{btnText}}</button>
  </div>
</template>

<script>
export default {
  name: 'HomeIntroduce',
  data () {
    return {
      title: '平等，责任，创新',
      subtitle: '亚尔迪成立于2007年，专注于互联网原创技术的研发与应用，拥有中西结合的企业文化。',
      paragraph: '拥有一系列自主版权或专利的技术与产品。DNS, SMTP, IMAP, HTTP, DOM等互联网协议均完整实现并给予创新应用。Web开发应用的服务器，路由，模板引擎都采用自主版权的技术。 数据库引擎由公司原创开发，可达单机单线程每秒20万的插入速度。与厦门大学，华侨大学合作密切，联合成立智能电子商务研发中心，公司领导为华侨大学硕士生导师。在网站建设，电子商务方面有多年的技术积累，大数据与人工智能是未来主要研发方向。',
      btnText: '了解更多内容'
    }
  }
}
</script>
