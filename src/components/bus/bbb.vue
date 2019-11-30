<template>
    <div class="">
{{msg}}
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            msg:'111'
        };
    },
    created(){
        this.$root.Bus.$on(
            'setMsg',content=>{
                this.msg = content;
            }
        );
    },
};
</script>

<style lang="scss">

</style>