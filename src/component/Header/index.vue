<template>
  <div class="header">
    <div class="container">
      <ul class="nav">
        <router-link
          tag="li"
          class="fz-normal"
          v-for="(item, index) in navList"
          :key="index"
          :to="item.to"
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
  data: () => ({
    defaultNav: [
      { text: '首页', to: '/' },
      { text: '推荐', to: '/recommend' },
      { text: '关于作者', to: '/resume' }
    ],
    backNav: [
      { text: '返回推荐', to: '/recommend' }
    ]
  }),
  computed: {
    navList () {
      const routeName = this.$route.name
      const defaultList = ['intro', 'resume', 'recommend']
      return defaultList.includes(routeName) ? this.defaultNav : this.backNav
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    line-height: 40px;
  }
  .nav {
    font-size: 0;
    li {
      position: relative;
      display: inline-block;
      vertical-align: top;
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
        background-color: #333;
      }
      &:first-child {
        padding-left: 0;
      }
      &:last-child:after {
        display: none;
      }
      &.router-link-active {
        color: #FF6A6A;
      }
    }
  }
  @media (max-width: 1200px) {
    .header .nav li:first-child {
      padding-left: 6px;
    }
  }
</style>
