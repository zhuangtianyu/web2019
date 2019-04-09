<template>
  <div class="write container">
    <div class="write-item title">
      <div class="label">标题:</div>
      <div class="write-item-content">
        <input type="text" class="title-input" v-model="params.title">
      </div>
    </div>
    <div class="write-item author">
      <div class="label">作者:</div>
      <div class="write-item-content">
        <input type="text" class="author-input" v-model="params.author">
      </div>
    </div>
    <div class="write-item type">
      <div class="label">分类:</div>
      <div class="write-item-content">
        <Button
          :class="['type-button', { active: item.value === params.type }]"
          v-for="item in typeList"
          :key="item.value"
          :text="item.text"
          @click.native="handleType(item.value)"
        />
      </div>
    </div>
    <div class="write-item content">
      <div class="label">内容:</div>
      <div class="write-item-content">
        <textarea
          v-for="(item, index) in params.content"
          :key="index"
          class="content-item paragraph-textarea"
          v-model="params.content[index]"
        />
        <Button size="smaller" @click.native="addParagraph" text="添加段落" />
      </div>
    </div>
    <div class="button-group">
      <Button class="active submit" @click.native="submit" text="提交" />
      <Button class="cancel" @click.native="illegal" text="取消" />
    </div>
  </div>
</template>

<script>
import Button from 'src/component/Button'

export default {
  name: 'write',
  components: { Button },
  data: () => ({
    typeList: [
      { value: 1, text: '生活' },
      { value: 2, text: '音乐' },
      { value: 3, text: '技术' }
    ],
    params: {
      title: '',
      author: '',
      type: 1,
      content: ['']
    }
  }),
  methods: {
    illegal () {
      this.$router.push({ name: 'recommend' })
    },
    handleType (type) {
      this.params.type = type
    },
    addParagraph () {
      this.params.content.push('')
    },
    validate () {
      if (this.params.title === '') {
        return this.$modal({ message: '请填写标题' })
      }
      if (this.params.title.length > 30) {
        return this.$modal({ message: '标题长度不超过30字' })
      }
      if (this.params.author === '') {
        return this.$modal({ message: '请填写作者' })
      }
      if (this.params.author.length > 10) {
        return this.$modal({ message: '作者长度不超过10字' })
      }
      const content =
        Object.assign([], this.params.content)
          .filter(item => item !== '')
          .map(item => item.replace(/\n/g, '<br />'))
      if (content.length === 0) {
        return this.$modal({ message: '请填写内容' })
      }
      this.params.content = content
      return true
    },
    submit () {
      if (this.validate() !== true) { return }
      this.$axios.post('/article/write', this.params)
        .then(() => {
          this.$modal({
            message: '提交成功',
            confirm: this.illegal,
            close: this.illegal
          })
        })
    }
  },
  mounted () {
    // this.$modal({
    //   title: '提示',
    //   message: '我相信你提交的内容是友好的',
    //   cancel: this.illegal,
    //   close: this.illegal
    // })
  }
}
</script>

<style lang="scss" scoped>
.write {
  padding-bottom: 20px;
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

.write-item-content .type-button {
  display: inline-block;
  vertical-align: middle;
  margin-right: 3px;
  &:last-child {
    margin-right: 0;
  }
}

.write-item-content textarea {
  display: block;
  width: 90%;
  height: 280px;
  font-size: 14px;
  line-height: 20px;
  padding: 0 3px;
  margin-bottom: 10px;
  &:last-child {
    margin-bottom: 0;
  }
}

.content-item {
  resize: none;
}

.button-group {
  padding-left: 40px;
  font-size: 0;
  .submit {
    margin-right: 10px;
  }
}

@media (max-width: 1200px) {
  .write {
    padding: 0 6px 20px;
  }
}
</style>


