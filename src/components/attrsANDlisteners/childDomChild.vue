<template>
    <div>
        <p>childDomChild:</p>
        <p>$attrs:{{$attrs}}</p>
        <button @click="startUpRocket">我要发射火箭</button>
    </div>
</template>
<script>
export default {
    name:'childDomChild',
    methods: {
        startUpRocket() {
            this.$emit("upRocket",222);
        }
    }
};
</script>