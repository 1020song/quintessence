<template>
  <div>
    <header>
      <router-link to="/about/search">
        <span class="fl">&lt;返回</span>

      </router-link>
    </header>
    <p>找不到搜索结果！！！去首页看看吧(●ˇ∀ˇ●)</p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // my: this.$route.query.name
    }
  },
  created () {
    // this.sorry()
  },
  methods: {
    // sorry () {
    //   alert('找不到搜索结果！！！去首页看看吧(●ˇ∀ˇ●)')
    // }
  }

}
</script>
<style scoped>
.fl {
  float: left;
}
.fr {
  float: right;
}
.clearfix {
  zoom: 1;
}
.clearfix::after,
.clearfix::before {
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
  clear: both;
}
header {
  height: 0.6rem;
  background-color: #3190e8;
  padding-left: 0.2rem;
}
header span {
  color: #fff;
  font-weight: bold;
}
p {
  font-size: 0.3rem;
  margin-top: 1rem;
}
</style>
