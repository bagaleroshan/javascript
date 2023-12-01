//reduce method
// let list=[1,2,3,4];
// let a=list.reduce((pre,cur)=>{
//     console.log(pre,pre);
// return 10;

// },0);
// console.log(a);

//find the sum of all product
let products=[
    {name:"earphone",price:1000},
    {name:"battery",price:2000},
    {name:"charger",price:500},
];
let productsPrices=products.map((value,i)=>{
return value.price;
});
let sumOfAllProduct=productsPrice.reduce((pre,cur)=>{
    return pre + cur;
},0);
console.log(sumOfAllProduct);
