//convert object to array

// let info={
//     name:"roshan",
//     age:32,
//     isMarried:false
// };
// // let keyArray=Object.keys(info);
// // console.log(keyArray);

// // let valueArray=Object.values(info);
// // console.log(valueArray);

// let propertyArray=Object.entries(info);
// console.log(propertyArray);



//convert array to Object
// let ar1=[["name","ram"],
// ["age",33],
// ["isMarried",false]
// ];
// let info =Object.fromEntries(ar1);
// console.log(info);



//input to obj
//if obj empty (the obj i empty)
//else the obj is not empty

let obj={name:"ram"};
let objArr=Object.values(obj);

if(objArr.length===0){
    console.log("the obj is empty");
}else{
    console.log("the obj isn't empty");
}