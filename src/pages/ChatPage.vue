<template>
    <div class="chat-root">
      <div class="chat-user-list">userList</div>
      <div class="chat-message-list">
        <div class="chat-message-list-main">
          <Comment
            :class="`${item.align}`"
            v-for="item in list"
            :key="item.id"
            :author="item.author"
            :content="item.content"
          >
            <template #avatar>
              <Avatar
                :style="{ backgroundColor: `${item.align === 'left' ? '#14a9f8' : '#00d0b6'}` }"
                >{{ item.avatar }}</Avatar
              >
            </template>
          </Comment>
        </div>
        <div class="chat-input-container">
          <Input v-model:model-value="currMessage" size="large"></Input>
          <Button @click="handleSendMessage" size="large" type="primary">Send</Button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { Input, Button, Comment, Avatar } from '@arco-design/web-vue'
  import { ref, reactive } from 'vue'
  
  const currMessage = ref('')
  let curr_id = 4
  // 使用 reactive 创建响应式对象
  const state = reactive({
    list: [
      { author: 'gl', avatar: 'GL', content: 'Item 1', id: 1, align: 'left' },
      { author: 'gl', avatar: 'GL', content: 'Item 2', id: 2, align: 'left' },
      { author: 'gl', avatar: 'GL', content: 'Item 3', id: 3, align: 'left' }
    ]
  })
  
  const list = state.list
  
  const handleSendMessage = () => {
    list.push({
      author: '威妮',
      avatar: '威妮',
      id: curr_id,
      content: currMessage.value,
      align: 'right'
    })
    currMessage.value = ''
    curr_id++
  }
  </script>
  <style lang="less">
  .chat {
    &-root {
      height: calc(100vh - var(--header-height));
      width: 100vw;
      display: flex;
      flex: 1;
    }
    &-user-list {
      width: 280px;
      height: 100%;
      border-right: 1px solid var(--color-border);
    }
    &-message-list {
      width: 100%;
      &-main {
        width: 100%;
        height: calc(100vh - var(--header-height) - 64px);
        border-bottom: 1px solid var(--color-border);
        padding: 12px;
      }
    }
    &-input-container {
      height: 64px;
      width: 100%;
      display: flex;
      gap: 12px;
      padding: 12px;
    }
  }
  </style>
  