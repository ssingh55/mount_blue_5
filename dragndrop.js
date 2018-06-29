var currEleId="";
function allowDrop(ev){
	ev.preventDefault();
}

function registerTheElementId(ev){
	// console.log(ev);
	ev.dataTransfer.setData('text', ev.target.id);
	currEleId=ev.path;
	currEleId=currEleId[1].id;
	console.log(currEleId);
}

function addTheElement(ev){
	console.log(ev);
	if(ev.toElement.id==isValidMoveWhitePawn(currEleId)){
	var eleId = ev.dataTransfer.getData('text');
	// console.log(eleId);
	var ele = document.getElementById(eleId);
	// console.log(ele);
	ev.target.appendChild(ele);}
}