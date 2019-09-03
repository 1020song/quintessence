<template>
  <div>
    <elmHead>
      <template v-slot:left>
        <router-link to="/about/user/info">&lt;</router-link>
      </template>
      <template v-slot:center>修改用户名</template>
      <template v-slot:right></template>
    </elmHead>
    <div class="set_user">
      <input type="text" placeholder="请输入用户名" v-model="set_user">
      <p>用户名只能修改一次（5-24字符之间）</p>
      <button @click="setuser">确认修改</button>
    </div>
  </div>
</template>
<script>
import elmHead from "../components/head";
export default {
  name: "setusername",
  components: {
    elmHead
  },
  data() {
    return {
      set_user: ""
    };
  },
  methods: {
    setuser() {
      this.$axios.get("https://elm.cangdu.org/v1/user").then(data => {
        data.data.username = this.set_user;
        localStorage.user = this.set_user
      });
      history.go(-1);
    }
  }
};
</script>
<style scoped>
.set_user {
  width: 100%;
  height: auto;
  margin-top: 1rem;
}
.set_user input {
  width: 95%;
  height: 0.7rem;
  font-size: 0.3rem;
  margin: 0.1rem 0.15rem;
  border: 1px solid #ccc;
  text-indent: 0.2rem;
}
.set_user p {
  padding: 0.1rem 0.2rem 0.2rem;
}
.set_user button {
  width: 95%;
  height: 0.8rem;
  margin: 0.1rem 0.15rem;
  border: 0;
  background-color: #3199e8;
  color: #fff;
  font-size: 0.25rem;
}
</style>
