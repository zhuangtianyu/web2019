<template>
  <div :class="['button', `fz-${size}`]">{{text}}</div>
</template>

<script>
export default {
  name: 'button-component',
  props: {
    text: { type: [String, Number], required: true },
    size: { type: String, default: 'small' }
  }
}
</script>

<style lang="scss" scoped>
  .button {
    display: inline-block;
    vertical-align: top;
    padding: 0 0.6em;
    line-height: 1.52;
    border: 1px solid #999;
    border-radius: 0.2em;
    cursor: pointer;
    &.active {
      color: #FF6A6A;
      border-color: #FF6A6A;
    }
  }
</style>

