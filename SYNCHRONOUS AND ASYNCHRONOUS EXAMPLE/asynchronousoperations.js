let i = 0;
let timer;

function startTask() {
    timer = setInterval(start, 1000);
}

function start() {

    let dd = new Date();

    document.getElementById("output").innerHTML = i;
    console.log(i);

    let datetime =
        dd.getHours() + ":" +
        dd.getMinutes() + ":" +
        dd.getSeconds();

    document.getElementById("date").innerHTML = datetime;
    console.log(datetime);

    if (i % 2 == 0) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "pink";
    } else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "green";
    }

    i++;
}

function stop() {
    clearInterval(timer);
}