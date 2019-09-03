<template >
  <div>
    <elmHead>
      <template v-slot:left>
        <router-link to="/about/user/info">&lt;</router-link>
      </template>
      <template v-slot:center>编辑地址</template>
      <template v-slot:right>编辑</template>
    </elmHead>
    <div class="content">
        <!-- <ul>
            <li>
                <div>
                    <p>姓名</p>
                    <p>手机号</p>
                </div>
                <div>
                    <span>X</span>
                </div>
            </li>
        </ul> -->
        <div class="addsite">
            <router-link to="/about/user/adds" class="r">
                <span>新增地址</span>
                <span class="c">></span>
            </router-link>
        </div>
    </div>
  </div>
</template>
<script>
import elmHead from "../components/head";
export default {
  components: {
    elmHead
  }
};
</script>
<style scoped>
*{
    list-style: none;
}
.content{
    width: 100%;
    margin-top: 1rem;
    border-top:1px solid #ccc;
    border-bottom:1px solid #ccc;  
}
.content ul li{
    padding: 0.15rem;
    display: flex;
    border-bottom:1px solid #ccc; 
    background: #fff8c3;
    justify-content: space-between;
    margin: 0.2rem 0;
}
.addsite{
    margin-top: .2rem;
    background: #fff;
    padding: .15rem .15rem;
    border-top: 1px solid #d9d9d9;
    display: flex;
    justify-content: space-between;
}
.r{
    width: 100%;
    
}
.r span{
    font-size: 0.3rem;
}
.c{
    color: #ccc;
    float: right;
}
</style>