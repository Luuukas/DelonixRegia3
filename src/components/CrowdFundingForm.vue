<template>
    <el-popover placement="top"
                width="1000"
                trigger="click">
        <el-form ref="form" :model="form" label-width="80px">
            <!-- <el-form-item label="title">
                <el-input v-model="form.title"></el-input>
            </el-form-item>
            <el-form-item label="content">
                <el-input type="textarea" v-model="form.content"></el-input>
            </el-form-item> -->
            <div>
         <h3>众筹项目</h3>
    <form class="form form--flexstretch">
        <div class="form__body form__body--stretch">
            <fieldset>
                <legend>众筹项目基本信息</legend>

                <div class="form-grid">
                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">项目名称</label>
                        <input type="text" placeholder="Project Name">
                    </div>

                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">项目申请人</label>
                        <input type="text" placeholder="Applicant Name">
                    </div>

                    <div class="form-group form-group--stretch  form-group--gutter10">
                        <label for="">申请人电话</label>
                        <input type="tel" placeholder="(XXX)XXX-XXXX)">

                    </div>

                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">申请人邮箱</label>
                        <input type="email" placeholder="user@mailbox.com">
                    </div>

                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">众筹项目申请日期</label>
                        <input type="text" placeholder="2020-01-01">
                    </div>

                     <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">众筹项目申请金额</label>
                        <input type="text" placeholder="xxxxx元">
                    </div>

                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">项目所属学校</label>
                        <input type="text" placeholder="xx大学">
                    </div>

                </div>
            </fieldset>

            <fieldset>
                <legend>众筹项目成员</legend>

                <div class="form-grid">
                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">负责人</label>
                        <input type="text" placeholder="Leader">
                        <input type="text" placeholder="Phone">
                    </div>

                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">成员1</label>
                        <input type="text" placeholder="Member">
                        <input type="text" placeholder="Phone">
                    </div>
                    
                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">成员2</label>
                        <input type="text" placeholder="Member">
                        <input type="text" placeholder="Phone">
                    </div>

                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">成员3</label>
                        <input type="text" placeholder="Member">
                        <input type="text" placeholder="Phone">
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>众筹项目简介</legend>

                <div class="form-grid">
                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">项目内容</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="请附上300字左右的众筹项目介绍"></textarea>
                    </div>
                </div>

                <div class="form-grid">
                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">申请理由</label>
                        <textarea name="" id="" cols="30" rows="10" placeholder="请附上300字左右的众筹项目申请理由"></textarea>
                    </div>
                </div>
            </fieldset>
        </div>

        <!-- <footer class="form-group form-group--push form-group--gutter10">
            <button type="submit">submit</button>
        </footer> -->
        <fieldset>
                <legend>众筹项目文件</legend>
                <div class="form-grid">
                    <div class="form-group form-group--stretch form-group--gutter10">
                        <label for="">请上传众筹项目封面和策划书</label>
                    </div>
                </div>
        </fieldset>
    </form>
    </div>

            <el-form-item label="项目文件">
                <el-upload class="upload-demo"
                           ref="upload"
                           action="https://jsonplaceholder.typicode.com/posts/"
                           :on-preview="handlePreview"
                           :on-remove="handleRemove"
                           :file-list="fileList"
                           :auto-upload="false"
                           list-type="picture">
                    <el-button slot="trigger" size="small" type="primary">选择</el-button>
                    <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>
                    <div slot="tip" class="el-upload__tip">only jpg/png, not exceed 500kb</div>
                </el-upload>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="onSubmit">发布</el-button>
                <el-button>取消</el-button>
            </el-form-item>
        </el-form>
        <el-dropdown-item slot="reference">众筹</el-dropdown-item>
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

<style>
*:before,
*:after {
    box-sizing: inherit;
}
html {
    box-sizing: border-box;
}
html,
body {
    height: 100%;
}
body {
    font-family: Avenir, 'Helvetica Neue', 'Lato', 'Segoe UI', Helvetica, Arial, sans-serif;
    color: #444;
    background: #f6f6f6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
a {
    outline: none;
    color: #aaa;
    text-decoration: none;
}
a:hover,
a:focus {
    color: #333;
}
h1,
h2,
h3,
h4,
h5,
h6 {
    text-transform: uppercase;
}
input {
    box-sizing: border-box;
}
button {
    background: #1A84D4;
    color: white;
}
form {
    margin: calc((10 / 16) * 1rem) auto;
}
fieldset {
    border: none;
    margin: 0;
    padding: 0;
    color: #466B75;
}
legend {
    border: none;
    margin-left: calc((10 / 16) * 1rem);
    margin-right: calc((10 / 16) * 1rem);
    padding-top: calc((20 / 16) * 1rem);
    padding-bottom: calc((20 / 16) * 1rem);
}
input,
button,
textarea,
select {
    border: none;
    padding: calc((10 / 16) * 1rem);
}
input:not([type="radio"]):not([type="checkbox"]),
button,
textarea,
select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
}
svg {
    height: auto;
    width: 20px;
    vertical-align: middle;
}
.container {
    max-width: 900px;
    margin: 0 auto;
    padding: calc((20 / 16) * 1rem);
}
.content {
    padding: 3rem;
}
.logo {
    height: 150px;
    padding: calc((20 / 16) * 1rem);
    width: auto;
}
.form-group__errormsg {
    padding: calc((10 / 16) * 1rem);
}
.inputaddon-item {
    background: #1A84D4;
    fill: white;
}
.form--flexstretch,
.form-group.inputaddon,
.form-group--inline-btn {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.14);
    background: rgba(63, 81, 181, 0.02);
    color: #78898B;
}
/*
 * =============================================
 * Layout: Grid & Form Group
 * =============================================
 */

.form-grid {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.form-group {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
/*
 * =============================================
 * Pattern: Input Add-ons
 * =============================================
 */

.inputaddon-field {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
}
.inputaddon-item {
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
    padding: calc((10 / 16) * 1rem);
    width: 20px;
}
.inputaddon-btn {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
}
.inputaddon-field--reverse {
    -webkit-box-ordinal-group: 3;
    -webkit-order: 2;
    -ms-flex-order: 2;
    order: 2;
}
.inputaddon-item--reverse {
    -webkit-box-ordinal-group: 4;
    -webkit-order: 3;
    -ms-flex-order: 3;
    order: 3;
}
.inputaddon-btn--reverse {
    -webkit-box-ordinal-group: 2;
    -webkit-order: 1;
    -ms-flex-order: 1;
    order: 1;
}
/*
 * =============================================
 * Pattern: Inline Input-Button Combo
 * =============================================
 */

.form-group--inline-btn {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    width: 100%;
}
.form-group__input--inline-btn {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
/*
 * =============================================
 * Layout: Flex Stretch
 * =============================================
 */

.form--flexstretch {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    min-height: 75vh;
}
.form__body--stretch {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
}
.form-group--stretch {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 5%;
    -ms-flex: 1 0 5%;
    flex: 1 0 5%;
}
/*
 * =============================================
 * Layout: Long Label
 * =============================================
 */

.form-group--lnglabl {
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
.form-group__label--lng {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    width: 150px;
}
.form-group__input--lnglabl {
    width: 100%;
}
/*
 * =============================================
 * Layout: Button Group Inline
 * =============================================
 */

.form-group__btn--inline {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    width: 100%;
}
.form-group__btn--inline:not(:first-child) {
    margin-left: calc((20 / 16) * 1rem);
}
/*
 * =============================================
 * Form Group Utilities
 * =============================================
 */

.form-group--spacebetween {
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.form-group--gutter10 {
    margin: calc((10 / 16) * 1rem);
}
.form-group--push {
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
/*
 * =============================================
 * Error Messages
 * =============================================
 */

.form-group__errormsg {
    -webkit-box-flex: 1;
    -webkit-flex: 1 0 auto;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
}
/*
 * =============================================
 * Error States
 * =============================================
 */

.has-errors-form-group {
    color: red;
}
/*
 * =============================================
 * Error State Themes
 * =============================================
 */

.form-group__errormsg--cinnabar {
    background: red;
    color: white;
}
/*
 * =============================================
 * Flush Form Groups
 * =============================================
 */

.form-group--flush {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
.form-group--flush input {
    -webkit-transition: 250ms all ease-in-out;
    transition: 250ms all ease-in-out;
    outline: 1px solid gray;
}
.form-group--flush input:focus,
.form-group--flush input:hover {
    outline: 1px solid #444444;
    outline-offset: 0;
    background: #444444;
    color: white;
}
/*
 * =============================================
 * Global Utilities: Not Required;
 * =============================================
 */

.clearfix::before,
.clearfix::after {
    display: table;
    content: '';
}
.clearfix::after {
    clear: both;
}
.visuallyhidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}
.visuallyhidden.focusable:active,
.visuallyhidden.focusable:focus {
    clip: auto;
    height: auto;
    margin: 0;
    overflow: visible;
    position: static;
    width: auto;
}
.hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    pointer-events: none;
}
</style>