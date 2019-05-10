<template>
  <div style="width: 800px;height: 500px;padding:0px 10px;display:flex;flex-direction: column;
    align-items: center;">
    <div style="display:flex;align-items: center;justify-content: center;">
      <img src="static/image/memberinformation.jpg">
    </div>
    <el-table :data="memberlist" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="学号">
              <span>{{ props.row.student_id }}</span>
            </el-form-item>
            <el-form-item label="姓名">
              <span>{{ props.row.realname }}</span>
            </el-form-item>
            <el-form-item label="学院">
              <span>{{ props.row.college }}</span>
            </el-form-item>
            <el-form-item label="专业">
              <span>{{ props.row.discipline }}</span>
            </el-form-item>
            <el-form-item label="年级">
              <span>{{ props.row.grade }}</span>
            </el-form-item>
            <el-form-item label="邮件">
              <span>{{ props.row.email }}</span>
            </el-form-item>
            <el-form-item label="手机">
              <span>{{ props.row.telephone }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="Student ID" prop="student_id">
      </el-table-column>
      <el-table-column label="姓名" prop="realname">
      </el-table-column>
      <el-table-column label="学院" prop="college">
      </el-table-column>
    </el-table>
  </div>
</template>

<style>
    .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
  export default {
    name: 'memberInformation',
    data() {
      return {
        memberlist: [],
      }
    },
    methods: {
      getmemberlist() {
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/user/getmemberInformation",
            data: {}
          })
          .then((res) => {
            if (res.data.status == "success") {
              this.memberlist = res.data.memberlist;
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
      this.getmemberlist();
    },
  }

</script>
