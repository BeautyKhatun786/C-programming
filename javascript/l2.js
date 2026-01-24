let arr=[1,2,3,5,6,6,8]
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
    
// }
// arr.forEach((value,index)=>{
//     console.log(index,value*value);
    
// })

// // for of print values 
// // for in print keys or indexes

// for(i of arr){
//     console.log(i);
    
// }

// for(a in arr){
//     console.log(a);
    
// }
//map function return new arr 
// let new_arr= arr.map((value)=>{
//     return value * value
    
// })
// console.log(new_arr);

// let new_arr = arr.filter((x)=>{
//     return x>5
// })
// console.log(new_arr);

// let arr1 = "beauty"
// ar= Array.from(arr1)
// console.log(ar);
// console.log(typeof(ar));

let arr2=[1,2,3,4,5,6,7,8,9]
let new_arr=arr2.filter((x)=>{
    return x%2==0
})
console.log(new_arr);
