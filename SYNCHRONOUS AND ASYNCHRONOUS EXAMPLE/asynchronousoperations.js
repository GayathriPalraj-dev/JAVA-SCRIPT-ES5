function startTask(){
    setInterval(start,1000)
}
i= 0;
function start(){
    let dd = new Date();
     document.getElementById("output").innerHTML = i;
    console.log(i)
    document.getElementById("date").innerHTML = dd.getHours()+ ":"+dd.getMinutes()+":"+dd.getSeconds()
    let datetime = dd.getHours()+ ":"+dd.getMinutes()+":"+dd.getSeconds()
    console.log(datetime)
    i++;
}
function stop(){

}