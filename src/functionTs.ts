const Ball = (name : string ,price : number) => {
    return `Buy ${name} price of ${price}`
}

Ball('Football', 100)
Ball( "BasketBall", 150 )

function getNumber () : number {
    return 42
}

function show (): void {      
console.log("shjdfgsdhjfgs");

}
// The above code defines a function called Ball that takes two parameters, name and price, and returns a string that includes the name and price of the ball. The function is then called twice with different arguments to demonstrate its usage. Additionally, there are two more functions defined: getNumber, which returns a number, and show, which does not return anything (void). These functions serve as examples of how to define and use functions in TypeScript.


function chai (name:string = "Masala Chai"){
    return `I want to drink ${name}`
}