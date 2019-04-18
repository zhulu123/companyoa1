<template>
    <div class="formulate">
        <div class="formulateM">
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
            </div>

            <div class="formulateCon">
                <h2>{{}}{{}}周计划制定</h2>
                <ul>
                    <li>
                        <em>正文内容</em>
                        <div class=""></div>
                    </li>
                    
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'formulate',
    data() {
        return {
            valueSemester:'',
            valueWeek:'',
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
        }
    },
}
</script>

<style>

</style>
