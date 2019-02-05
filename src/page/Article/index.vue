<template>
  <div class="article-page container">
    <Article :data="article" />
    <Comment :data="comment" />
  </div>
</template>

<script>
import Article from 'src/component/Article'
import Comment from 'src/component/Comment'

export default {
  name: 'article-page',
  components: { Article, Comment },
  data: () => ({
    article: {},
    comment: []
  }),
  mounted () {
    const id = this.$route.params.id
    this.$axios.get(`/article/detail/${id}`).then((result) => {
      const { comment, ...others } = result
      this.article = { ...others }
      this.comment = comment
      // this.comment = [
      //   {
      //     userName: '朱自清',
      //     userAvatar: '',
      //     content: '我们过了江，进了车站。我买票，他忙着照看行李。行李太多，得向脚夫11行些小费才可过去。他便又忙着和他们讲价钱。我那时真是聪明过分，总觉他说话不大漂亮，非自己插嘴不可，但他终于讲定了价钱；就送我上车。他给我拣定了靠车门的一张椅子；我将他给我做的紫毛大衣铺好座位。他嘱我路上小心，夜里要警醒些，不要受凉。又嘱托茶房好好照应我。我心里暗笑他的迂；他们只认得钱，托他们只是白托！而且我这样大年纪的人，难道还不能料理自己么？我现在想想，我那时真是太聪明了。',
      //     date: '2012-01-01'
      //   },
      //   {
      //     userName: '朱自清',
      //     userAvatar: '',
      //     content: '我说道：“爸爸，你走吧。”他望车外看了看，说：“我买几个橘子去。你就在此地，不要走动。”我看那边月台的栅栏外有几个卖东西的等着顾客。',
      //     date: '2012-01-01'
      //   }
      // ]
    })
  }
}
</script>

<style lang="scss" scoped>
  .article-page {
    .article-main {
      margin-bottom: 30px;
    }
  }
</style>


