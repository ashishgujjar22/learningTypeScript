let city = "Delhi" //type inference

city = 100; //this give error because ts understand that city is string type and it can not assign number to it

let age : number = 30; //type annotation

age = "thirty"; //this give error because ts understand that age is number type and it can not assign string to it

let isStudent : boolean = true; //type annotation

isStudent = "yes"; //this give error because ts understand that isStudent is boolean type and it can not assign string to it

let hobbies : string[] = ["reading", "coding", "traveling"]; //type annotation for array of strings

hobbies.push(123); //this give error because ts understand that hobbies is an array of strings and it can not assign number to it

let person : { name: string, age: number } = { name: "Ashish", age: 30 }; //type annotation for object

person.name = 123; //this give error because ts understand that person.name is string type and it can not assign number to it

person.age = "thirty"; //this give error because ts understand that person.age is number type and it can not assign string to it

let greet : (name: string) => string = function(name: string): string {
  return `Hello, ${name}!`;
}; //type annotation for function

console.log(greet("Ashish")); //this is correct

console.log(greet(123)); //this give error because ts understand that greet is a function that takes a string argument and returns a string, and it can not assign number to it

let id : number | string ;

id = 100;

id = "ten"; //this is correct because we use union type which allow both number and string types

id = true; //this give error because ts understand that id can only be number or string, and it can not assign boolean to it

let data : any = "Hello"; //any type allows any type of value

data = 123; //this is correct because any type allows any type of value

data = true; //this is correct because any type allows any type of value

function  print (id: number | string ) {
    console.log(`ID: ${id}`);
}

print(100);
print("ten");

type User = { name : string , age : number , isStudent : boolean };

let user : User =  {
    name : "Ashish",
    age : "ten", //this give error because ts understand that age is number type and it can not assign string to it
    isStudent : true
}

function add (a : number ,b : number) : number {
    return a + b ;
}

add(10, 20); //this is correct

add("10", "20"); //this give error because ts understand that add is a function that takes two number arguments and returns a number, and it can not assign string to it
