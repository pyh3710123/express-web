<script setup>
import { ref } from 'vue'
import http from "../api/index.js";
defineProps({

})

const count = ref(0)
const onsubmit = () =>{
  console.log(111)
  const res = http.post('user/register',{
    username:'zhsdsdww',
    email:"359328740@qq.com",
    password:'make52013'
  })
  console.log(res,'xxx')
}
</script>

<template>
  <div class="section-container">
      <div class="login-box">
        <div class="user-name form-item">
          <span>用户名</span>
          <div><input type="text"></div>
        </div>
        <div class="user-password form-item">
          <span>密码</span>
          <div><input type="password"></div>
        </div>
        <div class="submit" @click="onsubmit()">登录</div>
      </div>
  </div>
</template>

<style scoped>
.section-container {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #888;
  position: absolute;
  top: 80px;
  left: 200px;
  bottom: 0;
  right: 0;
}
.login-box{
  width: 600px;
  height: 450px;
  background: #f9f9f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .form-item{
    display: flex;
    margin-top: 20px;
    & span{
      width: 80px;
    }
  }
  .submit{
    margin-top: 50px;
    color: white;
    cursor:pointer;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    border-radius: 25px;
    background: transparent linear-gradient(90deg, #624AFF 0%, #9646EF 100%) 0% 0% no-repeat padding-box;
  }
  & input{
    height: 30px;
    width: 180px;
    background: white;
    border: 1px solid #eeeeee;
    outline: 1px solid #2288ee;;
    color: #1a1a1a;
  }
}
</style>
