<template>
    <div class="max-height-wrap">
        <div :class="['cp',{'show-sub':item.show_sub},{'hide-sub':!item.show_sub}]" v-for="(item,key) in arr" :key="key" @click="showSub(key)">
            <p>{{item.name}}</p>
            <p v-for="(list,key1) in item.arr" :key="key1">{{list}}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr:[
                {
                    name:'数据1',
                    show_sub:false,
                    arr:[1,2,3,4,5,1,2,3,4,5]
                },
                {
                    name:'数据2',
                    show_sub:false,
                    arr:[1,2,3,4,5]
                },
                {
                    name:'数据3',
                    show_sub:false,
                    arr:[1,2,3,4,5,1,2,3,4,51,2,3,4,5,1,2,3,4,5]
                }
            ]
        };
    },
    mounted() {
    },
    methods: {
        showSub(key) {
            this.arr[key].show_sub = !this.arr[key].show_sub;
        }
    }
};
</script>

<style lang="scss">
    .max-height-wrap{
        div p{
            height: 15px;
            margin-bottom: 15px;
        }
        div{
            line-height: 0;
            max-height: 35px;
            overflow: hidden;
            margin-bottom: 15px;
            font-size: 18px;
            border-bottom: 1px solid #ccc;
            padding-bottom: 10px;
            &.show-sub{
                max-height: 500px;
                transition: max-height 1s
            }
            &.hide-sub{
                max-height: 35px;
                transition: max-height .5s
            }
        }
    }
</style>
