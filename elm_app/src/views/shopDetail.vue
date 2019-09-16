<template>
    <div>
      <elmhead>
        <template v-slot:left><router-link to="/shop" class="lt">&lt;</router-link></template>
        <template v-slot:center>商家详情</template>
        <template v-slot:right></template>
      </elmhead>
      <div class="contain">
        <div class="activ">
          <h3>活动与属性</h3>
          <p v-if="arr" v-for="i in arr">
            <span class="color">{{i.icon_name}}</span><span>{{i.description}}</span><span>(APP专享)</span>
          </p>
          <p v-for="i in list.supports">
            <span class="color">{{i.icon_name}}</span><span>{{i.description}}</span><span>(APP专享)</span>
          </p>
        </div>
        <div class="Safety">
          <router-link to="">食品监督安全公示<span>企业认证详情</span></router-link>
          <div>
            <div><i class="iconfont filu" :class="{active:!list.status}" >{{list.status?'&#xe64d;':'&#xe619;'}}</i></div>
            <div>
              <p>监督检查结果：<span  class="filu" :class="{active:!list.status}">{{list.status?'良好':'差'}}</span></p>
              <p>检查日期：</p>
            </div>
          </div>
        </div>
        <div class="info">
          <h3>商家信息</h3>
          <p>{{list.name}}</p>
          <p>地址：{{list.address}}</p>
          <p>营业时间：{{list.opening_hours[0]}}</p>
          <p @click="type=true">营业执照<span style="float: right">&gt;</span></p>
          <p @click="type=true">餐饮服务许可证<span style="float: right">&gt;</span></p>
        </div>
        <div class="license" v-if="type" @click="type=false">
          <img :src="'https://elm.cangdu.org/img/'+list.image_path" alt="">
        </div>
      </div>
    </div>
</template>
<script>
  import elmhead from '../components/head'
    export default {
        name: "s_assess",
        components:{
            elmhead,
        },
        data(){
          return{
              list:{},
              arr:[],
              type:false
          }
        },
        created() {
            this.list=this.$route.params.detail
            this.arr = this.$route.params.detail.activities
            console.log(this.list)
        }
    }
</script>

<style scoped>
.contain{
  padding: 0 .2rem;
  padding-top: 1rem;
}
.license{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.5);
  z-index: 101;
}
p span{
  font-size: .2rem;
}
.iconfont{
  font-size: 1rem;
}
.filu{
  color: rgb(126, 211, 33);
}
.active{
  color: rgb(208, 2, 27);
}
</style>
