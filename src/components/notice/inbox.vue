<template>
    <div class="inbox" ref="mianHeight">
        <div class="inboxM">
            <el-tabs v-model="activeName" :tab-position="tabPosition">
                <el-tab-pane label="全部" name="first">
                    <div class="tabContent">
                        <div class="topTool">
                            <el-input v-model="searchInput" style="width:300px; margin:0 5px 0 0;" size="small" placeholder="请输入内容" clearable></el-input><el-button size="small" type="primary">搜索</el-button>
                        </div>
                        <div class="listMain" :style="{height:scHeight}">
                            <ul>
                                <li v-for="(n,index) in noticeList" :key="index">
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>通知标题</span></h3>
                                        <h4>{{n.title}}</h4>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>通知标签</span></h3>
                                        <dl><dt>类型：</dt>
                                        <dd v-if="n.fileType==1">学校文件</dd>
                                        <dd v-else>局文件</dd>
                                        </dl>
                                        <dl><dt>重要性：</dt>
                                        <dd>
                                            <span class="importance" style="color:#01a0d2;" v-if="n.importance==1">一般</span>
                                            <span class="importance" style="color:#ff9001;" v-else-if="n.importance==2">重要</span>
                                            <span class="importance" style="color:#F30;" v-else>紧急<i class="icon iconfont iconyujing"></i></span>
                                        </dd>
                                        </dl>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>发布信息</span></h3>
                                        <dl><dt>发布部门：</dt><dd>校办公室</dd></dl>
                                        <dl><dt>发布人：</dt><dd>张扬</dd></dl>
                                        <dl><dt>发布时间：</dt><dd>2019-03-01&nbsp;&nbsp;15:00</dd></dl>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>状态</span></h3>
                                        <span class="readState" v-if="n.fileReadState">已读</span>
                                        <span class="readState unRead" v-else>未读</span>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>操作</span></h3>
                                        <div class="bts">
                                             <el-button size="small" type="danger">删除</el-button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                </li>
                            </ul>

                            
                        </div>
                        <div class="paging">
                            <el-pagination
                                background
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="100"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="400">
                            </el-pagination>
                        </div>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="未读" name="second">
                    <div class="tabContent">
                        <div class="topTool">
                            <el-input v-model="searchInput" style="width:300px; margin:0 5px 0 0;" size="small" placeholder="请输入内容" clearable></el-input><el-button size="small" type="primary">搜索</el-button>
                        </div>
                        <div class="listMain" :style="{height:scHeight}">
                            <ul>
                                <li v-for="(n,index) in noticeList" :key="index">
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>通知标题</span></h3>
                                        <h4>{{n.title}}</h4>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>通知标签</span></h3>
                                        <dl><dt>类型：</dt>
                                        <dd v-if="n.fileType==1">学校文件</dd>
                                        <dd v-else>局文件</dd>
                                        </dl>
                                        <dl><dt>重要性：</dt>
                                        <dd>
                                            <span class="importance" style="color:#01a0d2;" v-if="n.importance==1">一般</span>
                                            <span class="importance" style="color:#ff9001;" v-else-if="n.importance==2">重要</span>
                                            <span class="importance" style="color:#F30;" v-else>紧急<i class="icon iconfont iconyujing"></i></span>
                                        </dd>
                                        </dl>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>发布信息</span></h3>
                                        <dl><dt>发布部门：</dt><dd>校办公室</dd></dl>
                                        <dl><dt>发布人：</dt><dd>张扬</dd></dl>
                                        <dl><dt>发布时间：</dt><dd>2019-03-01&nbsp;&nbsp;15:00</dd></dl>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>状态</span></h3>
                                        <span class="readState" v-if="n.fileReadState">已读</span>
                                        <span class="readState unRead" v-else>未读</span>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>操作</span></h3>
                                        <div class="bts">
                                             <el-button size="small" type="danger">删除</el-button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                </li>
                            </ul>

                            
                        </div>
                        <div class="paging">
                            <el-pagination
                                background
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="100"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="400">
                            </el-pagination>
                        </div>

                    </div>
                </el-tab-pane>
                <el-tab-pane label="已读" name="third">
                    <div class="tabContent">
                        <div class="topTool">
                            <el-input v-model="searchInput" style="width:300px; margin:0 5px 0 0;" size="small" placeholder="请输入内容" clearable></el-input><el-button size="small" type="primary">搜索</el-button>
                        </div>
                        <div class="listMain" :style="{height:scHeight}">
                            <ul>
                                <li v-for="(n,index) in noticeList" :key="index">
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>通知标题</span></h3>
                                        <h4>{{n.title}}</h4>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>通知标签</span></h3>
                                        <dl><dt>类型：</dt>
                                        <dd v-if="n.fileType==1">学校文件</dd>
                                        <dd v-else>局文件</dd>
                                        </dl>
                                        <dl><dt>重要性：</dt>
                                        <dd>
                                            <span class="importance" style="color:#01a0d2;" v-if="n.importance==1">一般</span>
                                            <span class="importance" style="color:#ff9001;" v-else-if="n.importance==2">重要</span>
                                            <span class="importance" style="color:#F30;" v-else>紧急<i class="icon iconfont iconyujing"></i></span>
                                        </dd>
                                        </dl>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>发布信息</span></h3>
                                        <dl><dt>发布部门：</dt><dd>校办公室</dd></dl>
                                        <dl><dt>发布人：</dt><dd>张扬</dd></dl>
                                        <dl><dt>发布时间：</dt><dd>2019-03-01&nbsp;&nbsp;15:00</dd></dl>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>状态</span></h3>
                                        <span class="readState" v-if="n.fileReadState">已读</span>
                                        <span class="readState unRead" v-else>未读</span>
                                    </div>
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>操作</span></h3>
                                        <div class="bts">
                                             <el-button size="small" type="danger">删除</el-button>
                                        </div>
                                    </div>
                                    <div class="clear"></div>
                                </li>
                            </ul>

                            
                        </div>
                        <div class="paging">
                            <el-pagination
                                background
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="100"
                                layout="total, sizes, prev, pager, next, jumper"
                                :total="400">
                            </el-pagination>
                        </div>

                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name:'inbox',
    data() {
        return {
            activeName:'first',
            tabPosition:'left',
            searchInput:'',
            currentPage:1,
            scHeight:'',
            noticeList:[
                {
                    title:'通知标题很长是为了测试，再很长的内容下的显示效果，长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
                    fileType:1,
                    importance:1,
                    sentDepartment:'校办公室',
                    sentPeo:'张扬',
                    sentTime:'2019-03-01',
                    fileReadState:false,
                },
                {
                    title:'通知标题很长是为了测试，再很长的内容下的显示效果，长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
                    fileType:2,
                    importance:2,
                    sentDepartment:'校办公室',
                    sentPeo:'张扬',
                    sentTime:'2019-03-01',
                    fileReadState:true,
                },
                {
                    title:'通知标题很长是为了测试，再很长的内容下的显示效果，长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
                    fileType:2,
                    importance:3,
                    sentDepartment:'校办公室',
                    sentPeo:'张扬',
                    sentTime:'2019-03-01',
                    fileReadState:false,
                },
                {
                    title:'通知标题很长是为了测试，再很长的内容下的显示效果，长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
                    fileType:2,
                    importance:3,
                    sentDepartment:'校办公室',
                    sentPeo:'张扬',
                    sentTime:'2019-03-01',
                    fileReadState:false,
                },
                {
                    title:'通知标题很长是为了测试，再很长的内容下的显示效果，长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
                    fileType:2,
                    importance:3,
                    sentDepartment:'校办公室',
                    sentPeo:'张扬',
                    sentTime:'2019-03-01',
                    fileReadState:false,
                },
                {
                    title:'通知标题很长是为了测试，再很长的内容下的显示效果，长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
                    fileType:2,
                    importance:3,
                    sentDepartment:'校办公室',
                    sentPeo:'张扬',
                    sentTime:'2019-03-01',
                    fileReadState:true,
                },
                {
                    title:'通知标题很长是为了测试，再很长的内容下的显示效果，长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
                    fileType:2,
                    importance:3,
                    sentDepartment:'校办公室',
                    sentPeo:'张扬',
                    sentTime:'2019-03-01',
                    fileReadState:true,
                },
                {
                    title:'通知标题很长是为了测试，再很长的内容下的显示效果，长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长长',
                    fileType:2,
                    importance:3,
                    sentDepartment:'校办公室',
                    sentPeo:'张扬',
                    sentTime:'2019-03-01',
                    fileReadState:true,
                }
            ]
        }
    },
    mounted() {
        this.setheight();
    },
    methods:{
        handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      setheight:function(){
          let me = this;
        //   let thisheight = this.$refs.mianHeight.style.offsetHeight;
          let thisheight= window.getComputedStyle(me.$refs.mianHeight).height;
          let scHeight = parseInt(thisheight)-150+"px";
          me.scHeight = scHeight;    
      }
    }
}
</script>

<style>

</style>
