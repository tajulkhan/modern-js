// Object destructuring 
const tajBio = {     
    firstName: "Tajul",
    lastName: "Khan",
    age: 23,
    hobbies: ['sports', 'cooking', 'travel', 'driving'],
    parents: {
        father: 'attha',
        mother:'amma'  
    },
    fullName() {
        return `${this.firstName} ${this.lastName}` 
    }
}

const { firstName, lastName } = tajBio;  // special variable 
console.log(firstName, lastName);

