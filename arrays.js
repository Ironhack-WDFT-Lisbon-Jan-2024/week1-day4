/* ARRAYS */

// Array - it's a list of elements. 

// Iterate over an Array (.forEach())

let fruits = ['banana', 'kiwi', 'pineapple'];

fruits.forEach((fruit)=>{
    // console.log(fruit);
})

// Find the Longest Word of an Array

let words = ['php', 'go', 'rust', 'javascript'];

function findLongestWord(names){
    let longestWord = "";
    names.forEach((name)=>{
        if(name.length > longestWord.length){
            longestWord = name;
        }
    })

    return console.log(longestWord);
}

findLongestWord(words);