<template>
  <div class="about">
    <div class="footer">
        <router-link to="/about/Takeaway" @click.native="num=0" class="link">
            <i class="iconfont" :class="{active:num==0}">&#xe603;</i>
            <p>外卖</p>
        </router-link>
        <router-link @click.native="num=1" to="/about/seach" class="link">
            <i class="iconfont" :class="{active:num==1}">&#xe600;</i>
            <p>搜索</p>
        </router-link>
        <router-link to="/about/Order" @click.native="num=2" class="link">
            <i class="iconfont" :class="{active:num==2}">&#xe601;</i>
            <p>订单</p>
        </router-link>
        <router-link to="/about/user" @click.native="num=3" class="link">
            <i class="iconfont" :class="{active:num==3}">&#xe602;</i>
            <p>我的</p>
        </router-link>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
    export default {
        name: 'home',
        data(){
            return{
                num:0
            }
        },
    }
</script>
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
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -0.02667rem 0.05333rem rgba(0,0,0,.1);
    font-size: 0.2rem;
    padding: 0.05rem 0;
  }
  .active{
      color: rgb(49, 144, 232);
  }
  .footer .iconfont{
      font-size: 0.4rem;
  }
  .link{
    text-decoration: none;
    display: inline-block;
    width: 25%;
    color: #666;
    font-size:0.2rem;
  }
</style>
