let str1='hello'
let str2=`HELLO`
let str3="Bye Bye"
console.log(typeof(str1));       // ! string
console.log(`length of the str2 ${str2} is `,str2.length);       // !  length of the str2 HELLO is  5

// Method of String
// ? 1.toUpperCase
// this method id used to convert one string into uppercase and it will return on new String original string it will not change
let upper=str1.toUpperCase()
console.log(upper);      //! HELLO
console.log(str1);      //! hello

// ? 2.toLowerCase
// this method id used to convert one string into uppercase and it will return on new String original string it will not change
let lower=str2.toLowerCase()
console.log(lower);     //! hello
console.log(str2);    //! HELLO

//? 3. trim()
// It is used to remove the space from both the sides of the String
let ename=` AbiramiKanthasamy `
console.log(ename);
console.log(ename.length);   //! 19
let emp=ename.trim()
console.log(emp)
console.log(emp.length);     //! 17
// ? 4. indexOf()

// this method is used to return the index of the given character
//it will tae the last appearance of the given character
console.log(ename.indexOf("i"));     //! 3

// ? 5. lastIndexOf()
// this method is used to return the index of the given character

console.log(ename.lastIndexOf('i'));

// ? 6.charAt()
//this method is used to know the character, present in the given position
console.log((ename.charAt(7)));

// Reverse the String
let Reverse=(str)=>{
    let rev="";
    for(i=str.length-1;i>=0;i--){
        rev+=str.charAt(i);
    }
    console.log(rev);
    
}
Reverse("hello")
Reverse("java")

let RevPoin=(str)=>{
    let arr=str.split("")
    let i=0;
    let j=arr.length-1
    while(i<=j){
        let t=arr[i]
        arr[i]=arr[j]
        arr[j]=t
        i++
        j--
    }
    str=arr.join("")
    console.log(str);
    
}
RevPoin("hello")

// !7.includes()
// it is used to know the given string is present or not
// If it present it will return true else it will return false
let msg="karthi"

console.log(msg.includes("a"));
// !8.concat()
// It is used to combain two or more than two string and it will 
// return new string

let c="karthia"
let d="keyan"
console.log(c.concat(" ",d));
// !9.replace
//It is used to change or replace  one string with another string 
// it will replace the first occuranse

console.log(c.replace('ka','e'));
//!10.replaceAll()
//It is used to change or replace  one string with another string 
// it will replace the all occuranse
console.log(c.replaceAll('a','e'));
// !11.split
// It is used to convert any string into array
let z="karthi keyan";
let y=z.split("");
console.log(z.split());
console.log(y);
// !12.slice()
// It is used to extract one string from another string 
// it takes two parameter (start index,end index) end index is optional 
// it does not take the end index value
// It can take negative value also
// By using this method we can not  traverse right to left 

let s1=`hello `;
console.log(s1.slice());
console.log(s1.slice(0,2));
console.log(s1.slice(-6));
console.log(s1.slice(-3,-1));
console.log(s1.slice(1));

// !substring()
// It is used to extract one string from another string 
// it takes two parameter (start index,end index) end index is optional 
// it does not take the end index value
// It can not take negative value if the value is negative it consider as 0
// By using this method we can not  traverse right to left 
// If you give(3,1) it wil take as(1,3) which means the value is small it take it as starting index
let s2=`HELLO`;
console.log(s2.substring());
console.log(s2.substring(0,2));
console.log(s2.substring(-6));
console.log(s2.substring(3,1));
console.log(s2.substring(1));




