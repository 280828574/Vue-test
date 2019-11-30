<template>
    <div class="">
        <main>
            <!-- 默认插槽 -->
            <slot>
                <!-- slot内为后备内容 -->
                <h3>没传内容</h3>
            </slot>
        </main>

        <!-- 具名插槽 -->
        <header>
            <slot name="header">
                <h3>没传header插槽</h3>
            </slot>
        </header>

        <!-- 作用域插槽 -->
        <footer>
            <slot name="footer" :testProps="aaa">
                <h3>没传footer插槽</h3>
            </slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            aaa:{
                a:2,
                b:2
            }
        };
    },
};
</script>

<style lang="scss">

</style>