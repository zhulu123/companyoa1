<template>
    <div class="newNotice">
        <div class="newNoticeM">
            <el-form ref="form" :model="form" :label-position="labelPosition" label-width="120px">
                <el-form-item label="通知标题">
                    <el-input v-model="form.title" style="width:500px;"></el-input>
                </el-form-item>
                <el-form-item label="通知类型">
                    <el-select v-model="form.noticeType" placeholder="请选择活动区域">
                        <el-option label="校文件" value="1"></el-option>
                        <el-option label="局文件" value="2"></el-option>
                        <el-option label="内部文件" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="文件重要性">
                    <el-select v-model="form.importance" placeholder="请选择活动区域">
                        <el-option label="一般" value="1"></el-option>
                        <el-option label="重要" value="2"></el-option>
                        <el-option label="紧急" value="3"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="接收人员">
                   <div class="peoList">
                       <a class="choPeo" @click="dialogVisible = true"><i class="icon iconfont iconrenyuanzengjia"></i></a>
                   </div>
                </el-form-item>
                <el-form-item label="通知正文">
                </el-form-item>
            </el-form>
            <div class="clear"></div>
            <quill-editor 
                v-model="content" 
                ref="myQuillEditor"
                :options="editorOption" 
                @blur="onEditorBlur($event)" 
                @focus="onEditorFocus($event)"
                @change="onEditorChange($event)">
            </quill-editor>
            <div class="bts"><el-button type="primary">提交</el-button><el-button>取消</el-button></div>
        </div>

        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
            </el-dialog>
        
    </div>
</template>

<script>

import {quillEditor} from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    name:'newNotice',
    components:{
        quillEditor
    },
    data() {
        return {
            content:'',
            editorOption:{},
            labelPosition:'right',
            dialogVisible:false,
            form:{
                title:'',
                noticeType:'',
                importance:'',
                receiver:''
            }
        }
    },
    methods:{
        onEditorBlur(quill){
            console.log(quill)
        },
        onEditorFocus(quill){
            console.log(quill)
        },
        onEditorChange(quill){
            console.log(quill)
        },
        onSubmit(){

        },
        handleClose(){
            this.$confirm('确认关闭？')
            .then(_ => {
                done();
            })
            .catch(_ => {});
        }
    }
}
</script>

<style>

</style>
