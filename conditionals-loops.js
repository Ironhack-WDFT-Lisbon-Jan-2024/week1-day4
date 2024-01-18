/* CONDITIONALS AND LOOPS */

// Condition: A Condition is something that may happen, and if it happens, there's a response to it.

// Example: Your Alarm App -> If it's 7AM, play a song for me to Wake Up.

// In JavaScript: 

let fruit = "kiwi";

if(fruit === "apple"){
    // console.log("It is an apple");
}
else if(fruit === "banana"){
    // console.log("It is a banana.");
}
else {
    // console.log("It is another fruit.");
}


// Loops: A Loop is a cycle that goes from an initial element and finishes in a last element. Usually, it is used to iterate over an Array, but can be used to iterate over Strings' characters. 


// While Loops
let i = 0;
while(i<5){
    i++
    // console.log(i);
}

// For Loops
for (let i=0; i<fruit.length; i++){
    // console.log(fruit[i]);
}


// Conditionals Inside Loops

let programmingLanguage = "javascript";
let newProgrammingLanguage = "";

for (let i=0; i<programmingLanguage.length; i++){
    if(i<4){
      newProgrammingLanguage += programmingLanguage[i]; // it's the same thing as
      // newProgrammingLanguage = newProgrammingLanguage + programmingLanguage
    }
}

// console.log(newProgrammingLanguage);

