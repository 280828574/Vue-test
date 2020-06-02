<template>
  <div class="slider-tools-wrap">
    <div class="slider-tools-wrap"></div>
  </div>
</template>
<script>
let me;
import "./sliderTools";
export default {
  name: "SliderToolsWrap",
  data() {
    return {};
  },
  mounted() {
    me = this;
    let slider = new SliderTools({
      el: document.querySelector(".slider-tools-wrap"),
    });
    slider.on("complete", () => {
      alert(1111111);
    });
  },
  methods: {
    aaa() {},
  },
};
</script>
<style lang='scss' scoped>
  .slider-tools-wrap {
    .slider {
      position: relative;
    }
  }
</style>

