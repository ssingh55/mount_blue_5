var currEleId="";
var color="";
function allowDrop(ev){
	ev.preventDefault();
}

function registerTheElementId(ev){
	// console.log(ev);
	ev.dataTransfer.setData('text', ev.target.id);
	currEleId=ev.path;
	color=currEleId[0].classList[0];
	currEleId=currEleId[1].id;
	console.log(currEleId);
}

function addTheElement(ev){
	console.log(ev);
	if(ev.toElement.id==isValidMovePawn(currEleId,color)){
		var eleId = ev.dataTransfer.getData('text');
		var ele = document.getElementById(eleId);
		ev.target.appendChild(ele);
	}
}