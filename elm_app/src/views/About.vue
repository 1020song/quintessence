<template>
  <div class="about">
    <elmHead left='1' center='2' right='3'></elmHead>
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