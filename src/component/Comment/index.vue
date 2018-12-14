<template>
  <div class="comment">
    <div class="comment-header fz-normal">最新评论</div>
    <div class="comment-item fz-normal" v-if="data.length" v-for="(item, index) in data" :key="index">
      <div class="user-info">
        <div class="user-avatar"></div>
        <div class="user-name fz-small">{{item.userName}}</div>
      </div>
      <div class="content fz-small">
        {{item.content}}
      </div>
    </div>
    <div v-else>暂无评论</div>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    data: { type: Array, required: true }
  }
}
</script>

<style lang="scss" scoped>
  .comment {
    .comment-header {
      font-weight: 600;
      border-bottom: 1px solid #333;
    }
    .comment-item {
      font-size: 0;
      padding: 10px 10px 10px 0;
      border-bottom: 1px solid #dcdcdc;
    }
    .user-info {
      display: inline-block;
      vertical-align: top;
      text-align: center;
      width: 0.8rem;
      .user-avatar {
        display: inline-block;
        width: 0.6rem;
        height: 0.6rem;
        border: 1px solid #333;
        margin-bottom: 6px;
      }
      .user-name {
        width: 100%;
        display: inline-block;
      }
    }
    .content {
      display: inline-block;
      vertical-align: top;
      width: calc(9.2rem - 10px);
    }
  }

  @media (max-width: 1200px) {
    .comment {
      padding: 0 6px;
      .content {
        width: calc(100% - 0.8rem);
      }
    }
  }
</style>
