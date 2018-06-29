function newBoard(){
	var divId = document.getElementById("mainChessBoard");
	for(var i=1;i<=8;i++){
		var a="a";
		for(var j=1;j<=8;j++){
			var divEle = divId.appendChild(document.createElement("div"));
			divEle.classList = "chessBoardEle";
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
			//white
			if (varb==="a1"||varb=="h1") {
				divEle.src="images/wr.png";
				// divEle.style.width = "30px";
				// divEle.style.height = "30px";
			}
			else if (varb=="b1"||varb==="g1"){
				divEle.src="images/wn.png";
			}

			else if (varb=="c1"||varb==="f1"){
				divEle.src="images/wb.png";
			}

			else if (varb=="d1"){
				divEle.src="images/wq.png";
			}

			else if (varb==="e1"){
				divEle.src="images/wk.png";
			}
			else if (varb.substring(1)=="2"){
				divEle.src="images/wp.png";
			}
			//black
			else if (varb==="a8"||varb=="h8"){
				divEle.src="images/br.png";
			}
			else if (varb=="b8"||varb==="g8"){
				divEle.src="images/bn.png";
			}
			else if (varb=="c8"||varb==="f8"){
				divEle.src="images/bb.png";
			}
			else if (varb=="d8"){
				divEle.src="images/bk.png";
			}
			else if (varb==="e8"){
				divEle.src="images/bq.png";
			}
			else if (varb.substring(1)=="7"){
				divEle.src="images/bp.png";
			}
			a=String.fromCharCode(a.charCodeAt()+1);
		}
		a="a";
	}
}