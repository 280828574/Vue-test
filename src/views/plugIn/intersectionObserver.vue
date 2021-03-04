<template>
  <div class="test-wrap">
    <div class="">intersectionObserver 无限滚动演示</div>
    <ul>
      <li v-for="(item, i) in lists" :key="i">{{ item }}</li>
      <!-- 很多<li> -->
    </ul>
    <div id="bottom"></div>
  </div>
</template>
<script>
let me;
export default {
  name: "Test",
  data() {
    return {
      lists: [],
    };
  },
  mounted() {
    me = this;
    const bottom = document.getElementById("bottom");
    const intersectionObserver = new IntersectionObserver((nodes) => {
      const tgt = nodes[0]; // 反正只有一个
      if (tgt.isIntersecting) {
        me.fetchList();
        // 执行接口请求代码
      }
    });
    intersectionObserver.observe(bottom);
  },
  methods: {
    // 签名后返回
    fetchList(img) {
      for (let index = 0; index < 50; index++) {
        this.lists.push(index);
      }
    },
  },
};
</script>

<style scoped>
li {
  width: 100%;
  display: inline-block;
  height: 50px;
}
</style>
