const chaiFlaovour : string[] = ['Masala', 'Ginger', 'Cardamom', 'Clove', 'Cinnamon', 'Pepper'];

const chaiPrice : number[] = [10, 12, 15, 20, 25, 30];

const chaiQuantity : Array<number> = [1,2,3,4] //Generic array type

type Chai = {
    name:string,
    price:number
} //Custom type

const chai:Chai[]= [
    {name:"sweet",price:20},
    {name:"ginger",price:10}
]//Array of custom type

const book : readonly string[] = ['The Great Gatsby', 'To Kill a Mockingbird', '1984']; //Readonly array

// book.push

const table : number[] []=[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]//Multidimensional array or array of arrays

let chaiTuple : [string, number] = ['Masala', 10] //Tuple
//chaiTuple[20,"ginger"] 
// //Error: Tuple type '[string, number]' of length '2' has no element at index '20'.

let userInfo : [string, number, boolean?] = ['John Doe', 30, true] //Tuple with optional element
userInfo = ['Jane Doe', 25] //Valid, as the boolean element is optional

let namedTuple : [name:string,price:number] = ['Masala',10 ] //Named tuple

//Enum


enum CupSize {
    Small,
    medium,
    large
}//Enum with default values

const size = CupSize.large

enum Count{
    One = 1,
    Two,
    Three
}//Enum values starting from 1 and auto-incrementing example two will have value 2 and three will have value 3

enum ChaiType {
    Masala = "masala",
    Ginger = "ginger"

}//Enum with string values

function makeChai (nmae:ChaiType):string{ //Function that takes an enum value as a parameter
    return `Hello ${nmae}`
    
}

makeChai(ChaiType.Ginger) //Output: Hello ginger
// makeChai(10); //Error: Argument of type '10' is not assignable to parameter of type 'ChaiType'.


const enum Sugars {
    High = 3,
    Medium = 2,
    Low = 1
}

const sugarLevel = Sugars.Medium //Inlined value of 2, as it's a const enum