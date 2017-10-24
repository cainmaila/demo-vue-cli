<template>
  <div id="p2">
    DEMO
    <div>{{test}}</div>
  </div>
</template>
<script>
export default {
  data:function() {
    return {
      test: "Cain!"
    }
  },
}
</script>
<style lang="less" scoped>
@r:#00f;
#p2{
  height: 200px;
  background: @r;
}
div{
  color: #f00;
}
</style>






