<template>
  <div style="max-width: 750px;height: 500px;padding:0px 10px;display:flex;flex-direction: column;
    align-items: center;">
    <div style="display:flex;align-items: center;justify-content: center;">
      <img src="static/image/memberinformation.jpg">
    </div>
    <el-table :data="memberlist" style="width: 100%" max-height="480">
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
      <el-table-column label="">
        <template slot-scope="scope" style="display: flex;">
          <el-button size="mini" @click="showupgrade(scope.row)">权限更改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="upgradewindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">权限更改
        </div>
        <div style="padding: 10px;">
          <img src="static/image/playing-cards2-1311940.jpg" style="width: 250px;height: 100px;">
        </div>
        <div style="font-family: lpc;margin-top: 10px;text-align: center;display: flex;
            align-items: center;width:80%;padding-left:60px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xED28;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            姓名 :{{name}}
          </span>
        </div>
        <div style="font-family: lpc;margin-top: 10px;text-align: center;display: flex;
            align-items: center;width:80%;padding-left:60px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xED28;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            学号 :{{studentid}}
          </span>
        </div>
        <div style="font-family: lpc;margin-top: 10px;text-align: center;display: flex;
            align-items: center;width:80%;padding-left:60px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xED28;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            权限 :
            <span style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;" v-if="oldrole == 1">普通会员</span>
            <span style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;" v-if="oldrole == 2">系内理事会员</span>
            <span style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;" v-if="oldrole == 3">高级理事会员</span>
          </span>
        </div>
        <div style="font-family: lpc;margin-top: 10px;text-align: center;display: flex;
            align-items: center;width:80%;padding-left:60px;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xED28;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            修改权限 :
          </span>
        </div>
        <div style="font-family: lpc;margin-top: 20px;text-align: center;display: flex;
            align-items: center;width:80%;">
          <el-radio-group v-model="newrole">
            <el-radio :label="1" style="margin-left: 20px;margin-right:10px;">普通会员</el-radio>
            <el-radio :label="2" style="margin-right:10px;">系内理事</el-radio>
            <el-radio :label="3" style="margin-right:0px;">高级理事</el-radio>
          </el-radio-group>
        </div>
        <div style="text-align: center;display: flex;margin-top: 20px;width: 25%;padding-left: 230px;">
          <el-button type="primary" plain @click="" size="small">确认</el-button>
        </div>
      </div>
    </div>
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
        studentid: '',
        name: '',
        oldrole: '',
        newrole: '',
      }
    },
    methods: {
      getmemberlist() {
        this.axios({
            method: "POST",
            // headers: {
            //   'Content-Type': 'multipart/form-data'
            // },
            withCredentials: true,
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
      showupgrade(param) {
        this.studentid = param.student_id;
        this.oldrole = param.role;
        this.name = param.realname;
        this.newrole = param.role;
        layer.open({
          type: 1,
          skin: "layer_bg",
          area: ["400px", "450px"],
          title: "Permission change",
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $("#upgradewindow")
        });
      },
    },
    mounted() {
      this.getmemberlist();
    },
  }

</script>
