//  how to declare Array
let arr=[30,"html",true, undefined];
console.log(arr);
// how to find the length of the array
console.log(arr.length);

//methods

// ! push():
//? This method is used to add any element in an array
// ? It will returns length of an array

let numbers=[10,20,30]
let a=numbers.push(40)
console.log(a);
numbers.push(40)
console.log(numbers);

// ! pop():
//? It is used to remove the last element from the Array
//? it eill returns the removed element

let tok=["keyword","identifier","seperator","literal","operator"]
let b=tok.pop();
console.log(b);
console.log(tok);

// ! 3.unshift()
//? this methods will add the elemnt at the start of an array
//? It will return the length of the modified array length

let player=['rohit','viral','iyer']
let c=player.unshift("gill")
console.log(c);

console.log(player);

// ! 4.shift()
//? This methods will remove the first element present in an Array
//? It will returns the value of an removed element

var d=player.shift()
console.log(d);
console.log(player);


//! 5. indexOf():
//? it is used to know the index of an array present in Array
//? if the element is not pesent it will return -1

let sub=["html","css","js","javascript"]
console.log(sub.indexOf('css'));
console.log(sub.indexOf('python'));
console.log(sub.indexOf('CSS'));

//! 6. concat():
//?  It is used to combine tw r more arrays and it will return one new Array
let trainer=['tabrez','pranav','nikil','gaurav']
console.log(sub.concat(trainer));

// ! 7.includes():
//? It return true if the element present in array else it will return false
console.log(trainer.includes("Santanu"));
console.log(trainer.includes("Tabrez"));
console.log(trainer.includes("tabrez"));

//! 8.join()
//?  It is used to convert an array into String
let char=['A','b','i']
console.log(char.join(""));

// Sorting an array
let array=[5,6,20,1,5]
console.log(array);
for(i=0;i<array.length;i++){
    for(j=i+1;j<array.length;j++){
        if(array[i]>array[j]){
            temp=array[i]
            array[i]=array[j]
            array[j]=temp
        }
    }
}
console.log(array);

// Find the second maximum element in an array
let ar=[7,6,2,4,9]
var max=ar[0];
for(i=1;i<ar.length;i++){
    if(max<ar[i]){
        max=ar[i]
    }
}

var smax=Math.min(ar[0],max);
for( i=1;i<ar.length;i++){
    if(smax<ar[i]&&ar[i]!=max){
        smax=ar[i]
    }

}
console.log(max);
console.log(smax)

var m=ar[0];
var sm=-Infinity;
for(k=1;k<ar.length;k++){
    if(ar[k]>m){
        let temp=m;
        m=ar[k];
        if(sm<temp){
            sm=temp;
        }
    }
    else{
       if(sm<ar[k]){
         sm=ar[k]
       }
    }
}
console.log(ar);
console.log(m);
console.log(sm);

for(i=0;i<4;i++){
    let str="";
    for(j=0;j<4;j++){
        
        if((i==0)||(i ==3) ||(j==0)||(j==3)){
           str=str+"*";
            
        }
        else{
            str=str+" ";
            
        }
    }
    console.log(str);
}

var w=[5,8,7,9];
console.log(w);
temp=w[0]
for(i=0;i<w.length-1;i++){
    w[i]=w[i+1];
}
w[w.length-1]=temp;
console.log(w);
 w=[5,8,7,9];
 console.log(w);
 
temp=w[w.length-1]
for(i=w.length-1;i>0;i--){
    w[i]=w[i-1];
}
w[0]=temp
console.log(w);

let v="AbiramiKanthasamy";
count=0;
for(i=0;i<v.length;i++){
    temp=v.charAt(i).toLowerCase();
    
    if("aeiou".indexOf(temp)!=-1){
        count++;
    }
}
console.log(count);


