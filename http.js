console.log('开始创建webserver');

const http=require('http');
//使用http模块提供的
let server = http.createServer(function(req,res){
    console.log('接受请求服务端');
    //console.log(arguments);
    console.log("请求方法:", req.method);
    console.log("请求地址:",req.url);
    console.log("请求协议:", req.httpVersion);
    console.log("请求头部:",req.headers);
    //读取方法
    //读取
//输出响应状态码
//输出响应头部
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<h3>header</h3><hr>');
    res.end
});

server.listen(8080);