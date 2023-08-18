// console.log(100);
// console.log(200);
// console.log(300);
// console.log(400);
// console.log(500);
// console.log(600);

const http = require('http');

const sever = http.createServer((req, res)=> {
    res.writeHead(200, {'content-type': 'text/html'});
    res.end(`<h1>Hello world!</h1>`)
})

sever.listen(3000, ()=> {
    console.log('listening on 3000 port');
})