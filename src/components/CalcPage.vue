<template>
  <div>
    <calc-from @calc="onCalc"></calc-from>
    <log :calc-val="calcVal"></log>
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

</style>
