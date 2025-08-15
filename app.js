// 导入express
const createError = require("http-errors");
//请求限流
const RateLimit = require("express-rate-limit");
const express = require('express')
const registerUser  = require('./routes/users')
const connectDB = require('./config/db');
//安全防止劫持
const helmet = require("helmet");
// 创建web服务器
const app = express()
const cors = require('cors');
// 压缩http
const compression = require('compression');
// 2. 中间件
app.use(express.json()); // 解析 JSON 请求体
app.use(compression());
// 1. 连接数据库
connectDB()
// 托管静态资源
app.use(express.static('./public'))
// 导入并注册用户路由模块
app.use(cors());
//根据需求配置路由前缀 /api
app.use('/user',registerUser)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

app.use(
    helmet.contentSecurityPolicy({
        directives: {
            "script-src": ["'self'", "cdn.jsdelivr.net"],
        },
    })
);
const limiter = RateLimit({
    windowMs: 1 * 60 * 1000, // 10 seconds
    max: 60,
});

// Apply rate limiter to all requests
app.use(limiter);

// 启动web服务器
app.listen(3000,()=>{
    console.log('server run at http://127.0.0.1:3000');
})
