<template>
    <div class="list">
      <div class="shop_container">
          <div class="head"  v-show="!type">
          <div>
              <!--头部-->
              <router-link :to="{path:'/about/Takeaway',query:{geohash: addrs.split(',')[0]+','+ addrs.split(',')[1]}}" class="back_Takeaway">&lt;</router-link>
              <div class="head_tit">
                <div class="tit_img">
                  <img :src="'https://elm.cangdu.org/img/'+img_path" alt="">
                </div>
                <div class="tit_info">
                   <h3 class="text" style="color: #fff">{{list.name}}</h3>
                  <p>商家配送／分钟送达／配送费¥5</p>
                  <p>公告：{{list.promotion_info}}</p>
                </div>
              </div>
            </div>
            <span style="width: 100%;" v-if="arr.length">
              <span class="name">{{arr[0].icon_name}}
              </span>{{arr[0].description}}<span style="margin-left: .1rem;">(APP专享)
            </span><span @click="type=true" style="float: right;font-size: .24rem">{{arr.length}}个活动&gt;</span></span>
            <router-link :to="{name:'shopDetail',params:{detail:list}}" class="shopDetail">&gt;</router-link>
          </div>
        <div class="bg min" :class="{max:arr.length}" v-show="!type">
          <img :src="'https://elm.cangdu.org/img/'+img_path" alt="">
        </div>
        <div class="doing" v-show="type">
          <!--活动-->
          <h3>{{list.name}}</h3>
          <div>
            <h3>优惠信息</h3>
            <p v-for="(i,index) in arr" :key="index">
              <span class="name">{{i.icon_name}}</span>
              <span>{{i.description}}</span>
              <span style="margin-left: .1rem;">(APP专享)</span>
            </p>
          </div>
          <div>
            <h3>商家公告</h3>
            <p>{{list.promotion_info}}</p>
          </div>
          <p @click="type=false" style="position:absolute;bottom:10%;left:45%;font-size:.4rem;padding: .1rem .18rem;text-align:center;border:.01rem solid white;border-radius:50%">&#10006;</p>
        </div>
        <!-- Tab切换 -->
        <div class="change_show" v-show="!type">
          <div><span @click="num=0" :class="{activity_show:num==0}">商品</span></div>
          <div><span @click="num=1" :class="{activity_show:num==1}">评价</span></div>
        </div>
        <div class="food_container" v-show="num==0" v-if="!type"><!--  商品 -->
          <ul class="menu_left"> <!--左导航-->
            <li v-for="(i,index) in show_list" :class="{bor_active:num1==index}" style="padding-left: .1rem;position: relative"  @click="num1=index" :key="index">
              <a :href="'#'+index">{{i.name}}</a>
              <span v-show="i.num" class="l_num">{{i.num}}</span>
            </li>
          </ul>
          <!-- 右导航 -->
          <ul class="menu_right">
            <li v-for="(i,index) in show_list" :id="index" :key="index">
              <p class="tit" style="position: relative">
                <span class="rexiao">{{i.name}}</span>
                <i style="margin-left: .2rem;">{{i.description}}</i>
                <i @click="titType=!titType" style="margin-left: .9rem;font-size: .3rem;display: inline-block">···</i>
                <span v-show="titType" class="tit_name">
                <span class="rexiao">{{i.name}}</span>
                <i style="margin-left: .2rem;">{{i.description}}</i>
                </span>
              </p>
              <div v-for="(j,idx) in i.foods" class="menu_detail_list" :key="idx">
                <div class="menu_detail_link">
                  <p class="menu_food_img">
                    <img :src="'https://elm.cangdu.org/img/'+j.image_path" alt="" style="width: 1rem;height: 1rem;">
                  </p>
                  <div class="menu_food_description">
                    <h4>{{j.name}}</h4>
                    <p style="color: #999;margin-bottom:.1rem ; ">{{j.description}}</p>
                    <p style="margin-bottom: .1rem"><span>{{j.tips.split(' ')[1]}}</span><span style="margin-left: .1rem">好评率{{j.satisfy_rate}}%</span></p>
                    <p v-if="obj[idx]"><span class="border">{{obj[idx].image_text}}</span></p>
                  </div>
                </div>
                <div v-if="obj1[idx]" style="height: 0;">
                  <div v-for="(k,index) in obj1[idx]" :key="index">
                      <p style="height: .1rem;" v-for="(l,index) in k" :key="index">
                        <span :class="{left_top:l=='新'}"><span class="asle">{{l=='新'?'新品':''}}</span></span>
                        <span :class="{zhpai:l=='招牌'}">{{l=='招牌'?'招牌':''}}</span>
                      </p>
                  </div>
                </div>
                <!-- 价格 -->
                <div class="menu_detail_footer">
                  <p class="food_price"><span>￥</span><span style="font-size: .35rem">{{j.specfoods[0].price}}</span><span style="padding-left: .1rem;color: #666;">{{j.specfoods.length>1?'起':''}}</span></p>
                  <shopbtn v-if="!j.specfoods[1]">
                    <template v-slot:jia><div @click="jia(j,i)">+</div></template>
                    <template v-slot:num v-if="j.num">{{j.num}}</template>
                    <template v-slot:jian v-if="j.num"><div :class="{btn_jn:j.num>0}" @click="jian(j,i)">-</div></template>
                  </shopbtn>
                  <div class="r_btn" v-if="j.specfoods[1]"  @click="btn(j)">选规格</div>
                </div>
              </div>
            </li>
          </ul>
          <!--   选规格     -->
          <div class="norm" v-show="normtype">
            <h3>{{norm_data.name}}<span @click="back">×</span></h3>
            <p>规格</p>
            <div v-for="(i,idnex) in norm_data.specfoods" :key="idnex">
              <span @click="index(idnex)">{{i.specs_name}}</span>
            </div>
            <p v-if="norm_data">
              <span> {{num2==0?norm_data.specfoods[0].price:norm_data.specfoods[1].price}}</span>
              <span @click="shca">加入购物车</span>
            </p>
          </div>
        </div>

        <shopcart v-show="num==0" v-if="!type" class="shop_cart" :class="{shop_none:g_num}">
          <template  v-slot:num v-if="g_num"><div :class="{num_bg:price>0}"><span :class="{num:g_num}">{{g_num}}</span></div></template>
          <template v-slot:price>￥{{price}}.00</template>
          <template v-slot:pick_up><div :class="{pick_bg:g_num>0}"><span class="pick_up">{{price?'去结算':'还差￥20起送'}}</span></div></template>
        </shopcart>
        
        <div v-show="num==1"><!-- 评价 -->
            <div class="rating_header">
              <div class="rating_header_left">
                <p>4.7</p>
                <p>综合评价</p>
                <p>高于周边商家76.9%</p>
              </div>
              <div class="rating_header_right">
                <p>
                  <span>服务态度</span>
                  <!-- 评价小星星 -->
                  <!-- <div class="rating_container"></div> -->
                  <span class="rating_num">4.7</span>
                </p>
                <p>
                  <span>菜品评价</span>
                  <!-- 评价小星星 -->
                  <!-- <div class="rating_container"></div> -->
                  <span class="rating_num">4.8</span>
                </p>
                <p>
                  <span>送达时间</span>
                  <!-- 评价小星星 -->
                  <span class="delivery_time">分钟</span>
                </p>
              </div>
            </div>
            <!-- 评价按钮 -->
            <ul class="tag_list_ul">
              <li v-for="(i,$index) in PJbtn" :key="$index" @click="PJbtns=$index" :class="{tagActivity:$index==PJbtns}">{{i}}</li>
            </ul>
            <!-- 用户评价 -->
            <ul class="rating_list_ul">
              <li class="rating_list_li">
                <img src="" class="user_avatar" alt="">
                <div class="rating_list_details">
                  <header>
                    <div class="username_star">
                      <p class="username"></p>
                      <p class="star_desc"></p>
                    </div>
                    <div class="rated_at"></div>
                  </header>
                  <ul class="food_img_ul">
                    <li><img src="" alt=""></li>
                  </ul>
                  <ul class="food_name_ul">
                    <li class="ellipsis"></li>
                  </ul>
                </div>
              </li>
            </ul>
        </div>
      </div>
    </div>
</template>
<style scoped>

.tag_list_ul li{
    font-size: .25rem;
    color: #6d7885;
    padding: .02rem .1rem;
    background-color: #ebf5ff;
    border-radius: .1rem;
    border: 1px;
    line-height: .7rem;
    margin: 0 .2rem .1rem 0;
}
.tag_list_ul .tagActivity{
    background-color: #3190e8;
    color: #fff;
}
.tag_list_ul{
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: .2rem;
}
.delivery_time{
    font-size: .2rem;
    color: #999;
}
.rating_num{
    width: 1.5rem;
    font-size: .2rem;
    color: #f60;
}
.rating_container{
    flex: 1;
    overflow-y: hidden;
    flex-direction: column;
}
.rating_header_right p span:first-of-type {
    color: #666;
    margin-right: .2rem;
}
.rating_header_right p span{
  font-size: .2rem
}
.rating_header_right p{
    font-size: .3rem;
    line-height: .5rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.rating_header_right { 
    flex: 4;
}
.rating_header_left p:nth-of-type(3) {
    font-size: .2rem;
    color: #999;
}
.rating_header_left p:nth-of-type(2){
      font-size: .3rem;
    color: #666;
    margin-bottom: .1rem;
}
.rating_header_left p:first-of-type {
    font-size: .6rem;
    color: #f60;
}
.rating_header {
    display: flex;
    background-color: #fff;
    padding: .1rem .11rem;
    margin-bottom: .11rem;
}
.rating_header_left {
    flex: 3;
    text-align: center;
}
</style>
<script>
    import shopbtn from '../components/shopbtn'
    import shopcart from '../views/shopcart'
    export default {
        name: "s_shop",
        components:{
            shopbtn,
            shopcart,
        },
        data(){
            return{
                num1:0,
                id:'',
                img_path:'',
                list:'',
                addrs:'',
                arr:[],
                type:false,
                titType:false,
                num:0,
                show_list:'',
                obj:[],
                obj1:[],
                price:0,
                shop_num:0,
                prenx:false,
                g_num:0,
                norm_data:'',
                normtype:false,
                num2:0,
                PJbtn:['全部(473)','满意(453)','不满意(20)','有图(2)','味道好(47)','送货快(32)','分量足(18)','包装精美(15)','干净卫生(15)','食材新鲜(15)','服务不错(11)'],
                PJbtns:0
            }
        },
        methods:{
            shca(){
                this.g_num++
            },
            back(){
                this.normtype = false
                this.num2 = 0
            },
            index(i){
                this.num2 = i
            },
            btn(q){
                this.normtype = true
                this.norm_data = q
            },
            jia(item,i){
                if (item.num>0){this.prenx =true}
                item.num++
                i.num++
                this.shop_num = item.num
                this.$set(item,item.num,this.shop_num)
                this.g_num = i.num
                this.price = i.num * item.specfoods[0].price
            },
            jian(item,i){
                if (item.num<=0){this.prenx =false}
                item.num--
                i.num--
                this.shop_num = item.num
                this.$set(item,item.num,this.shop_num)
                if (item.num <=0){item.num=0}
                if (i.num <=0){i.num=0}
                this.g_num = i.num
                this.price = i.num * item.specfoods[0].price
            },
        },
        created() {
            this.id = localStorage.id
            this.addrs = localStorage.geohash
            this.$axios(`https://elm.cangdu.org/shopping/restaurant/${this.id}`)
                .then(res=>{
                    this.img_path = res.data.image_path
                    this.list = res.data
                    this.arr = res.data.activities
                })
            this.$axios('https://elm.cangdu.org/shopping/v2/menu?restaurant_id='+this.id+'')
                .then(res=>{
                    this.show_list = res.data
                    this.show_list.forEach(item=>{
                        item.num=0
                            item.foods.forEach(item1=>{
                            item1.num=0
                            for (var i in item1){
                                if(i=='activity'){
                                    this.obj.push(JSON.parse(JSON.stringify(item1[i])))
                                }
                                if (i=='attributes'){
                                    this.obj1.push(JSON.parse(JSON.stringify(item1[i])))
                                }
                            }
                        })
                    })
                })
        }
    }
</script>
<style scoped>
  .norm{
    width: 5rem;
    height: 5rem;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -2.5rem;
    margin-top: -2.5rem;
    background: #fff;
    z-index: 99;
  }
  .pick_bg{
    background: #4cd964;
  }
  .num_bg{
    background: #3190e8;
  }
  .shop_cart{
    position: absolute;
    background-color: #3d3d3f;
    bottom: 0;
    left: 0;
    height: 1rem;
    z-index: 24;
    display: -ms-flexbox;
    display: flex;
    width: 100%;
  }
  .pick_up{
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1rem;
    font-size: .3rem;
    text-align: center;
    color: #fff;
    background:  #535356;
    width: 2rem;
  }
  .shop_none{
    pointer-events: none;
  }
  .num{
    position: absolute;
    top: 0rem;
    right: 0;
    font-size: .2rem;
    background-color: #ff461d;
    text-align: center;
    border-radius: 50%;
    border: .025rem solid #ff461d;
    color: #fff;
    line-height: .2rem;
    padding: .02rem;
  }
  .l_num{
    line-height: .2rem;
    position: absolute;
    top: .05rem;
    right: .05rem;
    background-color: #ff461d;
    text-align: center;
    border-radius: 50%;
    border: .025rem solid #ff461d;
    font-size: .16rem;
    color: #fff;
    padding: .02rem;
  }
  .btn_jn{
    color: #3190e8;
    border: 1px solid #3190e8;
    line-height: 16px;
  }
  .list li{
    padding: 0;
  }
  *{
    padding: 0;
    margin: 0;
    list-style: none;
    font-style: normal;
    text-decoration: none;
    border: none;
    color: #333;
    font-weight: 400;
    font-family: Microsoft Yahei;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
  }
.food_container{
  overflow: hidden;
}
.menu_right{
  width: 76%;
  height: 8.73rem;
  box-sizing: border-box;
  overflow: scroll;
}
.menu_left{
  width: 24%;
  height: 8.73rem;
  overflow: scroll;
  box-sizing: border-box;
  float: left;
 }
.menu_left::-webkit-scrollbar { width: 0 !important }
.menu_right::-webkit-scrollbar { width: 0 !important }
.change_show{
  display: flex;
  background-color: #fff;
  padding: .2rem .6rem ;
  border-bottom: 1px solid #ebebeb
}
.change_show div{
  flex: 1;
  text-align: center
}
.change_show div .activity_show{
  color: #3190e8;
  border-color: #3190e8;
}
.change_show div span{
  color: #666;
  font-size: .3rem;
  padding: .1rem 0;
  border-bottom: .05rem solid #fff;
}
.shop_container{
  position: relative;
  height: auto;
}
.shopDetail{
  position: absolute;
  top: .7rem;
  right: .1rem;
  color: #fff;
  font-size: .2rem;
}
.doing h3{
   text-align: center;
}
.doing span{
  font-size: .2rem
}
.doing *{
  color: white;
}
.doing div{
  margin-bottom: .4rem;
  padding: 0 .4rem;
}
.doing{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.8);
  z-index: 20;
}
.back_Takeaway{
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  padding-left: 0.02rem;
  font-size: .3rem;
}
.head span{
  font-size: .2rem;
  color: #fff;
  display: inline-block;
}
.name{
  width: .3rem;
  height: .3rem;
  margin-right: .1rem;
  background-color: rgb(240, 115, 115);
  border-color: rgb(240, 115, 115);
  text-align: center;
}
.head{
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  z-index: 10;
  padding: .1rem;
  background: rgba(183,183,183,.8);
  overflow: hidden;
}
.tit_img{
  float: left;
}
.tit_img img{
  width: 1rem;
  height:1rem;
}
.tit_info{
  margin-left: 1.1rem;
}
.tit_info p{
  line-height: .3rem;
  color:#fff;
  font-size: .23rem;
}
.tit_info h3{
  line-height: .4rem;
  font-size: .25rem;
  font-weight: 700;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.bg{
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.min{
  height: 1.3rem;
}
.max{
  height: 1.7rem;
}
.bg img{
  width: 100%;
}
  .food_price{
    flex: 2;
    text-align: center;
  }
  .r_btn{
    height: .5rem;
    text-align: center;
    line-height: .5rem;
    background: #3b95e9;
    font-size: .2rem;
    border-radius: .1rem;
  }
  .tit_name{
    position: absolute;
    top: .5rem;
    right: .1rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    z-index: 1;
    background: #39373a;
  }
  .menu_right .tit_name span,.menu_right .tit_name i{
    color: #fff;
  }
  .menu_right .zhpai{
    position: absolute;
    top: 0;
    right: .15rem;
    color: rgb(240, 115, 115);
    border: solid 1px rgb(240, 115, 115);
    padding: .03rem;
    border-radius:.15rem;
    line-height: .2rem;
  }
  .menu_detail_footer{
    display: flex;
  }
  .menu_detail_footer p span{
    color: #f60;
    font-size: .2rem;
  }
  .bor_active{
    background: #fff;
    border-left: solid .03rem #3190e8;
  }
  .menu_food_description p .border{
    font-size: .1rem;
    height: .3rem;
    line-height: .3rem;
    padding: .03rem;
    border:solid .02rem rgb(240, 115, 115);
    border-radius: .15rem;
    color: rgb(240, 115, 115);
  }
  .menu_right .tit{
    padding: .15rem 0  .15rem .15rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
  }
  .menu_right .rexiao{
    font-size: .3rem;
    font-weight: 700;
  }
  .menu_right i{
    font-size: .2rem;
    color: #999;
  }
  .asle{
    position: absolute;
    bottom: 0;
    top: 58%;
    left: 45%;
    color: #fff;
  }
  .left_top{
    position: absolute;
    text-align: center;
    top: 0;
    left: 0;
    background-color: #4cd964;
    width: 1rem;
    height: 1rem;
    display: flex;
    align-items: flex-end;
    transform: rotate(-45deg) translate(-0.1rem,-.8rem);
    border: none;
    border-radius: 0;
  }
  .left_top p{
    font-size: .2rem;
    color: #fff;
    text-align: center;
    flex: 1;
    transform: scale(.8) translate(0,.2rem);
  }
  .menu_food_description p span{
    font-size: .2rem;
  }
  .menu_food_description *{
    line-height: .2rem;
  }
  .menu_food_description p{
    font-size: .15rem;
  }
  .menu_food_description h4{
    font-size: .2rem;
    color: #333;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    padding: .03rem 0;
  }
  .menu_food_img{
    margin-right: .4rem;
  }
  .menu_detail_link{
    display: flex;
  }
  .menu_detail_list{
    background-color: #fff;
    padding: .2rem .2rem;
    border-bottom: .01rem solid #f8f8f8;
    position: relative;
    overflow: hidden;
  }
  .menu_right span{
    font-size: .15rem;
  }
  .menu_right h3{
    width: 100%;
    position: relative;
    font-size: .3rem;
    display: flex;
    font-weight: 700;
    padding-left: .2rem;
    justify-content: space-between;
    align-items: center;
  }
  .menu_right{
    transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
    transition-duration: 0ms;
    transform: translate(0px, 0px) translateZ(0px);
  }
</style>
