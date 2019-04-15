<template>
    <div class="inbox">
        <div class="inboxM">
            <el-tabs v-model="activeName" :tab-position="tabPosition" @tab-click="handleClick">
                <el-tab-pane label="全部" name="first">
                    <div class="tabContent">
                        <div class="topTool">
                            <el-input v-model="input" style="width:300px; margin:0 5px 0 0;" size="small" placeholder="请输入内容"></el-input><el-button size="small" type="primary">主要按钮</el-button>
                        </div>
                    </div>
                </el-tab-pane>
                <el-tab-pane label="已读" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="未读" name="third">角色管理</el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script>
export default {
    name:'inbox',
    data() {
        return {
            activeName:'second',
            tabPosition:'left',
            input:''
        }
    },
}
</script>

<style>

</style>
