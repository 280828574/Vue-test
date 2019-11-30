<template>
  <div>
    <child :level="level">Hello world!</child>
  </div>
</template>

<script type='text/javascript'>
import Vue from 'vue';
Vue.component('child', {
    render(h) {
        const tag = ['div', 'p', 'strong', 'h1', 'h2', 'textarea'][this.level-1];
        return h(tag, this.$slots.default);
    },
    props: {
        level: {  type: Number,  required: true  } 
    }
});   
export default {
    name: 'hehe',
    data() { return { level:1 }; }
};
</script>