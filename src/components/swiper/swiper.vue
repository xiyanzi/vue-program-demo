<template>
 <div class="wrapper-height">
    <div class="swiper-container wrapper-height">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in tabContentList">
                <keep-alive>
                    <component :is="item.component"></component>
                </keep-alive>
            </div>
        </div>  
    </div>
 </div>
</template>

<script>
import Swiper from 'swiper'
import '../../../static/css/swiper.css'

import goods from '../tabNavList/goods'
import ratings from '../tabNavList/ratings'
import seller from '../tabNavList/seller'

export default {
    components:{
       goods,
       ratings,
       seller, 
    },
    data() {
        return {
            tabContentList:[
                {path:'/goods',component:goods},
                {path:'/ratings',component:ratings},
                {path:'/seller',component:seller},
            ],
        }
    },
    mounted(){
        this.$nextTick(() => {
            this._initSwiper();
        });
    },
    methods:{
        _initSwiper(){  
            var mySwiper=new Swiper ('.swiper-container',{
                paginationClickable: true,//此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
                centeredSlides: true,//设定为true时，活动块会居中，而不是默认状态下的居左。
                observer:true, //修改swiper自己或子元素时，自动初始化swiper
                observeParents:true,//修改swiper的父元素时，自动初始化swiper
                initialSlide:this.$route.path === '/goods' ? 0 : this.$route.path === '/ratings' ? 1 : this.$route.path === '/seller' ? 2 : 0
            });
            mySwiper.on('slideChange',() =>{//监控滑动后当前页面的索引，将索引发射到导航栏
                this.$root.eventHub.$emit('slideTab',mySwiper.activeIndex);
            });
            this.$root.eventHub.$on('changeTab',(index) =>{//接收导航栏传过来的按钮索引值，跳转到相应的内容区
                mySwiper.slideTo(index,0,false);
            });
        },
    }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
