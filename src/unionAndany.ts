let Subs : number | string = "1M"

let apiRequestStatus: "pending" | "success" | "error" = "pending"

let  airlineSeat : "Window" | "Aisle" | "Middle" = "Middle"
 //airlineSeat = "done"

 //this called union and in it we define many types and it also protect to enter any other wrong type which is not mention
 //And also we define the types  from ouselves which is not predefined in ts

 let orders = ["12","34","546","67"]

 //let currentorder;  //this any type data type which allow all data types

  let currentorder : string | undefined;  //using union because the value of order may or may not be undefined;

 for (const order of orders) {
    if(order === "67"){
        currentorder = order ;

    }
 }
 console.log(currentorder);
 
