let emp={
    ename:`Abirami Kanthasamy`,
    eid:10,
    sal:90000,
    city:`New York`
}
console.log(emp.ename);
console.log("Salary is ",emp.sal);

//destructure
let{sal, eid, city,ename}=emp;
console.log(city);
console.log(ename);
console.log(sal);

// ?Shallow copy
let arr1=[10,20,30,40];
let copy=arr1;
copy.push(50);
arr1.shift();
console.log(copy);
console.log(arr1);