<template>
    <div class="indexNotice posA posCenter bg">
        <noticetop></noticetop>
        <!-- <noticeleft></noticeleft> -->
        <div class="content">
            <router-view></router-view>
        </div>
        
    </div>
</template>

<script>
import top from './top'
export default {
    name:'indexNotice',
    components:{
        'noticetop':top
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
