/**
 * Created by web-01 on 2017/11/17.
 */

const http=require('http');
let app=function(req,res){
    console.log('Webserver-2,接收到客户端请求');
    let url=req.url;
    if(url==='/index'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end('<h1>欢迎来到首页 </h1>'+url)
    }else if (url==='/user/login'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end('<h1>用户登录页</h1>'+url)
    }else if(url==='/user/register'){
        res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
        res.end('用户详情页'+url)
    }else {
        res.writeHead(404,{'Content-Type':'text/html;charset=utf-8'})
        res.end('你访问的页面不存在'+url)
    }
}
let server=http.createServer( app);

server.listen(8080);