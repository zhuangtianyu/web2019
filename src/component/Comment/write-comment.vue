<template>
  <div class="write-comment" v-if="edit">
    <div class="write-item user-name">
      <div class="label">姓名:</div>
      <div class="write-item-content">
        <input type="text" class="title-input" v-model="params.userName">
      </div>
    </div>
    <div class="write-item content">
      <div class="label">内容:</div>
      <div class="write-item-content">
        <textarea
          class="content-item"
          v-model="params.content"
        />
      </div>
    </div>
    <div class="button-group">
      <Button class="active submit" @click.native="submit" text="提交" />
      <Button class="cancel" @click.native="cancel" text="取消" />
    </div>
  </div>
</template>

<script>
import Button from 'src/component/Button'

export default {
  name: 'write-comment',
  props: {
    edit: { type: Boolean, required: true }
  },
  components: { Button },
  data: () => ({
    params: {
      userName: '',
      content: ''
    }
  }),
  methods: {
    validate () {
      if (this.params.userName === '') {
        return this.$modal({ message: '请填写姓名' })
      }
      if (this.params.userName.length > 10) {
        return this.$modal({ message: '姓名长度不超过10字' })
      }
      if (this.params.content === '') {
        return this.$modal({ message: '请输入评论' })
      }
      if (this.params.content.length > 2000) {
        return this.$modal({ message: '评论长度不超过2000字' })
      }
      return true
    },
    cancel () {
      this.$emit('update:edit', false)
    },
    submit () {
      if (this.validate() !== true) { return }
      const articleID = this.$route.params.id
      const { userName, content } = this.params
      this.$axios.post('/article/comment', { userName, content: content.replace(/\n/g, '<br />'), articleID })
        .then(() => {
          this.$emit('reload')
          this.cancel()
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.write-comment {
  padding: 6px 0 20px;
}

.write-item {
  margin-bottom: 12px;
  &:last-child {
    margin-bottom: 0;
  }
}

.write-item {
  font-size: 0;
  .label {
    display: inline-block;
    vertical-align: middle;
    width: 40px;
    font-size: 14px;
  }
  .write-item-content {
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    padding-left: 40px;
    font-size: 14px;
    margin-left: -40px;
  }
  &.content {
    padding-bottom: 6px;
    border-bottom: 1px solid #fff;
    .label,
    .write-item-content {
      vertical-align: top;
    }
  }
}

.write-item-content input {
  width: 60%;
  max-width: 230px;
  font-size: 14px;
  height: 24px;
  line-height: 20px;
  padding: 0 3px;
}

.write-item-content textarea {
  display: block;
  width: 90%;
  height: 60px;
  font-size: 14px;
  line-height: 20px;
  padding: 0 3px;
  margin-bottom: 10px;
  resize: none;
  &:last-child {
    margin-bottom: 0;
  }
}

.button-group {
  padding-left: 40px;
  font-size: 0;
  .submit {
    margin-right: 10px;
  }
}
</style>
