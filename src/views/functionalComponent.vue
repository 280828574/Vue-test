<template>
    <div class="">
        <function-child
                :items="['Wonderwoman', 'Ironman']"
                :item-click="item => (clicked = item)">
        </function-child>
        <p>Clicked hero: {{ clicked }}</p>
    </div>
</template>

<script>
import functionChild from '@/components/functionalComponent';
export default {
    components: {functionChild},
    data() {
        return {
            clicked: ""
        };
    }
};
</script>

<style lang="scss">

</style>