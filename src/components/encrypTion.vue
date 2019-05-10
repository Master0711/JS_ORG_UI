<template>
  <div>
    <el-input style="width: 200px;" placeholder="请输入内容" v-model="password" clearable>
    </el-input>
    <el-button type="danger" @click="submit">危险按钮</el-button>
  </div>
</template>

<script>
  export default {
    name: 'encrypTion',
    data() {
      return {
        password: '',
        publickey: '',
        encryptData: '',
      }
    },
    methods: {
      getpublickey() {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/user/getpublickey",
            data: {}
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.publickey = res.data.publickey;
              console.log(model.publickey);

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
      submit() {
        var encrypt = new JSEncrypt();
        encrypt.setPublicKey(this.publickey);
        console.log(this.publickey);
        this.encryptData = encrypt.encrypt(this.password);
        console.log(this.encryptData);

        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/user/checkPassword",
            data: {
              password: model.encryptData,
            }
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.publickey = res.data.publickey;
              console.log(model.publickey);

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
      this.getpublickey();
    },
  }

</script>
