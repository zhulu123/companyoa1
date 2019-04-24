<template>
  <div class="authority" ref="mianHeight">
    <div class="authorityM">
      <el-tabs v-model="activeName" :tab-position="tabPosition">
        <el-tab-pane label="发通知" name="first">
          <div class="tabContent">
            <el-transfer
              :style="{height:scHeight}"
              v-model="first.value"
              filterable
              filter-placeholder="请输入人员/部门名称"
              :titles="['备选人员列表', '已选人员列表']"
              :format="{
                noChecked: '${total}',
                hasChecked: '${checked}/${total}'
              }"
              :props="{key: 'id'}"
              @change="first_handleChange"
              :data="first.data"
            ></el-transfer>
            <el-button class="saveBtn" type="primary">保存设置</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="校周计划制定" name="second">
          <div class="tabContent">
            <el-transfer
              :style="{height:scHeight}"
              v-model="second.value"
              filterable
              filter-placeholder="请输入人员/部门名称"
              :titles="['备选人员列表', '已选人员列表']"
              :format="{
                noChecked: '${total}',
                hasChecked: '${checked}/${total}'
              }"
              @change="second_handleChange"
              :data="second.data"
            ></el-transfer>
            <el-button class="saveBtn" type="primary">保存设置</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="通知类型" name="third">
          <div class="tabContent">
            <el-transfer
              :style="{height:scHeight}"
              v-model="third.value"
              filterable
              filter-placeholder="请输入人员/部门名称"
              :titles="['备选人员列表', '已选人员列表']"
              :format="{
                noChecked: '${total}',
                hasChecked: '${checked}/${total}'
              }"
              @change="third_handleChange"
              :data="third.data"
            ></el-transfer>
            <el-button class="saveBtn" type="primary">保存设置</el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "authority",
  data() {
    return {
      activeName: "first",
      tabPosition: "left",
      scHeight: "",
      first: {
        data: [
          {
            id: 1,
            label: "李依依 (信息部)"
          },
          {
            id: 2,
            label: "赵信 (信息部)"
          },
          {
            id: 3,
            label: "赵信 (教务处)"
          },
          {
            id: 4,
            label: "李依依 (教务处)"
          },
          {
            id: 5,
            label: "李依依 (高二年级部)"
          },
          {
            id: 6,
            label: "赵信 (高三年级部)"
          },
          {
            id: 7,
            label: "赵信 (高二年级部)"
          },
          {
            id: 8,
            label: "李依依 (高一年级部)"
          }
        ],
        value: [1, 2]
      },
      second: {
        data: [
          {
            key: 1,
            label: "李依依 (信息部)"
          },
          {
            key: 2,
            label: "赵信 (信息部)"
          }
        ],
        value: [2]
      },
      third: {
        data: [
          {
            key: 1,
            label: "李依依 (信息部)"
          },
          {
            key: 2,
            label: "赵信 (信息部)"
          }
        ],
        value: [2]
      }
    };
  },
  mounted() {
    this.setheight();
  },
  methods: {
    setheight: function() {
      let me = this;
      //   let thisheight = this.$refs.mianHeight.style.offsetHeight;
      let thisheight = window.getComputedStyle(me.$refs.mianHeight).height;
      let scHeight = parseInt(thisheight) - 120 + "px";
      me.scHeight = scHeight;
    },
    first_handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    second_handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    third_handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    }
  }
};
</script>

<style>
</style>
