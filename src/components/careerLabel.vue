<template>
  <div style="width: 800px;height: 500px;padding:0px 10px;display:flex;flex-direction: column;
    align-items: center;">
    <div style="display:flex;align-items: center;justify-content: center;">
      <img src="static/image/careerlabel.jpg">
    </div>
    <div style="margin-top: 20px;display: flex;flex-direction: column;justify-content: center;align-items: center;">
      <div
        style="font-family: lpc;margin-top: 5px;margin-left: -82px;text-align: center;display: flex;align-items: center;">
        <span style="font-family: lpc;font-size: 20px;text-align: center;">
          &#xE113;
        </span>
        <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          友情提示 :选择你想从事的职业标签，我们将以此作为推送就业信息的依据
        </span>
      </div>
      <div
        style="font-family: lpc;margin-top: 5px;margin-left: -82px;text-align: center;display: flex;align-items: center;">
        <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          职业标签目前尚且未完整，如果没用你想选择的标签，可以全选或
        </span>
      </div>
      <div
        style="font-family: lpc;margin-top: 5px;margin-left: -82px;text-align: center;display: flex;align-items: center;">
        <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          不选，我们将为你全部推送，以供你选择。当然，后续你也可以进行更改
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
      <div style="font-family: lpc;margin-top: 15px;text-align: center;display: flex;align-items: center;
            flex-direction: column;width: 80%;">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选
        </el-checkbox>
        <div style="margin: 5px 0;"></div>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <el-checkbox style="margin-right: 10px;padding: 5px;max-width: 300px;" v-for="city in cities" :label="city"
            :key="city">{{city}}</el-checkbox>
        </el-checkbox-group>
      </div>
      <el-button @click="setlabel" style="margin-top: 30px;margin-left: 200px;">确定标签</el-button>
      <div
        style="font-family: lpc;margin-top: 25px;margin-left: -82px;text-align: center;display: flex;align-items: center;">
        <span style="margin-left: 10px;font-size: 13px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">
          目前标签：{{label}}
        </span>
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
    name: 'careerLabel',
    data() {
      return {
        checkAll: false,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true,
        label: '',
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      },
      setlabel() {
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/employment/setlabel',
          data: {
            label: this.checkedCities,
          }
        }).then((res) => {
          if (res.data.status == "success") {
            this.$notify({
              title: res.data.status,
              message: "添加职业标签成功！",
              type: 'success'
            });
            this.getlabel();
          }
          if (res.data.status == "someerror") {
            this.$notify.info({
              title: res.data.status,
              message: "服务器内部错误，请稍后重试！",
            });
          }
        }).catch((err) => {
          this.$notify.error({
            title: 'error',
            message: '服务器开小差了，请稍后重试!'
          });
        });
      },
      getlabel() {
        this.axios({
          method: "POST",
          url: 'http://localhost:8080/ssm/employment/getlabel',
          data: {}
        }).then((res) => {
          if (res.data.status == "success") {
            this.$notify({
              title: res.data.status,
              message: "获取职业标签成功！",
              type: 'success'
            });
            this.label = res.data.label;
          }
          if (res.data.status == "someerror") {
            this.$notify.info({
              title: res.data.status,
              message: "服务器内部错误，请稍后重试！",
            });
          }
        }).catch((err) => {
          this.$notify.error({
            title: 'error',
            message: '服务器开小差了，请稍后重试!'
          });
        });
      },
    },
    mounted() {
      this.getlabel();
    }
  }

</script>
