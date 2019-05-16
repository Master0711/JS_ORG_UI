<template>
  <div style="max-width: 775px;height: 500px;padding:0px 10px;box-sizing: border-box;display: flex;flex-direction: column;
    justify-content: center;align-items: center;">
    <div style="display: flex;padding: 0 10px;">
      <div>
        <div style="width:250px;display:flex;padding-left:150px;">
          <img src="static/image/riderecord.jpg">
        </div>
      </div>
      <div style="padding: 10px;margin-right: 10px;margin-top: 5px;display: flex;flex-direction: row-reverse;">
        <el-tag type="danger" class="tag" @click="show = 4">退票审核</el-tag>
        <el-tag class="tag" @click="show = 3">已结束订单</el-tag>
        <el-tag type="info" class="tag" @click="show = 2">待审核订单</el-tag>
        <el-tag type="success" class="tag" @click="show = 1">进行中订单</el-tag>
      </div>
    </div>
    <el-table :data="unfinish.filter(data => !search || data.trainName.toLowerCase().includes(search.toLowerCase()))"
      style="width: 740px;" v-show="show == '1'">
      <el-table-column label="trainName" prop="trainName"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="startingpoint" prop="startingpoint"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="destination" prop="destination"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="departuretime" prop="departuretime"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="count" prop="count"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="trainName" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="showRefundgWindow(scope.row)" style="width: 100px;">Refund</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="Moderated.filter(data => !search || data.trainName.toLowerCase().includes(search.toLowerCase()))"
      style="width: 740px;" v-show="show == '2'">
      <el-table-column label="trainName" prop="trainName"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="startingpoint" prop="startingpoint"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="destination" prop="destination"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="departuretime" prop="departuretime"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="count" prop="count"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="trainName" />
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="finish.filter(data => !search || data.trainName.toLowerCase().includes(search.toLowerCase()))"
      style="width: 740px;" v-show="show == '3'">
      <el-table-column label="trainName" prop="trainName"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="startingpoint" prop="startingpoint"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="destination" prop="destination"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="departuretime" prop="departuretime"></el-table-column>
      <el-table-column style="padding-left: 5px;" label="count" prop="count"></el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="trainName" />
        </template>
      </el-table-column>
    </el-table>
    <el-table :data="refundList.filter(data => !search || data.trainName.toLowerCase().includes(search.toLowerCase()))"
            style="width: 740px;" v-show="show == '4'">
            <el-table-column label="trainName" prop="trainName"></el-table-column>
            <el-table-column style="padding-left: 5px;" label="startingpoint" prop="startingpoint"></el-table-column>
            <el-table-column style="padding-left: 5px;" label="destination" prop="destination"></el-table-column>
            <el-table-column style="padding-left: 5px;" label="departuretime" prop="departuretime"></el-table-column>
            <el-table-column style="padding-left: 5px;" label="count" prop="count"></el-table-column>
            <el-table-column align="right">
              <template slot="header" slot-scope="scope">
                <el-input v-model="search" size="mini" placeholder="trainName" />
              </template>
              <template slot-scope="scope">
                退票审核中
              </template>
            </el-table-column>
          </el-table>
    <div id="Refundwindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 35px;">{{trainName}}
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -20px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xEBDA;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            退票缘由 :
          </span>
          <span
            style="width: 200px;text-align: center;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            <el-input placeholder="退票缘由" suffix-icon="el-icon-date" v-model="reason"
              style="width: 200px;font-size: 10px;margin-left: 20px;" size="small"></el-input>
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 35px;width: 25%;padding-left: 200px;">
          <el-button type="primary" plain @click="Refundticket">确认退票</el-button>
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
    name: 'rideRecord',
    data() {
      return {
        show: '1',
        search: '',
        Moderated: [],
        unfinish: [],
        finish: [],
        reason: '',
        trainName: '',
        bookingID: '',
        refundList:'',
      }
    },
    methods: {
      getBookingList() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/train/getInBookingList",
            data: {}
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.Moderated = res.data.Moderated,
                model.unfinish = res.data.unfinish,
                model.finish = res.data.finish,
                model.refundList = res.data.refundList
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
      showRefundgWindow(row) {
        this.trainName = row.trainName;
        this.bookingID = row.bookingID;
        layer.open({
          type: 1,
          skin: 'layer_bg',
          area: ['450px', '250px'],
          title: 'Refund ticket',
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $('#Refundwindow'),
        });
      },
      Refundticket() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/train/refundticket",
            data: {
              bookingID: model.bookingID,
              reason: model.reason,
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
      this.getBookingList();
    },
  }

</script>
