class Exam{
	constructor(name,type,direction,knowledge,diff,time=null){
		this.name=name;
		this.type=type;
		this.direction=direction;
		this.knowledge=knowledge;
		this.diff=diff;
		this.time=null;
	}
}
module.exports=Exam;