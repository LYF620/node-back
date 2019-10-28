const mysql=require('mysql');
const config = require('./datebase_config');
module.exports.register = function(name,pas,sex,department){
  return new Promise(function(reslove,reject){
          const db = mysql.createConnection(config);
    db.connect();//连接数据库
    const sql = "insert into user_table(name,password,sex,department,power) values('" + name + "','" + pas + "','" + sex + "','" + department + "','" + "3');";
    // var addsql = "insert into user(id,name,password,email) values(?,?,?,?);"
    // var addparmas = [name,pas,email];
    console.log(sql);
    db.query(sql,function(err,res){
        if(err){
            reject(err);
        }
        else{
            console.log("\n\n---------------插入数据----------------------\n");
            reslove(JSON.stringify(res));
            console.log("\n\n---------------插入数据----------------------\n");
        }
        
    })
  })

}

module.exports.update = function(id,name,pas){
    const db = mysql.createConnection(config);
    db.connect();//连接数据库    
    var upsql = "updata user set username=?,password=? where id =?";
    var upparmas = [id,name,pas];
    // [name,pas,id]
    db.query(upsql,upparmas,function(err,res){
        if(err){
            console.log("[insert error]-", err.message);
            return;
        }
        console.log("\n\n---------------更新数据----------------------\n");
        console.log(JSON.stringify(res));
        console.log("\n\n---------------更新数据----------------------\n");
    })
}

module.exports.getall  = function(){
    //查询语句
    const db = mysql.createConnection(config);
    db.connect();//连接数据库    
    var sql = "select * from user";
    db.query(sql,function(err,res){
    if(err){
        console.log("faile")
    }
    else{
        console.log(JSON.stringify(res));
    }  
    })
}

module.exports.delete = function(id){
    console.log(1);
    const db = mysql.createConnection(config);
    db.connect();
    var sql = "delete from user where id=?"
    var deleteparmas = [id];
    console.log(sql);
    db.query(sql,deleteparmas,function(err,res){
        if(err){
            console.log("[insert error]-", err.message)
        }
        else{
            console.log(JSON.stringify(res));
        }
    })
}

module.exports.login = function(name,password){
    return new Promise(function (resolve, reject){
        const db = mysql.createConnection(config);
        db.connect();
        var sql = 'select * from user_table where name = ' + '"' + name + '"' + ' and password = ' + password;
        console.log(sql);
        db.query(sql,function(err,res,Callback){
        if(err){        
            reject(err)
        }
        else{
            console.log(JSON.stringify(res[0].power));
            resolve(JSON.stringify(res[0]));
        }
        })
    }); 
} 

// module.exports.login = function(name,password,callback){
//         const db = mysql.createConnection(config);
//         db.connect();
//         var sql = 'select * from user_table where name = ' + '"' + name + '"' + ' and password = ' + password;
//         console.log(sql);
//         db.query(sql,function(err,res){
//         if(err){
//             // reject(err)
//         }
//         else{
//             callback(JSON.stringify(res));
//             // resolve(JSON.stringify(res));
//         }
//         })
// } 


module.exports.renden = function(name,password){
    return new Promise(function (resolve, reject){
        const db = mysql.createConnection(config);
        db.connect();
        var sql = 'select * from user_table where name = ' + '"' + name + '"' + ' and password = ' + password;
        console.log(sql);
        db.query(sql,function(err,res,Callback){
        if(err){        
            reject(err)
        }
        else{
            console.log(JSON.stringify(res[0].power));
            resolve(JSON.stringify(res[0]));
        }
        })
    }); 
} 