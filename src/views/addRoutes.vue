<template>
    <div class="">
        <button @click="addRoutes">增加路由</button>
        <div class="box">自由拉伸元素</div>
        <bbb></bbb>
    </div>
</template>

<script>
import bbb from '@/components/bus/bbb';
export default {
    components:{
        bbb
    },
    name: '',
    data() {
        return {};
    },
    mounted() {

    },
    methods: {
        addRoutes() {
            // 单独设置权限
            // this.$store.dispatch('setRouteLists',['index','base64']);
            // 获取所有权限
            this.$store.dispatch('setRouteLists', 'admin');
            this.$router.push({path: '/index'});
        }
    },
};
</script>

<style lang="scss">
   @import "@style/addRoutes.scss";
</style>