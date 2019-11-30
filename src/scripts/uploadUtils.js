const ATTACH_CDN = 'http://cdn.di-award.org/';

// 生成图片链接
const buildAttachImgPath = (file, isThumb = false, thumbType = '!t180') => {
    if (!file) {
        return '';
    }
    if (isThumb) {
        file = file + thumbType;
    }
    return file ? ATTACH_CDN + file : '';
};

const buildAttachLastName = file => {
    if (!file) {
        return '';
    }
    var arr = file.split('/');
    return arr[arr.length - 1];
};

// 生成缩略图片obj
const buildThumbImgObject = (url, thumbType = '!t180') => {
    return {
        name: buildAttachLastName(url),
        url: buildAttachImgPath(url, true, thumbType)
    };
};
// 生成缩略图片obj list
const buildThumbImgObjectList = str => {
    let list = [];
    str.split(';').forEach(item => {
        list.push(buildThumbImgObject(item));
    });
    return list;
};

// 生成上传图片obj
const buildImgObject = url => {
    return {
        name: buildAttachLastName(url),
        url: url
    };
};
// 生成上传图片obj list
const buildImgObjectList = str => {
    let list = [];
    str.split(';').forEach(item => {
        list.push(buildImgObject(item));
    });
    return list;
};
export default {
    buildAttachImgPath,
    buildAttachLastName,
    buildThumbImgObject,
    buildThumbImgObjectList,
    buildImgObject,
    buildImgObjectList
};
