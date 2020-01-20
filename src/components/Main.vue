<template>
    <div>
        <el-row>
            <el-col :span="24"><ribbon_title></ribbon_title></el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="text-align:center"><ribbon_bar></ribbon_bar></el-col>
        </el-row>
        <el-row>
            <el-col :span="16" :offset="4"><div id="main">hi</div></el-col>
        </el-row>
    </div>
</template>

<script>
    import ribbon_bar from './gadget/navigation'
    import ribbon_title from './gadget/title'
    export default {
        name: 'Main',
        components: {
            ribbon_bar, ribbon_title
        }
    }
</script>

<style scoped>
    #main{
        text-align: left;
        height:1000px;
        background-color: aquamarine;
    }
</style>