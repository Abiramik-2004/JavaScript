let form =document.querySelector("form");
console.log(form);
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let sname=document.getElementById("name").value;
    let spswd=document.getElementById("pswd").value;
    console.log(sname);
    console.log(spswd);
    console.log("Submitted.....");
    alert("Submitted");
    
});
let outer1=document.querySelector(".outer");
let color = document.getElementById("color");
    color.addEventListener("change", () => {
        outer1.style.backgroundColor = color.value;
        
 });
