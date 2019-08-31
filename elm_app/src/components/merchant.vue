<template>
    <div class="head">
        <div class="img fl">
            <slot name='left'>
                <div>
                   <img src="" alt=""> 
                </div>
            </slot>
        </div>
        <div class="con fl">
            <slot name='center'>
                <div class="top">
                    <span class="pinpai">
                        <slot name="pinpai">品牌</slot>
                    </span>
                    <span class="oName">
                        <slot name="oName">效果演示</slot>
                    </span>
                </div>
                <div class="center">
                    <span class="star">
                        <slot name="star">11111</slot>
                    </span>
                    <span class="num1">
                        <slot name="num1">5.0</slot>
                    </span>
                    <span class="sell">
                        <slot name="sell">月售111单</slot>
                    </span>
                </div>
                <div class="bottom">
                    <span class="send">
                        <slot name="send">￥20起送</slot> / 
                    </span>
                    <span class="fee">
                        <slot name="fee">配送费越￥2</slot>
                    </span>
                </div>
                
            </slot>
        </div>
        <div class="num fr">
            <slot name='right'>
                <div class="plan1">
                    <span class="plan">
                        <slot name="plan">保准票</slot>
                    </span>
                </div>
                
                <div class="give">
                    <span class="feng">
                        <slot name="feng">蜂鸟专送</slot>
                    </span>
                    <span class="zhun">
                        <slot name="zhun">准时答</slot>
                    </span>
                </div>
                <div class="time">
                    <span class="km">
                        <slot name="km">10公里</slot> / 
                    </span>
                    <span class="minute">
                        <slot name="minute">20分钟</slot>
                    </span>
                </div>
            </slot>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>


<style scoped>

    *{
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .give{
        height: .5rem;
        margin-top: -0.7rem;
    }
    .time{
        height: .5rem;
    }
    .minute{
        color: lightblue;
        font-size: .1rem;
    }
    .km{
        font-size: .1rem;
        color: #ccc;
    }
    .zhun{
        padding: 0.05rem .05rem;
        border:1px solid lightblue;
        color: lightblue;
        font-size: .1rem;
    }
    .feng{
        padding: 0.05rem .1rem;
        background-color: lightblue;
        color: white;
        font-size: 0.05rem;
    }
    .plan{
        font-size: .1rem;
        color: rgb(122, 117, 117);
        /* height: .5rem; */
        display: inline-block;
        border: 1px solid #ccc;
    }
    .top{
        height: .5rem;
        width: 3.3rem;
        margin-top: -0.7rem;
    }
    .center{
         height: .5rem;
          width: 3.3rem;
    }
    .bottom{
        height: .5rem;
         width: 3.3rem;
    }
    .fee{
         font-size: .1rem;
        color: #ccc;

    }
    .send{
         font-size: .1rem;
        color: #ccc;
    }
    .sell{
        font-size: .1rem;
        color: #ccc;
    }
    .num1{
        font-size: .1rem;
        color: orange;
        margin-right: .05rem;
    }
    .star{
        font-size: .1rem;
         margin-right: .05rem;
    }
    .head{
        width: 6.4rem;
        height: 2.2rem;
        border-bottom:1px solid #ccc;
        padding: .5rem .2rem;
        box-sizing: border-box;
    }
    .fl{
        float: left;
    }
    .fr{
        float: right;
    }
    .img{
        width: 1rem;
        height: 1rem;
        margin-right: .2rem;
    }
    .img img{
        width: 1rem;
        height: 1rem;
    }
    .con{
        width: 2.7rem;
        height: 1.5rem;
        white-space: nowrap; /* 1.强制在同一行内显示所有文本，直到文本结束或者遭遇br标签才换行 （一般不会使用 br 标签）*/
        overflow: hidden; /* 2.超出的部分 隐藏 */
        text-overflow: ellipsis; /*3. 溢出的部分用省略号替代 */

    }
    .num{
        width: 2rem;
        height: 1.5rem;
        text-align: right;
        margin-top: -0.7rem;
    }

    .pinpai{
        padding: 0.05rem 0.1rem;
        font-size: .12rem;
        background-color: yellow;
        border-radius: .05rem;
    }
    .oName{
        font-size: .1rem;
        white-space: nowrap; /* 1.强制在同一行内显示所有文本，直到文本结束或者遭遇br标签才换行 （一般不会使用 br 标签）*/
        overflow: hidden; /* 2.超出的部分 隐藏 */
        text-overflow: ellipsis; /*3. 溢出的部分用省略号替代 */
    }

</style>