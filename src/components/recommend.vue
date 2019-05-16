<template>
  <div style="max-width: 750px;height: 500px;padding:0px 10px;display:flex;flex-direction: column;
    align-items: center;">
    <div style="display:flex;align-items: center;justify-content: center;">
      <img src="static/image/JobOffers.jpg">
    </div>
    <el-table :data="list.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;padding-left: 30px;" max-height="480">
      <el-table-column label="title" prop="title"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="time" prop="time"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="location" prop="location"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="招聘简章">
        <template slot-scope="scope">
          <a :href="scope.row.url">查看招聘简章</a>
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
    name: 'recommend',
    data() {
      return {
        list: [],
        search:'',
      }
    },
    methods: {
      getcheckedlist() {
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/employment/getrecommendedlist",
            data: {}
          })
          .then((res) => {
            if (res.data.status == "success") {
              this.list = res.data.list;
            }
            if (res.data.status == "someerror") {
              this.$notify.info({
                title: res.data.status,
                message: "服务器内部错误，请稍后重试！"
              });
            }
          })
          .catch((err) => {
            this.$notify.error({
              title: "error",
              message: "服务器开小差了，请稍后重试!"
            });
          });
      },
    },
    mounted() {
      this.getcheckedlist();
    },
  }

</script>
