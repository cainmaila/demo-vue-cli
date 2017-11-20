<template>
  <div id="p2">
    DEMO
    <div>{{test}}</div>
    <btn @btn_ent="btnClick"></btn>
    <my-first-tmp :txt2="item"  imgpath="https://www.google.com.tw/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" v-for="(item,index) in list" key="index"></my-first-tmp>
  </div>
</template>
<script>
import myFirstTmp from "@/components/d2";
import btn from "@/components/btn";
export default {
  data: function() {
    return {
      test: "Cain!",
      list: ["11111"]
    };
  },
  components: {
    myFirstTmp,
    btn
  },
  methods: {
    btnClick(val, val2) {
      console.log(val);
      console.log(val2);
    }
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






