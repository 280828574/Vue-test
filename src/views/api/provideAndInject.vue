<template>
    <div class="">
        <p>count:{{count}}</p>
        <p>父组件通过provide传值</p>
        <p>子组件通过inject接收（多级子组件）</p>
        <bbb></bbb>
    </div>
</template>

<script>
import {store} from "@/components/store";
import bbb from "@/components/provideAndInject/bbb.vue";

export default {
    components: {
        bbb
    },
    provide:{
        for:'test'
    },
    name: '',
    data() {
        return {};
    },
    computed: {
        count() {
            return store.count;
        },

    }
};
</script>

<style lang="scss">

</style>