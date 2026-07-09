let gayathri = new Promise((resolved,rejected)=>{
    //resolved("succesfull done")
    rejected("error")
})
gayathri.then(result=>console.log("then called: "+result))
.catch(error=>console.log("catch called "+error))
.finally(()=>console.log("finally"))
 
console.log("normal statement")
console.log("second statement")