<template>
  <div class="header">
    <div class="container">
      <ul class="nav">
        <router-link
          class="fz-normal"
          v-for="item in navList"
          :key="item.name"
          :to="{ name: item.name }"
          tag="li"
          exact
        >
          {{item.text}}
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  computed: {
    navList () {
      const routeName = this.$route.name
      switch (routeName) {
        case 'intro':
        case 'recommend':
        case 'resume':
          return [
            { text: '首页', name: 'intro' },
            { text: '推荐', name: 'recommend' },
            { text: '关于作者', name: 'resume' }
          ]
          break

        case 'article':
        case 'write':
          return [
            { text: '返回', name: 'recommend' }
          ]
          break

        default:
          return [
            { text: '晚安', name: 'intro' }
          ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  // background-color: #fff;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  line-height: 40px;
  z-index: 100;
}
.nav {
  font-size: 0;
  li {
    position: relative;
    display: inline-block;
    vertical-align: top;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 0.6em;
    cursor: pointer;
    &:after {
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      margin: auto;
      content: "";
      width: 1px;
      height: 14px;
      background-color: rgba(255, 255, 255, 0.5);
    }
    &:first-child {
      padding-left: 0;
    }
    &:last-child:after {
      display: none;
    }
    &.router-link-active {
      color: #fff;
    }
  }
}
@media (max-width: 1200px) {
  .header .nav li:first-child {
    padding-left: 6px;
  }
}
</style>
