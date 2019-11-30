<template>
    <div id="app">
        <div id="nav">
            <router-link v-for="(item,key) in routers" :key="key" :to="item.path">{{item.name}}</router-link>
        </div>
        <router-view/>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            routers: []
        };
    },
    created: function () {
        this.initRoutesList();
        this.initRoutes();
    },
    methods: {
        initRoutesList() {
            this.routers = [];
            this.$router.options.routes.forEach(item => {
                this.routers.push(item);
            });
        },
        initRoutes(){
            let roles = window.sessionStorage.getItem('roles');
            if(roles){
                this.$store.dispatch('setRouteLists',JSON.parse(roles));
            }
        }
    },
    watch:{
        '$route':function () {
            this.initRoutesList();
        }
    }
};
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            margin-right: 10px;
            &.router-link-exact-active {
                color: #42b983;
            }
            &.router-link-active{
                color: $MainBodyColor;
            }
        }
    }

</style>
