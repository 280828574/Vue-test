<template>
    <div class="">

    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        };
    },
    mounted() {
        // 设置cookie
        this.$scripts.operationCookie.operationCookie().set('name','admin',1);
        this.$scripts.operationCookie.operationCookie().set('pad','123456',1);
        // 获取cookie
        let cookie = this.$scripts.operationCookie.operationCookie().get();
        // 获取指定cookie
        let cookie1 = this.$scripts.operationCookie.operationCookie().get('name');
        console.log(cookie);
        console.log(cookie1);
        // 删除cookie
        this.$scripts.operationCookie.operationCookie().delete('pad');
        cookie = this.$scripts.operationCookie.operationCookie().get();
        console.log(cookie);
    },
};
</script>

<style lang="scss">

</style>