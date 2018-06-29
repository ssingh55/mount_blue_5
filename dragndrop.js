var currEleId="";
var color="";

function allowDrop(ev){
	ev.preventDefault();
}

function registerTheElementId(ev){
	 console.log(ev);
	ev.dataTransfer.setData('text', ev.target.id);
	currEleId=ev.path;
	color=currEleId[0].classList[0];
	currEleId=currEleId[1].id;
	// console.log(currEleId);
}

function addTheElement(ev){
	// console.log(ev);
	//check for pawn
	var diff=Number((currEleId+"").substring(1))-Number(ev.toElement.id.substring(1));
	if(ev.toElement.id==isValidMovePawn(currEleId,color,diff)){
		var eleId = ev.dataTransfer.getData('text');
		var ele = document.getElementById(eleId);
		ev.target.appendChild(ele);
	}
}