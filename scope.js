//scope--- local scope, global scope//
let bonus = 20; //global scope
function sum(first, second) {
  let result = first + second + bonus;
  if (result > 9) {
    //var mood = "happay"; //hoisting-----//
    let mood = "happay";
    mood = "cranky";
    mood = "Fanky";
    mood = "fishy"; //fishy
    //console.log(mood); //Block scope
  }
  //console.log(bonus); //local scope
  //console.log(mood); //var-hoisting

  return result;
}
console.log(day); //undefined
var day = "friday"; //only var day hoisting......not value
console.log(day); //friday

const output = sum(3, 7);
//console.log(bonus);
//console.log(output);//
