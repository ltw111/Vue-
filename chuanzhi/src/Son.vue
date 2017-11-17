<template>
  <div>
    <button @click="hello">按钮</button>
  </div>
</template>

<script>
export default {
  props:["yy"],
  created:function(){
    console.log(this);
    console.log(this.yy);
  },
  methods:{
    hello:function (){
      this.$emit("flag",2222222222)
    }
  }
}
</script>

