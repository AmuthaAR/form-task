let division1=document.createElement('div');
division1.innerHTML="Firstname";

var input = document.createElement("input");
input.type = "text";
input.className = "class-name"; 
division1.appendChild(input); 

let division2=document.createElement('div');
division2.innerHTML="Middlename";
var input = document.createElement("input");
input.type = "text";
input.className = "class-name"; 
division2.appendChild(input); 

let division3=document.createElement('div');
division3.innerHTML="Lastname";
var input = document.createElement("input");
input.type = "text";
input.className = "class-name"; 
division3.appendChild(input); 

let division4=document.createElement('div');
division4.innerHTML="Email";
var input = document.createElement("input");
input.type = "text";
input.className = "class-name"; 
division4.appendChild(input); 

document.body.append(division1,division2,division3,division4);


var input = document.createElement("input");    
input.type = "submit";
input.className = "submit"; 
document.body.appendChild(input);
function foo() {
  
  let res=document.getElementById("submit").input;
  console.log(res);
}



