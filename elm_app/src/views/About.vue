<template>
  <div class="about">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
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