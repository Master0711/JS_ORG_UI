<template>
  <div style="width: 850px;height: 500px;padding:0px 10px;box-sizing: border-box;display: flex;flex-direction: column;
        justify-content: center;align-items: center;">
    <div style="display: flex;padding: 0 10px;">
      <div style="display:flex;margin-left:-80px;">
        <img src="static/image/lecruitmentlist.jpg">
      </div>
    </div>
    <el-table :data="reptileList.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;" max-height="480">
      <el-table-column label="title" prop="title"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="time" prop="time"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="location" prop="location"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="招聘简章">
        <template slot-scope="scope">
          <a :href="scope.row.url" target="view_frame">查看招聘简章</a>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="title" />
        </template>
        
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'showEmployment',
    data() {
      return {
        reptileList: [],
        search: '',
      }
    },
    methods: {
      getEmploymentList() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/employment/getreptileListUnCheck",
            data: {}
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.reptileList = res.data.reptileList;
            }
            if (res.data.status == "someerror") {
              model.$notify.info({
                title: res.data.status,
                message: "服务器内部错误，请稍后重试！"
              });
            }
          })
          .catch(function (err) {
            model.$notify.error({
              title: "error",
              message: "服务器开小差了，请稍后重试!"
            });
          });
      }
    },
    mounted() {
      this.getEmploymentList();
    },
  }

</script>
