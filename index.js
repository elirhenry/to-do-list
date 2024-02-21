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
  var list = document.createElement("div");
  for(let i=0;i < array.length; i++){
  //create list item
    let item = document.createElement("p");
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    item.appendChild(checkbox);
    //set items contents to array[i]
    let text = document.createTextNode(array[i]);
    item.appendChild(text);
    //add it to the list
    list.appendChild(item);


  }
  division.innerHTML = '';
  division.appendChild(list);
  return list;
}


function clickBox(){
  let item = document.getElementById("").value;
  array.push(listItem);
  console.log(array)
  makeUL(array);
}