var fs = require('fs')
var data
try{
    data = fs.readFileSync('./msg.txt')
}catch(err){
    console.log(err)
}
console.log('data:',data)
console.log('我是同步读取文件')