<template>
	<div>
		<elmHead>
		<template v-slot:left><router-link to="/service">&lt;</router-link></template>
		<template v-slot:center>{{$route.params.tit}}</template>
		<template v-slot:right></template>
		</elmHead>
		<p style="padding:.2rem;font-size:.3rem" v-html="$route.params.info"></p>
	</div>
</template>
<script>
import elmHead from '../components/head'
export default {
	components:{
		elmHead:elmHead
	},
	data(){
		return{
			data:''
		}
	},
	created(){
		this.data=this.$route.params.info
		console.log(this.$route)
	}
}
</script>