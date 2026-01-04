let players=["rohit","virat","prasanth","rahul"];
console.log(players);
for(i=0;i<players.length;i++){
    console.log(players[i]);
    
}
let num=10;
while(num<=15){
    console.log(num);
    num++;
    
}
do{
    console.log("hello");
    num++;
    
}while(num>20);

// For in loop and for of loop
let sub=[`java`,`python`,`DataStructures`,`Webtech`,`django`];
// ? for in loop
// it will return the index and similar to the for loop
for(j in sub){
    console.log(j,sub[j]);
}
// ? for of loop
// it will return the element present in an array
for(let ele of sub){
    console.log(ele);
    
}
/// to traversethe object
let obj1={
    name:`pen`,
    price:10,
    color:`black`
}
for(j in obj1){
    console.log(j);
    
}
for(j in obj1){
    console.log(j, obj1[j]);
    
}
// ! for of loop is not possible for the object
for(j of obj1){
    console.log( j);
    
}