<template>
  <div class="login-container">
    <div class="login-inner">
      <div class="login-title">Login</div>
      <div class="login-main">
        <Input
          size="large"
          :value="userName"
          @input="(v) => (userName = v)"
          placeholder="User name"
        ></Input>
        <InputPassword
          size="large"
          style="margin-bottom: 32px"
          placeholder="Password"
          @input="(v) => (password = v)"
        ></InputPassword>
        <Button :loading="loginLoading" @click="handleLogin" long size="large" type="primary"
          >Login</Button
        >
        <Link href="/signup" style="width: fit-content"
          >Do not have an account? click here to sign up!</Link
        >
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
const loginLoading = ref(false)

const handleLogin = () => {
  loginLoading.value = true
  axios
    .post('https://3c2j8wuzvg.us.aircode.run/login', {
      userName: userName.value,
      password: password.value
    })
    .then((res) => {
      loginLoading.value = false
      if (res.data.err_code !== 0) {
        Message.error('用户名或密码错误')
      } else {
        Message.success('登录成功，即将跳转')
      }
    })
}
</script>

<style lang="less">
.login {
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
    align-items: flex-end;
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
// 定制 GitHub 的 Button 样式
.github-btn {
  background-color: var(--color-text-1) !important;
  border-color: var(--color-text-1) !important;
  color: var(--color-bg-1) !important;
  &:hover {
    background-color: var(--color-text-2) !important;
    border-color: var(--color-text-2) !important;
    color: var(--color-bg-1) !important;
  }
  &:active {
    background-color: var(--color-text-1) !important;
    border-color: var(--color-text-1) !important;
    color: var(--color-bg-1) !important;
  }
}
</style>
