let display=()=>{
    alert("hello, how are you? ");
    
}

let hide=()=>{
    let h2=document.querySelector("h2");
    h2.style.display="none";
    
}
let display2=()=>{
    let h2=document.querySelector("h2");
    h2.style.display="block";
}
let count=0;
let incr=()=>{
    
    count=count+1
    let num=document.getElementById("num")
    num.innerText=count
    console.log(count);
    
    

}
let dcr=()=>{
    count=count-1
    let num=document.getElementById("num")
    num.innerText=count
    console.log(count);
}
let rst=()=>{
    count=0
    let num=document.getElementById("num")
    num.innerText=count

}
let gnr=()=>{
    let button=document.querySelector("button")
    button.style.backgrundColor="green";
}
let changecolour=()=>{
    let box1=document.querySelector(".box1")
    box1.style.backgroundColor="green";
}
let changecolour2=()=>{
    let box1=document.querySelector(".box1")
    box1.style.backgroundColor="red";
}
let btn1 = document.querySelector(".btn1");
btn1.addEventListener("click",()=>{
    alert("I am evenListerner")
})
let f1=()=>{
    console.log("I am f1");
    
}
let f2=()=>{
    console.log("I am f1");
    
}
let btn3=document.querySelector(".btn3");
btn3.addEventListener("click",()=>{
    console.log("f1");
    
})
btn3.addEventListener("click",()=>{
    console.log("f2");
    
})
let box3=document.querySelector(".box3");

box3.addEventListener("click",()=>{
    
    let num1=document.getElementById("num1")
    let count=Number(num1.innerText)
    count=count+1
    num1.innerText=count
    console.log(count);

});
let box4=document.querySelector(".box4");
let value=0;
box4.addEventListener("click",()=>{
    value++;
    let c=document.querySelector("#c")
    c.innerText=value

})
box4.addEventListener("mouseout",()=>{
    
    value=0
    let c=document.querySelector("#c")
    c.innerText=value

});
btn5=document.querySelector(".btn5")
btn5.addEventListener("click",(e)=>{
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log("button 5");   
    
})
btn6=document.querySelector(".btn6");
btn6.addEventListener("dblclick",()=>{
    alert("it is a double click")
    console.log("double click");
    
})
text=document.querySelector(".text1")
text.addEventListener("keypress", () => {
    console.log("key is pressed");
});

text.addEventListener("keyup", (e) => {
    console.log(e.target.value);
    let output=document.querySelector(".output")
    output.innerHTML=`<h2>${e.target.value}</h2>`
    console.log("Key is up");
    
});
text1=document.querySelector("#inp2");
text1.addEventListener("keypress",()=>{
    console.log("key is pressed");
    
});
text1.addEventListener("keyup",(e)=>{
    console.log(e.target.value);
    let boxop=document.querySelector(".boxop");
    boxop.innerHTML=`<h4>${e.target.value}</h4>`
    
    
    
})