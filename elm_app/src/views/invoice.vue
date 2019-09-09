<template>
  <div class="invoice">
    <header>
      <router-link to="/about/confirmOrder">
        <span class="fl">&lt;</span>
      </router-link>
      <span class="order">订单备注</span>
    </header>
    <section class="choose_invoice">
      <span>不需要开发票</span>
      <input type="radio">

    </section>

    <router-link to="/about/confirmOrder">
      <div class="determine">确定</div>
    </router-link>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.circle {
}
.fl {
  float: left;
}
.fr {
  float: right;
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
.invoice {
  width: 100%;
  min-height: 15rem;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 111;
}
header {
  height: 1rem;
  line-height: 1rem;
  background-color: #3190e8;
  padding-left: 0.2rem;
  font-size: 0.24rem;
}
header span {
  color: #fff;
  font-weight: 500;
}
.order {
  margin-left: 35%;
}
.determine {
  background-color: #4cd964;
  font-size: 0.3rem;
  color: #fff;
  text-align: center;
  margin: 0.2rem 0.7rem 0 0.7rem;
  line-height: 0.8rem;
  border-radius: 0.2rem;
}
.choose_invoice {
  padding-left: 0.2rem;
  vertical-align: middle;
}
.choose_invoice input {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
</style>
