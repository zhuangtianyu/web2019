<template>
  <div class="resume container fz-normal">
    庄天宇，前端开发<br />
    热爱原生javascript，喜欢vue.js，nodejs<hr />
    邮箱: zhuangtianyu1995@163.com<br />
    github: <a href="https://github.com/zhuangtianyu" target="_blank">github.com/zhuangtianyu</a><hr />
    本项目相关地址:<br />
    <a href="https://github.com/zhuangTianYu/web2019" target="_blank">web2019</a><br />
    <a href="https://github.com/zhuangTianYu/web2019-backend" target="_blank">web2019-backend</a><br />
    <a href="https://github.com/zhuangTianYu/web2019-sql" target="_blank">web2019-sql</a>
  </div>
</template>

<script>
export default {
  name: 'resume'
}
</script>

<style lang="scss" scoped>
  a {
    color: #FF6A6A;
  }

  .resume {
    padding-bottom: 20px;
  }

  @media (max-width: 1200px) {
    .resume {
      padding: 0 6px 20px;
    }
  }
</style>


