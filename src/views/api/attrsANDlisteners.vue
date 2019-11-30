<template>
    <div>
        <child-dom
                :foo="foo"
                :coo="coo"
                v-on:upRocket="reciveRocket"
        >
        </child-dom>
    </div>
</template>
<script>
import childDom from "@/components/attrsANDlisteners/ChildDom.vue";
export default {
    data() {
        return {
            foo:"Hello, world",
            coo:"Hello,rui"
        };
    },
    components:{childDom},
    methods:{
        reciveRocket(aaa){
            console.log(aaa);
        }
    }
};
</script>