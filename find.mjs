//find method

// let ar1=[1,2,3,4];
// let ar2=ar1.find((value,i)=>{
//     return true;
// });
// console.log(ar2);

// let ar1=[1,2,3,4];
// let ar2=ar1.find((value,i)=>{
//     if(value>2){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(ar2);

let ar1=[1,[1,2],3];
let ar2=ar1.find((value,i)=>{
    return true;
});
console.log(ar2);