//map 
// let list=["a","b","c"];

// let list1= list.map((value,i)=>{
// //return 5;
// //return value;
// console.log("ram");
// return i;
// });
// console.log(list1);


// //[1,2,3,4]=>[2,4,6,8]
// //use map if
// //input is array
// //output is array
// //input and output length are same

// let input=[1,2,3,4]
// let output=input.map((value,i)=>{
// let out=value*2;
// return out;
// });
// console.log(output);

// let input=["my","name","is"];
// let output=input.map((value,i)=>{
// return value.toUpperCase();
// });
// console.log(output);

// //let input=["my","name","is"]; =>[ 'MYN', 'NAMEN', 'ISN' ]
// let input=["my","name","is"];
// let output=input.map((value,i)=>{
//     let out=`${value.toUpperCase()}N`
// return out;
// });
// console.log(output);


// //[1,3,4,5]=>[100,300,0,500]here odd num is multiplied by 100 and even number is multiplied by 0
// let input=[1,3,4,5];
// let output=input.map((value,i)=>{
//  if(value%2===0){
//     let out=value*0;
//     return out;
//  }
//  else{
//     let out=value*100;
//     return out;
//  }
// });
// console.log(output);

// //[1,2,3,4]=>[2,0,6,0]here odd index is multiplied by 0 and even index is multiplied by 2
// let input=[1,2,3,4];
// let output=input.map((value,i)=>{
//     if(i%2===0){
//         let out=value*0;
//         return out;
//     }
//     else{
//         let out=value*2;
//         return out;
//     }
// });
// console.log(output);

//["r","A","m"]=>["R","a","M"]
// let input = ["r","A","m"];
// let output=input.map((value,i)=>{
// if(i===2){
//     return value.toUpperCase();
// }else{
//     return value.toLowerCase();
// }
// });
// console.log(output);

//split()
//join()
// convert string to array=>split()
//"ram"=["r","a","m"]

//console.log("ram".split("a"));=>"r","m"
//console.log("ram".split(""));=>'r','a','m'

// //"my name is roshan"=>["my","name","is","roshan"]
// let input="my name is roshan";
// let output=input.split(" ");
// console.log(output);



//join()
//convert array to string
//console.log(["r","a","m"].join("*"));=>r*a*m
//console.log(["a","b"].join(""));=>ab

//["my","name","is","roshan"]=>"my name is roshan"
// let i=["my","name","is","roshan"];
// let o=i.join(" ");
// console.log(o);

let fun1=(inputArr)=>{
    let outputArr=inputArr.map((value,i)=>{
return value*2;
    });
return outputArr;
}
let _fun1=fun1([1,2,3,4]);
console.log(_fun1);