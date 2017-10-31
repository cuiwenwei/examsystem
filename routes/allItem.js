var express=require('express');
var router=express.Router();
var allItemDB=require('../db/allItemDB.js');
var Exam=require('../module/exam.js');
var querystring=require('querystring');
var url=require('url');
router.get('/findAll',function(req,resp){
	allItemDB.findAll(function(results){

		
		// console.log(JSON.stringify(results));
		resp.send(JSON.stringify(results));
	})
})
router.get('/insert',function(req,resp){
	var exam=new Exam();
	Object.assign(exam,req.query);
	allItemDB.insert(exam,function(results){
		console.log(exam);
	})
})
router.post('/batchDelete',function(req,resp){
	console.log(req.body);
	allItemDB.batchDelete(req.body,function(results){
		console.log(results);
	})
})
router.get('/update',function(req,resp){
	console.log(req.query);
	allItemDB.update(req.query,function(results){
		console.log(results);
	})
})
router.get('/query',function(req,resp){
	// console.log(req.query);
	// var query=querystring.parse(url.parse(req.url).pathname);
	// console.log(query);
	allItemDB.query(req.query,function(results){
		console.log(results);
		resp.send(JSON.stringify(results));
	})
})
module.exports=router;