const User = require('../models/users');
const asyncHandler = require('express-async-handler'); // 简化异步错误处理 (可选)
const { success, error } = require('../utils/response');
const { SUCCESS, NOT_FOUND, SERVER_ERROR } = require('../utils/statusCode');

// 获取用户信息路由处理函数
exports.getUserListHandle =  asyncHandler(async (req, res) => {
    const data = {
        _id: 1111,
        username: 2222,
        email: 3333,
        createdAt: 44444
    }
    success(res,data)
});

// 更新用户信息路由处理函数
exports.updateUserInfoHandle = async (req,res)=>{
    // 相关逻辑...
    res.send('ok')
}

// @desc    注册新用户
// @route   POST /api/auth/register
// @access  Public
exports.registerUser = asyncHandler(async (req, res) => {

    const { username, email, password } = req.body;

    // 1. 检查必填字段
    if (!username || !email || !password) {
        return res.status(400).json({ message: '请提供用户名、邮箱和密码' });
    }

    // 2. 检查用户是否已存在 (用户名或邮箱)
    const userExists = await User.findOne({ $or: [{ username }, { email }] });
 
    if (userExists) {
        return res.status(409).json({ message: '用户名或邮箱已被使用' });
    }

    // 3. 创建用户 (密码在模型中自动哈希)
    const user = await User.create({ username, email, password });

    // 4. 响应 (明确排除密码)
    if (user) {
        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt
        });
    } else {
        res.status(400).json({ message: '无效的用户数据' });
    }
});
