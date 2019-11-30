<template>
    <div class="">
        <p><input v-model="msg" type="text"></p>
        <p>
            <button @click="setMsg">更改BBB组件内容</button>
        </p>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            msg:''
        };
    },
    methods: {
        setMsg() {
            this.$root.Bus.$emit('setMsg', this.msg);
        }
    }
};
</script>

<style lang="scss">

</style>