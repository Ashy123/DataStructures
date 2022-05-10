function maxChar(str) {
const charMap ={};
let max = 0;
let maxChar ="";

for(let character of str) {
    if (charMap[character]) {
        charMap[character]++;
    }else {
        charMap[character] =1;
    }
}

for (let character of str) {
    if (charMap[character]) {
        charMap[character]++;
    } else {
        charMap[character] = 1;
    }
}
 for (let char in charMap) {
     if (charMap[char] > max) {
         max = charMap[char];
         maxChar = char;
     }
 }

 return maxChar;
}

console.log(maxChar("nairobi"))
