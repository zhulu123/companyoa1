<template>
    <div class="inedxhome posA posCenter bgMain" :style="{backgroundImage:'url('+bgMain+')',backgroundSize:100+'%'}">
        <div class="indexLeft">
            <el-tooltip class="item" effect="dark" content="消息" placement="right">
                <a><span class="icon iconfont iconxiaoxi3"></span></a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="事务" placement="right">
                <a><span class="icon iconfont iconwork-copy"></span></a>
            </el-tooltip>
            <el-tooltip class="item" effect="dark" content="个人设置" placement="right">
                <a><span class="icon iconfont iconyonghu1"></span></a>
            </el-tooltip>
        </div>

        <div class="desktop">
            <div class="functionList">
                <dl v-for="(n,index) in appList" :key="index">
                    <dt><router-link :to="{path:n.routerLink}"><img :src="n.imgUrl"></router-link></dt>
                    <dd>{{n.name}}</dd>
                </dl>
                <a class="setFunList" @click="openLayer"><span class="icon iconfont icontianjia"></span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'inedxhome',
    data() {
        return {
            bgMain:require('./../../static/images/main_bg12.jpg'),
            appList:[
                {name:'校周计划',imgUrl:require('./../assets/images/APP_44.png'),routerLink:'/indexPlan'},
                {name:'通知',imgUrl:require('./../assets/images/APP_49.png'),routerLink:'/indexNotice'},
                {name:'OA系统设置',imgUrl:require('./../assets/images/APP_58.png'),routerLink:'/indexNotice'}
            ]
        }
    },
    methods:{
        openLayer:function(){

        },
        jumpTo:function(link){
            this.$router.push({
                path:link
            })
        }
    }
}
</script>

<style>

</style>
