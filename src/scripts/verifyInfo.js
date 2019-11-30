/**
 * 格式化时间
 */
const verifyInfo = (v) => {
    if (v !== null && v !== undefined && v !== [] && v !== '') {
        return true;
    } else {
        return false;
    }
};

export default {
    verifyInfo
};
