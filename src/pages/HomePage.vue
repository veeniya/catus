<template>
    <div class="login-container">
      <div class="login-inner">
        <div class="login-title">Send a message</div>
        <div class="login-main">
          <Input
            size="large"
            :value="message"
            @input="(v) => (message = v)"
            placeholder="Enter some message"
          ></Input>
          <Button :loading="loginLoading" @click="handleSend" long size="large" type="primary"
            >Send</Button
          >
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { Input,  Button } from '@arco-design/web-vue'
  import { ref } from 'vue'

  import { io } from "socket.io-client"

  const socket = io("ws://122.51.87.251:3000")
  
  const message = ref('')
  const loginLoading = ref(false)

  socket.on("answer",(params) => console.log(params)
  )
  
  const handleSend = () => {
    // loginLoading.value = true
    socket.emit("howdy",message.value)
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
  