function fib(num){
  let listOfFib = [];
  let fib1 = 0;
  let fib2= 1;
  listOfFib.push(fib1, fib2);
  for (let i = 0; i <= num - 3; i++){
    const next = fib1 + fib2;
    listOfFib.push(next);
    fib1 = fib2;
    fib2 = next;
  }
  return listOfFib;
}

console.log(fib(10));

function numToStrings(nums){
  return _.map(nums, n => `${n}`);
}

console.log(numToStrings(fib(10)));

function numEvenNums(nums) {
  return _.filter(nums, n => (n %2 === 0)).length;
}

console.log(numEvenNums(fib(10)));