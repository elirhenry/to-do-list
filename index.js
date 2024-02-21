let array = [];

let listContainer = document.querySelector('#theItems')

/* function clickFunct(){
    let orderedListElement = document.querySelector('theItem')
    let listItem = document.getElementById("list").value;
    array.push(listItem);
    
    for(let i=0;i < array.length; i++){
      let listElement = document.createElement("li")
      listElement.appendChild(listItem[i])
      orderedListElement.
    
    }   
    //console.log(array)
} */

//let listItem = document.getElementById("list").addEventListener("click", () => array.push(listItem))//add listItem to array
	//listContainer.appendChild(document.createTextNode(array[i]))
function clickFunct(){
    let listItem = document.getElementById("list").value;
    array.push(listItem);
    console.log(array)
    makeUL(array);
}

function makeUL(array){
// create the unordered list element
	let division = document.getElementById("theItems");
  var list = document.createElement("ul");
  for(let i=0;i < array.length; i++){
  //create list item
    let item = document.createElement("li");
    //set items contents to array[i]
    let X = document.createTextNode(array[i]);
    item.appendChild(X);
    //add it to the list
    list.appendChild(item);
    division.innerHTML = array[i];
  }
  return list;
}
