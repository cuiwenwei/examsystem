var mysql=require('mysql');
var pool=global.pool;
if(!pool){
	pool=mysql.createPool({
		user:'root',
		password:'root',
		database:'examsystem',
		host:'127.0.0.1',
		port:'3306'
	})
	global.pool=pool;
}

module.exports={connect(sql){
	return new Promise(function(resolve,reject){
		pool.getConnection(function(err,conn){
			if(err){
				reject(err);
			}else{
				conn.query(sql,function(err,results){
					if(err){
						reject(err);
					}else{
						resolve(results);
					}
					conn.release();
				})
			}
		})
	})
}
}