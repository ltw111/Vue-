<template>
  <div>

  </div>
</template>

<script>

import Bus from "./bus.js";

export default {
  created:function (){
    Bus.$on("toBflag",function (data){
      console.log(data)
    })
  }
}
</script>
<style>

</style>

