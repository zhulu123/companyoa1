<template>
    <div class="indexSystem posA posCenter">
        <systemtop></systemtop>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import top from './top'
export default {
    name:'indexSystem',
    components:{
        'systemtop':top
    },
    data() {
        return {
            
        }
    },
    methods:{
        
    }
}
</script>

<style>

</style>
