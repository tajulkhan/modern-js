// var chocolate

var chocolate = "miky bar";
var _chocolate = "snackers";
var $chocolate = "diary milk";
var boolean = true;
console.log(typeof boolean);

console.log(chocolate, _chocolate, $chocolate);

//  1. Global scope
//  2. Local scope

function changeChocolate() {
    var chocolates = "five star";
    console.log(chocolates);
    
}

changeChocolate();

// let and const

for (var i = 0; i <= 5; i++){
    console.log('Iterations', i);
}
console.log(i);
let favMovie = "leo";
favMovie = "Kabali";
console.log(favMovie);

const favPersons = ['dad', 'mom'];
favPersons.push('brother');
console.log(favPersons);

// globalThis.alert("Global this");

//  for loop & odd number & even number & revers number
let iz = 10;
for (let i = iz; i >= 1; i--){
    if (i % 2 == 0) {
        console.log("Odd Number #" + i);        
    } 
}