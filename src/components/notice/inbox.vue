<template>
    <div class="inbox">
        <div class="inboxM">
            <el-tabs v-model="activeName" :tab-position="tabPosition" @tab-click="handleClick">
                <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
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
            tabPosition:'left'
        }
    },
}
</script>

<style>

</style>
