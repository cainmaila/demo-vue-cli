<template>
  <div>
      <button @click="onClickA">Button A</button>
      <button @click="onClickB">Button B</button>
      <button @click="onClickC">Button B</button>
      <button @click="onClickD">Button B</button>
  </div>
</template>
<script>
export default {
  methods: {
    onClickA() {
      this.$emit("btn_ent", "a", 123, 456);
    },
    onClickB() {
      this.$emit("btn_ent", "b");
    },
    onClickC() {
      this.$emit("btn_ent", "C");
    },
    onClickD() {
      this.$emit("btn_ent", "d");
    }
  },
  mounted() {}
};
</script>