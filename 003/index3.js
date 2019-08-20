let http = require('http');
let url = require('url');
let querystring = require('querystring');

// 创建服务
http.createServer((request, response) => {
    // 将url转换成对象(里面包含了很多数据信息)
    var urlOption = url.parse(request.url)
    var pathname = urlOption.pathname;
    console.log(pathname);
    switch (pathname) {
        case '/news':
            {// 发送请求 
                let req = http.request('http://news-at.zhihu.com/api/4/news/latest', res => {
                    let str = "";
                    res.on('data', chunk => {
                        str += chunk;
                    })
                    res.on('end', () => {
                        response.writeHead(200, {
                            // 允许跨域请求
                            "Access-Control-Allow-Origin": "*",
                            "Content-Type":"application/json"
                        });
                        response.write(str);
                        // 结束响应
                        response.end();
                    });
                })
                // 结束请求对象
                req.end();
                break;
            }
        case '/newsById':
            {
                let query = querystring.parse(urlOption.query);
                let id = query.id;
                console.log('id', id);
                let req = http.request('http://news-at.zhihu.com/api/4/news/' + id, res => {
                    let str = "";
                    res.on('data', chunk => {
                        str += chunk;
                    });
                    res.on('end', () => {
                        response.writeHead(200, {
                            // 允许跨域请求
                            "Access-Control-Allow-Origin": "*",
                            "Content-Type":"application/json"
                        });
                        response.write(str);
                        // 结束响应
                        response.end();
                    });
                });
                // 结束请求对象
                req.end();
                break;
            }
        default:
            response.write('test');
            // 结束响应
            response.end();
    }

}).listen('2002', function () {
    console.log('端口号:2002 服务启动成功');
})