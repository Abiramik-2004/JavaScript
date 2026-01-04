let arr=['html','css','javaScript','Webtech','java','manual Testing','automation','J2EE'];
let ol=document.querySelector("ol");
arr.map((ele)=>{
    console.log(ele);
    let li=document.createElement("li");
    li.textContent=ele;
    ol.appendChild(li);
    
});
let main=document.querySelector("main");
arr.map((ele)=>{
    let div=document.createElement("div");
    div.classList.add("box");
    div.innerHTML=`<h4>${ele}</h4>`
    main.append(div);

})