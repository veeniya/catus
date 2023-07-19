<template>
  <div class="login-container">
    <div class="login-inner">
        <div class="login-title">Login</div>
        <div class="login-main">
            <Button @click="handleClickGithub" long size="large">
                <IconGitHub></IconGitHub>Login with GitHub
            </Button>
            <Button type="primary" long size="large"><IconGoogle></IconGoogle>Login with Google</Button>
            <div class="login-main-divider">
                <div></div>
                <span>or</span>
            </div>
            <div class="login-others">
                <Button icon-only shape="circle"><IconWeChat></IconWeChat></Button>
                <Button icon-only shape="circle"></Button>
                <Button icon-only shape="circle"></Button>
                <Button icon-only shape="circle"></Button>
            </div>
            <Button type="outline" long size="large"><IconMail></IconMail>Login with Email</Button>
            <Button type="outline" long size="large"><IconTelephone></IconTelephone>Login with phone number</Button>
            <Button type="outline" @click="handleClickCount">Count</Button>
            <div>{{ num }}</div>
        </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { Button } from '@arco-design/web-vue'
import { ref } from 'vue'
import { IconGitHub, IconGoogle,IconMail, IconTelephone, IconWeChat } from '../icons'

const handleClickGithub = () => {
    console.log('You clicked the GitHub button')    
}

let num = ref(0)
const handleClickCount = () => {
    console.log(num.value)
    num.value++
    
}

</script>

<style lang="less">
.login{
    &-container{
        width:100vw;
        height: calc(100vh - var(--header-height));
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    &-inner{
        width: 100%;
        max-width: 420px;
        padding: 0 16px;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    &-title{
        height: 56px;
        line-height: 56px;
        font-size: 48px;
        font-weight: 600;
        margin-bottom: 32px;
    }
    &-main{
        width: 100%;
        margin-bottom: 96px;

        display: flex;
        flex-direction: column;
        gap: 12px;
        &-divider{
            height: 8px;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            > div{
                height: 1px;
                width: 100%;
                margin-top: 2px;
                position: absolute;
                background-color: var(--color-border);
            }
            > span{
                z-index:1;
                background-color: white;
                padding: 0 8px;
                font-size: 12px;
                color:var(--color-text-3);
                font-weight:500;
            }
        }
    }
    &-others{
        height:40px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
}
// 定制GitHub的Button样式
.githun-btn{
    background-color: var(--color-text-1);
    border-color:var(--color-text-1);
    color:var(--color-bg-1);
    &:hover{
        background-color: var(--color-text-2);
        border-color: var(--color-text-2);
        color: var(--color-bg-1);
    }
    &:active{
        background-color: var(--color-text-1);
        border-color:var(--color-text-1);
        color: var(--color-bg-1);
    }
}
</style>
