<template>
	<div>
		<!-- tit -->
		<elmHead>
		<template v-slot:left><router-link to="/about/user">&lt;</router-link></template>
		<template v-slot:center>我的余额</template>
		<template v-slot:right></template>
		</elmHead>
		<!-- 余额详情 -->
		<userdata>
			<template v-slot:tit-left>当前余额</template>
			<template v-slot:tit-right><router-link to="/balance/explain" style="float:right;color:blue"><i ></i> 余额说明</router-link></template>
			<template v-slot:num>{{money}}</template>
			<template v-slot:units>元</template>
			<template v-slot:btn>提交</template>
			<template v-slot:loding-tit>交易明细</template>
			<template v-slot:loding-info><p>暂无明细记录</p></template>

		</userdata>
	</div>
</template>
<style scoped>
@import '../css/balance.css'
</style>
<script>
import elmHead from '../components/head'
import userdata from '../components/user_data'
export default {
	components:{
	elmHead:elmHead,
	userdata:userdata,
    name:'contain'
  },
  data() {
	  return {
		  money:0.00
	  }
  },
}
</script>