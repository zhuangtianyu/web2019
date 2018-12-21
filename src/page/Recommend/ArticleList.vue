<template>
  <div class="article-list">
    <router-link
      class="article-item"
      tag="div"
      v-for="(item, index) in data"
      :to="`/article/${item.id}`"
      :key="index"
    >
      <div class="article-title fz-normal">{{item.title}}</div>
      <div class="article-info">
        <div class="author fz-small">{{item.author}}</div>
        <div class="date fz-small">{{item.date}}</div>
        <div class="comment fz-small">评论: {{item.comment}}</div>
      </div>
    </router-link>
    <div class="end fz-small">没有更多了</div>
  </div>
</template>

<script>
export default {
  name: 'article-list',
  props: {
    data: { type: Array, default: [] }
  }
}
</script>

<style lang="scss" scoped>
  .article-list {
    .article-item {
      padding: 12px 0;
      border-bottom: 1px solid #dcdcdc;
      cursor: pointer;
    }
    .article-title {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 8px;
    }
    .article-info {
      font-size: 0;
    }
    .article-info div {
      display: inline-block;
      color: #333;
    }
    .article-info .comment {
      padding-right: 2px;
      float: right;
    }
    .end {
      color: #666;
      text-align: center;
      line-height: 3em;
      padding-bottom: 1em;
    }
  }

  @media (max-width: 1200px) {
    .article-list {
      padding: 0 6px;
    }
  }
</style>


