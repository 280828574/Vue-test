<template>
    <!--高级异步组件-->
    <div class="asyn1-wrap">
        <h1>高级异步组件</h1>
        <span :class="{'active':tab===item}" @click="handle(item)" v-for="(item,key) in tabs" :key="key">{{item}}</span>
        <div>
            <component :is="tab"></component>
        </div>
    </div>
</template>
<script>
import loading from "@/components/loading";
import error from "@/components/error";
const asyncCompa = () => ({
    component: import("@/components/async-components"), // 需要加载的组件。应当是一个 Promise
    loading: loading,
    error: error, // 出错时渲染的组件
    delay: 0, //这个延时并不能让loading显示更长时间
    timeout: 5000
});
const asyncCompa1 = () => ({
    component: import("@/components/async-components1"), // 需要加载的组件。应当是一个 Promise
    loading: loading,
    error: error, // 出错时渲染的组件
    delay: 0, //这个延时并不能让loading显示更长时间
    timeout: 5000
});
export default {
    name: "asyncCom",
    data() {
        return {
            tab: '',
            tabs:['asyncCompa','asyncCompa1']
        };
    },
    methods: {
        handle(item) {
            this.tab = item;
        }
    },
    components: {
        asyncCompa,asyncCompa1
    }
};
</script>
<style lang="scss">
    .asyn1-wrap{
        span{
            margin-right: 10px;
            color: #000;
            cursor: pointer;
            &.active{
                color: red;
            }
        }
        div{
            margin-top:10px ;
        }
    }
</style>

