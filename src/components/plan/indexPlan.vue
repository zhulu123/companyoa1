<template>
    <div class="indexPlan posA posCenter">
        <plantop></plantop>
        <div class="content">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import top from './top'
export default {
    name:'indexplan',
    components:{
        'plantop':top
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
