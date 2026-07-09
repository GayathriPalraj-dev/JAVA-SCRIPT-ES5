// callback function 
function greading(fname, callback) {
    return "welcome " + callback(fname);
}

let maleInfo = function(fname) {
    return "mr " + fname;
};

let femalInfo = (fname) => "miss " + fname;

console.log(greading("john", maleInfo));

console.log(greading("Gayathri", femalInfo));

console.log(
    greading("raj", function(fname) {
        return "mr " + fname;
    })
);

console.log(
    greading("veera", (fname) => "miss " + fname)
);  
// closure function
function Bank(){
    let balance = 5000;


return {
    withdraw(amount){
          balance = balance-amount
    }
    deposit(amount){
         balance = balance+amount
    }
}}
let account = Bank();
account.withdraw(100);
account.withdraw(50);
