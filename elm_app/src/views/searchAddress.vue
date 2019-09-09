<template>
  <div class="searchAddress">
    <header>
      <span @click="$router.back(-1)">&lt;</span>
      <span class="fc">添加地址</span>
    </header>
    <form class="search_box">
      <input class="ipt"
             type="text"
             placeholder="请输入小区/写字楼/学校等">
      <button>搜索</button>
    </form>
    <div class="empty_tips">
      <p>找不到地址？</p>
      <p>尝试输入小区、写字楼或学校名</p>
      <p>详细地址（如门牌号等）可稍后输入哦</p>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.searchAddress {
  width: 100%;
  min-height: 15rem;
  background-color: #fff;
  position: absolute;
  left: 0;
  top: 0;
}
.search1 {
  margin-top: 1rem;
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
header span:first-of-type {
  margin-left: 0.2rem;
}
.ipt {
  font-size: 0.3rem;
  color: #999;
  background-color: #f1f1f1;
  margin-left: 0.2rem;
  margin-top: 1.2rem;
  height: 0.6rem;
  border: none;
  border-radius: 0.15rem;
  padding: 0 0.4rem;
}
.search_box button {
  font-size: 0.3rem;
  color: #fff;
  background-color: #3190e8;
  border-radius: 0.1rem;
  padding: 0 0.4rem;
  margin-left: 0.2rem;
  height: 0.6rem;
}
.empty_tips {
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  transform: translate(-50%, -50%);
  width: 100%;
}
</style>
