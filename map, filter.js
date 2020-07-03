//map//
const numbers = [3, 4, 5, 56, 8];
const output = [];
for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  const result = element * element;
  output.push(result);
}
console.log(output);
const square = (element) => element * element;
const square = (x) => x * X;

const result = numbers.map(function square(element) {
  //(element, index, array)
  //console.log(element, index, array);
  return element * element;
});

const result = numbers.map((x) => x * x);
console.log(result);

//filter//
const bigger = numbers.filter((x) => x > 5); //filter array;

//find//
const isThere = numbers.find((x) => x > 5); //find a element;
console.log(isThere);

//forEach//
const fruits = ["apple", "orange", "cherry"];
fruits.forEach((element) => {
  console.log(
    element
  ); /*  apple
                            orange
                            cherry */
}); //(currentValue, index, arr)
