let http = require('http');

let req = http.request('http://nodejs.cn/download/', res => {
    let str = '';
    res.on('data', chunk => {
        str += chunk;
    });
    res.on('end', () => {
        console.log(str);
    });
});

req.end();