<template>
  <div id="p2">
    DEMO
    <div>{{test}}</div>
    <c3 :txt2="item" v-for="item in list" ></c3>
  </div>
</template>
<script>
import c3 from "@/components/d2";
export default {
  data: function() {
    return {
      test: "Cain!",
      list: ["11111", "2222222", "3333333"]
    };
  },
  components: {
    c3
  }
};
</script>
<style lang="less" scoped>
@r: #00f;
#p2 {
  height: 200px;
  background: @r;
}
div {
  color: #f00;
}
</style>






