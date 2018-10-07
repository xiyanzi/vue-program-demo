<template>
    <div id="footer">
        <ul v-cloak>
            <li v-for="tab in footNavList" :id="tab.id">
                <router-link :to="{ path:tab.path }">{{tab.name}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    data(){
        return{
            footNavList:[
                {id:'0',name:'首页',path:'/home'},
                {id:'1',name:'圈子',path:'/circle'},
                {id:'2',name:'商城',path:'/store'},
                {id:'3',name:'我的',path:'/my'},
            ],

        }
    },
    mounted(){
  
    },
    methods:{

    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
ul
    display: flex
    width: 100%
    li
        flex: 1
        text-align: center
        font-size: 0.32rem
.router-link-active
    color grey
</style>


