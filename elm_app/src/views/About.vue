<template>
  <div class="about">
    <elmHead>
      <template v-slot:left>&lt;</template>
      <template v-slot:center></template>
      <template v-slot:right>登录/注册</template>
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
}
</script>