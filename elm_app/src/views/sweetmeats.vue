<template>
	<div>
		<elmHead>
            <template v-slot:left><router-link  :to='{path:"/about/Takeaway", query: {geohash: geohash}}'>&lt;</router-link></template>
            <template v-slot:center>甜品饮品</template>
            <template v-slot:right></template>
		</elmHead>

        <div>
            <ul class="list">
                <li>
                    <div>
                        <span>甜品饮品</span> 
                        <svg data-v-6cc1fce6="" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon data-v-6cc1fce6="" points="0,3 10,3 5,8"></polygon>
                        </svg>
                    </div>
                    
                </li>
                <li>
                    <div>
                        <span>排序</span>
                        <svg data-v-6cc1fce6="" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon data-v-6cc1fce6="" points="0,3 10,3 5,8"></polygon>
                        </svg>
                    </div>
                    
                </li>
                <li>
                    <div>
                        <span>筛选</span>
                        <svg data-v-6cc1fce6="" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" class="sort_icon">
                        <polygon data-v-6cc1fce6="" points="0,3 10,3 5,8"></polygon>
                        </svg>
                    </div>
                    
                </li>
            </ul>
        </div>
	</div>
</template>
<script>
import elmHead from '../components/head'
export default {
	components:{
		elmHead:elmHead
    },
    data () {
        return {
        geohash:''
        }
    },
    created () {
        this.geohash = localStorage.geohash
    }
}
</script>


<style scoped>

    .list{
        height: 0.8rem;
        background-color: #fff;
        margin-top: 1rem;
    }
    .list li{
        float: left;
        width: 33%;
        text-align: center;
        line-height: 0.4rem;
         padding: .2rem 0;
    }
    .list li div{
        width: 100%;
        text-align: center;
        height: .5rem;
        border-right: .025rem solid #e4e4e4;
    }
    .list li:last-child div{
        border-right:none;
    }
     .list li span{
         font-size: .25rem;
     }
    
</style>