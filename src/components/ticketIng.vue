<template>
    <div style="width: 850px;height: 500px;padding:0px 10px;box-sizing: border-box;display: flex;flex-direction: column;
    align-items: center;">
        <div style="display: flex;padding: 0 10px;">
      <div>
        <div style="width:250px;display:flex;padding-left:150px;">
          <img src="static/image/ticketing.jpg">
        </div>
      </div>
      <div style="padding: 10px;margin-right: 10px;margin-top: 5px;display: flex;flex-direction: row-reverse;">
        <el-tag class="tag" @click="show = 3">查看车次</el-tag>
        <el-tag type="info" class="tag" @click="show = 2">退票审核</el-tag>
        <el-tag type="success" class="tag" @click="show = 1">购票审核</el-tag>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    name:'ticketIng',
    data () {
        return {
            show:'1',
        }
    },
    methods: {
        
    },
    mounted () {
        
    },
}
</script>
