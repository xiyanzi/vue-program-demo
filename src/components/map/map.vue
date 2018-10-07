<template>
    <div class="wrapper-height">
      <div id="allmap" class="wrapper-height"></div> 
    </div>
</template>

<script>
import BMap from 'BMap'// 导入BMap组件

export default {
  components:{
    
  },
  data(){
    return{

    }
  }, 
  mounted() {
    this.ready()
  },
    methods:{
        ready() {
            var map = new BMap.Map('allmap');// 创建地图实例
            var point = new BMap.Point(108.840053, 34.129522);// 创建点坐标

            map.centerAndZoom(point, 14);// 初始化地图，设置中心点坐标和地图级别

            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
            map.enableDoubleClickZoom(true);

            var marker = new BMap.Marker(point);// 创建标注
            map.addOverlay(marker);// 将标注添加到地图中 

            // map.addControl(new BMap.GeolocationControl());//向地图添加控件--定位
            // map.addControl(new BMap.ScaleControl());//向地图添加控件--比例尺

            map.setCurrentCity("广州"); // 仅当设置城市信息时，MapTypeControl的切换功能才能可用 

            // map.setMapStyle({style:'midnight'});//地图风格

            // var opts = {    
            //     width : 250,     // 信息窗口宽度    
            //     height: 100,     // 信息窗口高度    
            //     title : "公司名：....."  // 信息窗口标题   
            // } 
            // var infoWindow = new BMap.InfoWindow("电话是：....", opts);  // 创建信息窗口对象    
            // map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口

            // map.addEventListener("dragend", function(){    
            //     var center = map.getCenter();    
            //     console.log("地图中心点变更为：" + center.lng + ", " + center.lat);    
            // });

            // var local = new BMap.LocalSearch(map,{renderOptions: {map: map,panel: "results"}});     
            // local.search("中关村");

            // 创建地址解析器实例     
            var myGeo = new BMap.Geocoder();      
            // 将地址解析结果显示在地图上，并调整地图视野    
            myGeo.getPoint("广州市天河区棠东东路3号广州乐确网络科技有限公司", function(point){      
                if (point) {      
                    map.centerAndZoom(point, 16);      
                    map.addOverlay(new BMap.Marker(point));      
                }      
            },"广州市");
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>


