<template>
  <div class="choose">
    <router-link to="/about/confirmOrder">
      <header>
        <span class="zuo">&lt;</span>
        <span class="fc">选择地址</span>
      </header>
    </router-link>
    <div class="newAddress">
      <span @click="toNewAddress()">新增收货地址</span>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      f: ''
    }
  },
  created () {
    // console.log(this.$router)
  },
  methods: {
    toNewAddress () {
      this.$router.push({ path: '/about/confirmOrder/chooseaddress/addaddress' })
    }
  },
  mounted () {
    this.f = document.querySelector('#foot')
    this.f.style.display = 'none'
  }
}
</script>

<style scoped>
.choose {
  width: 100%;
  min-height: 15rem;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
}
.zuo {
  margin-left: 0.2rem;
}
header {
  background-color: #3190e8;
  position: fixed;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  color: #fff;
  z-index: 100;
}
.newAddress {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 1rem;
}

.newAddress span {
  color: #3190e8;
  text-align: center;
  display: block;
}
</style>

<style>
* {
  margin: 0;
  padding: 0;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.fc {
  margin-left: 30%;
}
.clearfix {
  zoom: 1;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
</style>
