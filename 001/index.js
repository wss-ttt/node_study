const http = require('http')

var options = {
    /* 'hostname':'nodejs.cn',
    'path':'/download/' */

    // hostname:'www.baidu.com',
    // path:''
    
    hostname:'192.168.0.25',
    port:'8001',
    path:'/#/electric-manage'
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