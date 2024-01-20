// Implement Array.prototype function: map

Array.prototype.map = function (cb) {
  if (!this.length) return null;

  const mappedArray = [];

  for (const item of this) {
    const result = cb(item);
    mappedArray.push(result);
  }

  return mappedArray;
};

const mapOutput = ["1"].map((num) => {
  return `${num} - here`;
});

console.log("mapOutput: ", mapOutput);
