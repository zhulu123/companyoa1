<template>
    <div class="see" ref="mianHeight">
        <div class="seeM">
            <div class="tabContent">
                        <div class="topTool">
                            <em>学期：</em>
                            <el-select v-model="valueSemester" size="small" placeholder="请选择学期">
                                <el-option
                                v-for="item1 in optionsSemester"
                                :key="item1.value"
                                :label="item1.label"
                                :value="item1.value"
                                >
                                </el-option>
                            </el-select>
                            <em>周次：</em>
                            <el-select v-model="valueWeek" size="small" placeholder="请选择周次">
                                <el-option
                                v-for="item in optionsWeek"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                            <el-button size="small" type="primary">搜索</el-button>
                        </div>
                        <div class="listMain" :style="{height:scHeight}">
                            <ul>
                                <li v-for="(n,index) in noticeList" :key="index" @click="intdetails">
                                    <div class="listBox">
                                        <h3 v-if="index==0"><span>学期周次</span></h3>
                                        <h4>{{n.title}}</h4>
                                    </div>
                                    <!-- <div class="listBox">
                                        <h3 v-if="index==0"><span>发布信息</span></h3>
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
                                    </div> -->
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
                                    <!-- <div class="listBox">
                                        <h3 v-if="index==0"><span>操作</span></h3>
                                        <div class="bts">
                                             <el-button size="small" @click.stop="dropMes(index)" type="danger">删除</el-button>
                                        </div>
                                    </div> -->
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
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'inbox',
    data() {
        return {
            activeName:'first',
            tabPosition:'left',
            valueSemester:'',
            valueWeek:'',
            currentPage:1,
            scHeight:'',
            optionsSemester:[
                {value:'s1', label:'2018~2019第一学期'},
                {value:'s2', label:'2018~2019第二学期'},
                {value:'s3', label:'2019~2020第一学期'},
                {value:'s4', label:'2019~2020第二学期'}
            ],
            optionsWeek:[
                {value:'w1', label:'第一周'},
                {value:'w2', label:'第二周'},
                {value:'w3', label:'第三周'},
                {value:'w4', label:'第四周'}
            ],
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
      },
      intdetails(){
          this.$router.push({
              name:'seedetails'
          })
      }
    }
}
</script>

<style>

</style>
