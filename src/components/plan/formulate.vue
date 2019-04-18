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
                <h2>{{valueSemester}}{{valueWeek}}周计划制定</h2>
                <ul>
                    <li>
                        <em>正文内容</em>
                        <div class="Content">
                            <quill-editor 
                                v-model="content" 
                                ref="myQuillEditor"
                                :options="editorOption" 
                                @blur="onEditorBlur($event)" 
                                @focus="onEditorFocus($event)"
                                @change="onEditorChange($event)">
                            </quill-editor>
                        </div>
                    </li>
                    
                </ul>
                <div class="bts"><el-button type="primary">提交</el-button><el-button>取消</el-button></div>

            </div>
        </div>
    </div>
</template>

<script>
import {quillEditor} from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    name:'formulate',
    components:{
        quillEditor
    },
    data() {
        return {
            valueSemester:'',
            valueWeek:'',
            optionsSemester:[
                {value:'2018~2019第一学期', label:'2018~2019第一学期'},
                {value:'2018~2019第二学期', label:'2018~2019第二学期'},
                {value:'2019~2020第一学期', label:'2019~2020第一学期'},
                {value:'2019~2020第二学期', label:'2019~2020第二学期'}
            ],
            optionsWeek:[
                {value:'第一周', label:'第一周'},
                {value:'第二周', label:'第二周'},
                {value:'第三周', label:'第三周'},
                {value:'第四周', label:'第四周'}
            ],
        }
    },
    mounted() {
        this.valueSemester = this.optionsSemester[0].value
        this.valueWeek = this.optionsWeek[0].value
    },
    methods:{

    }
}
</script>

<style>

</style>
