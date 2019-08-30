<template>
    <div class="search">
        <div class="search_box">
            <!-- <form action="#"> -->
                <input type="search" class="search_input"/>
                <button class="search_button" @click="btnClick">提交</button>
            <!-- </form> -->
        </div>
        <div class="search_history">
          <h3>搜索历史</h3>
          <ul>
            <li></li>
          </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'seach',
  data () {
    return {

    }
  },
  created () {
    // fetch('https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基')
    //   .then(response => response.json())
    //   .then(res => {
    //     console.log(res)
    //   })
  },
  methods: {
    btnClick () {
      // fetch('/v1/cities?type=guess')
      //   .then(response => response.json())
      //   .then(res => {
      //     console.log(res)
      //   })
      this.axios.get('v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基').then((res) => {
        console.log(res);
        
      })
    }
  }

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.search{
    width: 6.4rem;
    padding-top: 1rem;
    min-height: 10rem;
    background-color: #f5f5f5;
}
.search_box{
    width: 6.4rem;
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    background-color: white;
}
.search_input{
    width: 4.5rem;
    height: 0.5rem;
    border: .025rem solid #e4e4e4;
    font-size: .4rem;
    color: #333;
    border-radius: .125rem;
    background-color: #f2f2f2;
    font-weight: 500;
    padding: 0 .25rem;
    vertical-align: top;
    outline: none;
    margin-left: 0.1rem;
}
.search_button{
    width: 1.5rem;
    height: 0.5rem;
    line-height: 0.5rem;
    border: .025rem solid #3190e8;
    margin-left: .2rem;
    font-size: .3rem;
    color: #fff;
    border-radius: .125rem;
    background-color: #3190e8;
    font-weight: 500;
    vertical-align: top;
}
.search_history{
  width: 6.4rem;
}
.search_history h3{
  padding-left: 0.2rem;
}
.search_history ul{
  width: 100%;
  background-color: #fff;
}
.search_history ul li{
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.1rem;
  background-color: #fff;
  padding-left: 0.2rem;
}
</style>
