// let v/s var
// "use strict";

let letCounter = 0;
var varCounter = 0;

testVar = 0;
var testVar;
console.log(testVar);

for(var varCounter = 0;varCounter < 5; varCounter++){
    console.log('varCounter ::: '+varCounter);
}
console.log('varCounter after loop ::: '+varCounter);

for(let letCounter = 0;letCounter < 5; letCounter++){
    console.log('letCounter ::: '+letCounter);
}
console.log('letCounter after loop ::: '+letCounter);

function addValue(){
    let listItem = document.createElement("li");
    listItem.id = document.getElementById("liValue").value;
    let textNode = document.createTextNode(document.getElementById("liValue").value);
    listItem.appendChild(textNode);

    let list = document.getElementById("orderedList");
    list.appendChild(listItem);
}

function removeValue(){
    let list = document.getElementById("orderedList").children;
    for(let i = 0; i < list.length; i++){
        if(list[i].innerText.toUpperCase() === document.getElementById("removeValue").value.toUpperCase()){
            list[i].remove();
        }
    }
}