<template>
  <div id="html2-canvas-wrap">
    <div class="print " @click="generatorImage">
      <span>打印</span>
    </div>
    <div ref="addImage" class="content">
      <div ref="capture">
        需要保存的html页面
        1112342343242adsasdsa
      </div>
    </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
export default {
  name: '',
  data: function() {
    return {
      dataURL: require('@/assets/logo.png'),
      dataURL1: ''
    }
  },
  mounted() {
  },
  methods: {
    generatorImage() {
      html2canvas(this.$refs.addImage).then(canvas => {
        // this.$refs.addImage.append(canvas);//在下面添加canvas节点
        let link = document.createElement('a')
        link.href = canvas.toDataURL()// 下载链接
        link.setAttribute('download', '体检表.png')
        link.style.display = 'none'// a标签隐藏
        document.body.appendChild(link)
        link.click()
      })
    }
  }
}
</script>

<style lang="scss">
  .content{
    padding: 15px;
  }
</style>
