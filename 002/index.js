let http = require('http');
http.createServer((request,response)=>{
    // 没有该行代码 中文会乱码
    response.setHeader('Content-Type','text/html;charset=utf-8');
    response.write('好好学习');
    // 结束响应  该代码是不能少的
    response.end();
}).listen(1000,function(){
    console.log('端口号:1000');
    console.log('服务启动成功');
});
