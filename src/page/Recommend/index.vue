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
    articleList: [
      { title: '背影', author: '朱自清', date: '2010-01-01', comment: '10', id: 1 },
      { title: '你离开了南京, 从此没有人和我说话', author: '李志', date: '2010-01-01', comment: '10', id: 1 },
      { title: '这个世界会好吗', author: '李志', date: '2010-01-01', comment: '10', id: 1 },
      { title: '如果下雨的时候你拖着行李箱子站在屋檐下面那么其实我没有足够的时间找一个好一点的理由抛弃家里面的狗坐上K667次列车到你在的地方找个商店买一把伞然后给我妹妹弹吉他因为她要参加比赛所以我回不去了我也不会给你说我泡面的碗还没洗', author: '尧十三', date: '2010-01-01', comment: '10', id: 1 },
      { title: '鸵鸟&天空之城&我们不能失去信仰(2014i/O版)', author: '李志', date: '2010-01-01', comment: '10', id: 1 },
      { title: '我们不是只有现在吗', author: '曾轶可', date: '2010-01-01', comment: '10', id: 1 },
      { title: '电车计划', author: '曾轶可', date: '2010-01-01', comment: '10', id: 1 }
    ]
  }),
  mounted () {
    // this.$axios.get('/article/list/1', {})
    //   .then((result) => {
    //     console.log(result)
    //     const message = '请求成功'
    //     this.$modal({ message })
    //   })
    // this.$axios.post('./article/write/1', {})
    //   .then((result) => {
    //     const message = '创建成功'
    //     this.$modal({ message })
    //   })
  },
  watch: {
    articleType (value, oldValue) {
      console.log(`文章类型变成了${value}类型`)
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


