<template>
  <div style="max-width: 430px;max-height: 430px;display:flex;align-items:center;
    justify-content:center;flex-direction: column;background: rgba(226, 226, 226, 0.521);">
    <!-- <div style="height:310px;width:400px;display:flex;flex-direction:column;justify-content:space-between;">
      <div style="width:100%;height:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;">
        <div
          style="width:60%;height:80%;border:1px dashed #999;border-radius:4px;display:flex;align-items:center;justify-content:center;cursor:pointer;"
          @click="fileClick">
          <img src="static/image/upload.png" />
        </div>
      </div>
      <div style="width:100%;height:50%;display:flex;flex-direction:column;justify-content:center;align-items:center;">
        <div style="width:80%;height:80%;border:1px dashed #999;border-radius:4px;display:flex;align-items:center;
                                                justify-content:center;" @drop="drop($event)"
          @dragenter="dragenter($event)" @dragover="dragover($event)">
          或 将 文 件 拖 拽 至 此 处
        </div>
      </div>
    </div>
    <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none" />
    <div style="width:200px;height:75px;display:flex;justify-content:center;flex-direction:row;
                                align-items:center;">
      <span class="image_span" v-for="(item,index) of imgList">
        <span style="font-size:15px;z-index:999;display:flex;flex-direction:row-reverse;">
          <span style="color:red;cursor:pointer;font-family: lpc;" @click="fileDel(index)">&#xE711;</span>
        </span>
        <img :src="item.file.src" style="width:55px;height:55px;margin-top:-18px;cursor:pointer;"
          v-if="item.file.type =='image/jpeg'">
        <img :src='item.file.src' style="width:55px;height:55px;margin-top:-18px;cursor:pointer;"
          v-if="item.file.type =='image/png'">
      </span>
    </div>
    <button @click="upimage">dianji </button>-->
    <el-upload class="upload-demo" action="http://localhost:8080/ssm/uploadImage" :on-preview="handlePreview"
      :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed"
      :file-list="fileList" auto-upload="boolean">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
    <el-row>
        <el-button @click="upimage" size="small" type="primary">默认按钮</el-button>
      </el-row>
  </div>
</template>

<style>
  @font-face {
    font-family: lpc;
    src: url(../../static/font/segmdl2.ttf);
  }

  .image_span {
    padding-left: 10px;
    display: flex;
    flex-direction: column;
  }

</style>
<script>
  export default {
    name: "updateImage",
    data() {
      return {
        imgList: [],
        fileList:[],
      };
    },
    methods: {
      fileClick() {
        document.getElementById("upload_file").click();
      },
      fileChange(el) {
        if (!el.target.files[0].size) return;
        this.fileList(el.target);
        el.target.value = "";
      },
      fileList(fileList) {
        let files = fileList.files;
        for (let i = 0; i < files.length; i++) {
          this.fileAdd(files[i]);
        }
      },
      fileAdd(file) {
        this.size = this.size + file.size;

        if (file.type.indexOf("image") == -1) {
          file.src = "../res/upload.png";
          this.imgList.push({
            file
          });
        } else {
          let reader = new FileReader();
          reader.vue = this;
          reader.readAsDataURL(file);
          reader.onload = function () {
            file.src = this.result;
            this.vue.imgList.push({
              file
            });
          };
        }
        console.log(this.imgList);
      },
      dragenter(el) {
        el.stopPropagation();
        el.preventDefault();
      },
      dragover(el) {
        el.stopPropagation();
        el.preventDefault();
      },
      drop(el) {
        el.stopPropagation();
        el.preventDefault();
        this.fileList(el.dataTransfer);
      },
      fileDel(index) {
        this.size = this.size - this.imgList[index].file.size;
        this.imgList.splice(index, 1);
        if (this.imgindex == index && this.imgList.length != 0) {
          this.$refs.cutting_tool.outsideimg(this.imgList[0].file);
        }
      },
      upimage() {
        // this.imgList.forEach(element => {
        let model = this;
        this.axios({
            method: "POST",
            url: "http://localhost:8080/ssm/uploadImage",
            data: {
              file: model.imgList
            }
          })
          .then(function (res) {
            if (res.data.status == "success") {
              model.$notify({
                title: res.data.status,
                message: "报名成功！",
                type: "success"
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
        // });
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      upimage(){
        this.$refs.upload.submit();
      }
    }
  };

</script>
