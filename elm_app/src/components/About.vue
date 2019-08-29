<template>
  <div class="about">
    <div class="footer">
      <div>
        <i class="iconfont">&#xe603;</i>
        <router-link class="link" to="/about/Takeaway">外卖</router-link>
      </div>
     <div>
         <i class="iconfont font_2">&#xe600;</i>
       <router-link class="link" to="/about/seach">搜索</router-link>
     </div>
      <div>
          <i class="iconfont">&#xe601;</i>
        <router-link class="link" to="/about/Order">订单</router-link>
      </div>
    <div>
        <i class="iconfont font_4">&#xe602;</i>
      <router-link class="link" to="/about/mine">我的</router-link>
    </div>
    </div>
    <router-view></router-view>
  </div>

</template>
<style>
  *{
    margin: 0;
    padding: 0;
  }
  .footer{
    width: 100%;
    background: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
  }
  .footer div{
      width: 25%;
      float: left;
      font-size: 16px;
      height: 100%;
      padding: 2px 0;
  }
  .iconfont{
      font-size: 20px;
  }
  .font_2{
      color: rgb(49, 144, 232);
  }
  .footer .font_4{
      font-size: 22px;
  }
  .link{
    text-decoration: none;
    display: inline-block;
    width: 100%;
    color: #666;
      font-size: 12px;
  }
</style>