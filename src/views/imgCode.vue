<template>
 <div class="container">
  <div id="captcha"></div>
  <div id="msg"></div>
</div>
</template>

<script>
export default {
    name: "login",
    data() {
        return {
            tips: "拖动左边滑块完成上方拼图",
            logindata: {
                userName: "",
                password: "",
                verificationCode: ""
            },
            rules: {},
            visible: false,
            //滑块x轴数据
            slider: {
                mx: 0,
                bx: 0
            },
            //拼图是否正确
            puzzle: false
        };
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
        window.jigsaw.init({
            el: document.getElementById('captcha'),
            onSuccess: function() {
                document.getElementById('msg').innerHTML = '登录成功！';
            },
            onFail: cleanMsg,
            onRefresh: cleanMsg
        });
        function cleanMsg() {
            document.getElementById('msg').innerHTML = '';
        }
    },
};
</script>
<style scoped lang="scss">
.container {
      width: 310px;
      margin: 100px auto;
    }
    #msg {
      width: 100%;
      line-height: 40px;
      font-size: 14px;
      text-align: center;
    }
    a:link,a:visited,a:hover,a:active {
      margin-left: 100px;
      color: #0366D6;
    }

</style>
