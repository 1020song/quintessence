<template>
    <div class="search">
        <elmHead>
            <template v-slot:left><router-link to="/about/seach">&lt;</router-link></template>
            <template v-slot:center>搜索</template>
            <template v-slot:right v-if="!isbtnlogin"><router-link to="/login" class="login">登录/注册</router-link></template>
            <template v-slot:right v-else-if="isbtnlogin"><router-link to="/about/user" class="login"><i class="iconfont">&#xe602;</i></router-link></template>
        </elmHead>
        <div class="search_box">
            <!-- <form action="#"> -->
                <input type="search" class="search_input" placeholder="请输入商家或美食名称"/>
                <button class="search_button" @click="btnClick">提交</button>
            <!-- </form> -->
        </div>
        <div class="search_history">
          <h3>搜索历史</h3>
          <ul>
            <li></li>
          </ul>
        </div>
        <elmfoot num=1></elmfoot>
    </div>
</template>

<script>
import elmfoot from './foot'
import elmHead from './head'
export default {
  name: 'seach',
  components:{
      elmHead,
      elmfoot,
  },
  data () {
    return {
      isbtnlogin:false,
    }
  },
  created () {
    if(localStorage.user){
        this.isbtnlogin = true 
    }else{
        this.isbtnlogin = false
    
    }
    // fetch('https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基')
    //   .then(response => response.json())
    //   .then(res => {
    //     console.log(res)
    //   })
  },
  methods: {
    btnClick () {
      // fetch('/v1/cities?type=guess')
      //   .then(response => response.json())
      //   .then(res => {
      //     console.log(res)
      //   })
      this.axios.get('v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基').then((res) => {
        console.log(res);
        
      })
    }
  }

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.search{
    width: 6.4rem;
    padding-top: 1rem;
    min-height: 10rem;
    background-color: #f5f5f5;
}
.search_box{
    width: 6.4rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    background-color: white;
}
.search_input{
    width: 4.5rem;
    height: 0.6rem;
    border: .025rem solid #e4e4e4;
    font-size: .24rem;
    color: #333;
    border-radius: 0.06rem;
    background-color: #f2f2f2;
    font-weight: 500;
    padding: 0 .25rem;
    vertical-align: top;
    outline: none;
    margin-left: 0.15rem;
    font-weight: 700;
}
.search_button{
    width: 1.5rem;
    height: 0.6rem;
    line-height: 0.5rem;
    border: .025rem solid #3190e8;
    margin-left: .1rem;
    font-size: .3rem;
    color: #fff;
    border-radius: .06rem;
    background-color: #3190e8;
    font-weight: 500;
    vertical-align: top;
}
.search_history{
  width: 6.4rem;
}
.search_history h3{
  padding-left: 0.2rem;
}
.search_history ul{
  width: 100%;
  background-color: #fff;
}
.search_history ul li{
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.1rem;
  background-color: #fff;
  padding-left: 0.2rem;
}
</style>
