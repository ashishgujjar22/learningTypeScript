// class Chai {
//     name:string;
//     price:number;

//     // constructor(name:string, price:number){
//     //     this.name = name;
//     //     this.price = price;
//     // }

    

//     constructor(name:string){
//         this.name = name;
//  console.log(this);
 
//     }//Constructor that initializes only the name property and logs the instance to the console
// }

// const chai1 = new Chai("ginger") //Creating an instance of the class
// chai1.name = "Masala"
// chai1.price = 10

// console.log(chai1)


//Access modifiers
class Chai {
    public flavour:string = "Masala"; //Public property, accessible from anywhere
    private secretIngredient:string= "ginger"; //Private property, accessible only within the class
    protected price:number = 20; //Protected property, accessible within the class and its subclasses

    reveal() {
        return this.secretIngredient;
    }
}

const c = new Chai();
console.log(c.reveal()); // Accessing the private property through a public method

class Shop {
    protected shopName : string = "ChaiShop"
}

class Branch extends Shop {
    getName(){
        return this.shopName;//ok
    }
}

// new Branch().getName

class Bike {
    #Model:string = "hf"
    getModel(){
        return this.#Model;
    }
}
// new Bike().getModel //Accessing the private field using the public method

class SweetLevel {
    private _sugar  = 2;

    get Level(){
        return this._sugar;
    }
    set Level(value:number){             //Setter method to set the sugar level, with validation to ensure it does not exceed 5
        if(value>5) throw new Error ('too sweet');
        this._sugar = value;
        console.log(this._sugar);
        
    }
}

const C = new SweetLevel(); //Creating an instance of the SweetLevel class
C.Level = 5 //Setting the sugar level using the setter method, which will log the new sugar level to the console


class Chai1 {
static sName = "hsgsa"
constructor (public flavour:string){

}
}

console.log(Chai1.sName);

abstract class drink {   //Abstract class that cannot be instantiated directly and must be extended by subclasses
    abstract make():void
}

class Make extends drink{   //Concrete class that extends the abstract class and implements the abstract method
 make(){ //must implement the abstract method without it class will throw an error
    console.log("making chai");
    
 }
}

class Heater {
    heat(){}
}
class chaiMaker {
    constructor(private heater:Heater){ //Dependency injection of the Heater class into the chaiMaker class 
        //The chaiMaker class depends on the Heater class to function, and the heater instance is injected through the constructor
    }
    make(){
        this.heater.heat(); //Using the injected heater instance to call the heat method when making chai
    
    
    }
}//This design allows for better separation of concerns and makes it easier to test the chaiMaker class by mocking the Heater dependency.