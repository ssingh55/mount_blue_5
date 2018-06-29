function isValidMoveBlackPawn(currEleId){
	return (currEleId+"").substring(0,1)+""+(Number((currEleId+"").substring(1))-1);
}
function isValidMoveWhitePawn(currEleId){
	return (currEleId+"").substring(0,1)+""+(Number((currEleId+"").substring(1))+1);
}