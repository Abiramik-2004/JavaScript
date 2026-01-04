let getData = async () => {
    try {
        let res = await fetch("https://fakestoreapi.com/products");
        let data = await res.json();
        console.log(data);

        display(data);   // ⭐ PASS DATA HERE
    }
    catch(err){
        console.log(err);
    }
}
getData()
let main = document.querySelector("main");
let display = (data) => {
    console.log(data);
    data.map((ele) => {
        let li = document.createElement("li");
        li.innerText = ele.title;
        main.append(li);
    });
}
let search=document.querySelector("input")
console.log(search);
