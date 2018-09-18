function fib(num){
  let listOfFib = [];
  let sum = 0;
  const fib1 = 0;
  const fib2= 1;
  listOfFib.push(fib1, fib2);
  for (let i = 0; i <= num; i++){
    sum += fib1;
    listOfFib.push(sum);
  }
  return listOfFib;
}

console.log(fib(10));

function numToStrings(nums){
  return _.map({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; });
}

function numEvenNums() {

}