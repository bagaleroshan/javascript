//slice and splice


// //slice
// let list =["a","b","c","d","e"];
// let nlist=list.slice(1,4);
// console.log(nlist);


// //splice
// let list =["a","b","c","d","e"];
//  //list.splice(1,3);
//  list.splice(2,2,"e1","e2");
// console.log(list);

let list =["a","b","c","d","e"];
let list2=list.splice(1,3);

 console.log(list);//["a","e"]
 console.log(list2);//["b","c","d"]