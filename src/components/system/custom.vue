<template>
  <div class="custom" ref="mianHeight">
    <div class="customM">
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
          <el-button size="small" type="success" @click="custom_add">新增自定义</el-button>
        </div>
        <div class="listMain" :style="{height:scHeight}">
          <ul>
            <li v-for="(n,index) in customList" :key="index">
              <div class="listBox">
                <h3 v-if="index==0">
                  <span>自定义组名称</span>
                </h3>
                <h4>{{n.title}}</h4>
              </div>
              <div class="listBox">
                <h3 v-if="index==0">
                  <span>人员详情</span>
                </h3>
                <div class="bts">
                  <el-button size="small" type="primary" @click="custom_see(n.id)">查看</el-button>
                </div>
              </div>
              <div class="listBox">
                <h3 v-if="index==0">
                  <span>操作</span>
                </h3>
                <div class="bts">
                  <el-button size="small" type="primary" @click="custom_edit(n.id)">编辑</el-button>
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
            :total="400"
          ></el-pagination>
        </div>
      </div>
    </div>
    <!-- 查看开始 -->
    <el-dialog
      :visible.sync="detail.show"
      title="人员详情"
      width="400px"
      height="500px"
      :close-on-click-modal="false"
    >
      <ul class="seebox">
          <li>张善 （本单位--高一年级部）</li>
          <li>李依依（本单位--教务处）</li>
          <li>李伟（徐州市第一中学--校务处）</li>
      </ul>
      <div slot="footer" class="dialog-footer">
        
      </div>
    </el-dialog>
    <!-- 查看结束 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "custom",
  data() {
    return {
      searchInput: "",
      currentPage: 1,
      scHeight: "",
      customList: [
        {
          title: "我常用的联系人",
          id: 1
        },
        {
          title: "学校内部人员",
          id: 2
        },
        {
          title: "通知要发送的人",
          id: 3
        }
      ],
      detail: {
        //详情
        show: false,
        id: "",
        userList:[]
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
    custom_add: function() {
      this.$router.push({
        name: "newCustom"
      });
    },
    custom_edit: function(id) {
      this.$router.push({ name: "editCustom", params: { id: id } });
    },
    custom_see: function(id) {
        this.detail.show = true;
    }
  }
};
</script>
<style>
</style>
