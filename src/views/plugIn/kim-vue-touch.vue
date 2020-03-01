<template>
  <div
    v-tap="(e)=>vueTouch('点击',e)"
    v-longtap="(e)=>vueTouch('长按',e)"
    v-swipeleft="(e)=>vueTouch('左滑',e)"
    v-swiperight="(e)=>vueTouch('右滑',e)"
    v-swipeup="(e)=>vueTouch('上滑',e)"
    v-swipedown="(e)=>vueTouch('下滑',e)"
    class="box"
  >
    <div class="">{{ name }}</div>
    <p>vue自定义移动端touch事件，点击、滑动、长按事件</p>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      name: 'touch'
    }
  },
  methods: {
    vueTouch: function(txt, e) {
      this.name = txt
      console.log(e)
    }
  }
}
</script>
<style lang="scss">
    .box {
        width: 100%;
        height: 300px;
        background: red;
    }
</style>
