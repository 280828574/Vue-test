/**
 * 是否是json
 */
const isJson = (str) => {
    if (typeof str === 'string') {
        try {
            var obj = JSON.parse(str);
            if (typeof obj === 'object' && obj) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log('error：' + str + '!!!' + e);
            return false;
        }
    }
};
export default {
    isJson
};
