<template>
  <div id="app">
    <Header />
    <router-view></router-view>
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

</style>
