<template>
    <div class="">
        中央事件总线Bus演示<br>
        aaa组件：<aaa></aaa>
        BBB组件<bbb></bbb>
    </div>
</template>
<script>
import aaa from '@/components/bus/aaa';
import bbb from '@/components/bus/bbb';

export default {
    components: {
        aaa,
        bbb
    },
    name: '111',
    data() {
        return {
            text:''
        };
    },
    methods: {
        aaa(){
            if(this.text === '1'){
                console.log('111');
            }
        }
    },
};
</script>

<style lang="scss">

</style>