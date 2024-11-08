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

//  for loop & odd number & even& revers number
let iz = 10;
for (let i = iz; i >= 1; i--){
    if (i % 2 == 0) {
        console.log("Odd Number #" + i);        
    } 
}

// getting object, object inside use method & return the value & use js literals & print the data innerHTML 
const tajBio = {     
    firstName: "Tajul",
    lastName: "Khan",
    age: 23,
    hobbies: ['sports', 'cooking', 'travel', 'driving'],
    parents: {
        father: 'attha',
        mother:'amma'  
    },
    // fullName: function () {
    //     // return  this.firstName + ' ' + this.lastName;
    //     return `${this.firstName} ${this.lastName}`;
    // }
    fullName() {
        return `${this.firstName} ${this.lastName}` 
    }
    
}
const personsMethods = {
    yearOfBirth() {
       return new Date().getFullYear() - this.age;      
    },
    favNumbers: [1, 3, 4, 6, 7],
    get favNumbersGet() {
        return this.favNumbers;
    },
}

Object.assign(tajBio, personsMethods);
const objectCopy = Object.assign({}, tajBio);
console.log(objectCopy);

console.log(tajBio.yearOfBirth());

console.log(tajBio);

console.log(tajBio.fullName());
console.log(tajBio.parents);

// Template literale
const hobbies = ['sports', 'cooking', 'travel', 'driving'];
b = ""; 
for (let i = 0; i < hobbies.length; i++){
    b += `<li>${hobbies[i]}</li>`;
    document.getElementById('hobbiesResult').innerHTML = `<ul>${b}</ul>`;
}

document.getElementById('bioResult').innerHTML = tajBio.fullName();

const printNo = [1, 2, 3, 4, 5];
for (const x of printNo) {
    console.log(x);
}
tajBio.firstName = "TajTajul";
console.log(tajBio, objectCopy);
// spread operator
const finalObject = { ...tajBio, ...personsMethods };
delete tajBio.age;
console.log(finalObject);
console.log(tajBio);


function getFullname(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}
console.log(getFullname("Taj", "khan"));
console.log(tajBio, tajBio.favNumbersGet);

function generateOTPfn(length = 6) {
    const digits = '0123456789';
    let otp = '';
    for (let i = 0; i < length; i++) {
        otp += digits[Math.floor(Math.random() * 10)];
    }

    // Display the generated OTP in the 'otpresult' element
    document.getElementById('otpresult').innerHTML = otp;
}

function printDate() {
   return document.getElementById('showdate').innerHTML = new Date();
}
  
//   Object Destructuring