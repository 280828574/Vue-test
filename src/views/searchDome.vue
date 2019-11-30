<template>
    <div class="about-wrap">
        <div class="search-wrap">
            <input type="text" class="" id="inp" v-model="value" @focus="showResult" @blur="cloceResult"/>
            <ul :class="[{'show-sub':isShowResult},{'hide-sub':!isShowResult}]">
                <li v-for="(item,key) in restaurants" :key="key" @click="clickResult(item.value)"
                    :class="{act:Number(key) === actIndex}">
                    {{item.value.slice(0,item.value.toLowerCase().indexOf(value.toLowerCase()))}}
                    <span style="color:#000">
                        {{
                            item.value.slice(item.value.toLowerCase().indexOf(value.toLowerCase()),
                            item.value.toLowerCase().indexOf(value.toLowerCase())+value.length)
                        }}
                    </span>
                    {{item.value.substr(item.value.toLowerCase().indexOf(value.toLowerCase())+value.length)}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            restaurants: [],
            actIndex: '',
            value: '',
            isShowResult: false // 是否显示搜索结果
        };
    },
    methods: {
        loadAll() {
            return [
                {'value': '三全鲜食1（北新泾店）'},
                {'value': '三全鲜食2（北新泾店）'},
                {'value': '三全鲜食3（北新泾店）'},
                {'value': 'Hot honey 首尔炸鸡1（仙霞路）'},
                {'value': 'Hot honey 首尔炸鸡2（仙霞路）'},
                {'value': 'Hot honey 首尔炸鸡3（仙霞路）'},
                {'value': '新旺角茶餐厅1'},
                {'value': '新旺角茶餐厅2'},
                {'value': '新旺角茶餐厅3'}
            ];
        },
        // 注册键盘事件
        registerKey() {
            let me = this;
            document.addEventListener('keydown', function(event) {
                let inp = document.getElementById('inp');
                if (inp === document.activeElement) {
                    me.isShowResult = true;
                    if (event.keyCode === 13) {
                        me.value = me.restaurants[me.actIndex].value;
                        me.actIndex = '';
                        me.isShowResult = false;
                        inp.focus();
                        return;
                    }
                    if (event.keyCode === 40) {
                        me.keyDown();
                        return;
                    }
                    if (event.keyCode === 38) {
                        me.keyUp();
                        return;
                    }
                    me.debounce();
                }
            });
        },
        // 显示结果
        showResult() {
            this.isShowResult = true;
            this.filterValue();
        },
        // 关闭结果
        cloceResult() {
            setTimeout(() => {
                this.isShowResult = false;
            }, 300);
        },
        // 按下键盘上
        keyUp() {
            let me = this;
            if (me.actIndex === '') {
                me.actIndex = 0;
            } else {
                if (me.actIndex !== 0) {
                    me.actIndex--;
                } else {
                    me.actIndex = me.restaurants.length - 1;
                }
            }
        },
        // 按下键盘下
        keyDown() {
            let me = this;
            if (me.actIndex === '') {
                me.actIndex = 0;
            } else {
                if (me.actIndex !== me.restaurants.length - 1) {
                    me.actIndex++;
                } else {
                    me.actIndex = 0;
                }
            }
        },
        // 点击结果
        clickResult(value) {
            this.value = value;
            let inp = document.getElementById('inp');
            inp.focus();
        },
        // 防抖
        debounce(fn) {
            let timeout = null; // 创建一个标记用来存放定时器的返回值
            return function () {
                clearTimeout(timeout); // 每当用户输入的时候把前一个 setTimeout clear 掉
                timeout = setTimeout(() => {
                    // 然后又创建一个新的 setTimeout, 这样就能保证输入字符后的 interval 间隔内如果还有字符输入的话，就不会执行 fn 函数
                    fn.apply(this, arguments);
                }, 500);
            };
        },
        // 过滤输入内容
        filterValue() {
            let me = this;
            let allArr = me.loadAll();
            let arr = [];
            allArr.forEach((item) => {
                if (item.value.indexOf(me.value) !== -1) {
                    arr.push(item);
                }
            });
            me.restaurants = arr;
        }
    },
    mounted() {
        let me = this;
        let inp = document.getElementById('inp');
        inp.addEventListener('input', me.debounce(me.filterValue)); // 防抖
        this.restaurants = this.loadAll();
        this.registerKey();
    }
};

</script>

<style lang="scss">
    .about-wrap{
        .search-wrap{
            width: 500px;
            margin: 0 auto;
            input{
                width: 500px;
                height: 30px;
                padding: 5px;
            }
            ul{
                background: #fff;
                overflow: hidden;
                width: 500px;
                padding:0 15px;
                margin-top:5px ;
                li{
                    height: 30px;
                    line-height: 30px;
                    border-bottom: 1px solid #666;
                    cursor: pointer;
                    padding-left: 5px;
                    color: #999;
                    &.act{
                        background: red;
                        color: #fff;
                    }
                }
                li:last-child{
                    border: none;
                }
                &.show-sub{
                    max-height: 500px;
                    transition: max-height 1s
                }
                &.hide-sub{
                    max-height: 0;
                    transition: max-height .5s
                }
            }
        }
    }

</style>
