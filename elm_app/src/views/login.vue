<template>
  <div>
    <div class="header">
      <div class="r">
        <router-link to class="color"><</router-link>
      </div>
      <div class="pass">密码登录</div>
    </div>
    <div class="container">
      <div>
        <input type="text" v-model="user" placeholder="账号">
      </div>
      <div>
        <input type="password" placeholder="密码" v-model="password">
      </div>
      <div>
        <input type="text" placeholder="验证码" v-model="Verify">
          <img :src="yanUrl" class="img">
        <span @click="random" style="cursor:pointer">换一个</span>
      </div>
      <p>温馨提示：未注册过的账号，登录时将自动注册</p>
      <p>注册过的用户可凭账号密码登录</p>
      <button @click="login">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      user: "",
      password: "",
      Verify: "",
      randoms: "",
      yanUrl: ""
    };
  },
  created() {
    this.random();
  },
  methods: {
    login() {
      this.$http
        .post(
          "http://elm.cangdu.org/v2/login",

          {
            username: this.user,
            password: this.password,
            captcha_code: this.Verify
          },
          {
            headers: {
              "Content-Type": "application/json"
            }
          },
          { emulateJSON: true }
        )
        .then(data => {
          console.log(data);
        });
    },
    random() {
      this.$http.post("http://elm.cangdu.org/v1/captchas").then(data => {
        this.yanUrl = data.data.code;
        console.log(data);
        
      });
    }
  }
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  text-decoration: none;
}
input {
  border: none;
  outline: none;
  color: #ccc;
  font-size: 20px;
  
}
.header {
  width: 100%;
  height: 50px;
  background-color: #3190e8;
  line-height: 50px;
}
.r {
  float: left;
  margin-left: 10px;
}
.color {
  color: #fff;
  font-size: 20px;
}
.pass {
  text-align: center;
  color: #fff;
  font-size: 20px;
}
.container {
  margin-top: 10px;
}
.container div {
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  line-height: 50px;
  text-indent: 1rem;
}
.container p{
  color: red;
  font-size: 15px;
  margin: 10px;
}
.container span {
  margin: 10px;
}
.img{
  display: inline-block; 
  vertical-align: middle;
}
.container button{
    width: 90%;
    height: 50px;
    background-color: #4cd964; 
    border: 1px;
    border-radius:5px; 
    padding: 5px 5px;
    margin: 5px 20px;
    color: #fff;
    text-align: center;
}
</style>