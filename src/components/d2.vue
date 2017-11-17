<template>
    <div>
        <h1>{{txt2}}</h1>
        <img :src="imgpath"  alt="">
    </div>
</template>
<script>
export default {
  props: ["txt2", "imgpath"]
};
</script>