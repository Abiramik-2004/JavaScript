let ar=[10,20,30,40,50];
ar.map((ele)=>{
    console.log(ele);
    
})
let sub=["html","css","js","javaScript","java","python","react","sql"];
sub.map((ele)=>{
    console.log(ele);
    
})
let emp=[{
    ename:"Abi",
    eid:101,
    sal:100000
},
{
    ename:"prasanth",
    eid:103,
    sal:25000
},
{
    ename:"Apsara",
    eid:104,
    sal:400000
}

]
console.log(emp[0]);

emp.map((ele)=>{
    console.log(ele);
    
})
console.log("------------------------------");

console.log("Printing name only");
emp.map((ele)=>{
    console.log(ele.ename);
    
})
console.log("------------------------------");
console.log("Printing Salary only");
emp.map((ele)=>{
    console.log(ele.sal);
    
})
console.log("------------------------------");
console.log("Printing id only");
emp.map((ele)=>{
    console.log(ele.eid);
    
})

let arr1=[0,0,1,1,1,2,2,3,3,4]
i=0;
j=1;
k=1;
while(j<arr1.length){
    if(arr1[i]==arr1[j]&& arr1[j]!=='_'){
        arr1[j]='_'
        j++;

    }
    else{
        i=j;
        j++;
        k++;
    }
}
console.log(arr1.sort())
console.log(k);
