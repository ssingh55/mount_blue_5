var currEleId = "";
var color = "";
var piece_name = "";

function allowDrop(ev) {
    ev.preventDefault();
}

function registerTheElementId(ev) {
    console.log(ev);
    ev.dataTransfer.setData('text', ev.target.id);
    currEleId = ev.path;
    piece_name = currEleId[0].id.substring(6);
    console.log(piece_name);
    color = currEleId[0].classList[0];
    currEleId = currEleId[1].id;
    // console.log(currEleId);
}

function addTheElement(ev) {
    console.log(ev);
    if (piece_name.substring(0, 4) == "pawn") piece_name = "pawn";
    else if (piece_name.substring(0, 6) == "knight") piece_name = "knight";
    else if (piece_name.substring(0, 4) == "rook") piece_name = "rook";
    else if (piece_name.substring(0, 6) == "bishop") piece_name = "bishop";
    switch (piece_name) {
        //check for pawn
        case "king":
            var diff = Number((currEleId + "").substring(1)) - Number(ev.toElement.id.substring(1));
            console.log(diff);
            if (isValidMoveKing(ev.toElement.id, currEleId, diff)) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;
        case "bishop":
            if (isValidMoveBishop(ev.toElement.id, currEleId)) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;
        case "rook":
            if (isValidMoveRook(ev.toElement.id, currEleId)) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;

        case "knight":
            if(isValidMoveKnight(ev.toElement.id, currEleId)){
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;
        case "queen":
            if (isValidMoveRook(ev.toElement.id, currEleId) || (isValidMoveBishop(ev.toElement.id, currEleId))) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;
        case "pawn":
            var diff = Number((currEleId + "").substring(1)) - Number(ev.toElement.id.substring(1));
            if (isValidMovePawn(ev.toElement.id, currEleId, color, diff)) {
                var eleId = ev.dataTransfer.getData('text');
                var ele = document.getElementById(eleId);
                ev.target.appendChild(ele);
            }
            break;
    }
}