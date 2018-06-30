//creating new board on call
function newBoard() {
    var divId = document.getElementById("mainChessBoard");
    for (var i = 1; i <= 8; i++) {
        var a = "a";
        for (var j = 1; j <= 8; j++) {
            var divEle = divId.appendChild(document.createElement("div"));
            divEle.classList = "chessBoardEle";
            // divEle.setAttribute("draggable", "true");
            // divEle.setAttribute("ondragstart", "registerTheElementId(event)");
            divEle.setAttribute("ondragend", "");
            divEle.setAttribute("ondragover", "allowDrop(event)");
            divEle.setAttribute("ondragenter", "");
            divEle.setAttribute("ondragleave", "");
            divEle.setAttribute("ondrop", "addTheElement(event)");

            if ((i + j) % 2 == 0) {
                divEle.setAttribute("id", a + "" + i);
                divEle.style.backgroundColor = "white";
            } else {
                divEle.setAttribute("id", a + "" + i);
                divEle.style.backgroundColor = "#ada6a6";
            }
            a = String.fromCharCode(a.charCodeAt() + 1);
        }
        a = "a";
    }
    rearrangementOfItems();
}

//assigning the piece
function itemsAssignment(divEle, image, imageId, imageClass) {
    divEle;
    divEle.src = image;
    divEle.id = imageId;
    divEle.classList = imageClass;
}


function rearrangementOfItems() {
    var imgEle;
    var divId;
    var divEle;
    var varb; //just a variable
    for (var i = 1; i <= 8; i++) {
        var a = "a";
        for (var j = 1; j <= 8; j++) {
            varb = a + "" + i;
            // console.log(varb);
            divId = document.getElementById(varb);
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
            switch (varb) {
                case "a1":
                    itemsAssignment(divEle, "images/wr.png", `white_rook_${varb.substring(0,1)}`, "white");
                    // divEle.style.width = "30px";
                    // divEle.style.height = "30px";
                    break;
                case "h1":
                    itemsAssignment(divEle, "images/wr.png", `white_rook_${varb.substring(0,1)}`, "white");
                    break;
                case "b1":
                    itemsAssignment(divEle, "images/wn.png", `white_knight_${varb.substring(0,1)}`, "white");
                    break;
                case "g1":
                    itemsAssignment(divEle, "images/wn.png", `white_knight_${varb.substring(0,1)}`, "white");
                    break;
                case "c1":
                    itemsAssignment(divEle, "images/wb.png", `white_bishop_${varb.substring(0,1)}`, "white");
                    break;
                case "f1":
                    itemsAssignment(divEle, "images/wb.png", `white_bishop_${varb.substring(0,1)}`, "white");
                    break;
                case "d1":
                    itemsAssignment(divEle, "images/wq.png", `white_queen`, "white");
                    break;
                case "e1":
                    itemsAssignment(divEle, "images/wk.png", `white_king`, "white");
                    break;
                    //black
                case "a8":
                    itemsAssignment(divEle, "images/br.png", `black_rook_${varb.substring(0,1)}`, "black");
                    break;
                case "h8":
                    itemsAssignment(divEle, "images/br.png", `black_rook_${varb.substring(0,1)}`, "black");
                    break;
                case "b8":
                    itemsAssignment(divEle, "images/bn.png", `black_knight_${varb.substring(0,1)}`, "black");
                    break;
                case "g8":
                    itemsAssignment(divEle, "images/bn.png", `black_knight_${varb.substring(0,1)}`, "black");
                    break;
                case "c8":
                    itemsAssignment(divEle, "images/bb.png", `black_bishop_${varb.substring(0,1)}`, "black");
                    break;
                case "f8":
                    itemsAssignment(divEle, "images/bb.png", `black_bishop_${varb.substring(0,1)}`, "black");
                    break;
                case "d8":
                    itemsAssignment(divEle, "images/bk.png", `black_king`, "black");
                    break;
                case "e8":
                    itemsAssignment(divEle, "images/bq.png", `black_queen`, "black");
                    break;
                default:
                    if (varb.substring(1) == "7")
                        itemsAssignment(divEle, "images/bp.png", `black_pawn_${varb.substring(0,1)}`, "black");
                    else if (varb.substring(1) == "2")
                        itemsAssignment(divEle, "images/wp.png", `white_pawn_${varb.substring(0,1)}`, "white");

            }
            a = String.fromCharCode(a.charCodeAt() + 1);
        }

        a = "a";
    }
}