<template>
  <div>
<<<<<<< HEAD
   <div @click="mulit"><div class="icon"><i class="iconfont">&#xe604;</i><span><slot name="num"></slot></span></div></div>
=======
   <div><div class="icon"><i class="iconfont">&#xe604;</i><span><slot name="num"></slot></span></div></div>
>>>>>>> 2fc187d18a4a90cb29d4f4c7594a7c2e1beffaa7
    <div class="shop_price"><div ><slot name="price"></slot><p style="color: #fff">配送费￥5</p></div></div>
    <div><slot name="pick_up"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "shop_cart",
        data(){
            return{
                num:0
            }
        },
<<<<<<< HEAD
        methods:{
            mulit(){
                this.$emit('type')
            }
        }
=======
>>>>>>> 2fc187d18a4a90cb29d4f4c7594a7c2e1beffaa7
    }
</script>

<style scoped>
 .shop_price{
  position: absolute;
  top: 0;
  left: 1.7rem;
   color: #fff;
}
.icon{
  position: absolute;
  top: -.3rem;
  left: .2rem;
  background: #3d3d3f;
  border: solid .05rem #444;
  border-radius: 50%;
  padding: .1rem;
}
.shop_cart .iconfont{
  width: .7em;
  height: .7em;
  font-size: .8rem;
  color: #fff;
}

</style>
