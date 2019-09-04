<template>
  <div class="search">
    <elmHead>
      <template v-slot:left>
        <router-link to="/about/seach">&lt;</router-link>
      </template>
      <template v-slot:center>搜索</template>
      <template v-slot:right
                v-if="!isbtnlogin">
        <router-link to="/login"
                     class="login">登录/注册</router-link>
      </template>
      <template v-slot:right
                v-else-if="isbtnlogin">
        <router-link to="/about/user"
                     class="login"><i class="iconfont">&#xe602;</i></router-link>
      </template>
    </elmHead>
    <div class="search_box">
      <!-- <form action="#"> -->
      <input type="search"
             class="search_input"
             placeholder="请输入商家或美食名称"
             v-model="iptValue" />
      <button class="search_button"
              @click="btnClick">提交</button>
      <!-- </form> -->
      <ul class="commit_list">
        <li v-if="iptValue==''"></li>
        <li v-else
            v-for="(item,index) in searchlist"
            :key="index"
            @click="place(item)"
            class="list clearfix">
          <!-- <router-link :to='{path:"/about/Takeaway", query: {geohash: searchlist[item]}}'> -->
          <!-- <div class="list_left fl"></div> -->
          <div class="list_right">
            <p>{{item.name}}</p>
            <p>{{item.address}}</p>
          </div>
          <!-- </router-link> -->
        </li>

      </ul>
    </div>
    <div class="search_history">
      <h3>搜索历史</h3>
      <ul>
        <li v-if="iptValueArray==''"></li>
        <li v-else
            @click="searchtodetail(item)"
            v-for="(item,index) in iptValueArray"
            :key="index">
          <router-link to="/about/search/searchdetail">
            <p>{{item.name}}</p>
            <p>{{item.address}}</p>
          </router-link>
        </li>
      </ul>
      <p class="clearhistory"
         @click="clearHistory()">清空历史</p>
    </div>
    <elmfoot num=1></elmfoot>
  </div>
</template>

<script>
import elmfoot from './foot'
import elmHead from './head'
export default {
  name: 'seach',
  components: {
    elmHead,
    elmfoot
  },
  data () {
    return {
      isbtnlogin: false,
      geohash: '',
      iptValue: '',
      searchlist: '',
      city_id: '',
      keyword: '',
      nulls: '',
      // 搜索历史
      iptValueArray: []
    }
  },
  created () {
    if (localStorage.iptValueArray) {
      this.iptValueArray = JSON.parse(localStorage.iptValueArray)
    } else {
      this.iptValueArray = []
    }

    this.geohash = localStorage.geohash
    if (localStorage.user) {
      this.isbtnlogin = true
    } else {
      this.isbtnlogin = false
    }
  },
  methods: {
    // gotoIndex (item) {
    //   this.$router.push({
    //     path: '/about/Takeaway'
    //     // path: '/about/Takeaway?geohash=' + localStorage.geohash
    //     // query: {abc:item}
    //   })
    // },

    btnClick () {
      if (this.iptValue == '') {
        this.nulls = '输入为空！！！'
        this.searchlist = ''
      } else {
        this.$http.get('https://elm.cangdu.org/v1/pois', {
          params: {
            city_id: this.cityid,
            keyword: this.iptValue
          }
        }).then((res) => {
          console.log(res.body)
          this.searchlist = res.body
          // console.log(this.searchlist)
          // this.iptValueArray.unshift(this.iptValue)
          // console.log(this.iptValueArray)
          // localStorage.setItem('item', this.iptValueArray)
        })
      }
    },
    place (a) {
      // this.$http.get('https://elm.cangdu.org/v4/restaurants?geohash=31.22967,121.4762&keyword=肯德基',{
      //   params:{}
      // })
      this.iptValueArray.unshift(a)
      localStorage.iptValueArray = JSON.stringify(this.iptValueArray)
    },
    clearHistory () {
      this.iptValueArray = []
      localStorage.clear()
    },
    searchtodetail (aaa) {
      console.log(123)
      // this.$router.push({
      //   path: '/about/search/searchdetail',
      //   query: { name: aaa }
      // })
    }
  }

}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
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

.search {
  width: 6.4rem;
  padding-top: 1rem;
  min-height: 10rem;
  background-color: #f5f5f5;
  padding-bottom: 1rem;
}
.search_box {
  width: 6.4rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  background-color: white;
}
.search_input {
  width: 4.5rem;
  height: 0.6rem;
  border: 0.025rem solid #e4e4e4;
  font-size: 0.24rem;
  color: #333;
  border-radius: 0.06rem;
  background-color: #f2f2f2;
  font-weight: 500;
  padding: 0 0.25rem;
  vertical-align: top;
  outline: none;
  margin-left: 0.15rem;
  font-weight: 700;
}
.search_button {
  width: 1.5rem;
  height: 0.6rem;
  line-height: 0.5rem;
  border: 0.025rem solid #3190e8;
  margin-left: 0.1rem;
  font-size: 0.3rem;
  color: #fff;
  border-radius: 0.06rem;
  background-color: #3190e8;
  font-weight: 500;
  vertical-align: top;
}
.search_history {
  width: 6.4rem;
}
.search_history h3 {
  padding-left: 0.2rem;
}
.search_history ul {
  width: 100%;
  background-color: #fff;
}
.search_history ul li {
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.1rem;
  background-color: #fff;
  padding-left: 0.2rem;
}
.commit_list {
  width: 100%;
  background-color: #fff;
}
.commit_list li {
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.1rem;
  background-color: #fff;
  padding-left: 0.2rem;
}
.clearhistory {
  font-size: 0.2rem;
  /* padding-left: 0.2rem; */
  color: #3190e8;
  text-align: center;
  line-height: 0.6rem;
  font-weight: bolder;
}
.list {
  height: 1rem;
  margin-top: 0.2rem;
}
.list_left {
  width: 20%;
}
.list_right {
  width: 80%;
}
</style>
