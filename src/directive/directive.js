import Vue from 'vue';
// 节流指令
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
// 防抖指令
Vue.directive('debounce', {
    bind: function (el, binding) {
        let debounceTime;// 节流时间
        if(binding.value.time){
            debounceTime = binding.value.time; 
        } else {
            debounceTime = 1000; 
        }
        let debounceFun = binding.value.fun;
        let cbFun = '';
        el.addEventListener('input', () => {
            clearTimeout(cbFun);
            cbFun = setTimeout(() => {
                cbFun = null;
                debounceFun();
            }, debounceTime);
        }, true);
    }
});