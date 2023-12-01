//number sort

// let list=[0,8,1,9,10]
// //ase
// // let list1=list.sort((a,b)=>{
// // return a-b;
// // });
// // console.log(list1);

// //dse
// let list1=list.sort((a,b)=>{
//     return b-a;
//     });
//     console.log(list1);


// let list=["a","abcd","bc"];

// let newList=list.sort((a,b)=>{
//     return a.length-b.length;
// });
// console.log(newList);

let products=[
    {name:"earphone",price:1000},
    {name:"battery",price:2000},
    {name:"charger",price:500}
];
let sortedProduct=products.sort((a,b)=>{
    return a.price-b.price;
});
console.log(sortedProduct)