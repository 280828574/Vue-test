<template>
    <div class="">
        <div id="nav">
            <router-link v-for="(item,key) in routers" :key="key" :to="item.path">{{item.name}}</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: '',
    data: function () {
        return {
            routers: []
        };
    },
    created: function () {
        this.$router.options.routes.forEach(item => {
            this.routers.push(item)
        })
    }
};
</script>

<style lang="scss">

</style>