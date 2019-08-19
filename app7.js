var http = require('http');
var url = require('url');
var querystring = require('querystring');
 
var postHTML = 
  '<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>' +
  '<body>' +
  '<form method="post">' +
  '网站名： <input name="name"><br>' +
  '网站 URL： <input name="url"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';
 
http.createServer(function (req, res) {
	// 设置响应头部信息及编码
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
   //res.setHeader('Content-Type','text/html;charset=utf-8');
   // res.end(postHTML);
   // 解析请求，包括文件名
   var pathname = url.parse(req.url).pathname;
   // 输出请求的文件名
   console.log("Request for " + pathname + " received.");
   res.end();
}).listen(3000,function(){
	console.log('3000端口号开启');
});