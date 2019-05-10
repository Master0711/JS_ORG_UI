<template>
  <div style="width: 800px;height: 500px;padding:0px 10px;display:flex;flex-direction: column;
    align-items: center;">
    <div style="display:flex;align-items: center;justify-content: center;">
      <img src="static/image/registrationreview.jpg">
    </div>
    <el-table :data="registerlist.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
      style="width: 95%">
      <el-table-column label="学号" prop="student_id">
      </el-table-column>
      <el-table-column label="姓名" prop="realname">
      </el-table-column>
      <el-table-column label="学院" prop="college">
      </el-table-column>
      <el-table-column label="年级" prop="grade">
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="college" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="showCheckWindow(scope.row)">Handle</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="registercheckwindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">退票处理
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -20px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xEBDA;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            申请结果 :
          </span>
          <span
            style="width: 200px;text-align: center;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            <template>
              <el-radio v-model="result" label="true">成功</el-radio>
              <el-radio v-model="result" label="false">失败</el-radio>
            </template>
          </span>
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -20px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xEBDA;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            处理缘由 :
          </span>
          <span
            style="width: 200px;text-align: center;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            <el-input placeholder="处理缘由" suffix-icon="el-icon-date" v-model="reason"
              style="width: 200px;font-size: 10px;margin-left: 20px;" size="small"></el-input>
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 35px;width: 25%;padding-left: 200px;">
          <el-button type="primary" plain @click="checkregister">确认</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'registrationReview',
    data() {
      return {
        registerlist: [],
        search: '',
        result: '',
        reason: 'success',
        student_id: '',
      }
    },
    methods: {
      getregisterlist() {
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/user/getregisterlist",
            data: {}
          })
          .then((res) => {
            if (res.data.status == "success") {
              this.registerlist = res.data.registerlist;
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
      showCheckWindow(param) {
        this.student_id = param.student_id;
        layer.open({
          type: 1,
          skin: "layer_bg",
          area: ["450px", "300px"],
          title: "Registration review",
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $("#registercheckwindow")
        });
      },
      checkregister() {
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/user/checkregister",
            data: {
              result: this.result,
              reason: this.reason,
              student_id: this.student_id,
            }
          })
          .then((res) => {
            if (res.data.status == "success") {
              this.$notify({
                title: 'success',
                message: '审核成功！',
                type: 'success'
              });
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
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
    mounted() {
      this.getregisterlist();
    },
  }

</script>
