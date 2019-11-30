<template functional>
    <div class="">
        <div>
            <p @click="props.itemClick(item);" v-for="(item, key) in props.items" :key="key">
                {{ item }}
            </p>
        </div>
    </div>
</template>