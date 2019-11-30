<template>
    <div>
        异步组件测试
        点击按钮后
        第一个延迟300毫秒，从服务器加载
        第二个不延迟从服务器加载
        <template v-if="show">
            <later></later>
            <later2></later2>
        </template>
        <button @click="toggle">加载</button>
        <img src="" alt="" class="img"/>
    </div>
</template>
<script>
import Vue from 'vue';
const later = Vue.component('later', function (resolve) {
    setTimeout(function () {
        require(['@/components/later.vue'], resolve);
    }, 3000);
});
const later2 = Vue.component('later2', function (resolve) {
    require(['@/components/later2.vue'], resolve);
});
export default{
    data: function () {
        return {
            show: false
        };
    },
    components: {
        later,
        later2,
    },
    methods: {
        toggle:function () {
            this.show = !this.show;
        }
    },
};
</script>
<style>
    .img{
        display: block;
        width: 100px;
        height: 100px;
        background: url("~@/assets/logo.png") no-repeat 100% 100%;
        background-size: cover;
    }
</style>