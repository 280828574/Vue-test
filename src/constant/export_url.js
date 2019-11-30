let url = window.location.protocol + '//' + window.location.host; // 正式测试环境
if (url.indexOf('localhost') !== -1 || url.indexOf('192.168.') !== -1) {
    url = 'http://www.admin.51pm.local'; // 本地
}
export default {
    export_url: url
};
