//ECMA script is scripting language specification 
//it is standardize javascript
// we also called superset of javascript 

// var a= 10;
// let b  = true;
// const c= 'hello';


// function varText(){
//     let x=10;
//     if(true){
//         let x=2;
//         console.log(x);
        
//     }
//     console.log(x);
// }

// varText()

// let name ='David';
// let msg = 'welcome'+ name + '!';
// console.log(msg);

// let name ='David';
//  let msg = `welcome ${name}!`;
// console.log(msg);

// let a =10;
// let b=20;
// console.log(`${a+b}`);


//commonly use for loop
// let arr =[1,2,3];
// for(let k=0;k<arr.length;k++){
//     console.log(arr[k]);
    
// }
//for in iterating over the keys 
//for in loop should not be used iterare over arrays
// let obj ={
//     a:1,
//     b:2,
//     c:3
// };
// for(let i in obj){
//     console.log(i);
    
// }

//for of loop 
// let list =[1,2,3];
// for(let val of list){
//     console.log(val);
    
// }

// for(let ch of "hello"){
//     console.log(ch);
    
// }
//normal function
// function add(x,y){
//     var sum = x+y;
//     console.log(sum);
    
// }
// add(34,2);

//es6 introduce new concept 
// const add=(x,y)=>{
//     let sum = x+y;
//     console.log(sum);
    
// }
// add(32,5);

// function greet(){
//     console.log("good morning");
    
// }
// greet()
//new version


// const greet=()=>{console.log("good morning");
// };
// greet()

// const x =()=>console.log("hii");
// x();

// var arr =[2,3,7,8]
// arr.forEach(function(ele){
//     console.log(ele*2);
    
// })

// var tables = [1,2,3,4,5,6,7,8,9,10];
// tables.forEach(function(ele){
//     console.log(ele =ele*3);
    
// });

// var arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach(function(arr){
//     if(arr%2 !=0)
//         console.log(arr);
        
// })

function test(a,b=5,c=7){
    return a+b+c;
}
console.log(test(5));

//default parameter
const text =(a,b=3,c=8)=>{
    return a+b+c;
}
console.log(text(4));

//javascript variable can be object datatype
let tree ={heigth:10,color:'green',grow(){
    this.heigth += 2;
}};
tree.grow();
console.log(tree.heigth);


const obj ={heigth:8,color:'green',grow(){
    this.heigth +=3;
     
}};
tree.grow()
console.log(tree.heigth);

//you can short initaial property value of same name
// let heigth = 5;
// let health = 100;
// let athlet ={
//     height,
//     health
// };
// console.log(athlet.height);

// var a={x:1,x:5,x:4};
// console.log(a.x);

// let car={
//     speed:40,3
//     accelerate(){
//         this.speed +=10;
        
//     }
// };
// car.accelerate();
// car.accelerate();


// const obj1 ={
//     a:0,b:2,c:4
// };
// const obj2 = Object.assign({c:5,d:6},obj1);
// console.log(obj2.c,obj2.d);

// // let arr =['1','2','3'];
// // let [one,two,three] =arr;
// // console.log(two);


// let a=()=>{
//     return[1,3,3];
// };
// let [one,two] = a();
// console.log(two);


// let names = ['john','fred','ann'];
// let [ann,fred,john]=names;
// console.log(john);


var ele = 