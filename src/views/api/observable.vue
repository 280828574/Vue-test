<template>
    <div>
        <p>Count: {{ count }}</p>
        <button @click="setCount(count + 1);">+ 1</button><br/><br/>
        <button @click="setCount(count - 1);">- 1</button><br/><br/>
    </div>
</template>

<script>
import { store, mutations } from "@/components/store";
export default {
    computed: {
        count() {
            return store.count;
        }
    },
    mounted() {
    },
    methods: {
        setCount: mutations.setCount,
        // // 跟下面的setCount 一个意思
        // setCount(num){
        //     mutations.setCount(num)
        // }
    }
};
</script>