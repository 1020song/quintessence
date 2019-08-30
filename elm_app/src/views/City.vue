<template>
  <div class="about">
    <elmHead>
      <template v-slot:left><router-link to='/'>&lt;</router-link></template>
      <template v-slot:center>{{city}}</template>
      <template v-slot:right>切换城市</template>
    </elmHead>
    <!-- <div class="header">
        <span><router-link to='/'><</router-link></span>
        {{city}}
        <span><router-link to='/'>切换城市</router-link></span>
    </div> -->
    <div class="con">
      <div class="no1">
          <div class="intbox">
            <input type="text" placeholder="输入学校、商务楼、地址" v-model="txt">
            <button @click="tijiao">提交</button>
          </div>
      </div>
      <div class="list">
        <!-- <p>搜索历史</p> -->
        <ul>
          <li v-for="(i,$index) in list" :key="$index">
            <router-link to='/page1'>{{i.name}}<br><span>{{i.address}}</span></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import elmHead from '../components/head'
export default {
  components:{
    elmHead:elmHead,
  },
  data(){
    return{
      city:'',
      txt:'',
      list:''
    }
  },
  created(){
    fetch('http://elm.cangdu.org/v1/cities/'+this.$route.params.id).then(response=>response.json()).then(res=>{
        this.city=res.name
      })
  },
  methods:{
    tijiao(){
      fetch("http://elm.cangdu.org/v1/pois?type=search&city_id="+this.$route.params.id+"&keyword="+this.txt).then(response=>response.json()).then(res=>{
        this.list=res
      })
    }
  }
}
</script>
<style scoped>
a{
  text-decoration: none;
  color: #fff;
}
  .header {
    text-align: center;
    color: #fff;
    font-size: 0.36rem;
  background: #3190e8;
  background-color: #3190e8;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  padding: 0 0.16rem;
  line-height: 0.8rem;
}
.header span{
    font-size:0.26rem;
    color: #fff;
    float: left;
  }
  .header span a{
    color: #fff;
    text-decoration: none;
  }
  .header span:nth-of-type(2){
    float: right
  }
  .no1{
     border-bottom: 2px solid #e4e4e4;
    border-top: 1px solid #e4e4e4;
  }
  .intbox{
    width: 80%;
    margin: 0 auto;
    padding-top: 0.8rem;
    overflow: hidden;
    padding-bottom: 0.2rem;
  }
  .intbox input{
    width: 100%;
    height: 0.5rem;
    border: 1px solid #ccc;
    outline: none;
    float: left;
    margin: 0 auto;
    margin: 0.2rem 0;
    text-indent: 0.16rem;
  }
  .intbox button{
    width: 100%;
    height: 0.5rem;
   background-color: #3190e8;
   font-size: 0.3rem;
   border: none;
   float: left;
   outline: none;
  }
  .list p{
    font-size: 0.18rem;
    line-height: 0.4rem;
    text-indent: 0.16rem;
    border-bottom: #eee solid 2px;
  }
  .list ul li{
    /* height: 0.8rem; */
    line-height: 0.4rem;
    border-bottom: 0.01rem solid #ccc;
    font-size: 0.28rem;
    padding: 0.16rem;
  }
  .list ul li span{
    color: #999;
    font-size: 0.23rem;
  }
  .list ul li a{
    text-decoration: none;
    color: #333;
  }
</style>
