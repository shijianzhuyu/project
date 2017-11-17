const http = require('http');
const express = require('express');
const qs = require('querystring');

let app  = express();

let server = http.createServer(app);
server.listen(8080);

/***定义路由（路径经由）——发送各种类型的响应消息***/
//GET  /index
app.get('/index', function(req, res){
    //res.writeHead()/write()/end()
    //向客户端输出一段HTML响应消息
    
    res.send('<h1>欢迎访问！这里是首页</h1>');
})

//GET  /user/login
app.get('/user/login', function(req, res){
    //向客户端输出一个文件中所有的内容——任意静态文件
    res.sendFile('C:\\xampp\\htdocs\\node\\public\\login.html');
})

//GET  /user/register
app.get('/user/register', function(req, res){
    res.sendFile(__dirname+'/public/register.html')
})

//GET /css/b
app.get('/css/bass.css', function(req, res){
    res.sendFile(__dirname+'/public/css/bass.css');
})

//GET /users
app.get('/users', function(req, res){
    //向客户端输出JSON字符串
    let arr = [
        {uid:101, uname:'tom', birthday: new Date()},
        {uid:102, uname:'mary', birthday: new Date()},
        {uid:103, uname:'joe', birthday: new Date()}
    ];

    res.json(arr);  //把服务器端数组转换为JSON字符串并输出给客户端
})



/***定义路由（路径经由）——接收请求数据***/
//GET  /do/login?uname=tom&upwd=123
app.get('/do/login', function(req, res){
    //接收?k=v&k=v查询字符串中的数据
    console.log(req.query);
    res.send('ok');
});

//GET /products?pno=3&kw=dell
app.get('/products', function(req, res){
    res.send("您查询的关键字为："+req.query.kw + "<br>您要显示的页号为："+req.query.pno);
});

//GET /do/login2?uname=tom&upwd=123
app.get('/do/login2', function(req, res){
    console.log('登录用户名：', req.query.uname);
    console.log('登录密码名：', req.query.upwd);
    res.send('ok2');
});

//POST /do/login2 HTTP/1.1
//Host: 127.0.0.1
//
//uname=tom&upwd=123
app.post('/do/login2', function(req, res){
    console.log('POST /do/login2.....');
    //req.query之中只能存储URL后查询字符串中的请求数据，不包含请求消息主体中的数据
    //console.log(req.query);

    /************************************/
    /////接收POST/PUT请求消息主体中的数据/////
    /************************************/
    //想接收请求主体中的数据，必须用事件监听方式
    req.on('data', function(buf){
        console.log(buf);
        console.log(buf.toString());
        console.log(qs.parse(buf.toString()));
    })


    res.send('ok2');
});