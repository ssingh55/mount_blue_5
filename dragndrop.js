var currEleId = "";
var color = "";
var nextColor = "white";
var piece_name = "";

function allowDrop(ev) {
    ev.preventDefault();
}

function registerTheElementId(ev) {
    // console.log(ev);
    ev.dataTransfer.setData('text', ev.target.id);
    currEleId = ev.path;
    piece_name = currEleId[0].id.substring(6);
    // console.log(piece_name);
    color = currEleId[0].classList[0];
    currEleId = currEleId[1].id;
    // console.log(currEleId);
}

function addTheElement(ev) {
    // console.log(ev);
    //changes the turn
    // if(color==nextColor&&color=="white")
    //     nextColor ="black";
    // else if(color==nextColor&&color=="black")
    //     nextColor ="white";
    // else 
    //     return;

    if (piece_name.substring(0, 4) == "pawn") piece_name = "pawn";
    else if (piece_name.substring(0, 6) == "knight") piece_name = "knight";
    else if (piece_name.substring(0, 4) == "rook") piece_name = "rook";
    else if (piece_name.substring(0, 6) == "bishop") piece_name = "bishop";
    switch (piece_name) {
        //check for king
        case "king":
            var diff = Number((currEleId + "").substring(1)) - Number(ev.toElement.id.substring(1));
            // console.log(diff);
            var pdiff = Number((currEleId + "").substring(1)) - Number(ev.toElement.parentNode.id.substring(1));
            // console.log(ev.toElement.parentNode.id, currEleId, diff);
            if (isValidMoveKing(ev.toElement.parentNode.id, currEleId, pdiff) && ev.path[0].classList[0] == (color == 'white' ? 'black' : 'white')) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                temp = ev.target.parentNode;
                if (ev.target.tagName.toUpperCase() == 'IMG') {
                    // ev.target.parentNode;
                    ev.target.remove();
                    // console.log(ev.target.parentNode);
                }
                temp.appendChild(ele);
            } else if (isValidMoveKing(ev.toElement.id, currEleId, diff)) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;
            //check for bishop
        case "bishop":
            if (isValidMoveBishop(ev.toElement.parentNode.id, currEleId) && ev.path[0].classList[0] == (color == 'white' ? 'black' : 'white')) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                temp = ev.target.parentNode;
                if (ev.target.tagName.toUpperCase() == 'IMG') {
                    // ev.target.parentNode;
                    ev.target.remove();
                    // console.log(ev.target.parentNode);
                }
                temp.appendChild(ele);
            } else if (isValidMoveBishop(ev.toElement.id, currEleId)) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;

        case "rook":
            //check for rook
            if (isValidMoveRook(ev.toElement.parentNode.id, currEleId) && ev.path[0].classList[0] == (color == 'white' ? 'black' : 'white')) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                temp = ev.target.parentNode;
                if (ev.target.tagName.toUpperCase() == 'IMG') {
                    // ev.target.parentNode;
                    ev.target.remove();
                    // console.log(ev.target.parentNode);
                }
                temp.appendChild(ele);
            } else if (isValidMoveRook(ev.toElement.id, currEleId)) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;

        case "knight":
            if (isValidMoveKnight(ev.toElement.parentNode.id, currEleId) && ev.path[0].classList[0] == (color == 'white' ? 'black' : 'white')) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                temp = ev.target.parentNode;
                if (ev.target.tagName.toUpperCase() == 'IMG') {
                    // ev.target.parentNode;
                    ev.target.remove();
                    // console.log(ev.target.parentNode);
                }
                temp.appendChild(ele);
            } else if (isValidMoveKnight(ev.toElement.id, currEleId)) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;

            //check it
        case "queen":
        if ((isValidMoveRook(ev.toElement.parentNode.id, currEleId) && ev.path[0].classList[0] == (color == 'white' ? 'black' : 'white'))||isValidMoveBishop(ev.toElement.parentNode.id, currEleId) && ev.path[0].classList[0] == (color == 'white' ? 'black' : 'white')) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                temp = ev.target.parentNode;
                if (ev.target.tagName.toUpperCase() == 'IMG') {
                    // ev.target.parentNode;
                    ev.target.remove();
                    // console.log(ev.target.parentNode);
                }
                temp.appendChild(ele);
            } 
            else if (isValidMoveRook(ev.toElement.id, currEleId) || (isValidMoveBishop(ev.toElement.id, currEleId))) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;

            //pawn
        case "pawn":
            var diff = Number((currEleId + "").substring(1)) - Number(ev.toElement.id.substring(1));
            //console.log(diff);
            if (isValidMovePawnKill(ev.toElement.parentNode.id, currEleId, color, diff) && ev.path[0].classList[0] == (color == 'white' ? 'black' : 'white')) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                temp = ev.target.parentNode;
                if (ev.target.tagName.toUpperCase() == 'IMG') {
                    // ev.target.parentNode;
                    ev.target.remove();
                    // console.log(ev.target.parentNode);
                }
                temp.appendChild(ele);
            } else if (isValidMovePawn(ev.toElement.id, currEleId, color, diff)) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;
    }
}