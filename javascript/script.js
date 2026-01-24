// //object
// // var person = {
// //     name:"john",age:22,favColor:"green"
// // }
// // console.log(person);

// //object type(constructor)

// function person(name,age,fevColor){
//     this.name = name;
//     this.age = age;
//     this.fevColor = "black";
// }
// var arman = new person("arman",21,"black")
// console.log(arman.name);
// console.log(arman.age);
// console.log(arman.fevColor);




// // var person ={
// //     name:"beauty",
// //     age:22,
// //     fevColor:"white"
// // } 


// var simba = {
//     category:"lion",
//     gender:"male"
// }

// console.log(simba.category);


//object intialization 

var john = {name:"beauty",age:24}  //object consist of proprties which are used to describe object 
// console.log(john);

var john ={
    name:"beauty",
    age:22,
}
//static object
var james ={
    name:"james",
    age:25
}
var person ={name:"john",age:22};
// console.log(john.name);
// console.log(james.age);

//dynamic object 
function person(name,age){
    this.name = name;
    this.age = age;   
}
var john = new person("john",22);
// console.log(john.name);
// console.log(john.age);
function person(name,age){
    this.name = name;
    this.age = age; 
    this.changeName = function(name){
        this.name= name;
    }  
}

// var p1 = new person("beauty",22);
// var p2 = new changeName("arman");
// console.log(p1.name);
// console.log(p2.name);

// function mathCalc(height,weight){
//     this.height = height;
//     this.weight = weight;
//     this.sampleCalc = calculate();
// }
// let calculate = ()=>{
//     return height * weight;
// }

