function isValidMovePawn(currEleId,color,diff){
	// console.log(diff);
	if (color=='black'){
		if(Number((currEleId+"").substring(1))==7&&diff==2)
			return (currEleId+"").substring(0,1)+""+(Number((currEleId+"").substring(1))-2);
		else
			return (currEleId+"").substring(0,1)+""+(Number((currEleId+"").substring(1))-1);
	}
	else if(color=='white'){
		if(Number((currEleId+"").substring(1))==2&&diff==-2)
			return (currEleId+"").substring(0,1)+""+(Number((currEleId+"").substring(1))+2);
		else
			return (currEleId+"").substring(0,1)+""+(Number((currEleId+"").substring(1))+1);
	}
}