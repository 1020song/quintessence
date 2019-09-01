<template>
    <div>
       <elmHead>
            <template v-slot:left><router-link to="/about/user">&lt;</router-link></template>
            <template v-slot:center>账户信息</template>
            <template v-slot:right></template>
        </elmHead>
        
    </div>
</template>
<script>
import elmHead from '../components/head'
export default {
    components:{
        elmHead
    }
}
</script>
<style scoped>

</style>
