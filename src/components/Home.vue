<template>
  <div class="temp">
      <LunBo :LunboData="homeData"></LunBo>



      <!-- 九宫格 -->
      <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/newlist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">Home</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
		                    <div class="mui-media-body">Email</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-gear"></span>
		                    <div class="mui-media-body">Setting</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-info"></span>
		                    <div class="mui-media-body">about</div></a></li>
		           <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-more"></span>
		                    <div class="mui-media-body">more</div></a></li>
		        </ul> 
  </div>
</template>
<script>
//引入地址
import tool from "../tools/tool";
import LunBo from "./sub/lunbo.vue";

export default {
  data() {
    return {
      homeData: []
    };
  },
  created() {
    this.getHomeData();
  },
  components: {
    LunBo
  },
  methods: {
    getHomeData() {
      // var url="http://vue.studyit.io/api/getlunbo"
      var url = `${tool.HTTP}${tool.SERVER_PATH}/api/getlunbo`;
      this.$http.get(url).then(
        res => {
          // console.log(res)
          this.homeData = res.body.message;
        },
        res => {
          console.log("请求home页轮播加载失败");
        }
      );
    }
  }
};
</script>

<style scoped>
.mui-icon-home{
  background-image: url("../images/callme.png");
  background-repeat: round;
}
.mui-icon-home:before{
  content:"";
}
.mui-icon{
  width: 40px;
  height: 40px;
}

.mui-grid-view{
  background-color: #fff;
}
</style>