// const mod = require("./module")
// console.log(mod)

// const {a,b} = require('./module')
// console.log(b)

const http = require('http');

const fs = require('fs');

//req 요청 es 응답
const server = http.createServer(function(req, res) {
    // res.writeHead(200)
    // res.write(" <h1> Hello World! </h1> ")
    // res.end(" <p> End <p> ")
    // 파일 전송
    try {
        const data = fs.readFileSync('./index.html');
        res.writeHead(200);
        res.end(data);

    } catch (error) {
        console.log(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(8000, function() {
    console.log('8000번 포트로 실행')
}); 
