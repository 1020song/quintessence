<template>
	<div>
		<elmHead>
		<template v-slot:left><router-link to="/about/user">&lt;</router-link></template>
		<template v-slot:center>我的余额</template>
		<template v-slot:right></template>
		</elmHead>
		<!-- 余额详情 -->
		<div class="nav">
			<div class="price">
				<span style="font-size:.2rem">当前余额</span>
				
				<router-link to="/balance/explain" style="float:right;color:blue"><i ></i> 余额说明</router-link>
				<p>
					<span style="font-size:.6rem;line-height:1.2rem">0.00</span>
					<span style="font-size:.3rem">元</span>
				</p>
				<router-link to="/">
					<div class="btns">
						提交
					</div>
				</router-link>
			</div>
		</div>
		<p class="jy">交易明细</p>
		<div class="no_log">
			<img src="" alt="">
			<p>暂无明细记录</p>
		</div>
	</div>
</template>
<script>
import balance from '../css/balance.css'
import elmHead from '../components/head'
export default {
	components:{
    elmHead:elmHead,
    name:'contain'
  },
}
</script>