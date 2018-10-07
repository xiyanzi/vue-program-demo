<template>
    <div class="flex flex-item overflow">
        <div id="header">首页</div>
        <div>
            <ul v-cloak>
                <li v-for="(tab,index) in tabNavList" :key="tab.id" :class="{'changedColor':nowIndex == index}" @click="tabNavClick(index)">
                    {{tab.name}}
                </li>
            </ul>
        </div>
        <div class="flex overflow content">
            <div class="flex-item overflow">
                <v-swiper></v-swiper>
            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import vSswiper from '../../swiper/swiper'

// import Bus from '../../../router/bus.js'

export default {
    components:{
       'v-swiper':vSswiper, 
    },
    data(){
        return{
            tabNavList:[
                {id:'0',name:'商品'},
                {id:'1',name:'评价'},
                {id:'2',name:'商家'},
            ],
            nowIndex:0,
            shref:'',
        }
    },  
    mounted(){
        this.initPage();//初始化，保证刷新后内容区和导航链接一致
        this.$root.eventHub.$on('slideTab',this.slideTab);//接收swiper发射的index进行导航按钮切换样式和更换模板地址
    },
    methods:{
        initPage(){
            this.nowIndex =this.$route.path === '/goods' ? 0 : this.$route.path === '/ratings' ? 1 : this.$route.path === '/seller' ? 2 : 0;
        },
        tabNavClick(index){//点击导航栏切换页面
            this.nowIndex = index;
            this.$root.eventHub.$emit('changeTab',index);//点击导航栏按钮时向swiper发射index
        },
        slideTab(index){
            this.nowIndex = index;
            this.shref = index === 0 ? './goods' :index === 1 ? './ratings': index === 2 ? './seller':'./goods'; 
            this.$router.push(this.shref);
        },
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
ul
    display: flex
    width: 100%
    height:0.8rem
    background:grey
    li
        flex: 1
        text-align: center
        height:0.8rem
        line-height: 0.8rem
        
a
    color: white
    display :block
.content
    padding: 0.15rem
.changedColor 
    color:yellow
</style>


