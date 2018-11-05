<template>
  <div class="join">
    <app-picture :pictureData="pictureData"/>
    <app-select
      :list="selectList"
      @change="handleChange"
    />
    <join-detail :list="detailData"/>
  </div>
</template>

<script>
  import JoinDetail from '@/components/shared/JoinDetail'
  export default {
    name: 'Join',
    components: {
      JoinDetail
    },
    data () {
      return {
        pictureData: {
          'imgUrl': 'http://www.kooboo.org/uploads/banner/join.jpg',
          'title': '失之毫厘 差之千里',
          'content': 'A MISS IS AS GOOD AS A MILE'
        },
        selectList: [{
          'id': 'all',
          'text': '全部'
        }, {
          'id': 'programme',
          'text': '程序开发'
        }, {
          'id': 'HTML',
          'text': 'HTML制作'
        }, {
          'id': 'test',
          'text': '测试'
        }],
        detailIndex: 'all',
        allDetailData: [{
          'category': ['all', 'programme'],
          'job': '.Net实习/预就业',
          'type': '.Net',
          'desc': [
            '2017年本科毕业生',
            '有项目经验',
            '计算机相关专业',
            '英语4级以上'
          ]
        }, {
          'category': ['all', 'programme'],
          'job': '.Net初级开发工程师',
          'type': '.Net',
          'desc': [
            ' 熟悉 C# 和 .net framework 基本类库；',
            '熟悉 asp.net mvc 框架；',
            '熟悉MS SQL server；',
            '对计算机软件开发有深厚的兴趣；',
            '端正的学习态度和团队合作精神。'
          ]
        }, {
          'category': ['all', 'programme'],
          'job': '.Net中级开发工程师',
          'type': '.Net',
          'desc': [
            '熟悉 .net framework 基本类库；',
            ' 熟悉 asp.net mvc 框架，理解 asp.net http pipeline 机制；',
            '熟悉MS SQL server；',
            '具有一定的 HTML/CSS/JS 功底；',
            '良好的编码规范，会写单元测试；',
            '英语CET四级以上，CET六级、口语流利者优先考虑。'
          ]
        }, {
          'category': ['all', 'programme'],
          'job': '.Net高级开发工程师',
          'type': '.Net',
          'desc': [
            '精通 Asp.net MVC 框架，了解Asp.net的各个扩展点；',
            '精通面向对象设计；',
            '精通至少一个ORM框架，如 Entity framework 或 NHibernate；',
            '熟悉 MS SQL server；知道基本的数据库性能优化；',
            '熟悉 IIS 部署环境，熟悉Web程序代码安全，及HTTP协议；',
            '具备良好的团队协作精神，能利用自身技术能力提升团队整体研发效率，提高团队影响力；',
            '英语CET四级以上，CET六级、口语流利者优先考虑。'
          ]
        }, {
          'category': ['all', 'programme'],
          'job': 'JavaScript中级开发工程师',
          'type': 'JS',
          'desc': [
            '熟悉 Javascript,有 ES6 或 TypeScript 经验更佳；',
            '具有一定的 HTML/CSS 功底；',
            '熟悉 一些基本的 Javascript 类库，如 jQuery 等。'
          ]
        }, {
          'category': ['all', 'programme'],
          'job': 'JavaScript高级开发工程师',
          'type': 'JS',
          'desc': [
            '精通 Javascript,有 ES6 或 TypeScript 经验更佳；',
            '对前端工程化与模块化开发有一定了解，并有实践经验，如（ RequireJS/CommonJS）；',
            '至少熟悉一种前端构建工具，比如 Webpack, Jspm 等；',
            '至少熟悉一种前端框架，如Angular, Vue 等；',
            '至少熟悉一门非前端的语言，并有实践经验；',
            '具备良好的团队协作精神，能利用自身技术能力提升团队整体研发效率，提高团队影响力；',
            '对前端技术有持续的热情，个性乐观开朗，逻辑性强，善于和各种背景的人合作；',
            '英语CET四级以上，CET六级、口语流利者优先考虑。'
          ]
        }, {
          'category': ['all', 'HTML'],
          'job': 'Html实习/预就业',
          'type': 'HTML',
          'desc': [
            '2017年本科毕业生；',
            '有项目经验；',
            '计算机相关专业；',
            '英语4级以上。'
          ]
        }, {
          'category': ['all', 'HTML'],
          'job': 'Html中级开发工程师',
          'type': 'HTML',
          'desc': [
            '熟悉HTML、div css布局、JQUERY并掌握CSS在主流浏览器版本下的差异和兼容性；',
            '熟悉各种WEB前端技术，对javascript有较为全面的了解，可以手写一些JS代码； ',
            '熟练使用Photoshop，有Sketch经验更佳；',
            '英语CET四级以上，CET六级、口语流利者优先考虑。'
          ]
        }, {
          'category': ['all', 'HTML'],
          'job': 'Html高级开发工程师',
          'type': 'HTML',
          'desc': [
            '精通 JavaScript、CSS、HTML 语义化标签；',
            '熟练掌握 jQuery、lodash 等常用辅助库；',
            '熟练掌握 Grunt、Gulp、Webpack、FIS 其中任意一项构建工具的使用和配置；',
            '熟练掌握 Chrome 开发者工具，至少掌握一种抓包工具如 Fiddler； ',
            '熟练运用JavaScript语言与HTML5、CSS3等技术； 熟悉移动端Web绘图相关高级特性, 如canvas, SVG, CSS3动画效果等；',
            '熟练使用Photoshop，有Sketch经验更佳；',
            '英语CET四级以上，CET六级、口语流利者优先考虑；'
          ]
        }, {
          'category': ['all', 'test'],
          'job': 'Web测试实习/预就业',
          'type': '测试',
          'desc': [
            '计算机相关专业毕业，本科以上学历应届毕业生；',
            '了解软件测试理论与方法，具有软件测试思维；',
            '了解电子商务网站，有测试经验者优先考虑；',
            '有明确的职业发展目标，愿意在软件行业发展；',
            '能够阅读英文技术文档，CET6优先；',
            '能够搭建测试环境，熟悉测试工具；',
            '可以协助其他测试人员完成测试任务；',
            '能够编写并提交软件缺陷报告。'
          ]
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
