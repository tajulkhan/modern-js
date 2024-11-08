
// Class example 1 ----------------

// class pizza{
//     constructor(typePizza, sizePizza, crustPizza) {
//         this.type= typePizza,
//         this.size = sizePizza,
//         this.crust = crustPizza,
//         this.toppings = []
//     }
//     getToppings() {
//         return this.toppings;
//     }
//     serToppings(toppingsPizza) {
//         this.toppings.push(toppingsPizza)   ;
//     }
//     bake() {
//         return console.log(`Baking a ${this.type} ${this.size} ${this.crust} crust pizza with ${this.toppings}`);
//     }
// }
// const orderPizza1 = new pizza("Margaritta", "small", "Original");
// orderPizza1.serToppings("sausage");
// orderPizza1.serToppings("Egg");
// console.log(orderPizza1.getToppings());
// orderPizza1.bake();

// Class example 2 Parent child class ------------------

class pizza{
    constructor(sizePizza) {
        this.size = sizePizza,
        this.crust = "Original"
    }
    getCrust() {
        return this.crust;
    }
    setCrust(crustPizza) {
        this.crust = crustPizza;
    }
}
class specialPizza extends pizza{
    constructor(sizePizza) {
        super(sizePizza);
        this.type = "Margaritta";
    }
    slice() {
        return console.log(`Our ${this.type} ${this.size} ${this.crust} pizza has 8 slices`);
    }
}
const mySpecialPizza = new specialPizza("Medium");
mySpecialPizza.slice();

// Class example 3 Public & Private  class ------------------
class pizzaa{
    crust = "Original"; //Public
    #sauce = "tomato"; //Private
    constructor(sizePizza) {
        this.size = sizePizza
    }
    getCrust() {
        return this.crust;
    }
    setCrust(crustPizza) {
        this.crust = crustPizza;
    }
    back() {
        return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} pizza`);
    }
}

const myPizzaa = new pizzaa("small");
myPizzaa.back()
console.log(myPizzaa.getCrust());

///
