// Implement Array.prototype function: reduce

Array.prototype.reduce = function (cb, initialValue) {
  if (!this.length) return null;

  let accumulator = initialValue;

  for (const item of this) {
    const result = cb(accumulator, item);
    accumulator = result;
  }

  return accumulator;
};

const reduceOutput = [1, 2, 3].reduce((accumulator, currentValue) => {
  if (currentValue === 2) return accumulator;
  return accumulator + currentValue;
}, 0);

console.log("reduceOutput: ", reduceOutput);
