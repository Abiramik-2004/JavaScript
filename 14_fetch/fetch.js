//? 1. fetch the data
    //it will return promise
//? 2.handle the promise
    //it will return response
//? 3. conert the response into json
    // it will return the promise
//? 2.handle the promise 
    //  it will return the original data
let fetchdata=fetch("https://fakestoreapi.com/products");
console.log(fetchdata);
fetchdata.then((data)=>{
    console.log(data); //response
    let jsondata=data.json();  // to convert the response into json
    console.log(jsondata);
    jsondata
    .then((data)=>{
        console.log(data);  //it will give the original output
        
    })
    .catch((err)=>{
        console.log(err);
        
    });
    
    
    
})
.catch((err)=>{
    console.log(err);
    
})
