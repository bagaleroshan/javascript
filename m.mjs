//q2 [1,2,3]=>[11,12,13]
export let fun=(inputArr)=>{
    let outputArr=inputArr.map((value,i)=>{
return value+10;
    });
    return outputArr;
}

//q1 [1,2,3,4]=>[ 2, 4, 6, 8 ]
 export let fun1=(inputArr)=>{
     let outputArr=inputArr.map((value,i)=>{
 return value*2;
     });
 return outputArr;
 }
