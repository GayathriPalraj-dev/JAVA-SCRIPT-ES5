//normal function - ES5
function display(){
    console.log("normal function")
}
display();

// expression style function - ES5
let display1 = function(){
    console.log("expression function")
}
display1();

//Arrow function - ES6
let display2 = ()=>console.log("arrow function")
display2();

// Addition of two value using expression style
let addtion = function(a,b){
    let sum = a+b;
    return sum ;
}
console.log("addtion of two value "+addtion(23,45))

// Addtion of two value using arrow function style
let addtion1 = (a,b)=> a+b;
console.log("two value "+addtion1(10,34))

// find largest of two values using expression style
let largest = function(a,b){
    if(a>b){
        return "a is largest"
    }
    else{
        return "b is largest"
    }
}
console.log("largest is "+largest(400,340))

// find largest of two values using arrow funtion style
let largest2 = (a,b)=>{
    if(a>b){
        return "a is largest"
    }
    else{
        return "b is largest"
    }
}
console.log("largest is "+largest2(400,3440))


