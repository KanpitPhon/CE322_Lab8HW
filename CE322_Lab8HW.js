class Menu {
    constructor(name) {
      this.name = name;
    }
    price;
    getName(){
        return this.name;
    }
    setPrice(price) { //Polymorphism
      this.price = price;
    }
    getPrice() {
      return this.price;
    }
    startCooking() { //Absortraction
      console.log('Start cooking');
    }
    finishCooking() { //Absortraction
      console.log('Finish cooking');
    }
}
  
class Steak extends Menu { //Inheritance
    constructor(name,) {
      super(name);
    }
    #meat; //Encapsolation
    setMeat(meat) {
      this.#meat = meat;
    }
    
    getMeat() {
      return this.#meat;
    }
}
  
console.log('First menu');
const menu1 = new Menu('Pizza');
console.log(menu1.getName());
menu1.setPrice(150);
console.log(menu1.getPrice());
menu1.startCooking();
menu1.finishCooking();
console.log()
console.log('Second menu');
const menu2 = new Steak('Steak');
console.log(menu2.getName());
menu2.setPrice(350);
console.log(menu2.getPrice());
menu2.setMeat('Lamb');
console.log(menu2.getMeat());
menu2.startCooking();
menu2.finishCooking();
  
