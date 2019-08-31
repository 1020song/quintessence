<template>
    <div>
        <elmHead>
            <template v-slot:left><router-link to="/about/seach"><i class="iconfont">&#xe600;</i></router-link></template>
            <template v-slot:center><router-link to="/">长宁区北新泾明基商...</router-link></template>
            <template v-slot:right>登录/注册</template>
        </elmHead>
        <elmBanner>
        </elmBanner>

        <div class="fujin">
           <i class="iconfont">&#xe603;</i>
           <span>附近商家</span>
        </div>

        <merchant v-for="(i,index) in list" :key="index">
            
            <template v-slot:left>
                <img :src="'https://elm.cangdu.org/img/'+i.image_path" alt="">
            </template>
            <template v-slot:center>
                <div class="top">
                    <span class="pinpai">
                        <template name="pinpai">品牌</template>
                    </span>
                    <span class="oName">
                        <template name="oName">{{i.name}}</template>
                    </span>
                </div>
                <div class="center">
                    <span class="star">
                        <template name="star">11111</template>
                    </span>
                    <span class="num1">
                        <template name="num1">{{i.rating}}</template>
                    </span>
                    <span class="sell">
                        <template name="sell">月售{{i.rating_count}}单</template>
                    </span>
                </div>
                <div class="bottom">
                    <span class="send">
                        <template name="send">￥{{i.float_minimum_order_amount}}起送</template> / 
                    </span>
                    <span class="fee">
                        <template name="fee">{{i.piecewise_agent_fee.tips}}</template>
                    </span>
                </div>
            </template>
            <template v-slot:right>
                <div class="plan1">
                    <div class="planbox">
                        <div class="plan" v-for="(j,ind) in arr" :key="ind">
                            <template name="plan">{{j.icon_name}}</template>
                        </div>
                    </div>
                </div>
                <div class="give">
                    <div class="givebox">
                        <span class="feng">
                            <template name="feng">{{i.delivery_mode.text}}</template>
                        </span>
                        <span class="zhun">
                            <template name="zhun">准时答</template>
                        </span>
                    </div>
                </div>
                <div class="time">
                    <div class="timebox">
                        <span class="km">
                            <template name="km">{{i.distance}}</template> / 
                        </span>
                        <span class="minute">
                            <template name="minute">{{i.order_lead_time}}</template>
                        </span>
                    </div>
                </div>
            </template>
        </merchant>
    </div>
</template>

<script>
import elmHead from './head'
import merchant from './merchant'
import elmBanner from './Banner'
    export default {
        name: "Takeaway",
        components:{
            elmBanner,
            merchant,
            elmHead
        },
        data(){
            return{
                list:'',
                arr:''
                }
        },
        created(){
            fetch('https://elm.cangdu.org/shopping/restaurants?latitude=31.22967&longitude=121.4762').then(response=>response.json()).then(res=>{
               console.log(res);
               console.log(res[0].supports)
               this.list = res;
               this.arr = res[0].supports
            })
        },
    }
</script>

<style scoped>
    .fujin{
        padding: 0 .24rem;
        background: #fff;
        line-height: 0.6rem;
        border-top: 0.14rem solid #eee;
    }
    .fujin span{
        font-size: .24rem;
        color: rgb(107, 101, 101);
    }

    .fujin i{
        font-size: .24rem;
        margin-right: 0.14rem;
        color: rgb(107, 101, 101);
    }
</style>