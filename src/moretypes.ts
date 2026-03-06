let response:any = "42"

let numercalLength = (response as string).length

//In this code snippet, we have a variable response of type any, which is assigned the string value "42". We then use a type assertion (response as string) to tell TypeScript that we want to treat response as a string. This allows us to access the length property of the string, which gives us the number of characters in the string. In this case, numercalLength will be assigned the value 2, since "42" has two characters.

type Book = {
    name : string
}

let bookString = "the hacker"
let bookObject = JSON.parse(bookString)as Book

console.log(bookObject.name);

//In this code snippet, we have a string bookString that contains the value "the hacker". We then use JSON.parse to parse the string into an object. However, since JSON.parse returns a value of type any, we use a type assertion (as Book) to tell TypeScript that we want to treat the parsed object as a Book type. This allows us to access the name property of the bookObject without any type errors. In this case, bookObject.name will be assigned the value "the hacker".

let inputElement = document.getElementById("myInput") as HTMLInputElement

//In this code snippet, we use the getElementById method to retrieve an element from the DOM with the ID "myInput". Since getElementById returns an HTMLElement or null, we use a type assertion (as HTMLInputElement) to tell TypeScript that we want to treat the retrieved element as an HTMLInputElement. This allows us to access properties and methods specific to input elements without any type errors. However, it's important to note that if the element with the specified ID does not exist in the DOM, this will lead to a runtime error when trying to access properties of null. Therefore, it's often a good practice to check for null before performing operations on the element.


let value: any ;
value = "Hello, World!";
value = 42;
value = { name: "Alice", age: 30 };

value.toUpperCase(); // This will cause a runtime error because value is currently an object and does not have the toUpperCase method.


let newvalue: unknown ;
newvalue = "Hello, World!";
newvalue = 42;
newvalue = { name: "Alice", age: 30 };

newvalue.toUpperCase();
// In this code snippet, we have a variable newvalue of type unknown. The unknown type is a safer alternative to any because it forces us to perform type checks before accessing properties or methods on the variable. When we try to call newvalue.toUpperCase(), TypeScript will give us an error because it cannot guarantee that newvalue is a string at that point in the code. To fix this, we would need to perform a type check (e.g., using typeof) to ensure that newvalue is a string before calling the toUpperCase method. This helps prevent runtime errors and promotes safer coding practices.

//solveing the error with unknown type

if (typeof newvalue === "string") {
   console.log(newvalue.toUpperCase()); // This will work because we have checked that newvalue is a string before calling the toUpperCase method.
} else {
   console.log("newvalue is not a string");
}

//In this code snippet, we use a type check (typeof newvalue === "string") to ensure that newvalue is a string before calling the toUpperCase method. If newvalue is indeed a string, we can safely call toUpperCase without any runtime errors. If it's not a string, we log a message indicating that newvalue is not a string. This approach allows us to handle the unknown type safely and avoid potential runtime errors.


try{

}
catch(error){
    if (error instanceof Error) {   
        console.log(error.message); // This will work because we have checked that error is an instance of the Error class before accessing the message property.
    } else {
        console.log("An unknown error occurred");
    }
}

const data : unknown = "happy"
const isString:string = data as string


type Role = "admin" | "user" 

function getRole(role: Role) {
   if (role === "admin") {
      return "You have admin access";
   } else if (role === "user") {
      return "You have user access";
   }
   role;
}
//In this code snippet, we have a function getRole that takes a parameter role of type Role, which is a union type of the string literals "admin" and "user". Inside the function, we use type narrowing to check the value of role. If role is "admin", we return a message indicating that the user has admin access. If role is "user", we return a message indicating that the user has user access. The final line role; is not necessary and does not affect the functionality of the code. It can be removed without any impact on the behavior of the function.

// i learned about type assertions, the unknown type, and type narrowing in TypeScript. Type assertions allow us to tell the compiler to treat a variable as a specific type, while the unknown type is a safer alternative to any that requires us to perform type checks before accessing properties or methods. Type narrowing helps us refine the types of variables based on runtime checks and conditions, which can lead to safer and more maintainable code. and also never type is a type that represents values that never occur, and it is often used in functions that throw errors or have infinite loops. Overall, these features of TypeScript help us write safer and more robust code by providing better type checking and reducing the likelihood of runtime errors.