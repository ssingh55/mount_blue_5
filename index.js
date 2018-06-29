function newBoard(){
	var divId = document.getElementById("mainChessBoard");
	for(var i=1;i<=8;i++){
		var a="a";
		for(var j=1;j<=8;j++){
			var divEle = divId.appendChild(document.createElement("div"));
			divEle.classList = "chessBoardEle";
			// divEle.setAttribute("draggable", "true");
			// divEle.setAttribute("ondragstart", "registerTheElementId(event)");
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

function itemsAssignment(divEle,image,imageId,imageClass){
	divEle;
	divEle.src=image;
	divEle.id=imageId;
	divEle.classList=imageClass;
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
			if (varb==="a1") {
				itemsAssignment(divEle,"images/wr.png",`white_rook_${varb.substring(0,1)}`,"white");
				// divEle.style.width = "30px";
				// divEle.style.height = "30px";
			}
			else if (varb=="h1") {
				divEle.src="images/wr.png";
				divEle.id=`white_rook_${varb.substring(0,1)}`;
				divEle.classList="white";
			}
			else if (varb=="b1"){
				divEle.src="images/wn.png";
				divEle.id=`white_knight_${varb.substring(0,1)}`;
				divEle.classList="white";
			}
			else if (varb==="g1"){
				divEle.src="images/wn.png";
				divEle.id=`white_knight_${varb.substring(0,1)}`;
				divEle.classList="white";
			}

			else if (varb=="c1"){
				divEle.src="images/wb.png";
				divEle.id=`white_bishop_${varb.substring(0,1)}`;
				divEle.classList="white";
			}
			else if (varb==="f1"){
				divEle.src="images/wb.png";
				divEle.id=`white_bishop_${varb.substring(0,1)}`;
				divEle.classList="white";
			}

			else if (varb=="d1"){
				divEle.src="images/wq.png";
				divEle.id=`white_queen`;
				divEle.classList="white";
			}

			else if (varb==="e1"){
				divEle.src="images/wk.png";
				divEle.id=`white_king`;
				divEle.classList="white";
			}
			else if (varb.substring(1)=="2"){
				divEle.src="images/wp.png";
				divEle.id=`white_pawn_${varb.substring(0,1)}`;
				divEle.classList="white";
			}
			//black
			else if (varb==="a8"||varb=="h8"){
				divEle.src="images/br.png";
				divEle.id=`black_rook_${varb.substring(0,1)}`;
				divEle.classList="black";
			}
			else if (varb=="b8"||varb==="g8"){
				divEle.src="images/bn.png";
				divEle.id=`black_knight_${varb.substring(0,1)}`;
				divEle.classList="black";
			}
			else if (varb=="c8"||varb==="f8"){
				divEle.src="images/bb.png";
				divEle.id=`black_bishop_${varb.substring(0,1)}`;
				divEle.classList="black";
			}
			else if (varb=="d8"){
				divEle.src="images/bk.png";
				divEle.id=`black_king`;
				divEle.classList="black";
			}
			else if (varb==="e8"){
				divEle.src="images/bq.png";
				divEle.id=`black_queen`;
				divEle.classList="black";
			}
			else if (varb.substring(1)=="7"){
				divEle.src="images/bp.png";
				divEle.id=`black_pawn_${varb.substring(0,1)}`;
				divEle.classList="black";
			}
			a=String.fromCharCode(a.charCodeAt()+1);
		}
		a="a";
	}
}