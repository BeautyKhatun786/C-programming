// document.getElementById("demo")
// document.getElementsByClassName("demo")
// document.getElementsByTagName("demo")

// var ele = document.getElementById("demo");
// ele.innerHTML = "hello world"

var ra = document.getElementsByClassName("ameen")
ra.innerHTML = "ramzan mubarak"

window.onload = function(){
    var x = document.getElementById("demo")
    x.style.color = '#6600FF';
    x.style.width = '100px';
}

var s=document.getElementsByTagName("p");
for(var x=0;x<s.length;x++){
    s[x].style.backgroundColor = "#33EA73";
}

window.onload = function(){
var p =document.createElement("p");
var text = document.createTextNode("something created");
p.appendChild(text);
var div= document.getElementById("demo");
div.appendChild(p);
}

// window.onload = function(){
//     var p = document.createElement("p");

// }
///calling function
window.onload= function(){
//creating new paragraph 
var p = document.createElement("p");
var node = document.createTextNode("something goes right");
//adding text to paragraph 
p.appendChild(node);
//adding para to div 
var div = document.getElementById("demo");
div.appendChild(p);
}

//remove node 
window.onload= function(){
    var parent = document.getElementById("demo");
    var child1 = document.getElementById("p1");
    var child2 = document.getElementById("p2");
    parent.removeChild(child2);


}