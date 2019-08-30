<template>
  <div class="about">
    <elmHead>
      <template v-slot:left>&lt;</template>
      <template v-slot:center></template>
      <template v-slot:right v-if="!isbtnlogin"><router-link to="/login" class="login">登录/注册</router-link></template>
      <template v-slot:right v-else-if="isbtnlogin"><router-link to="/login" class="login"><i class="iconfont">&#xe602;</i></router-link></template>
    </elmHead>
    <elmfoot></elmfoot>
  </div>
</template>
<script>
import elmHead from '../components/head'
import elmfoot from '../components/foot'
export default {
  components:{
    elmHead:elmHead,
    elmfoot,
    name:'about'
  },
  data() {
    return {
      isbtnlogin:false,
    }
  },
}
</script>
<style scoped>
  .login{
    color: #fff;
    text-decoration: none;
  }
</style>