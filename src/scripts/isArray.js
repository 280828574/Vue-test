/**
 * 是否为数组,
 * 数组长度判断
 */
const isArray = (arr,len) => {
    if(Array.isArray(arr)){
        if(len){
            return  arr.length>len;
        }
        return true;
    }
    return false;
};
export default {
    isArray
};
