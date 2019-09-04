<template>
  <div>
    <elmHead>
      <template v-slot:left>
        <router-link to="/about/user/add">&lt;</router-link>
      </template>
      <template v-slot:center>新增地址</template>
      <template v-slot:right></template>
    </elmHead>
    <div class="content">
      <div>
        <input type="text" placeholder="请填写你的姓名" v-model="user_s.users" @input="update_dta">
      </div>
      <div>
        <router-link to="/about/user/adds/addss">
          <input type="text" placeholder="小区/写字楼/学校等" v-model="user_s.add_ress" @input="update_dta">
        </router-link>
      </div>
      <div>
        <input type="text" placeholder="请填写详细送餐地址" v-model="user_s.add_d" @input="update_dta">
      </div>
      <div>
        <input type="text" placeholder="请填写能够联系到您的手机号" v-model="user_s.user_number" @input="update_dta">
      </div>
      <div>
        <input type="text" placeholder="备用联系电话（选填）" v-model="user_s.snumber" @input="update_dta">
      </div>
    </div>
    <button @click="add">新增地址</button>
    <router-view></router-view>
  </div>
</template>

<script>
import elmHead from "../components/head";
export default {
  components: {
    elmHead
  },
  data() {
      return {
          user_s:{
              users:'',
              add_d:'',
              user_number:'',
              snumber:'',
              add_ress:''
          },
          uid:''
      }
  },
  created() {
    this.user_s.add_ress=this.$route.params.name
    localStorage.add_ress=this.user_s.add_ress
    console.log(this.user_s.add_ress)
    if(localStorage.user_s){
      this.user_s.users=JSON.parse(localStorage.user_s).users
      this.user_s.add_d=JSON.parse(localStorage.user_s).add_d
      this.user_s.user_number=JSON.parse(localStorage.user_s).user_number
      this.user_s.snumber=JSON.parse(localStorage.user_s).snumber
    }
  },
  methods: {
    update_dta(){
      localStorage.user_s=JSON.stringify(this.user_s)
    },
      add(){
          this.$axios.post('https://elm.cangdu.org/v1/users/:user_id/addresses',{
                user_id:localStorage.uid,
                address:this.user_s.add_ress,    	
                address_detail:this.user_s.add_d,     	 
                name:this.users,	   
                phone:this.user_s.user_number,   		
                phone_bk:this.user_s.snumber	  		
          })
          .then(data=>{
              console.log(data);
          })
      }
  },
};
</script>
<style scoped>
.content {
  width: 100%;
  background-color: #fff;
  margin-top: 1.2rem;
  padding-top: 0.15rem;
}
.content div {
  width: 100%;
  padding-bottom: 0.15rem;
  background: #fff;
}
.content div input {
  display: block;
  width: 6rem;
  font-size: 0.2rem;
  margin: 0 auto;
  padding: 0.15rem;
  background: #f2f2f2;
  border: 1px solid #ddd;
  border-radius: 0.07rem;
}
button {
  width: 95%;
  height: 0.6rem;
  margin: 0.3rem 0.16rem;
  background: #4cd964;
  border-radius: 0.05rem;
  border: none;
  color: #fff;
  font-size: 0.3rem;
}
</style>
