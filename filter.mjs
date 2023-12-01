//filter
//find
//some
//every
//include
//reverse
//sort


//filter 
//output elements must be from input elements
//filter must return true or false
//if return value is true then pass that element
//else not pass that element


// let ar1=["a","b","c"]
// let ar2=ar1.filter((value,i)=>{
// //return true;
// if(value==="a"){
//     return true;
// }else
// if(value==="b"){
//     return true;
// }else{
//     return false;
// }
// });
// console.log(ar2);


// //q1.filter even[1,2,6,3]=>[2,6]
// let ar1=[1,2,6,3]
// let ar2=ar1.filter((value,i)=>{
//     if(value%2===0){
//         return true;
//     }else{
//         return false;
//     }
// });
// console.log(ar2);

//q. filter positive number =>logic (value > 0)
//q. filter String ["a",1,"b",3]=["a","b"]

// let i=["a",1,"b",3]
// let o=i.filter((value,i)=>{
// if(typeof(value)==="string"){
//     return true;
// }else{
//     return false;
// }
// });
// console.log(o);

// //q. ["nitan","ram","roshan"]=>["nitan","roshan"]
// let i=["nitan","ram","roshan"];
// let o=i.filter((value,i)=>{
// if(value.length>3){
//     return true;
// }else{
//     return false;
// }
// });
// console.log(o);


//q. filter only truthy value
// let i=["nitan","ram","roshan","","a",1,0,undefined,null,true,false];
// // let o=i.filter((value,i)=>{
// // if(value){
// //     return true;
// // }else{
// //     return false;
// // }
// // });
//   let o=i.filter(Boolean);
// console.log(o);



//include method 
// let list=["ram","sita","hari"];
// let l=list.includes("ram");
// console.log(l);

// //q using includes methods find weather we have bearer in the string "bearer token"
// let newString="Bearer token";
// let strArr=newString.split(" ");//["Bearer", "token"]
// let hasBearer=strArr.includes("Bearer");
// console.log(hasBearer);



// //some methode
// //if one return true
// let list =["ram","hari","sita"]
// let o=list.some((value,i)=>{
//     return false;
// });
// console.log(o);
    

//every method 
//if all return true the output is true 

// let list =["ram","hari","sita"]
// let o=list.every((value,i)=>{
//     return true;
// });
// console.log(o);
    

let list=[18,21,23]
let a=list.every((value,i)=>{
    if(value>17){
        return true;
    }
    else{
        return false;
    }
});
console.log(a);