const http = require('http')
var options = {
    // 请求百度的首页
    hostname:'www.baidu.com',
    path:''
};
let req = http.request(options,res=>{
    let arr = [];
    let str = '';
    res.on('data',function(chunk){
        arr.push(chunk);
        str +=chunk;
    })
    console.log('arr',arr);
    res.on('end',function(){
        console.log('arr:',arr);
        console.log('str:',str);
    });
}); 
req.end();