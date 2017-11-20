<template>
  <div>
    <input type="text" v-model="a"> +
    <input type="text" v-model="b">
    <button @click="onCalc">=</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      a: 0,
      b: 0
    };
  },
  methods: {
    onCalc() {
      let a = 1 * this.a;
      let b = 1 * this.b;
      let aNotNum = isNaN(a);
      let bNotNum = isNaN(b);
      if (!aNotNum && !bNotNum) {
        this.$emit("calc", a + b);
      } else {
        this.$emit("calc", "無法計算");
      }
    }
  }
  //   watch: {
  //     a(val) {
  //       this.onCalc();
  //     },
  //     b(val) {
  //       this.onCalc();
  //     }
  //   }
};
</script>
<style lang="less" scoped>
* {
  height: 50px;
  font-size: 40px;
}
</style>

