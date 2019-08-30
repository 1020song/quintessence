// <template>
// 	<div>
// 		<div class="tit">
// 			<div class="item" v-for="i in 2">
// 				<dl>
// 					<dt><img src="" alt=""></dt>
// 					<dd><span>在线客服</span></dd>
// 				</dl>
// 			</div>
// 		</div>
// 		<h2>热门问题</h2>
// 		<div>
// 			<!-- <li v-for="(i,$index) in data.couponCaption">{{i.couponCaption}}</li> -->
// 		</div>
// 	</div>
// </template>
// <script>
// import serve from '../css'
// export default {
// 	data(){
// 		return{
// 			data:[]
// 		}
// 	},
// 	created(){
// 		this.serve()
// 	},
// 	methods:{
// 		serve(){
// 			this.$http.get('https://elm.cangdu.org/v3/profile/explain').then(res=>{
				
// 				this.data=res.data
// 				console.log(this.data)
// 			})
// 		}
// 	}
// }
// </script>