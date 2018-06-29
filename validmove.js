function isValidMovePawn(evEleId,currEleId, color, diff) {
    if (color == 'black') {
        if (Number((currEleId + "").substring(1)) == 7 && diff == 2)
            return evEleId==(currEleId + "").substring(0, 1) + "" + (Number((currEleId + "").substring(1)) - 2);
        else
            return evEleId==(currEleId + "").substring(0, 1) + "" + (Number((currEleId + "").substring(1)) - 1);
    } else if (color == 'white') {
        if (Number((currEleId + "").substring(1)) == 2 && diff == -2)
            return evEleId==(currEleId + "").substring(0, 1) + "" + (Number((currEleId + "").substring(1)) + 2);
        else
            return evEleId==(currEleId + "").substring(0, 1) + "" + (Number((currEleId + "").substring(1)) + 1);
    }
}

function isValidMoveKing(evEleId,currenEleId,color,diff){
	if(color=='black'){
		if(diff==1)
		{
			return true;
		}
		else if(diff==-1)
		{
			return true;
		}
		else if(diff==0)
		{
			if(String.fromCharCode(evEleId.charCodeAt() + 1)==currenEleId.substring(0,1))
				return true;
			else if(String.fromCharCode(evEleId.charCodeAt() - 1)==currenEleId.substring(0,1))
				return true;
			else
				return false;
		}
	}
	else if(color = 'white')
	{

	}
}