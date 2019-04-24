<template>
  <div class="messageType" ref="mianHeight">
    <div class="messageTypeM">
      <div class="tabContent">
        <div class="topTool">
          <el-input
            v-model="searchInput"
            style="width:300px; margin:0 5px 0 0;"
            size="small"
            placeholder="请输入内容"
            clearable
          ></el-input>
          <el-button size="small" type="primary">搜索</el-button>
          <el-button size="small" type="success" @click="messageType_add">新增类型</el-button>
        </div>
        <div class="listMain" :style="{height:scHeight}">
          <ul>
            <li v-for="(n,index) in messageList" :key="index">
              <div class="listBox">
                <h3 v-if="index==0">
                  <span>通知类型</span>
                </h3>
                <h4>{{n.type}}</h4>
              </div>
              <div class="listBox">
                <h3 v-if="index==0">
                  <span>通知信息</span>
                </h3>
                <dl>
                  <dt>添加人：</dt>
                  <dd>{{n.sentPeo}}</dd>
                </dl>
                <dl>
                  <dt>添加时间：</dt>
                  <dd>{{n.sentTime}}</dd>
                </dl>
              </div>
              <div class="listBox">
                <h3 v-if="index==0">
                  <span>状态</span>
                </h3>
                <span class="readState" v-if="n.status">启用中</span>
                <span class="readState unRead" v-else>停用中</span>
              </div>
              <div class="listBox">
                <h3 v-if="index==0">
                  <span>操作</span>
                </h3>
                <div class="bts">
                  <el-button size="small" type="success" v-if="!n.status">启用</el-button>
                  <el-button size="small" type="danger" v-if="n.status">停用</el-button>
                  <el-button size="small" type="primary" @click="messageType_edit(n.id)">修改</el-button>
                  <el-button size="small" type="danger" v-if="!n.status">删除</el-button>
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
            :total="400"
          ></el-pagination>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <!-- 新增开始 -->
    <el-dialog
      :visible.sync="detail.show"
      :title="detail.title"
      width="600px"
      height="500px"
      :close-on-click-modal="false"
    >
      <el-form label-width="108px">
        <el-form-item label="通知类型名称">
          <el-input v-model="detail.messageName"></el-input>
        </el-form-item>
        <el-form-item label="通知类型名称">
          <el-radio-group v-model="detail.messageState">
            <el-radio :label="1">启用</el-radio>
            <el-radio :label="0">禁用</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini" @click="detail.show = false">取 消</el-button>
        <el-button size="mini" type="primary" @click="studentCard_editSave()">绑 定</el-button>
      </div>
    </el-dialog>
    <!-- 新增结束 -->
  </div>
</template>

<script>
export default {
  name: "messageType",
  data() {
    return {
      searchInput: "",
      currentPage: 1,
      scHeight: "",
      messageList: [
        {
          id:1,
          type: "普通通知",
          sentPeo: "张扬",
          sentTime: "2019-03-01 15:50",
          status: false
        },
        {
          id:2,
          type: "校内新闻",
          sentPeo: "张扬",
          sentTime: "2019-03-01 15:50",
          status: false
        },
        {
          id:3,
          type: "党内报告",
          sentPeo: "张扬",
          sentTime: "2019-03-01 15:50",
          status: true
        },
        {
          id:4,
          type: "普通通知",
          sentPeo: "张扬",
          sentTime: "2019-03-01 15:50",
          status: false
        },
      ],
      detail: {
        //编辑弹框字段
        show: false,
        flag: "",
        title: "",
        id: "",
        messageName:"",
        messageState:""
      },
    };
  },
  mounted() {
    this.setheight();
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    setheight: function() {
      let me = this;
      //   let thisheight = this.$refs.mianHeight.style.offsetHeight;
      let thisheight = window.getComputedStyle(me.$refs.mianHeight).height;
      let scHeight = parseInt(thisheight) - 150 + "px";
      me.scHeight = scHeight;
    },
    messageType_add: function() {
      this.detail.title = "新增类型";
      this.detail.id = "";
      this.detail.messageName = "";
      this.detail.messageState = "";
      this.detail.show = true;
    },
    messageType_edit: function(id) {
      this.detail.title = "修改";
      this.detail.show = true;
      this.detail.id = id;
      this.getDetail();
    },
    getDetail(){

    },
    studentCard_editSave(){

    }
  }
};
</script>
<style>
</style>
