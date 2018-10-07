<template>
    <div class="wrapper-height">
      <div @click="goBackClick()">this is other点击返回上一层</div>
    </div>
</template>
<script>
export default {
  components:{
    
  },
  data(){
    return{

    }
  }, 
  methods:{
    goBackClick(){//返回
      this.$router.go(-1);
    },
 },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>


