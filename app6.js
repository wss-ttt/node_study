// 1 加载hrrp模块

var http = require('http');

http.createServer(function(req, res) {
	// 设置字符编码 否则中文会乱码  
	// text/plain 是纯文本显示
	// text/html  html文本显示
	res.setHeader('Content-Type','text/html;charset=utf-8');
	// 向客户端返回内容
	res.write('hello world');
	res.write('给我一首歌的时间');
	res.write('<h2>黑色毛衣</h2>');
	// 该代码一定要有 结束向客户端的相应 
	// 否则客户端(浏览器)会一直等待服务器的相应
	res.end();
}).listen(2600, function() {
	console.log('端口号为:2600,服务器启动成功');
});