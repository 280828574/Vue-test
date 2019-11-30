/**
 * 时间转时间戳
 */
const format = (v) => {
    let timestamp;
    timestamp = Number(v);
    return timestamp.toString().substr(0, 10);
};

export default {
    format
};
