<template>
    <div>
        <Son yy="hello"></Son>

        <Son @flag="getSonData"></Son>
    </div>
</template>

<script>
import Son from "./Son.vue";
import BrotherA from "./brotherA.vue";
import BrotherB from "./BrotherB.vue";


export default {
    components:{
        Son,
        BrotherA,
        BrotherB
    },
  methods:{
      getSonData:function (data){
          console.log(data)
      }
  }
}
</script>

<style>

</style>
