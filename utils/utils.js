/**
 * 时间戳转化为年 月 日 时 分 秒
 * number: 传入时间戳
 * format：返回格式，支持自定义，但参数必须与formateArr里保持一致
 */
const formatTime = function (format) {

    var formateArr = ['Y', 'M', 'D', 'h', 'm', 's'];
    var returnArr = [];

    var date = new Date();
    returnArr.push(date.getFullYear());
    returnArr.push(formatNumber(date.getMonth() + 1));
    returnArr.push(formatNumber(date.getDate()));

    returnArr.push(formatNumber(date.getHours()));
    returnArr.push(formatNumber(date.getMinutes()));
    returnArr.push(formatNumber(date.getSeconds()));

    for (var i in returnArr) {
        format = format.replace(formateArr[i], returnArr[i]);
    }
    return format;
}

//数据转化
function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}

function isEmpty(str) {
    if (str == undefined || str == null || str == '') {
        return true
    }
    if (str == "undefined") {
        return true
    }
    if (str instanceof Array) {
        if (str.length == 0) {
            return true
        }
    }
    return false

}

const compare = function (property, type) {
    if (type === 'desc') {
        return function (a, b) {
            let value1 = a[property];
            let value2 = b[property];
            if (value2 < value1) {
                return -1
            } else if (value2 > value1) {
                return 1
            } else {
                return 0
            }
        }
    } else if (type === 'asc') {
        return function (a, b) {
            let value1 = a[property];
            let value2 = b[property];
            if (value2 < value1) {
                return 1
            } else if (value2 > value1) {
                return -1
            } else {
                return 0
            }
        }
    }

}
module.exports = {
    formatTime: formatTime,
    isEmpty: isEmpty,
    compare: compare
}
