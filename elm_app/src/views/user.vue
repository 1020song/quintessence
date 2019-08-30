<template>
  <div class="user">
    <div class="contain">
      <!-- 个人资料/信息 -->
      <div class="ziliao">
            <dl>
         <router-link to="/balance">
              <dt><span class="orange">0.00</span> 元</dt>
              <dd>我的余额</dd>
         </router-link>
            </dl>
            <dl>
          <router-link to="discounts">
              <dt><span class="red">0</span> 个</dt>
              <dd>我的优惠</dd>
          </router-link>
            </dl>
            <dl>
          <router-link to="integral">
              <dt><span class="green">0</span> 分</dt>
              <dd>我的积分</dd>
          </router-link>
            </dl>
        </div>
        <!-- 服务 -->
        <div class="fuwu">
          <div class="item">
            <router-link to="order"><li><i class="iconfont icon-dingdan"></i>我的订单<span class="f-r">></span></li></router-link>
          <router-link to="integral"><li><i class="iconfont icon-baobao"></i>积分商城<span class="f-r">></span></li></router-link>
          <router-link to="vip"><li><i class="iconfont icon-fuwu"></i>饿了么会员卡<span class="f-r">></span></li></router-link>
          </div>
          <div class="item">
            <router-link to="service"><li><i class="iconfont icon-vip"></i>服务中心<span class="f-r">></span></li></router-link>
          <router-link to="app"><li><i class="iconfont icon-changyonglogo40"></i>下载饿了么APP<span class="f-r">></span></li></router-link>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import user from '../css/user.css'

export default {
  
}
</script>
