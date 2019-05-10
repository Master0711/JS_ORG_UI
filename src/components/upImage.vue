<template>
  <div
    style="padding: 10px 5px;max-width: 350px;max-height: 150px;background-color: rgba(240, 240, 240, 0.959);display: flex;justify-content: center;">
    <el-upload class="upload-demo" ref="upload" action="http://localhost:8080/ssm/image/changeavatar"
      :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false"
       :limit=2 :on-exceed="handleFileLimit">
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
      <div slot="tip" class="el-upload__tip"
        style="margin-top: 10px;font-family: 'Arial','STKaiti','黑体','宋体',sans-serif;">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<style>
  a:hover {
    color: rgb(0, 0, 0);
    text-decoration:none;
    border-bottom: 0px solid rgba(89, 22, 245, 0.493);
  }

</style>

<script>
  export default {
    name: "upImage",
    data() {
      return {
        fileList: [],
      }
    },
    methods: {
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleFileLimit(){
        this.$notify({
          title: 'warning',
          message: '最多只能选择3张图片!',
          type: 'warning'
        });
      }
    }
  };

</script>
