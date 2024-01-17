// currying

// That is, when we turn a function call sum(1,2,3) into sum(1)(2)(3).

function sum(number) {
  let total = number;

  function innerSum(innerNum) {
    if (!innerNum) return total;

    total += innerNum;
    return innerSum;
  }

  return innerSum;
}

const result = sum(1)(2)(3)();

console.log("result: ", result);
