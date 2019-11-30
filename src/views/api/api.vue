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
            routers: [],
            url:''
        };
    },
    mounted() {
        this.initRouterInfo();
    },
    methods: {
        initRouterInfo() {
            this.$router.options.routes.forEach((item)=>{
                if(item.children && this.$route.matched[0].path === item.path){
                    item.children.forEach((list)=>{
                        this.routers.push(list);
                    });
                }
            });
        }
    }
};
</script>

<style lang="scss">

</style>