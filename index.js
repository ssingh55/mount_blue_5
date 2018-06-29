function newBoard(){
	var divId = document.getElementById("mainChessBoard");
	for(var i=1;i<=8;i++){
		var a="a";
		for(var j=1;j<=8;j++){
			var divEle = divId.appendChild(document.createElement("div"));
			divEle.classList = "chessBoardEle";
			divEle.setAttribute("draggable", "true");
			divEle.setAttribute("ondragstart", "registerTheElementId(event)");
			divEle.setAttribute("ondragend", "");
			divEle.setAttribute("ondragover", "allowDrop(event)");
			divEle.setAttribute("ondragenter", "");
			divEle.setAttribute("ondragleave", "");
			divEle.setAttribute("ondrop", "addTheElement(event)");
			
			if ((i+j)%2==0) {
				divEle.setAttribute("id", a+""+i);
				divEle.style.backgroundColor= "white";
			}
			else{
				divEle.setAttribute("id", a+""+i);
				divEle.style.backgroundColor = "#ada6a6";
			}
			a=String.fromCharCode(a.charCodeAt()+1);
		}
		a="a";
	}
	rearrangementOfItems();
}

function allowDrop(ev){
	ev.preventDefault();
}

function registerTheElementId(ev){
	ev.dataTransfer.setData('text', ev.target.id);
	console.log(ev.target.id);
}

function addTheElement(ev){
	var eleId = ev.dataTransfer.getData('text');
	console.log(eleId);
	var ele = document.getElementById(eleId);
	console.log(ele);
	ev.target.appendChild(ele);
}

function rearrangementOfItems(){
	var imgEle;
	var divId;
	var divEle;
	var varb;
	for(var i=1;i<=8;i++){
		var a="a";
		for(var j=1;j<=8;j++){
			varb = a+""+i;
			// console.log(varb);
			divId=document.getElementById(varb);
			divEle = divId.appendChild(document.createElement("img"));
			divEle.style.margin = '5px';
			divEle.setAttribute("draggable", "true");
			divEle.setAttribute("ondragstart", "registerTheElementId(event)");
			divEle.setAttribute("ondragend", "");
			divEle.setAttribute("ondragover", "allowDrop(event)");
			divEle.setAttribute("ondragenter", "");
			divEle.setAttribute("ondragleave", "");
			divEle.setAttribute("ondrop", "addTheElement(event)");
			// divEle = divId.appendChild(document.createElement("p"));
			// document.getElementsByTagName("p")[0].textContent ="red";


			//white
			if (varb==="a1"||varb=="h1") {
				divEle.src="images/wr.png";
				divEle.id="white_rook";
				// divEle.style.width = "30px";
				// divEle.style.height = "30px";
			}
			else if (varb=="b1"||varb==="g1"){
				divEle.src="images/wn.png";
				divEle.id="white_knight";
			}

			else if (varb=="c1"||varb==="f1"){
				divEle.src="images/wb.png";
				divEle.id="white_bishop";
			}

			else if (varb=="d1"){
				divEle.src="images/wq.png";
				divEle.id="white_queen";
			}

			else if (varb==="e1"){
				divEle.src="images/wk.png";
				divEle.id="white_king";
			}
			else if (varb.substring(1)=="2"){
				divEle.src="images/wp.png";
				divEle.id="white_pawn";
			}
			//black
			else if (varb==="a8"||varb=="h8"){
				divEle.src="images/br.png";
				divEle.id="black_rook"
			}
			else if (varb=="b8"||varb==="g8"){
				divEle.src="images/bn.png";
				divEle.id="black_knight";
			}
			else if (varb=="c8"||varb==="f8"){
				divEle.src="images/bb.png";
				divEle.id="black_bishop";
			}
			else if (varb=="d8"){
				divEle.src="images/bk.png";
				divEle.id="black_king"
			}
			else if (varb==="e8"){
				divEle.src="images/bq.png";
				divEle.id="black_queen";
			}
			else if (varb.substring(1)=="7"){
				divEle.src="images/bp.png";
				divEle.id="black_pawn";
			}
			a=String.fromCharCode(a.charCodeAt()+1);
		}
		a="a";
	}
}