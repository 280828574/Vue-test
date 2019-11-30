<template>
    <div class="">
      <button ref="target" v-throttle="{fun:sayHello}">提交</button>
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
    },
    methods: {
        sayHello() {
            console.log('Hello!');
        }
    },
};
</script>

<style lang="scss">

</style>