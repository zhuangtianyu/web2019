<template>
  <div id="app">
    <Header />
    <keep-alive include="recommend">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Header from 'src/component/Header'

export default {
  name: 'app',
  components: { Header }
}
</script>

<style lang="scss" scoped>
  .header + div {
    padding-top: 50px;
  }
</style>
