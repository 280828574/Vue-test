<template>
    <div class="box"
         v-tap="(e)=>vueTouch('点击',e)"
         v-longtap="(e)=>vueTouch('长按',e)"
         v-swipeleft="(e)=>vueTouch('左滑',e)"
         v-swiperight="(e)=>vueTouch('右滑',e)"
         v-swipeup="(e)=>vueTouch('上滑',e)"
         v-swipedown="(e)=>vueTouch('下滑',e)"
    >
        <div class="">{{name}}</div>
    </div>
</template>
<script>
export default {
    name: 'App',
    data() {
        return {
            name: 'touch',
        };
    },
    methods: {
        vueTouch: function (txt, e) {
            this.name = txt;
            console.log(e);
        }
    }
};
</script>
<style lang="scss">
    .box {
        width: 100%;
        height: 300px;
        background: red;
    }
</style>
