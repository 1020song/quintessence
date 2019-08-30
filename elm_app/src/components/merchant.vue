<template>
    <div class="head">
        <div class="img fl">
            <slot name='left'></slot>
        </div>
        <div class="con fl">
            <slot name='center'></slot>
        </div>
        <div class="num fr">
            <slot name='right'></slot>
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
    .head{
        width: 6.4rem;
        height: 2rem;
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
        background-color: red;
        margin-right: .2rem;
    }
    .con{
        width: 3.3rem;
        height: 1rem;
        background-color: blue;
    }
    .num{
        width: 1.4rem;
        height: 1rem;
        background-color: pink;
    }

</style>