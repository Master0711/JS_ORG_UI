<template>
  <div style="width: 850px;height: 500px;padding:0px 10px;box-sizing: border-box;display: flex;flex-direction: column;
        justify-content: center;align-items: center;">
    <div style="display: flex;padding: 0 10px;">
      <div style="display:flex;margin-left:-80px;">
        <img src="static/image/informationreview.jpg">
      </div>
    </div>
    <el-table :data="reptileList.filter(data => !search || data.title.toLowerCase().includes(search.toLowerCase()))"
      style="width: 100%;" max-height="480">
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
        <template slot-scope="scope">
          <el-button size="mini" @click="showLabelWindow(scope.row)" style="width: 100px;">Check</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div id="labelWindow" style="padding: 10px;display: none;">
      <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
        <div style="font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;font-size: 25px;">{{title}}
        </div>
        <div
          style="font-family: lpc;margin-top: 35px;margin-left: -20px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xEBDA;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            审核结果 :
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
            审核缘由 :
          </span>
          <span
            style="width: 200px;text-align: center;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            <el-input placeholder="处理缘由" suffix-icon="el-icon-date" v-model="reason"
              style="width: 200px;font-size: 10px;margin-left: 20px;" size="small"></el-input>
          </span>
        </div>
        <div style="font-family: lpc;margin-top: 15px;text-align: center;display: flex;align-items: center;">
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            审核未通过无需添加行业标签、可直接跳过
          </span>
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -193px;text-align: center;display: flex;align-items: center;">
          <span style="font-family: lpc;font-size: 20px;text-align: center;">
            &#xEBDA;
          </span>
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            添加行业标签 :
          </span>
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;text-align: center;display: flex;align-items: center;flex-direction: column;">
          <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选
          </el-checkbox>
          <div style="margin: 5px 0;"></div>
          <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox style="margin-right: 10px;padding: 5px;max-width: 300px;" v-for="city in cities" :label="city"
              :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div
          style="font-family: lpc;margin-top: 15px;margin-left: -193px;text-align: center;display: flex;align-items: center;">
          <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
            暂时没有符合的请选择其他
          </span>
        </div>
        <div style="text-align: center;display: flex;margin-top: 15px;width: 25%;padding-left: 250px;">
          <el-button type="primary" plain @click="updateCheck">确认</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const cityOptions = ['销售', '房产中介', '销售支持', '网络客服', '产品经理', '设计', '运营', '前端开发',
    '后端开发', '移动开发', '测试', '运维/技术支持', '大数据', '通信技术', '硬件开发', '人工智能',
    '生产/运营', '生物/制药', '医疗器械', '电子/电器', '机械', '化工', '服装', '皮革',
    '食品', '教育/培训', '律师/法务', '翻译', '银行', '保险', '证券', '房产开发',
    '建筑工程', '人力资源', '行政/后勤', '文秘', '其他'
  ];
  export default {
    name: "employmentReview",
    data() {
      return {
        reptileList: [],
        search: '',
        reptileid: '',
        label: [],
        result: '',
        reason: '',
        title: '',
        checkAll: false,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true
      };
    },
    methods: {
      getReptileList() {
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
      },
      showLabelWindow(row) {
        this.reptileid = row.reptileid;
        this.title = row.title;
        layer.open({
          type: 1,
          skin: 'layer_bg',
          area: ['450px', '500px'],
          title: 'Information review',
          shade: 0.3,
          maxmin: true,
          anim: 1,
          content: $('#labelWindow'),
        })
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      updateCheck() {
        console.log(this.checkedCities);
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/employment/addTips",
            data: {
              reptileid: model.reptileid,
              result: model.result,
              reason: model.reason,
              label: model.checkedCities,
            }
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.$notify({
                title: 'Tips',
                message: "处理成功",
                type: 'success'
              });
              model.getReptileList();
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
      this.getReptileList();
    }
  };

</script>
