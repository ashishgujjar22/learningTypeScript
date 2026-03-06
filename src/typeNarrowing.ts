function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`; // type narrowing using typeof operator
  }
  return `chai order : ${kind}`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`; // type narrowing using truthy check
  }
  return `Serving default masala chai`;
}
//type narrowing is a technique used in TypeScript to refine the type of a variable based on certain conditions or checks. It allows developers to narrow down the possible types of a variable, making it easier to work with and reducing the chances of runtime errors. In the provided code, we see two examples of type narrowing:

//1. The getChai function uses the typeof operator to check if the input kind is a string. If it is, it returns a message indicating that chai is being made with that flavor. If it's not a string (i.e., it's a number), it returns a message indicating the order number of the chai.

//2. The serveChai function checks if the msg parameter is truthy (i.e., not null, undefined, or an empty string). If it is truthy, it returns a message indicating that the specified chai is being served. If it's falsy, it returns a default message indicating that masala chai is being served.

//Type narrowing helps improve code readability and maintainability by providing more specific types for variables, which can lead to better type checking and fewer runtime errors.

function orderChai(size: "small" | "medium" | "large" | number) {
   if(size === "small"){
      return 'small chai'
   }
  if (size === "medium" || size === "large") {
    return `give a chai ${size}`;
  }
  return `give ${size} chai`;  // type narrowing using literal types and equality checks
}
orderChai(2)   // returns "give 2 chai"
orderChai("medium") // returns "give a chai medium"
orderChai("small") // returns "small chai"


class KulhadChai {
   serve(){
      return `Serving Kulhad Chai`
   }
}
class CuttingChai {
   serve(){
      return `Serving Cutting Chai`
   }
}


function Serve (chai : KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai){
   return chai.serve();
  }
  return chai.serve();
}
//In the Serve function, we use the instanceof operator to check if the chai parameter is an instance of the KulhadChai class. If it is, we call the serve method specific to KulhadChai. If it's not (i.e., it's an instance of CuttingChai), we call the serve method specific to CuttingChai. This is another example of type narrowing using class instances.

//Overall, type narrowing is a powerful feature in TypeScript that allows developers to write safer and more maintainable code by refining the types of variables based on runtime checks and conditions. 


type ChaiOrder = {
   type : string,
   sugar : number
}

function isChaiorder (obj : any) :obj is ChaiOrder {
   return (typeof(obj) === "object" &&
   typeof(obj) !== null &&
   typeof obj.type === "string" &&
   typeof obj.sugar === "number")
}

function serveOrder(item: ChaiOrder){
   if(isChaiorder(item)){
      return   `Seving ${item.type} chai with ${item.sugar}` // type narrowing using user-defined type guard function
   }
   return `Serving Custom chai${item}`
   
}
//In the serveOrder function, we define a user-defined type guard function called isChaiorder. This function checks if the input object has the expected structure of a ChaiOrder (i.e., it has a type property of type string and a sugar property of type number). If the check passes, we can safely access the properties of the item parameter as a ChaiOrder. If the check fails, we return a default message indicating that a custom chai is being served. This is an example of type narrowing using a user-defined type guard function.

type MasalaChai = {type:"masala" , spicelevel: number}
type GingerChai = {type:"ginger" , amount: number}
type ElaichiChai = {type:"elaichi" , aroma: number}

type chai =  MasalaChai | ElaichiChai | GingerChai

function MakeChai (order : chai) {
   switch (order.type) {
      case "masala":
         return `Masala chai is ready`
         
         break;
          case "elaichi":
         return `elaichi chai is ready`
         
         break;
          case "ginger":
         return `ginger chai is ready`
         
         break;
   
      default:
         break;
   }
}
//In the MakeChai function, we use a switch statement to check the type property of the order parameter, which is of the union type chai (which can be MasalaChai, ElaichiChai, or GingerChai). Based on the value of the type property, we return a message indicating which type of chai is ready. This is an example of type narrowing using a switch statement to handle different cases based on a discriminant property (in this case, the type property).

function brew (order: MasalaChai | ElaichiChai | GingerChai) {
   if ("spicelevel" in order) {
      return `Brewing masala chai with ${order.spicelevel} spice level`;
   }
   if ("amount" in order) {
      return `Brewing ginger chai with ${order.amount} amount`;
   }
   if ("aroma" in order) {
      return `Brewing elaichi chai with ${order.aroma} aroma`;
   }
}
//In the brew function, we use the in operator to check for the presence of specific properties (spicelevel, amount, aroma) in the order parameter. Based on which property is present, we can determine the type of chai being brewed and return an appropriate message. This is another example of type narrowing using the in operator to check for specific properties in a union type.