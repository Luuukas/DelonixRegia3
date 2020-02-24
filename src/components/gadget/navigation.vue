<template>
    <div class='ribbon'>
        <a href='#' @click="displayArticle">
            <span>
                <el-dropdown>
                    <label class="el-dropdown-link">
                        Article<i class="el-icon-arrow-down el-icon--right"></i>
                    </label>
                    <el-dropdown-menu slot="dropdown">
                        <newarticle></newarticle>
                    </el-dropdown-menu>
                </el-dropdown>
            </span>
        </a>
        <a href='#' @click="displayOther"><span>About</span></a>
        <a href='#' @click="displayService"><span>Services</span></a>
        <a href='#' @click="displayOther"><span>Contact</span></a>
    </div>
</template>

<script>
    import newarticle from '../form/newarticle'
    export default {
        name: 'navigation',
        components: {
            newarticle
        },
        methods: {
            displayArticle: function () {
                this.$router.push('Article')
            },
            displayService: function () {
                this.$router.push('CrowdFundingForm')
            },
            displayOther: function () {
                this.$router.push('Empty')
            },
            handleClick() {
                alert('button click');
            }
        }
    }
</script>

<style scoped>
    * {
    /* Basic CSS reset */
    
    margin: 0;
    padding: 0;
}
.ribbon {
    display: inline-block;
}
.ribbon:after,
.ribbon:before {
    margin-top: 0.5em;
    content: "";
    float: left;
    border: 1.5em solid #fff;
}
.ribbon:after {
    border-right-color: transparent;
}
.ribbon:before {
    border-left-color: transparent;
}
.ribbon a:link,
.ribbon a:visited {
    color: #000;
    text-decoration: none;
    float: left;
    height: 3.5em;
    overflow: hidden;
}
.ribbon span {
    background: #fff;
    display: inline-block;
    line-height: 3em;
    padding: 0 1em;
    margin-top: 0.5em;
    position: relative;
    -webkit-transition: background-color 0.2s, margin-top 0.2s;
    /* Saf3.2+, Chrome */
    
    -moz-transition: background-color 0.2s, margin-top 0.2s;
    /* FF4+ */
    
    -ms-transition: background-color 0.2s, margin-top 0.2s;
    /* IE10 */
    
    -o-transition: background-color 0.2s, margin-top 0.2s;
    /* Opera 10.5+ */
    
    transition: background-color 0.2s, margin-top 0.2s;
}
.ribbon a:hover span {
    background: #FFD204;
    margin-top: 0;
}
.ribbon span:before {
    content: "";
    position: absolute;
    top: 3em;
    left: 0;
    border-right: 0.5em solid #9B8651;
    border-bottom: 0.5em solid #fff;
}
.ribbon span:after {
    content: "";
    position: absolute;
    top: 3em;
    right: 0;
    border-left: 0.5em solid #9B8651;
    border-bottom: 0.5em solid #fff;
}

.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>