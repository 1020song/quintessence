<template>
    <div>
        <elmHead>
            <template v-slot:left><router-link to="/about/seach">&lt;</router-link></template>
            <template v-slot:center>订单列表</template>
            <template v-slot:right v-if="!isbtnlogin"><router-link to="/login" class="login">登录/注册</router-link></template>
            <template v-slot:right v-else-if="isbtnlogin"><router-link to="/about/user" class="login"><i class="iconfont">&#xe602;</i></router-link></template>
        </elmHead>
        <elmfoot num=2></elmfoot>
    </div>
</template>

<script>
    import elmfoot from './foot'
    import elmHead from './head'
    export default {
        name: "Order",
        components:{
            elmHead,
            elmfoot,
        },
        data(){
            return{
                isbtnlogin:false,
            }
        },
        created(){
            if(localStorage.user){
                this.isbtnlogin = true 
            }else{
                this.isbtnlogin = false
            
            }
        }
    }
</script>

<style scoped>

</style>