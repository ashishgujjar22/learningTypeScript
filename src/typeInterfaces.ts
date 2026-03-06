type ChaiOrder = {
    type : string,
    order : number
    sugar : boolean
}

function MakeChai(order :ChaiOrder) {
    console.log(order);
    
}

function ServeChai(order :ChaiOrder) {
    console.log(order);
    
}
// it is  a method to reduce code repetition and make it more maintainable
function ProcessChai(order :ChaiOrder) {
    MakeChai(order);
    ServeChai(order);
}

type TeaRecipe  ={
    water : number,
    milk : number
}

class MasalaChai implements TeaRecipe { // it is a class that implements the TeaRecipe interface
    water = 100; 
    milk = 50;
} 

interface TeaSize {
    size:"small" | "large"} 

class TeaMakeing implements TeaSize {
   size : "small" | "large" ="large"

}

//Using interface to define the structure of an object

type BaseChai = {tealeaves : number}
type Extra = {
    masala : number
}

type MasalaChai1 = BaseChai & Extra 
 
const cup: MasalaChai1 = {
    tealeaves:1,
    masala :2
}

//the above code defines a type called MasalaChai1 which is a combination of BaseChai and Extra types. It has properties tealeaves and masala. The cup object is created using the MasalaChai1 type and has values for both properties.intersection types are used to combine multiple types into one. It allows us to create a new type that has all the properties of the combined types. In this case, MasalaChai1 has both tealeaves and masala properties.