<template>
    <div>
        <!--<el-row>
        <el-col :span="24"><ribbon_title></ribbon_title></el-col>
    </el-row>-->
        <el-row>
            <el-col :span="24" style="text-align:center"><ribbon_bar></ribbon_bar></el-col>
        </el-row>
        <el-row>
            <router-view/>
        </el-row>
        <!--<el-row style="height:55px">
            <prepage></prepage>
        </el-row>
        <el-row>
            <anarticle></anarticle>
        </el-row>
        <el-row style="height:55px">
            <nxtpage></nxtpage>
        </el-row>-->
    </div>
</template>

<script>
    import ribbon_bar from './gadget/navigation'
    import ribbon_title from './gadget/title'
    //import anarticle from './anarticle'
    //import nxtpage from './gadget/nxtpage'
    //import prepage from './gadget/prepage'
    export default {
        name: 'Main',
        components: {
            ribbon_bar,
            //ribbon_title,
            //anarticle,
            //nxtpage,
            //prepage,
        }
    }
</script>

<style scoped>
</style>