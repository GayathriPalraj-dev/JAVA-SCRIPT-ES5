fetch('https://fakestoreapi.com/products/')
.then(response=>response.json())
.then(result=>{
    result.forEach(data=>{
        let div = document.createElement("div");
        let textNode = document.createTextNode(data.title);
        div.appendChild(textNode);
        document.getElementsByTagName("body")[0].appendChild(div);

    });
})

.catch(error=>console.log(error));
