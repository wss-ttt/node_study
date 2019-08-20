let http = require('http');
let url = require('url');
let querystring = require('querystring');

// 创建服务
http.createServer((request, response) => {
    console.log(request);
    // 发送请求 
    let req = http.request('http://news-at.zhihu.com/api/4/news/latest', res => {
        let str = "";
        res.on('data', chunk => {
            str += chunk;
        })
        res.on('end', () => {
            response.setHeader('Content-Type','text/html;charset=utf-8');
            response.write(str);
            // 结束响应
            response.end();
        });
    })
    // 结束请求对象
    req.end();
}).listen('2001', function () {
    console.log('端口号:2001 服务启动成功');
})