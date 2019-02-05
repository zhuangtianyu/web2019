<template>
  <div class="article-page container">
    <Article :data="article" />
    <Comment :data="comment" @reload="fetch" />
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
    this.fetch()
  },
  methods: {
    fetch () {
      const id = this.$route.params.id
      this.$axios.get(`/article/detail/${id}`).then((result) => {
        const { comment, ...others } = result
        this.article = { ...others }
        this.comment = comment
      })
    }
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


