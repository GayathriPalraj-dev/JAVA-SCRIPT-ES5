fetch('https://fakestoreapi.com/products/1')
.then(response=>response.json())
.then(result=>console.log(result))
.catch(error=>console.log(error));
