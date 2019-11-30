<template>
    <div class="">
{{aaa}}
    </div>
</template>

<script>
export default {
    name: '',
    inject:['for'],//得到父组件传递过来的数据 
    data() {
        return {
            aaa:this.for
        };
    }
};
</script>

<style lang="scss">

</style>