<template>
  <div class="header-container">
    <div class="header-inner">
      <div @click="goHome" class="header-left">Logo</div>
      <div class="header-right">
        <Button type="text">Docs</Button>
        <Button type="text" style="margin-right: 8px">Lang</Button>
        <Button @click="jumpToLogin" type="primary">Sign up</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Button } from '@arco-design/web-vue'

const goHome = () => (document.location.href = '/')
const jumpToLogin = () => (document.location.href = '/login')
</script>

<style lang="less">
.header {
  &-container {
    width: 100vw;
    height: var(--header-height);
    box-sizing: border-box;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &-inner {
    width: 100%;
    max-width: 1440px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &-right {
    display: flex;
    gap: 8px;
    padding-right: 16px;
  }
  &-left {
    display: flex;
    padding-left: 16px;
    align-items: center;
    height: 100%;

    cursor: pointer;
  }
}
</style>
