console.log("Hello everyoune, how are you");

let display=()=>{
    console.log("I AM DISPLAY FUNCTION");
}
// setTimeout()
//it is not executing line by line it will execute later
setTimeout(display,2000);
console.log("bye bye");
console.log("Abirami Kanthasamy");
console.log("Start");
setTimeout(()=>{
   console.log( "I am SetTimeOut");
   
},3000)

let wish=()=>{
    console.log("Happy Birthday!!!!");
    
}
setTimeout(wish,9000);
console.log("end");

//setInterval: Set interval if we give 5 mins to execute it executes reeatedly.

// let sorry=()=>{
//     console.log("I am sorry");
    
// }
// setInterval(sorry,1000)
let a=setInterval(()=>{
    console.log("hi");
    
},2000)
clearInterval(a);

let b=setInterval(()=>{
    console.log("hi");
},1000)

setTimeout(()=>{
    clearInterval(b);
},6000);

