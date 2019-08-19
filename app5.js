// 1 加载hrrp模块
var http=require('http');

// 2 创建一个http服务对象
var server = http.createServer();

// 3 监听客户端过来的请求
server.on('request',function(req,res){
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
});	

// 4 启动服务
server.listen(2500,function(){
	console.log('端口号为:2500,服务器启动成功');
});
