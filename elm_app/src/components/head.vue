<template>
    <div class="head">
      <span class="s1">1</span>
      <span class="s2">2</span>
      <span class="s3">3</span>
    </div>
</template>

<script>
export default {
  // name: 'HelloWorld',
  // props: {
  //   msg: String
  // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .head{
    width: 6.4rem;
    height: 1rem;
    background-color: #3190e8;
    color: white;
    font-size: 0.6rem;
    line-height: 1rem;
    padding: 0 0.2rem;
    box-sizing: border-box;
  }
  .head span{
    display: inline-block;
  }
  .s1{
    width: 1rem;
  }
  .s2{
    width: 3.5rem;
    text-align: center;
  }
  .s3{
    width: 1.5rem;
    text-align: right;
  }
</style>
