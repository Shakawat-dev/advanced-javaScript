//True / false//

//Falsy//
//false
// const age = 0; //false
// const age = ""; //false
//let name; //undefined
//let name = null; //null
//let name = NaN; //NaN (not a number)

//Truthy//
//true
// const age = 4; //true
// const age = "string"; //true
// const age = " "; //true
// const age = "0"; //true
//console.log(name);
//let name = []; //true
//let name = true; //true
//let name = {}; //true
let name = 12; //true
if (name || name == 0) {
  console.log("condition is true");
} else {
  console.log("condition is false");
}
