const express = require('express');
const router = express.Router();
const dbfunc = require('../connect/dbfunc');
const bodyparse = require('body-parser');
var CircularJSON = require('circular-json');

router.post('/register',function(req,res){
    // console.dir(req);
    // var response = {
    //     "id":req.body.id,
    //     "name":req.body.name,
    //     "password":req.body.password
    // };
    dbfunc.register(req.body.name,req.body.password,req.body.sex,req.body.department).then(data => {
        res.send(data);
        res.end;
    });
    // console.log(response);
})
const mysql=require('mysql');
const config = require('../connect/datebase_config');
function getData(data) {
    console.log('data: ', data)
}
router.post('/login',function(req,res){
    // console.dir(req);
    // var response = {
    //     "id":req.body.id,
    //     "name":req.body.name,
    //     "password":req.body.password
    // };
    //callback传值
    // dbfunc.login(req.body.name,req.body.password, getData)
    dbfunc.login(req.body.name,req.body.password).then(data => {
        console.log('data: ', data);
        res.send(data);
        res.end;
    });
    // res.send(CircularJSON.stringify(res.config.data));
    
})

router.post('/rendeb',function(req,res){
    dbfunc.login(req.body.id).then(data => {
        console.log('data: ', data);
        res.send(data);
        res.end;
    });
    // res.send(CircularJSON.stringify(res.config.data));
    
})

router.post('/update',function(req,res){
    dbfunc.update(req.body.id,req.body.name,req.body.password);
    res.send("更新成功");
    res.end;
})

router.get('/select',function(req,res){
    dbfunc.getall();
    res.send("获取成功");
    res.end;
})

router.post('/delete',function(req,res){
    dbfunc.delete(req.body.id);
    res.send("获取成功");
    res.end;
})

module.exports = router;