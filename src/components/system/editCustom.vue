<template>
  <div class="editCustom" ref="mianHeight">
    <div class="editCustomM">
      <div class="tabContent">
        <div class="demo-input-suffix customInput">
          自定义组名称：
          <el-input
            v-model="customName"
            style="width:300px; margin:0 5px 0 0;"
            size="small"
            placeholder="请输入自定义组名称"
            clearable
          ></el-input>
        </div>
        <el-select v-model="selectedSchool" class="selectSchool" size="mini" @change="new_select" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-transfer
          :style="{height:scHeight}"
          v-model="person.value"
          filterable
          filter-placeholder="请输入人员/部门名称"
          :titles="['所有人员', '选中人员']"
          @change="person_handleChange"
          :data="person.data"
        ></el-transfer>
        <el-button class="saveBtn" @click="new_save" type="primary">保存设置</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "editCustom",
  data() {
    return {
      customName: "",
      scHeight: "",
      options: [{
          value: '1',
          label: '本单位'
        }, {
          value: '2',
          label: '徐州市第一中学'
        }, {
          value: '3',
          label: '徐州市第二中学'
        }, {
          value: '4',
          label: '徐州市第三中学'
        }],
        selectedSchool: '1',
      person: {
        data: [
          {
            key: 1,
            label: "李依依 (徐州一中--信息部)"
          },
          {
            key: 2,
            label: "赵信 (徐州一中--信息部)"
          },
          {
            key: 3,
            label: "赵信 (徐州一中--教务处)"
          },
          {
            key: 4,
            label: "李依依 (徐州一中--教务处)"
          },
          {
            key: 5,
            label: "李依依 (徐州一中--高二年级部)"
          }
        ],
        value: [1]
      },
    };
  },
  mounted() {
    this.setheight();
  },
  props:{
    id:String
  },
  methods: {
    setheight: function() {
      let me = this;
      //   let thisheight = this.$refs.mianHeight.style.offsetHeight;
      let thisheight = window.getComputedStyle(me.$refs.mianHeight).height;
      let scHeight = parseInt(thisheight) - 175 + "px";
      me.scHeight = scHeight;
    },
    person_handleChange(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
    new_save(){
        console.log(this.person.value)
    },
    new_select(){
        if(this.selectedSchool == "3"){
            this.person.data=[
          {
            key: 6,
            label: "李依依 (徐州二中--信息部)"
          },
          {
            key: 7,
            label: "赵信 (徐州二中--信息部)"
          },
          {
            key: 8,
            label: "赵信 (徐州二中--教务处)"
          },
          {
            key: 9,
            label: "李依依 (徐州二中--教务处)"
          },
          {
            key: 10,
            label: "李依依 (徐州二中--高二年级部)"
          }
        ]
        }else if(this.selectedSchool == "1"){
            this.person.data=[
          {
            key: 1,
            label: "李依依 (徐州一中--信息部)"
          },
          {
            key: 2,
            label: "赵信 (徐州一中--信息部)"
          },
          {
            key: 3,
            label: "赵信 (徐州一中--教务处)"
          },
          {
            key: 4,
            label: "李依依 (徐州一中--教务处)"
          },
          {
            key: 5,
            label: "李依依 (徐州一中--高二年级部)"
          }
        ]
        }else{
            this.person.data=[];
        }
    }
  }
};
</script>

<style>
</style>
