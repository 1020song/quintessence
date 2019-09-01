<template>
	<div>
		<elmHead>
		<template v-slot:left><router-link to="/about/user">&lt;</router-link></template>
		<template v-slot:center>服务中心</template>
		<template v-slot:right></template>
		</elmHead>
		<div class="tit">
			<div class="items" v-for="(i,$index) in 2" :key="$index">
				<dl>
					<dt><img src="" alt=""></dt>
					<dd><span style="font-size:.3rem">在线客服</span></dd>
				</dl>
			</div>
		</div>
		<h3>热门问题</h3>
		<div class="list">
			<router-link v-for=" (i,$index) in data.tit" :key="$index" :to= "{name:'details',params:{tit:i,info:data.info[$index]}}">
				<li>{{i}} 
					<span style="float:right;font-size:.3rem">></span> 
				</li>
			</router-link>
		</div>
	</div>
</template>
<script scoped>
import '../css/serve.css'
import elmHead from '../components/head'
export default {
	components:{
		elmHead:elmHead,
	},
	data(){
		return{
			data:{
				tit:[],
				info:[]
			},
		}
	},
	created(){
		this.serve()
	},
	methods:{
		serve(){
			this.$http.get('https://elm.cangdu.org/v3/profile/explain').then(res=>{
				for(var i in res.data){
					if(i.charAt(i.length-1)=='n'){
						this.data.tit.push(res.data[i])
					}
					if(i.charAt(i.length-1)=='t'){
						this.data.info.push(res.data[i])
					}
				}	
			})
		}
	}
}

 </script>