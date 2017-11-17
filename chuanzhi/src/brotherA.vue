<template>
  <div>
      <button @click="hello"></button>
  </div>
</template>

<script>
import Bus from "./bus.js";

export default {
  methods:{
      hello:function (){
          Bus.$emit("toBflag",111111111)
      }
  }
}
</script>
<style>

</style>

