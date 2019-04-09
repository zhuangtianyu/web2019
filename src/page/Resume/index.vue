<template>
  <div class="resume container fz-normal">
    <div class="base-information resume-item">
      <div class="base-item">
        <span>庄天宇</span>
        <span class="fz-small">前端开发工程师</span>
      </div>
      <div class="base-item fz-small">热爱原生javascript, 热爱vue.js, node.js</div>
    </div>
    <div class="contact-information resume-item">
      <div class="contact-item">
        <span class="fz-small">邮箱: </span>
        <span>zhuangtianyu1995@163.com</span>
      </div>
      <div class="contact-item">
        <span class="fz-small">github: </span>
        <a href="https://github.com/zhuangtianyu" target="_blank">我的github</a>
      </div>
    </div>
    <div class="project-remote resume-item">
      <div class="project-item fz-small">本项目相关地址:</div>
      <div class="project-item">
        <span class="fz-small">前台: </span>
        <a href="https://github.com/zhuangTianYu/web2019" target="_blank">web2019</a>
      </div>
      <div class="project-item">
        <span class="fz-small">后台: </span>
        <a href="https://github.com/zhuangTianYu/web2019-backend" target="_blank">web2019-backend</a>
      </div>
      <div class="project-item">
        <span class="fz-small">SQL: </span>
        <a href="https://github.com/zhuangTianYu/web2019-sql" target="_blank">web2019-sql</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resume'
}
</script>

<style lang="scss" scoped>
.resume .resume-item {
  padding: 6px;
  margin-bottom: 10px;
  border-bottom: 1px solid #fff;
  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
  }
}
.resume a {
  color: #ff6a6a;
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


