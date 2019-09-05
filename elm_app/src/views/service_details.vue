<template>
	<div id="contain">
		<elmHead>
		<template v-slot:left><router-link :to="{name:'service'}">&lt;</router-link></template>
		<template v-slot:center>{{$route.params.tit}}</template>
		<template v-slot:right></template>
		</elmHead>
		<div v-if="data.img" class="contain">
			<div v-for="(i,$index) in data.img" :key="$index" >
			<img :src="i" alt="" style="width:100%">
			<p style="padding:.2rem;font-size:.3rem" v-html="data.info[$index]"></p>
			</div>
		</div>
		<div else>
			<p  style="padding:.2rem;font-size:.3rem" v-html="$route.params.info"></p>
		</div>
		<router-view></router-view>
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
			data:{}
		}
	},
	created(){
		var arr=this.$route.params.info.split('![](')
		var Img=[],Info=[]
		arr.forEach(element => {
			Img.push(element.split(') ##')[0])
			Info.push(element.split(') ##')[1])
		});
		this.data.img=Img.slice(1)
		this.data.info=Info.slice(1)
	}
}
</script>