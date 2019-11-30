import Vue from 'vue';
Vue.directive('throttle', {
    bind: function (el, binding) {
        let throttleTime;// 节流时间
        if(binding.value.time){
            throttleTime = binding.value.time; 
        } else {
            throttleTime = 2000; 
        }
        let throttleFun = binding.value.fun;
        let cbFun = '';
        el.addEventListener('click', () => {
            if (!cbFun) {
                throttleFun();
                cbFun = setTimeout(() => {
                    cbFun = null;
                }, throttleTime);
            }
        }, true);
    }
});