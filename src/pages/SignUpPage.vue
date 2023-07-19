<template>
  <div class="signup-container">
    <div class="signup-inner">
      <div class="signup-title">Sign up</div>
      <div class="signup-main">
        <Input size="large" placeholder="User name" @input="(v) => (userName = v)"></Input>
        <InputPassword
          size="large"
          placeholder="Password"
          @input="(v) => (password = v)"
        ></InputPassword>
        <InputPassword
          size="large"
          style="margin-bottom: 32px"
          placeholder="Confirm Password"
          @input="(v) => (confirmPassword = v)"
        ></InputPassword>
        <Button :loading="loading" @click="handleSignUp" long size="large" type="primary"
          >Sign up</Button
        >
        <Link href="/signup" style="width: fit-content">Already have an account? Go to signup!</Link>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Message } from '@arco-design/web-vue'
import { Input, InputPassword, Link, Button } from '@arco-design/web-vue'
import axios from 'axios'
import { ref } from 'vue'

const userName = ref('')
const password = ref('')
const confirmPassword = ref('')
const loading = ref(false)

const handleSignUp = () => {
  if (password.value !== confirmPassword.value) {
    Message.error('两次输入的密码不同')
    return
  }
  if (password.value === '' || confirmPassword.value === '' || userName.value === '') {
    Message.error('用户名或密码不能为空')
    return
  }
  loading.value = true
  axios
    .post('https://3c2j8wuzvg.us.aircode.run/signup', {
      userName: userName.value,
      password: password.value
    })
    .then((res) => {
      loading.value = false
      if (res.data.err_code !== 0) {
        Message.error(res.data.message)
      } else {
        Message.success('注册成功，即将跳转到登录页面')
        setTimeout(() => (location.href = '/signup'), 2000)
      }
    })
}
</script>

<style lang="less">
.signup {
  &-icon {
    margin-right: 8px;
  }
  &-container {
    width: 100vw;
    height: calc(100vh - var(--header-height));
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-inner {
    width: 100%;
    max-width: 420px;
    padding: 0 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &-title {
    height: 56px;
    line-height: 56px;
    font-size: 48px;
    font-weight: 600;
    margin-bottom: 32px;
  }
  &-main {
    width: 100%;
    margin-bottom: 96px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    &-divider {
      height: 8px;
      width: 100%;
      position: relative;

      display: flex;
      align-items: center;
      justify-content: center;
      > div {
        height: 1px;
        width: 100%;
        margin-top: 2px;
        position: absolute;
        background-color: var(--color-border);
      }
      > span {
        z-index: 1;
        background-color: white;
        padding: 0 8px;
        font-size: 12px;
        color: var(--color-text-3);
        font-weight: 500;
      }
    }
  }
  &-others {
    height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
}
</style>
