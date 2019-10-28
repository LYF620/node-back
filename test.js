const mysql = require('mysql');
var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'bank',          
});
db.connect();//连接数据库


// var sql = "select * from user_table";
// // var sql1 = "'select * from book where author = "杨青山" and country = "111111"',"
// var sql3 = 'select * from user_table where password = 111111'
// console.log(sql3);
// var addsql = 'select * from user_table where name = ? and password = ?'
// var addparmas = ['杨青山',111111];
var sql = 'select * from user_table where name = ' + '"' + '叶磊峰' + '"' + ' and password = ' + '123456';
console.log(sql);
db.query(sql,function(err,data){
if(err){
    console.log("faile")
}
else{
    console.log(JSON.stringify(data));
    console.log(JSON.stringify(data[0].power));
}  
})
// var sql = "insert into user(name,password,email) values ('dfds','dsaf','swf');"
//     db.query(sql,function(err,res){
//         if(err){
//             console.log("[insert error]-", err.message);
//             return;
//         }
//         console.log("\n\n---------------插入数据----------------------\n");
//         console.log(JSON.stringify(res));
//         console.log("\n\n---------------插入数据----------------------\n");
//     })