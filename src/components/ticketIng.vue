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
    <el-table :data="bookingList.filter(data => !search || data.trainName.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%" v-show="show == '1'">
      <el-table-column label="client_id" prop="client_id"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="trainName" prop="trainName"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="departuretime" prop="departuretime"></el-table-column>
      <el-table-column style="padding-left: 10px;" label="count" prop="count"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="车次关键字" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="showCheckWindow(scope.row)" style="width: 100px;">PROCESS</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="refundList.filter(data => !search || data.trainName.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%" v-show="show == '2'">
      <el-table-column label="client_id" prop="client_id"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="trainName" prop="trainName"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="departuretime" prop="departuretime"></el-table-column>
      <el-table-column style="padding-left: 10px;" label="count" prop="count"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="车次关键字" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="showCheckRefundWindow(scope.row)" style="width: 100px;">PROCESS</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="checkWindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">申请处理
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
          <el-button type="primary" plain @click="processBooking">确认</el-button>
        </div>
      </div>
    </div>
    <div id="checkRefundWindow" style="padding: 10px;display: none;">
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
          <el-button type="primary" plain @click="processRefund">确认</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .tag {
    margin-left: 5px;
    cursor: pointer;
  }

</style>

<script>
  export default {
    name: "ticketIng",
    data() {
      return {
        show: "1",
        bookingList: [],
        refundList: [],
        search: '',
        reason: '',
        result: '',
        bookingid: '',
        refundid: '',
      };
    },
    methods: {
      getUnCheckList() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/train/getTicketingList",
            data: {}
          })
          .then(function (res) {
            if (res.data.status == "success") {
              (model.bookingList = res.data.bookingList),
              (model.refundList = res.data.refundList);
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
      },
      showCheckWindow(row) {
        this.bookingid = row.bookingid;
        layer.open({
          type: 1,
          skin: 'layer_bg',
          area: ['450px', '300px'],
          title: 'Processing application',
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $('#checkWindow'),
        })
      },
      showCheckRefundWindow(row) {
          console.log(row);
        this.refundid = row.refundid;
        layer.open({
          type: 1,
          skin: 'layer_bg',
          area: ['450px', '300px'],
          title: 'Processing application',
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $('#checkRefundWindow'),
        })
      },
      processBooking() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/train/processBooking",
            data: {
              bookingid: model.bookingid,
              result: model.result,
              reason: model.reason,
            }
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.$notify({
                title: 'Tips',
                message: "处理成功",
                type: 'success'
              });
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
      },
      processRefund() {
          console.log(this.refundid);
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/train/processRefund",
            data: {
              refundid: model.refundid,
              result: model.result,
              reason: model.reason,
            }
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.$notify({
                title: 'Tips',
                message: "处理成功",
                type: 'success'
              });
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
      },
    },
    mounted() {
      this.getUnCheckList();
    }
  };

</script>
