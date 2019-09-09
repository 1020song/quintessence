<template>
  <div class="confirmOrder">
    <elmHead>
      <template v-slot:left>
        <router-link :to="{name:'search'}">&lt;</router-link>
      </template>
      <template v-slot:center>确认订单</template>
      <template v-slot:right
                v-if="!isbtnlogin">
        <router-link :to="{name:'login'}"
                     class="login">登录/注册</router-link>
      </template>
      <template v-slot:right
                v-else-if="isbtnlogin">
        <router-link :to="{name:'users'}"
                     class="login"><i class="iconfont">&#xe602;</i></router-link>
      </template>
    </elmHead>
    <div class="add_address">
      <router-link :to="{path:'/about/confirmOrder/chooseaddress'}">
        <p>请添加一个收货地址 <span class="fr">&gt;</span></p>
      </router-link>
    </div>
    <div class="deliveryTime">
      <p>送达时间</p>
      <div class="quickly">
        <p>尽快送达 | 预计 19:09</p>
        <p>蜂鸟专送</p>
      </div>
    </div>
    <div class="PayWay">
      <div class="PayWay_top clearfix">
        <span class="fl">支付方式</span>
        <span class="fr ccc">在线支付&nbsp;&nbsp; &gt;</span>
      </div>
      <div class="PayWay_bottom clearfix">
        <span class="fl ccc">红包</span>
        <span class="fr ccc">暂时只在饿了么APP中支持</span>
      </div>
    </div>
    <div class="detail">
      <div class="detail_one">
        <img src="">
        <span>效果演示</span>
      </div>
      <div class="detail_two clearfix">
        <span class="detail_two_l fl">123</span>
        <span class="detail_two_c fr">￥20</span>
        <span class="detail_two_r fr red cuo">×</span>
      </div>
      <div class="detail_five">
        <p>订单<span>￥7687</span></p>
        <p class="fr">待支付<span>￥7687</span></p>
      </div>
    </div>
    <div class="beizhu">
      <router-link to="/about/confirmOrder/kouwei">
        <p class="beizhu1">
          <span>定单备注</span>
          <span class="fr">口味、偏好等 &gt;</span>
        </p>
      </router-link>

      <router-link to="/about/confirmOrder/invoice">
        <p class="beizhu2">
          <span>发票抬头</span>
          <span class="fr">不需要开发票 &gt;</span>
        </p>
      </router-link>

    </div>
    <div class="footer"
         id="foot">
      <div class="footer_l fl">
        待支付￥<span>7687</span>
      </div>
      <div class="footer_r fr">确认下单</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import elmHead from '../components/head'
export default {
  components: {
    elmHead
  },
  data () {
    return {
      isbtnlogin: false,
      ff: ''
    }
  },
  mounted () {
    this.f = document.querySelector('#foot')
    this.f.style.display = 'block'
  },
  created () {
    if (localStorage.user) {
      this.isbtnlogin = true
    } else {
      this.isbtnlogin = false
    }
  }
}
</script>
<style scoped>
.confirmOrder {
  padding-top: 1rem;
}
.detail_two .red {
  color: #f60;
  margin-right: 0.3rem;
  font-weight: 400;
  line-height: 0.8rem;
}
.ccc {
  color: #aaa;
}
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

.confirmOrder {
  background-color: #f5f5f5;
  padding-bottom: 1rem;
}
header {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  background: #3190e8;
  color: #fff;
}
.headIcon {
  margin-right: 0.2rem;
  font-size: 0.3rem;
}
.h_left {
  margin-left: 0.2rem;
}
.h_center {
  font-size: 0.3rem;
  margin-left: 36%;
}
.add_address {
  width: 100%;
  height: 1rem;
  border-bottom: 2px dashed #f5f5f5;
  background: #fff;
}
.add_address p {
  height: 1rem;
  line-height: 1rem;
  padding-left: 0.2rem;
  box-sizing: border-box;
}
.add_address p span {
  margin-right: 0.2rem;
  color: #999;
}
.deliveryTime {
  background-color: white;
  margin-top: 0.3rem;
  border-left: 0.1rem solid #3190e8;
  min-height: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.2rem;
}
.deliveryTime p {
  font-size: 0.3rem;
  color: #333;
  font-weight: 700;
  padding-left: 0.3rem;
}
.quickly {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.quickly p:first-of-type {
  font-size: 0.26rem;
  color: #3190e8;
  margin-right: 0.1rem;
  font-weight: 400;
}
.quickly p:nth-of-type(2) {
  font-size: 0.2rem;
  color: #fff;
  background-color: #3190e8;
  width: 1.2rem;
  margin-top: 0.05rem;
  margin-right: 0.3rem;
  text-align: center;
  padding: 0rem;
}
.PayWay {
  margin-top: 0.2rem;
  background-color: white;
}
.PayWay_top,
.PayWay_bottom {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  padding: 0 0.2rem;
  border-bottom: 1px solid #f5f5f5;
}
.PayWay_top span,
.PayWay_bottom span {
  font-size: 0.26rem;
}
.detail {
  background-color: white;
  margin-top: 0.2rem;
}
.detail_one,
.detail_two,
.detail_three,
.detail_four,
.detail_five {
  border-bottom: 1px solid #f5f5f5;
}
.detail_one {
  height: 1.2rem;
  padding-top: 0.2rem;
  padding-left: 0.2rem;
}
.detail_one img {
  width: 0.6rem;
  height: 0.6rem;
  border: 1px solid;
  vertical-align: middle;
}
.detail_one span {
  font-size: 0.3rem;
  vertical-align: middle;
  margin-left: 0.2rem;
  color: #333;
}
.detail_two {
  padding: 0 0.2rem;
  vertical-align: middle;
  height: 0.8rem;
  line-height: 0.8rem;
  margin-bottom: 0.1rem;
  font-size: 0.24rem;
}
.detail_two span {
  font-size: 0.24rem;
  color: #666;
}
/* .cuo {
  margin-top: -0.1rem;
} */
.detail_two_l,
.detail_two_c,
.detail_two_r {
  font-size: 0.3rem;
}
.detail_three {
  background-color: white;
  height: 1rem;
  padding: 0.2rem;
  margin-top: -0.08rem;
}
.detail_three span {
  font-size: 0.3rem;
}
.detail_four {
  background-color: white;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
}
.detail_four span {
  font-size: 0.3rem;
}
.detail_five {
  background-color: white;
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
}
.detail_five > p {
  font-size: 0.24rem;
  display: inline-block;
  line-height: 1rem;
  color: #666;
}
.detail_five > p > span {
  font-size: 0.24rem;
  color: #666;
}
.detail_five > p:first-of-type span {
  margin-left: 0.2rem;
}
.detail_five > p:last-of-type {
  color: #f60;
}
.detail_five > p:last-of-type span {
  color: #f60;
  margin-left: 0.2rem;
}
.toPay {
  height: 1.2rem;
  line-height: 0.3rem;
  position: relative;
}
.toPay span {
  font-size: 0.3rem;
}
.yuan {
  position: absolute;
  top: 0.4rem;
  right: 0.08rem;
}
.beizhu {
  height: 2rem;
  background-color: #fff;
  margin-top: 0.3rem;
}
.beizhu1,
.beizhu2 {
  height: 1rem;
  line-height: 1rem;
  padding: 0 0.2rem;
  border-bottom: 1px solid #f5f5f5;
  color: #666;
}
.beizhu1 span,
.beizhu2 span {
  font-size: 0.24rem;
}
.beizhu1 span:last-of-type,
.beizhu2 span:last-of-type {
  color: #aaa;
}
.footer {
  width: 100%;
  height: 1rem;
  line-height: 1rem;
}
.footer_l {
  width: 70%;
  height: 1rem;
  color: #fff;
  font-size: 0.3rem;
  background-color: #3c3c3c;
}
.footer_r {
  width: 30%;
  height: 1rem;
  color: #fff;
  font-size: 0.3rem;
  background-color: #56d176;
}
</style>
