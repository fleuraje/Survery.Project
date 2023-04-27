

let customer = {
firstName: "finn",
lastName: "smith",
email: "finntheHuman!aol.com",
phone: "undefined",
Zipcode: "973",
Favoriteflavors: "cupcake",
cupsize: "medium",
favoriteStore: "ArtStore",
firstvisit: "false" 
// breakdown of the values that are listed in the obj called customer , containing all the customer info. 
};

//some of the information is incorrect like the email , phone ,zipcode and  favorite flavors and they requested this to be changed .

customer["email"] = "finntheHuman@email.com";
customer["phone"] = "3195551234";
customer["Zipcode"] = "070707";
customer["Favoriteflavors"] = "Vanilla, strawberry and oreo";

// they decided to remove ta couple of items from the survey , so I will use the delete keyword to do so .

delete customer.Zipcode 
delete customer.favoriteStore


//now you need to add the some items to the survey 

customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors = "mango";
customer.todaysPurchaseCost = 5.32;

// and lastly in an array print the keys in your survey 
console.log(Object.keys(customer));





