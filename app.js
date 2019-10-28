const express = require('express');
const bodyparse = require('body-parser');
const app = express();
const route = require('./route/route');

const urlencodedparser = bodyparse.urlencoded({
    extended:false
});
const jsonparser = bodyparse.json();
app.use(urlencodedparser);
app.use(jsonparser);

app.use(express.static(__dirname + '/public'));

app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', '3.2.1')
    if(req.method=="OPTIONS") 
    res.send(200);/*让options请求快速返回*/
    else  
    next();
})

app.use('/',route);
app.listen(8888,function(){
    console.log("服务开启成功");
})