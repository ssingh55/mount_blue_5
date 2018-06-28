var item;

function dragOver(e) {
  var mainTag;
  if(e.target.tagName == 'IMG'){
    mainTag = e.target.parentNode;
  }
  else{
    mainTag = e.target;
  }

  
  console.log(mainTag.tagName);
  if (isBefore(item, mainTag))
    mainTag.parentNode.insertBefore(item, mainTag);
  else
    mainTag.parentNode.insertBefore(item, mainTag.nextSibling);
}

function dragEnd() {
  item = null;
}

function dragStart(e) {
  e.dataTransfer.effectAllowed = "move";
  e.dataTransfer.setData("text/images", null);
  item = e.target;
}

function isBefore(item1, item2) {
    if (item2.parentNode === item1.parentNode)
        for (var cur = item1.previousSibling; cur; cur = cur.previousSibling)
            if (cur === item2)
                return true;
    return false;
}