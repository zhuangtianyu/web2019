<template>
  <div class="intro container">
    <div class="lrc" :style="{ height: `${height}px` }">
      <router-link
        to="/recommend"
        class="fz-normal"
        :style="{ 'margin-top': `${ 1/3 * height }px` }"
      >
        假如你不曾让我悲伤<br />我怎会感觉昏暗无光
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data: () => ({
    height: 0
  }),
  methods: {
    calcHeight () {
      this.height = document.documentElement.clientHeight - 50
    }
  },
  mounted () {
    this.calcHeight()
    window.addEventListener('resize', this.calcHeight)
  }
}
</script>

<style lang="scss" scoped>
  .lrc {
    text-align: center;
  }
  .lrc a {
    display: inline-block;
    color: #FF6A6A;
  }
</style>
