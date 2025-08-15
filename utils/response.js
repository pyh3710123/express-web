/**
 * 统一 JSON 响应封装
 * @param {Object} res Express 响应对象
 * @param {*} data 返回数据
 * @param {string} [message='操作成功'] 提示信息
 * @param {number} [code=200] 状态码
 */
const jsonResponse = (res, data = null, message = '操作成功', code = 200) => {
    res.status(code).json({
        code,
        message,
        data,
        timestamp: new Date().getTime()
    });
};

/**
 * 成功响应快捷方法
 */
const success = (res, data = null, message = '操作成功') => {
    jsonResponse(res, data, message, 200);
};

/**
 * 错误响应快捷方法
 */
const error = (res, message = '操作失败', code = 500, data = null) => {
    jsonResponse(res, data, message, code);
};

module.exports = {
    jsonResponse,
    success,
    error
};
