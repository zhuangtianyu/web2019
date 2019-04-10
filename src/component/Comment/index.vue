<template>
  <div class="comment">
    <div class="comment-header">
      <div class="new-comment fz-normal">最新评论</div>
      <div class="write-comment fz-small" @click="edit = !edit">{{ edit ? '取消编辑' : '写评论' }}</div>
    </div>
    <template v-if="data.length">
      <div class="comment-item fz-normal" v-for="(item, index) in data" :key="index">
        <div class="user-info">
          <div class="user-avatar"></div>
          <div class="user-name fz-small">{{item.userName}}</div>
          <div class="create-time fz-smaller">{{item.createTime}}</div>
        </div>
        <div class="content fz-small" v-html="item.content"></div>
      </div>
    </template>
    <div class="no-comment fz-small" v-if="data.length === 0 && edit === false">暂无评论</div>
    <WriteComment :edit.sync="edit" @reload="$emit('reload')" />
  </div>
</template>

<script>
import WriteComment from './write-comment'

export default {
  name: 'comment',
  props: {
    data: { type: Array, required: true }
  },
  components: { WriteComment },
  data: () => ({
    edit: false
  }),
  watch: {
    edit (value, oldValue) {
      if (value === true && oldValue === false) {
        this.$nextTick(() => {
          const scrollHeight = document.documentElement.scrollHeight
          window.scrollTo(0, scrollHeight)
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  padding: 12px 10px 10px;
  border-radius: 0.3em;
  background-color: rgba(255, 255, 255, 0.6);
  .comment-header {
    position: relative;
    font-weight: 600;
    border-bottom: 1px solid #333;
    .new-comment {
      display: inline-block;
      vertical-align: middle;
    }
    .write-comment {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      color: #fff;
      padding: 0 0.3em;
      height: 20px;
      line-height: 20px;
      text-align: center;
      background-color: #ff6a6a;
      cursor: pointer;
    }
  }
  .comment-item {
    font-size: 0;
    padding: 16px 10px 16px 0;
    border-bottom: 1px solid #dcdcdc;
    &:last-child {
      border-bottom: none;
    }
  }
  .user-info {
    display: inline-block;
    vertical-align: top;
    text-align: center;
    width: 92px;
    .user-avatar {
      display: inline-block;
      width: 72px;
      height: 72px;
      border: 1px solid #333;
      margin-bottom: 6px;
    }
    .create-time {
      line-height: 1.2;
    }
  }
  .content {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 92px);
    line-height: 1.92;
  }
}

.no-comment {
  color: #666;
  text-align: center;
  line-height: 3em;
  padding-bottom: 1em;
}

@media (max-width: 1200px) {
  .comment {
    padding: 0 6px;
  }
}
</style>
