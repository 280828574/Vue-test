<template>
    <div class="">
      <p>防抖</p>
     <input type="text" v-debounce="{fun:sayHello}">
     <p>节流</p>
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