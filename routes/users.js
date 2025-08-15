


// 导入express
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入路由处理函数
const userRouterHandler = require('../controllers/users')

// 获取用户列表的路由
router.get('/userlist',userRouterHandler.getUserListHandle)

// 更新用户信息的路由
router.put('/userinfo',userRouterHandler.updateUserInfoHandle)

// 向外导出路由对象
module.exports = router
