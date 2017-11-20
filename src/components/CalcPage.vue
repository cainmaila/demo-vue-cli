<template>
  <div>
    <calc-from @calc="onCalc"></calc-from>
    <log id="log" :calc-val="calcVal"></log>
  </div>
</template>
<script>
import CalcFrom from "@/components/CalcFrom";
import Log from "@/components/Log";
export default {
  data() {
    return {
      calcVal: 0
    };
  },
  methods: {
    onCalc(val) {
      this.calcVal = val;
    }
  },
  components: {
    CalcFrom,
    Log
  }
};
</script>
<style lang="less" scoped>
#log {
  height: 200px;
  margin-top: 50px;
  line-height: 200px;
  background: #eee;
  font-size: 40px;
}
</style>
