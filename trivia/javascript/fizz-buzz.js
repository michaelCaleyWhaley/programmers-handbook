// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

function fizzbuzz() {
  for (let i = 0; i < 100; i += 1) {
    const multipleOfThree = !(i % 3);
    const multipleOfFive = !(i % 5);
    const multipleOfThreeAndFive = multipleOfThree && multipleOfFive;

    if (multipleOfThreeAndFive) {
      console.log("fizzbuzz");
    } else if (multipleOfFive) {
      console.log("buzz");
    } else if (multipleOfThree) {
      console.log("fizz");
    }
  }
}

fizzbuzz();
