<template>
  <div>
    <!-- 顶部登录条 -->
    <van-nav-bar title="登录" />
    <!-- 输入框 -->
    <van-cell-group>
      <van-field
        v-model="mobile"
        required
        name="mobile"
        v-validate="'required'"
        :error-message="errors.first('mobile') "
        clearable
        label="手机号码"
        placeholder="请输入手机号码"
      />
      <van-field
        v-model="code"
        required
        name="code"
        v-validate="'required'"
        :error-message="errors.first('code')"
        label="验证码"
        placeholder="请输入验证码"
      />
    </van-cell-group>
    <!-- 底部登录按钮 -->
    <div class="login-btn">
      <van-button type="info" :loading="isLoading" loading-text="加载中..." size="large" @click="tologin">登录</van-button>
    </div>
  </div>
</template>

<script>

//导入请求函数
import { doLogin } from '@/api/login.js'
//导入store 
import store from '@/store/index.js'
export default {
  data() {
    return {
      mobile: '18888888888',
      code: '246810',
      //登录按钮加载事件loading
      isLoading:false,
    }
  },
  methods: {
    async tologin() {
      this.isLoading=true
      let valid = await this.$validator.validate()
      if (valid) {
        // 通过规则验证,则发送请求
       try {
          let res = await doLogin({
          mobile: this.mobile,
          code: this.code
        });
        // console.log(res)
        //将数据保存到localStorage中
        this.$store.commit('setUser', res)
        //跳转到首页
        this.$router.push('/home')
       } catch (error) {
         //如果try里面的代码有错误就执行这里的代码
         //提示用户登录失败
         this.$toast.fail('登录失败');
       }
      }
     this.isLoading=false
    },
    setRules() {
      const dict = {
        custom: {
          mobile: {
            required: '请输入手机号码'
          },
          code: {
            required: '请收入验证码'
          }
        }
      }
      this.$validator.localize('zh_CN', dict)
    }
  },
  mounted() {
    this.setRules()
  }
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