function newBoard(){
	var output='';
	var a='a';
	for (var i = 0; i <8; i++) {

		for(var j=0;j<8;j++){
			if((i+j)%2==0)
	        	output += '<div class="tile-white" draggable="true" ondragend="dragEnd()" ondragover="dragOver(event)" ondragstart="dragStart(event)" id="'+a+(j+1)+'" onclick="memoryFlipTile(this,\'' + i + '\')"></div>';
	    	else
	    		output += '<div class="tile-black" draggable="true" ondragend="dragEnd()" ondragover="dragOver(event)" ondragstart="dragStart(event)" id="'+a+(j+1)+'" onclick="memoryFlipTile(this,\'' + i + '\')"></div>';
		    }
		    a=String.fromCharCode(a.charCodeAt() + 1);
    }
    document.getElementById('chess-board').innerHTML = output;

}

function putItems(){
	document.getElementById('a1').innerHTML = "<img src=\"images/bb.png\" width = 'fit-content' height='fit-content'>";
}