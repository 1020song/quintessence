<template>
  <div>
    <div class="contain">
      <elmHead>
          <template v-slot:left><router-link to="/about/seach">&lt;</router-link></template>
          <template v-slot:center>我的</template>
          <template v-slot:right></template>
      </elmHead>
      <div class="lz_info" @click="info">
        <router-link to="/about/user/info" class="lz_info_a">
        <img :src="info_img" alt="">
        <div class="lz_info_user">
          <p>{{info_user}}</p>
          <p>
            <span class="iconfont" style="margin-right:0.1rem">&#xe68a;</span>
            <span>暂无绑定手机号</span>
            </p>
        </div>
        <span style="float:right;margin-top:0.2rem;color:#fff;">&gt;</span>
        </router-link>
      </div>
      <!-- 个人资料/信息 -->
      <div class="ziliao">
            <dl>
         <router-link to="/balance">
              <dt><span class="orange">0.00</span>元</dt>
              <dd>我的余额</dd>
         </router-link>
            </dl>
            <dl>
          <router-link to="discounts">
              <dt><span class="red">0</span>个</dt>
              <dd>我的优惠</dd>
          </router-link>
            </dl>
            <dl>
          <router-link to="integral">
              <dt><span class="green">0</span>分</dt>
              <dd>我的积分</dd>
          </router-link>
            </dl>
        </div>
        <!-- 服务 -->
        <div class="fuwu">
          <div class="item">
            <router-link to="order">
              <li>
                <i class="iconfont icon-dingdan"></i>
                <p>
                  我的订单<span class="f-r">></span>
                </p>
              </li>
            </router-link>
          <router-link to="integral">
            <li>
              <i class="iconfont icon-baobao"></i>
              <p>积分商城<span class="f-r">></span></p>
            </li>
          </router-link>
          <router-link to="vip">
            <li>
              <i class="iconfont icon-fuwu"></i>
              <p>饿了么会员卡<span class="f-r">></span></p>
            </li>
          </router-link>
          </div>
          <div class="item">
            <router-link to="/service">
            <li>
              <i class="iconfont icon-vip"></i>
              <p>服务中心<span class="f-r">></span></p>
            </li>
          </router-link>
          <router-link to="app">
            <li>
              <i class="iconfont icon-changyonglogo40"></i>
              <p>下载饿了么APP<span class="f-r">></span></p>
            </li>
          </router-link>
          </div>
        </div>
        <elmfoot num=3></elmfoot>
    </div>
  </div>
</template>
<script>
import user from '../css/user.css'
import elmfoot from '../components/foot'
import elmHead from '../components/head'
export default {
  components:{
    elmfoot,
    elmHead
  },
  data() {
    return {
      info_img:'',
      info_user:''
    }
  },
  created() {
    this.info()
  },
  methods: {
    info(){
      this.$axios.get('https://elm.cangdu.org/v1/user')
      .then(data=>{
        this.info_img = '//elm.cangdu.org/img/'+data.data.avatar
        this.info_user = data.data.username
      })
    }
  },
}
</script>
