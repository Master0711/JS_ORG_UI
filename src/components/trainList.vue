<template>
  <div style="max-width: 760px;padding: 10px;">
    <el-table :data="trainList.filter(data => !search || data.trainName.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%">
      <el-table-column label="trainName" prop="trainName"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="startingpoint" prop="startingpoint"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="destination" prop="destination"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="departuretime" prop="departuretime"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="车次关键字" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="showBookingWindow(scope.row)" style="width: 100px;">BOOKING</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="bookingwindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">{{trainName}}
        </div>
        <div style="padding: 10px;">
          <img src="static/image/QRcode.jpg" style="width: 250px;height: 100px;">
        </div>
        <div
          style="font-family: lpc;margin-top: 5px;margin-left: -158px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xED28;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            发车时间 : {{departuretime}}
          </span>
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -131px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xF61D;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            报名截止时间 : {{deadline}}
          </span>
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -117px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xF167;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            逾期退半票时间 : {{refundtime}}
          </span>
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -95px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xF093;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            出发点 :
          </span>
          <span
            style="width: 200px;text-align: center;margin-left: -20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            {{startingpoint}}
          </span>
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -95px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xF094;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            目的地 :
          </span>
          <span
            style="width: 200px;text-align: center;margin-left: -20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            {{destination}}
          </span>
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -80px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xEBDA;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            预定票数 :
          </span>
          <span
            style="width: 200px;text-align: center;margin-left: -20px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            <el-input placeholder="输入数量" suffix-icon="el-icon-date" v-model="count"
              style="width: 100px;font-size: 10px;margin-left: 20px;" size="small"></el-input>
          </span>
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -80px;text-align: center;display: flex;align-items: center;">
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            扫码上图二维码付款,备注学号、票数,等待订票审核 
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 35px;width: 25%;padding-left: 200px;">
          <el-button type="primary" plain @click="bookingTicket">立即预定</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  body .layer_bg .layui-layer-content {
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }

  body .layer_bg .layui-layer-title {
    background-color: rgba(173, 171, 171, 0.205);
  }

</style>
<script>
  export default {
    name: 'trainList',
    data() {
      return {
        trainList: [],
        search: '',
        trainid:'',
        trainName: '',
        startingpoint: '',
        destination: '',
        departuretime: '',
        deadline: '',
        refundtime: '',
        releasetime: '',
        count: '',
      }
    },
    methods: {
      getTrainList() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/train/getTrainList",
            data: {}
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.trainList = res.data.trainList1;
              console.log(model.trainList);
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
      showBookingWindow(row) {
        console.log(row);
        this.trainid = row.uuid;
        this.trainName = row.trainName;
        this.startingpoint = row.startingpoint;
        this.destination = row.destination;
        this.departuretime = row.departuretime;
        this.deadline = row.deadline;
        this.refundtime = row.refundtime;
        this.releasetime = row.releasetime;
        layer.open({
          type: 1,
          skin: 'layer_bg',
          area: ['450px', '550px'],
          title: 'Booking ticket',
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $('#bookingwindow'),
        });
      },
      bookingTicket(){
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/train/addbooking",
            data: {
              trainid:this.trainid,
              count:this.count,
            }
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.$notify({
                title: 'Tips',
                message: res.data.message,
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
      this.getTrainList();
    },
  }

</script>
