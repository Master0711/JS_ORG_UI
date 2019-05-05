<template>
  <div style="padding: 10px;box-sizing: border-box;display: flex;flex-direction: column;align-items: center;">
    <div style="display: flex;padding: 0 10px;margin-left: -100px;">
      <div style="width:210px;height: 50px;display:flex;">
        <img src="static/image/addtrain.jpg">
      </div>
      <img src="static/image/school-bus.png" style="width:84px;height:84px;margin-top: -10px;padding-left: 10px;">
    </div>
    <div style="width: 500px;height: 600px;padding: 10px;
        box-sizing: border-box;">
      <div style="margin-left: 20px;">
        <div style="display: flex;align-items: center;margin-top: 5px;">
          <img src="static/image/bus.png" style="margin-top: 3px;margin-left: 5px;width: 40px;height: 40px;">
          <span style="margin-top: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 20px;">车次名
            <el-input placeholder="请输入车次名称" suffix-icon="el-icon-date" size="medium"
              style="width: 170px;font-size: 10px;margin-left: 10px;" v-model="trainName"></el-input>
          </span>
        </div>
        <div style="display: flex;align-items: center;margin-top: 5px;">
          <span
            style="font-size: 20px;margin-top: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 20px;">出发地
          </span>
          <span
            style="margin-left: 170px;font-size: 20px;margin-top: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">目的地
          </span>
        </div>
        <div style="display: flex;align-items: center;margin-top: 5px;">
          <el-input placeholder="请输入出发地" suffix-icon="el-icon-date" size="medium"
            style="margin-left: -20px;width: 150px;font-size: 10px;" v-model="startingpoint"></el-input>
          <img src="static/image/destination.png" style="margin: 5px 10px 5px 15px;width: 50px;height: 50px;">
          <el-input placeholder="请输入目的地" suffix-icon="el-icon-date" size="medium"
            style="width: 150px;font-size: 10px;margin-left: 10px;" v-model="destination"></el-input>
        </div>
        <div style="display: flex;align-items: center;margin-top: 5px;">
          <img src="static/image/target-time.png" style="margin-top: 3px;width: 40px;height: 40px;">
          <span style="margin-top: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 20px;">出发时间
            <el-date-picker v-model="departuretime" type="date" placeholder="选择发车时间" size="medium"
              style="width: 150px;margin-left: 20px;">
            </el-date-picker>
          </span>
        </div>
        <div style="display: flex;align-items: center;margin-top: 5px;flex-direction: row-reverse;margin-right: 130px;">
          <img src="static/image/deadline.png" style="margin-top: 3px;margin-left: 5px;width: 40px;height: 40px;">
          <span style="margin-top: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 20px;">报名截止
            <el-date-picker v-model="deadline" type="date" placeholder="报名截止时间" size="medium"
              style="width: 150px;margin-left: 20px;">
            </el-date-picker>
          </span>
        </div>
        <div style="display: flex;align-items: center;margin-top: 5px;">
          <img src="static/image/debt.png" style="margin-top: 3px;width: 40px;height: 40px;">
          <span style="margin-top: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;margin-left: 20px;">预期仅退半票
            <el-date-picker v-model="refundtime" type="date" placeholder="预期仅退半票" size="medium"
              style="width: 150px;margin-left: 20px;">
            </el-date-picker>
          </span>
        </div>
        <div style="display: flex;align-items: center;margin-top: 5px;">
          <img src="static/image/coin.png" style="margin-left: 20px;width: 35px;height: 35px;">
          <el-input placeholder="单张票价" suffix-icon="el-icon-date" v-model="fare"
            style="width: 100px;font-size: 10px;margin-left: 20px;" size="medium"></el-input>
          <el-button type="primary" plain size="mini" @click="addtrain"
            style="margin-left: 50px;margin-top: 35px;height: 35px;min-width: 80px;">新增
          </el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'addTrain',
    data() {
      return {
        trainName: '',
        departuretime: '',
        deadline: '',
        refundtime: '',
        startingpoint: '',
        destination: '',
        fare: 0.00,
      }
    },
    methods: {
      addtrain() {
        if (this.trainName == '' || this.departuretime == '' || this.deadline == '' || this.refundtime == '' ||
          this.startingpoint == '' || this.destination == '' || this.fare == null) {
          this.$notify.info({
            title: 'Tips',
            message: '信息尚未填写完整'
          });
        } else {
          this.axios({
            method: "POST",
            url: 'http://localhost:8080/ssm/train/addTrain',
            data: {
                trainName:this.trainName,
                departuretime:this.departuretime,
                deadline:this.deadline,
                refundtime:this.refundtime,
                startingpoint:this.startingpoint,
                destination:this.destination,
                fare:this.fare,
            }
          }).then((res) => {
            if (res.data.status == "success") {
                this.$notify({
                title: 'success',
                message: '添加成功',
                type: 'success'
              });
            }
            if (res.data.status == "someerror") {
              this.$notify.info({
                title: res.data.status,
                message: "服务器内部错误，请稍后重试！",
              });
            }
          }).catch(function (err) {
            model.$notify.error({
              title: 'error',
              message: '服务器开小差了，请稍后重试!'
            });
          });
        }
      }

    },

  }

</script>
