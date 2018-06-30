function isValidMovePawn(evEleId, currEleId, color, diff) {
    if (color == 'black') {
        if (Number((currEleId + "").substring(1)) == 7 && diff == 2)
            return evEleId == (currEleId + "").substring(0, 1) + "" + (Number((currEleId + "").substring(1)) - 2);
        else
            return evEleId == (currEleId + "").substring(0, 1) + "" + (Number((currEleId + "").substring(1)) - 1);
    } else if (color == 'white') {
        if (Number((currEleId + "").substring(1)) == 2 && diff == -2)
            return evEleId == (currEleId + "").substring(0, 1) + "" + (Number((currEleId + "").substring(1)) + 2);
        else
            return evEleId == (currEleId + "").substring(0, 1) + "" + (Number((currEleId + "").substring(1)) + 1);
    }
}

function isValidMoveKing(evEleId, currenEleId, diff) {
    if (diff == 1 || diff == -1) {
        return true;
    } else if (diff == 0) {
        if (String.fromCharCode(evEleId.charCodeAt() + 1) == currenEleId.substring(0, 1))
            return true
        else if (String.fromCharCode(evEleId.charCodeAt() - 1) == currenEleId.substring(0, 1))
            return true;
        else
            return false;
    }
}

function isValidMoveRook(evEleId, currenEleId) {
    if (evEleId.substring(0, 1) == currenEleId.substring(0, 1) || evEleId.substring(1) == currenEleId.substring(1))
        return true;
}

function isValidMoveBishop(evEleId, currenEleId) {
    if (Math.abs(evEleId.charCodeAt(0) - currenEleId.charCodeAt(0)) == Math.abs(Number(evEleId.substring(1) - currenEleId.substring(1))))
        return true;
}

function isValidMoveQueen() {}

function isValidMoveKnight(evEleId, currenEleId) {
	console.log((evEleId.charCodeAt(0))+" "+(currenEleId.charCodeAt(0)+1) +" "+(Number(evEleId.substring(1)))+" "+Number(currenEleId.substring(1))+2);
	console.log((evEleId.charCodeAt(0))+"  "+(currenEleId.charCodeAt(0)+1)+" asas "+(Number(evEleId.substring(1)))+"  "+Number(currenEleId.substring(1)-2));
	if(Math.abs(evEleId.charCodeAt(0)-currenEleId.charCodeAt(0))==1 &&Math.abs(Number(evEleId.substring(1))-Number(currenEleId.substring(1)))==2)
		return true;
	else if(Math.abs(evEleId.charCodeAt(0)-currenEleId.charCodeAt(0))==2 &&Math.abs(Number(evEleId.substring(1))-Number(currenEleId.substring(1)))==1)
		return true;


}