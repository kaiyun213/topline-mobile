<template>
  <div>
    <!-- 顶部登录条 -->
    <van-nav-bar title="登录" />
    <!-- 输入框 -->
    <van-cell-group>
      <van-field v-model="mobile" required clearable label="手机号码" placeholder="请输入手机号码" />
      <van-field v-model="code" required label="验证码" placeholder="请输入验证码" />
    </van-cell-group>
    <!-- 底部登录按钮 -->
    <div class="login-btn">
      <van-button type="info" size="large">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mobile: '',
      code: '',
    }
  },
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #1989fa;
  .van-nav-bar__title {
    color: #fff;
  }
}
.login-btn {
  margin: 30px 20px;
  .van-button {
    border-radius: 5px;
  }
}
</style>