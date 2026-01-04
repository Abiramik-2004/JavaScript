console.log("I am external js");
let username="karthi";
console.log(username);
var age=20;
console.log(age);
var age;
const id=30;
console.log(id);
// !Number
let pno=1029384756
console.log(pno)
console.log(typeof(pno));
let sal=140000000.500
console.log(sal);
console.log(typeof(sal));
// !boolean
let job=true;
let job1=false;
console.log(typeof(job))
//!string
let a="karthi";
let b='keyan';
let c=`s`
console.log("a is "+typeof(a))
console.log(typeof(b))
console.log(typeof(c))
//!undifined
// Any variable which is declared but not initialized is called as udefined type 
let d;
console.log(d);
console.log(typeof(d));
//null
let salary=null
console.log(salary)
console.log(typeof salary)

//bigint
let val=2n
console.log(val);
console.log(typeof val);

//! Array
let subjects=["html","css",`javascript`,'java']
console.log(subjects);
// ! Array with multiple datatype
let arr=[10,"hello", true,undefined,[40,50]]
console.log(arr)
//! 2.function
function display(){
    console.log("I am display function")
}
display()

//3. Object
let student= {
    sname:"Abirami kanthasamy",
    age : 10
}
console.log(student)
console.log(student.age)


