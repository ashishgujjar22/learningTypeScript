let tea : {
    name: string,
    price: number,
    isHot: boolean
}
//  = {
//     name: "Masala Chai",
//     price: 10,
//     isHot: true
// }

tea = {
    name: "Masala Chai",
    price: 10,
    isHot: true
}
// the above code defines an object called tea with properties name, price, and isHot. The type of the tea object is defined inline using an object type. The properties of the tea object are specified with their respective types. The tea object is then assigned a value that matches the defined structure.

type Tea = {    
    name: string,
    price: number,
    isHot: boolean
}

const tea1: Tea = {
    name: "Masala Chai",
    price: 10,
    isHot: true
}
// the above code defines a type called Tea which has properties name, price, and isHot. The tea1 object is created using the Tea type and has values for all the properties defined in the Tea type. This approach allows us to reuse the Tea type for multiple tea objects, making our code more maintainable and organized.


type Cup = { size:string}

let smallCup: Cup = {size:"small"}
// the above code defines a type called Cup which has a property size of type string. The smallCup object is created using the Cup type and has a value of "small" for the size property. This allows us to create different cup objects with varying sizes while maintaining a consistent structure defined by the Cup type.

let largeCup = {size:"large" , material:"steel"}

smallCup = largeCup
// duck typing is a concept in TypeScript where the type of an object is determined by its structure rather than its explicit type declaration. In this case, the smallCup variable is assigned the value of largeCup, which has an additional property material. Since smallCup only requires the size property, it can accept largeCup without any issues. This is because both smallCup and largeCup have the same structure (they both have a size property), allowing for flexibility in assigning values based on their properties rather than their specific types.

type Brew = {brewTime : number}

const coffee = {brewTime: 5, flavor: "strong"}

let myBrew: Brew = coffee
// the above code defines a type called Brew which has a property brewTime of type number. The coffee object is created with properties brewTime and flavor. The myBrew variable is assigned the value of coffee, which is allowed because of duck typing. Since myBrew only requires the brewTime property, it can accept the coffee object even though it has an additional property flavor. This demonstrates how TypeScript allows for flexibility in assigning values based on their structure rather than their specific types.


type Item =  {name: string, price: number}

type Address = {street: string, city: string}

type Order = {
    id : string,
    item : Item[],   // it is an array of Item objects
    address : Address
}
// the above code defines three types: Item, Address, and Order. The Item type has properties name and price, while the Address type has properties street and city. The Order type combines these two types by including an array of Item objects and an Address object. This structure allows us to represent an order that contains multiple items and a delivery address in a clear and organized way.

type Chai = {
    type : string,
    order : number
    sugar : boolean
}

const updateChai = (update : Partial<Chai>) => {
    console.log(update);
    
}

updateChai({type: "Masala Chai"})
updateChai({order: 2})
updateChai({}) // 


//make all properties of the Chai type optional using the Partial utility type. This allows us to update only specific properties of a Chai object without needing to provide values for all properties. The updateChai function can now accept an object that may have any combination of the properties defined in the Chai type, making it more flexible for updating chai orders.


type ChaiOrder = {
    name? : string,
    quantity? : string
    price? :number
}

const placeOrder = (order : Required <ChaiOrder>) => {
    console.log(order);
    
}

placeOrder({ name:"masalaChai" , quantity : "100ml",price:100}) //Make all properties required

type BaseChai = Pick<ChaiOrder ,  "price" | "name" >

const MakeChai:BaseChai = {
   name: "Lemon Tea",
   price :50

}   // the above code defines a type called BaseChai which is created using the Pick utility type. It selects only the price and name properties from the ChaiOrder type. The MakeChai object is then created using the BaseChai type and has values for the name and price properties. This allows us to create a new type that includes only specific properties from an existing type, making it more focused and easier to work with in certain contexts.

type ChaiOrder1 = Omit <ChaiOrder , "price" >
 
// the above code defines a type called ChaiOrder1 which is created using the Omit utility type. It excludes the price property from the ChaiOrder type. This means that ChaiOrder1 will have all the properties of ChaiOrder except for price. This can be useful when we want to create a new type that is similar to an existing type but without certain properties that are not relevant in a specific context.

