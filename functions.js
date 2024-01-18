/* FUNCTIONS */

// Function - It's a reusable block of code that works on something. 
let num1 = 2; 
let num2 = 3;
let num3 = 4; 
let num4 = 5;

// Function Declaration - this is where we write the functions'script.
function addNumbers(value1, value2){
    console.log(value1 + value2);
}

// Function Invocation - this is their time to shine. 
addNumbers(num3, num4);


/* Calcule the Average */
let listOfNumbers = [];
//listOfNumbers.push(num1, num2, num3, num4); // Output: [2,3,4,5]
listOfNumbers = [num1, num2, num3, num4]; // Output: [2,3,4,5]

let num5 = 3; 
listOfNumbers.push(num5); // Output: [2,3,4,5,3]

function sumforAverage(nums){
  // 1. Sum all the nums
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}
function calculateAverage(nums){
    // 2. I divide the sum of all the nums by the number of elements.
        return console.log(sumforAverage(nums)/nums.length);
}

calculateAverage(listOfNumbers);