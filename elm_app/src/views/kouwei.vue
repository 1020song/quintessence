<template>
  <div class="kouwei">
    <header>
      <router-link to="/about/confirmOrder">
        <span class="fl">&lt;</span>
      </router-link>
      <span class="order">订单备注</span>
    </header>
    <div class="quickly_beizhu">
      <p>快速备注</p>
      <ul class="clearfix"
          id="list">
        <li>不要辣</li>
        <li>少点辣</li>
        <li>多点辣</li>
        <li>不要香菜</li>
        <li>不要洋葱</li>
        <li>多放醋</li>
        <li>多放葱</li>
        <li>去冰</li>
        <li>少冰</li>
      </ul>
    </div>
    <div class="other_beizhu">
      <p>快速备注</p>
      <textarea placeholder="请输入备注内容(可不填)"
                class="input_text"></textarea>
      <div class="determine">确定</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: ''
    }
  },
  mounted () {
    this.list = document.querySelectorAll('.list li')
    console.log(this.list)
  }
}
</script>
<style scoped>
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
.kouwei {
  background-color: #f5f5f5;
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
.kouwei {
  width: 100%;
  min-height: 15rem;
  background-color: #f5f5f5;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 110;
}
.order {
  margin-left: 35%;
}
.quickly_beizhu {
  background: #fff;
  margin-top: 0.2rem;
  padding-bottom: 0.5rem;
}
.quickly_beizhu p {
  padding-left: 0.2rem;
  font-size: 0.3rem;
}
.other_beizhu {
  background: #fff;
  margin-top: 0.2rem;
  padding-bottom: 0.5rem;
}
.other_beizhu p {
  padding-left: 0.2rem;
  font-size: 0.3rem;
}
.input_text {
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  background-color: #f9f9f9;
  border: 0.025rem solid #eee;
  resize: none;
  min-height: 2rem;
  border-radius: 0.2rem;
  font-size: 0.3rem;
  color: #666;
  outline: none;
  padding: 0.5rem;
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
.quickly_beizhu #list li {
  float: left;
  border-radius: 0.1rem;
  font-size: 0.3rem;
  padding: 0.1rem 0.2rem;
  margin: 0.2rem;
  border: 0.02rem solid #3190e8;
}
</style>
