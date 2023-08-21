// 引入http模块
const http = require('http');

// 端口号
const PORT = 8000;
// 引入请求处理方法
const serverHandle = require('../app');

// 请求函数
const server = http.createServer(serverHandle);
server.listen(PORT);