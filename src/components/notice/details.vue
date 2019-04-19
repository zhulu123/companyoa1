<template>
    <div class="ndetails" ref="mianHeight">
        <div class="detailsTop">
            <h2>{{noticeCon.ntitle}}</h2>
            <p class="synopsis">
                <span>通知类型:{{noticeCon.ntype}}</span>
                <span>发布部门:
                    {{noticeCon.ndepartment}}
                    <em v-if="noticeCon.ndepartment==1">校公文</em>
                    <em v-else>局通知</em>
                    </span>
                <span>发布人:{{noticeCon.npeo}}</span>
                <span>发布时间:{{noticeCon.ntime}}</span>
            </p>
        </div>

        <div class="messageBox" :style="{height:scHeight}">
            <div class="messageBoxN" v-html="noticeCon.nmes">
                
            </div>
            <div class="suspensionBts">
                <el-tooltip class="item" effect="dark" content="分享转发" placement="right"><a><i class="el-icon-share"></i></a></el-tooltip>
                <el-tooltip class="item" effect="dark" content="删除" placement="right"><a><i class="el-icon-delete"></i></a></el-tooltip>
                <el-tooltip class="item" effect="dark" content="返回顶部" placement="right"><a><i class="el-icon-upload2"></i></a></el-tooltip>
            </div>

        </div>

        <div class="fileBox">
            <h4><span>附件：</span></h4>
            <div class="fileBoxList">
                <dl class="word">
                    <dt><i class="icon iconfont iconwordwenjian"></i></dt>
                    <dd>
                        <h5>标题标题标题标题标题标题标题</h5>
                        <p class="fileSize">200K</p>
                    </dd>
                </dl>
                <dl class="excel">
                    <dt><i class="icon iconfont iconexcelwenjian"></i></dt>
                    <dd> 
                        <h5>标题标题标题标题标题标题标题</h5>
                        <p class="fileSize">200K</p>
                    </dd>
                </dl>
                 <dl class="ppt">
                    <dt><i class="icon iconfont iconpptwenjian"></i></dt>
                    <dd>
                        <h5>标题标题标题标题标题标题标题</h5>
                        <p class="fileSize">200K</p>
                    </dd>
                </dl>

            </div>
        </div>

        <div class="haveRead">
            <h4></h4>
            <div class="">
                
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name:'ndetails',
    data() {
        return {
            scHeight:'',
            noticeCon:{
                ntitle:'通知标题长长长长长长长长长长长长长长长长长长长长长长长长',
                ntype:1,
                ndepartment:'教务处',
                npeo:'张洋',
                ntime:'2019-02-25  星期五  15:00',
                nmes:'<p><span style="font-weight:bold; color:red;">通知内容：</span>测试数据长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长</p>',
                nfileList:[
                    {ftitle:'',url:'',filetype:1}
                ]
                
            }
        }
    },
    mounted() {
         this.setheight();
    },
    methods:{
        setheight:function(){
          let me = this;
          let thisheight= window.getComputedStyle(me.$refs.mianHeight).height;
          let scHeight = parseInt(thisheight)-280+"px";
          me.scHeight = scHeight;    
      },
    }
}
</script>

<style>

</style>
