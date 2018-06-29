function isValidMovePawn(currEleId,color){
	if (color=='black')
		return (currEleId+"").substring(0,1)+""+(Number((currEleId+"").substring(1))-1);
	else if(color=='white')
		return (currEleId+"").substring(0,1)+""+(Number((currEleId+"").substring(1))+1);
}