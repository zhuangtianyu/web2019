<template>
  <div class="article-main">
    <div class="title fz-largest">{{data.title}}</div>
    <div class="author-info fz-small">
      <span>{{data.author}}</span>
      <span>{{data.date}}</span>
    </div>
    <p class="fz-normal" v-for="(item, index) in data.content" :key="index">{{item}}</p>
  </div>
</template>

<script>
export default {
  name: 'article-main',
  props: { data: { type: Object, required: true } }
}
</script>

<style lang="scss" scoped>
  .article-main {
    .title {
      font-weight: bolder;
      // margin-bottom: 0.3em;
    }
    .author-info {
      margin-bottom: 1.2em;
    }
    p {
      text-indent: 2em;
      margin-bottom: 0.6em;
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  @media (max-width: 1200px) {
    .article-main {
      padding: 0 6px;
    }
  }
</style>
