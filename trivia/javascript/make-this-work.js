// Make this work

// duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(list) {
  return list.concat(list);
}

const result = duplicate([1, 2, 3, 4, 5]);
console.log("result: ", result);
