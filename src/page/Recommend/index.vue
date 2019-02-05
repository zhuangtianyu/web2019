<template>
  <div class="recommend container">
    <div class="article-filter">
      <Button
        v-for="(item, index) in articleTypeList"
        :key="index"
        :text="item.text"
        :class="{ active: item.value === articleType }"
        @click.native="articleType = item.value"
      />
      <router-link tag="div" class="write fz-small" :to="{ name: 'write' }">写文章</router-link>
    </div>
    <ArticleList :data="articleList" />
  </div>
</template>

<script>
import ArticleList from './ArticleList'
import Button from 'src/component/Button'

export default {
  name: 'recommend',
  components: { ArticleList, Button },
  data: () => ({
    articleType: 0,
    articleTypeList: [
      { value: 0, text: '全部' },
      { value: 1, text: '生活' },
      { value: 2, text: '音乐' },
      { value: 3, text: '技术' }
    ],
    articleList: []
  }),
  mounted () {
    this.$axios.get('/article/list/0')
      .then((result) => this.articleList = result)
  },
  watch: {
    articleType (value, oldValue) {
      this.$axios.get(`/article/list/${value}`)
        .then((result) => this.articleList = result)
    }
  }
}
</script>

<style lang="scss" scoped>
  // .recommend.container {
  //   padding-top: 42px;
  // }

  .article-filter {
    font-size: 0;
    margin-bottom: 10px;
    .button {
      margin-right: 6px;
      &:last-child {
        margin-right: 0;
      }
    }

    .write {
      float: right;
      color: #fff;
      padding: 0 0.3em;
      line-height: 20px;
      background-color: #FF6A6A;
      vertical-align: middle;
      cursor: pointer;
    }
  }

  @media (max-width: 1200px) {
    .article-filter {
      padding: 0 6px;
    }
  }
</style>


