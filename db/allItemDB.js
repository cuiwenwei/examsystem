var pool=require('./pool');

function findAll(handler){
	var sql='select * from checkbox';
	pool.connect(sql).then(function(results){
		// console.log(results);
		handler.call(this,results);
	}).catch(function(err){
		console.log(err);
	})
}
function insert(exam,handler){
	var sql="insert into checkbox values(null,'"+exam.name+"','"+exam.type+"',"
	+exam.diff+",'"+exam.direction+"','"+exam.knowledge+"','"+exam.time+"','"
	+exam.item+"','"+exam.options+"',"+exam.grade+");";
	pool.connect(sql).then(function(results){
		console.log(results);
		handler.call(this,results);
	}).catch(function(err){
		console.log(err);
	})
}
function batchDelete(ids,handler){
	var sql="delete from checkbox where id in ("+ids.join(',')+")";
	pool.connect(sql).then(function(results){
		console.log(results);
		handler.call(this,results);
	}).catch(function(err){
		console.log(err);
	})
}
function update(exam,handler){
	var sql="update checkbox set name='"+exam.name+"',type='"+exam.type+"',diff="
	+exam.diff+",direction='"+exam.direction+"',knowledge='"+exam.knowledge+"',time='"
	+exam.time+"',item='"+exam.item+"',options='"+exam.options+"',grade="+exam.grade
	+" where id="+exam.id;
	pool.connect(sql).then(function(results){
		console.log(results);
		handler.call(this,results);
	}).catch(function(err){
		console.log(err);
	})
}
function query(body,handler){
	var sql="select * from checkbox where name like '%"+body.name+"%' or diff like '%"
	+body.diff+"%' or knowledge like '%"+body.knowledge+"%' or type like '%"+body.type
	+"%' or direction like '%"+body.direction+"%'";
	// var sql="select * from checkbox where "+body.select+" like '%"+body.input+"%'";
	pool.connect(sql).then(function(results){
		console.log(body);
		handler.call(this,results);
	}).catch(function(err){
		console.log(err);
	})
}

module.exports={
	findAll:findAll,
	insert:insert,
	batchDelete:batchDelete,
	query:query
}
