<template>
 <div class="wrapper flex">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <v-footer></v-footer>
 </div>
</template>

<script>
import footer from '../footer/footer'

export default {
    components:{
        'v-footer':footer,
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
