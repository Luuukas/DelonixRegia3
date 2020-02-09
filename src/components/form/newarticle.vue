<template>
    <el-popover placement="right"
                width="400"
                trigger="click">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="content">
                <el-input type="textarea" v-model="form.content"></el-input>
            </el-form-item>

            <el-form-item label="photos">
                <el-upload class="upload-demo"
                           ref="upload"
                           action="https://jsonplaceholder.typicode.com/posts/"
                           :on-preview="handlePreview"
                           :on-remove="handleRemove"
                           :file-list="fileList"
                           :auto-upload="false"
                           list-type="picture">
                    <el-button slot="trigger" size="small" type="primary">pick</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">upload</el-button>
                    <div slot="tip" class="el-upload__tip">only jpg/png, not exceed 500kb</div>
                </el-upload>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">release</el-button>
                <el-button>cancle</el-button>
            </el-form-item>
        </el-form>
        <el-dropdown-item slot="reference">add</el-dropdown-item>
    </el-popover>
</template>

<script>
  export default {
    data() {
      return {
          form: {
              title: '',
              content: '',
          },
          fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      submitUpload() {
        this.$refs.upload.submit();
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>