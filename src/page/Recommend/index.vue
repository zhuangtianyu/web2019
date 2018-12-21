<template>
  <div class="recommend container">
    <ArticleList :data="articleList" />
  </div>
</template>

<script>
import ArticleList from './ArticleList'

export default {
  name: 'recommend',
  components: { ArticleList },
  data: () => ({
    articleList: [
      { title: '背影', author: '朱自清', date: '2010-01-01', comment: '10', id: 1 },
      { title: '你离开了南京, 从此没有人和我说话', author: '李志', date: '2010-01-01', comment: '10', id: 1 },
      { title: '这个世界会好吗', author: '李志', date: '2010-01-01', comment: '10', id: 1 },
      { title: '如果下雨的时候你拖着行李箱子站在屋檐下面那么其实我没有足够的时间找一个好一点的理由抛弃家里面的狗坐上K667次列车到你在的地方找个商店买一把伞然后给我妹妹弹吉他因为她要参加比赛所以我回不去了我也不会给你说我泡面的碗还没洗', author: '尧十三', date: '2010-01-01', comment: '10', id: 1 },
      { title: '鸵鸟&天空之城&我们不能失去信仰(2014i/O版)', author: '李志', date: '2010-01-01', comment: '10', id: 1 },
      { title: '我们不是只有现在吗', author: '曾轶可', date: '2010-01-01', comment: '10', id: 1 },
      { title: '电车计划', author: '曾轶可', date: '2010-01-01', comment: '10', id: 1 }
    ]
  })
}
</script>

<style lang="scss" scoped>
  .recommend.container {
    padding-top: 42px;
  }
</style>


