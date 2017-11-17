<template>
  <div class="temp">
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="(item,index) in NewlistData" :key="index">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis'>发布时间:{{item.add_time | filter('YY-MM-DD h:mm:ss a')}}  <span>点击量: {{item.click}}</span></p>
						</div>
					</a>
				</li>
        </ul>
			
  </div>
</template>

<script>

import tool from "../tools/tool"
export default {
    data(){
        return {
            NewlistData:[]
        }
    },
    created(){
        this.getNewlistData()
    },
  methods:{
      getNewlistData(){
          var url=`${tool.HTTP}${tool.SERVER_PATH}/api/getnewslist`
          this.$http.get(url).then(
             res=>{
                //  console.log(res)
                this.NewlistData=res.body.message

             } ,
             res=>{
                 console.log("在newlist获取内容失败")
             }
          )
      }
  }
}
</script>
<style>
.mui-ellipsis span{
    float:right;
}
</style>


