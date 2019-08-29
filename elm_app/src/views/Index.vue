<template>
  <div class="home">
    <elmHead left='ele' right='登录/注册'></elmHead>
    <div class="con">
      <div class="no1">
        <div>
          <span>当前定位城市：</span>
          <span>定位不准时，请在城市列表中选择</span>
        </div>
        <div>
          <span >
            <router-link :to="/city/+id.id" style="color:#3190e8;font-size:0.23rem;text-decoration: none;">{{id.name}}</router-link>
          </span>
          <span>></span>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="no2">
        <h6>热门城市</h6>
      </div>
      <div class="hotbox">
          <ul>
            <li v-for="i in hot_city" :key='i.id' > <router-link :to="/city/+i.id">{{i.name}}</router-link></li>
          </ul>
      </div>
      <div class="hotbox1" v-for="(i,$key) in group_s" :key="i.id">
        <h6 v-if="$key=='A'">{{$key}} <span style="color:#ccc;">(按字母排序)</span></h6>
        <h6 v-else>{{$key}}</h6>
          <ul>
            <li v-for="j in i" :key='j.id' > <router-link :to="/city/+j.id">{{j.name}}</router-link></li>
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
      hot_city:'',
      group:'',
      id:''
    }
  },
  computed:{
    group_s () {
        var keys = Object.keys(this.group).sort();
          var newObj = {}  
          for(var i = 0; i < keys.length; i++){
              var index = keys[i];
              newObj[index] = this.group[index];  
          }  
    return newObj;
   }
  },
  created(){
    this.$http.get('http://elm.cangdu.org/v1/cities',{
      params:{
        type:"hot"
      }
    }).then((data)=>{
       this.hot_city=data.data
    })
    // fetch("http://elm.cangdu.org/v1/cities?type=hot").then(response=>response.json()).then(res=>{
    //   this.hot_city=res
    // })
    fetch("http://elm.cangdu.org/v1/cities?type=guess").then(response=>response.json()).then(res=>{
      this.id=res
    })
    fetch("http://elm.cangdu.org/v1/cities?type=group").then(response=>response.json()).then(res=>{
      this.group=res
    })
  }
}
</script>
<style scoped>
.home {
  width: 6.4rem;
  height: auto;
  background: #ccc;
}
.con{
    padding-top: 1rem;
    border-top: 1px solid #e4e4e4;
    background-color: #fff;
    background: #eee;
  }
  .con .no1{
    margin-bottom: 0.1rem;
    background:#fff;
  }
  .con .no1 div{
    line-height: 0.8rem;
    height: 0.8rem;
    padding: 0 0.16rem;
    
  }
  .con .no1 div:nth-of-type(1){
    border-bottom: 0.01rem solid #ccc;
  }
  .con .no1 div:nth-of-type(2){
  border-bottom: 2px solid #e4e4e4;
}
  .con .no1 div span{
    font-size:0.2rem;
    float: left;
  }
  .con .no1 div span:nth-of-type(2){
    float: right
  }
  .no2{
    margin-bottom: 0.2rem;
    background:#fff;
  }
  .no2 h6,.hotbox1 h6{
    font-size: 0.23rem;
    line-height: 0.6rem;
    padding: 0 0.16rem;
    font-weight: 400;
    background: #fff;
  }
  .hotbox ul,.hotbox1 ul{
    overflow: hidden;
    background:#fff;
  }
  .hotbox ul li,.hotbox1 ul li{
    width: 1.6rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    border: 0.01rem solid #ddd;
    font-size: 0.28rem;
    float: left;
    list-style: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .hotbox ul li a,.hotbox1 ul li a{
    text-decoration: none;
    color:#3190e8;
    font-size:0.23rem;
  }
  .hotbox1 ul li a{
    color: #333;
  }
  .hotbox1{
    margin-bottom: 0.1rem;
    margin-top: 0.2rem;
    border-top: 2px solid #ccc;
    border-bottom: 1px solid #ccc;
  }
</style>