var fs = require('fs')

// 异步读取文件
fs.readFile('./msg.txt',function(err,data){
    if(err)
        throw new Error('读取失败')
    console.log('data:',data)
    console.log('data:',data.toString())
})
console.log('我是异步读取文件')