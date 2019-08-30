<template>
	<div>
		<div class="contain">
			<!-- title -->
			<div class="header">
					<span style="color:white;font-size:.6rem;">我的余额</span>
					<router-link to="/about/user"><span style="position:absolute; left:.1rem;font-size:.6rem;color:white"><</span></router-link>
			</div>
			
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import balance from '../css/balance.css'
export default {
	
}
</script>