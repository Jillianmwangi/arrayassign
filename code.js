//findduplicates

// let arr = [23, 34, 41, 90, 43, 45, 81, 41]
// let newarr = []

// function findDuplicates(arr) {
//   let duplicates = arr.filter(function(41, 2) {
//     return arr.indexOf(41) !== 2;
//   });
//   return duplicates;
// }
// console.log(findDuplicates);

   //reversearray
   //method1
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
// console.log(fruits)

  //method2
function reversefruit(...arr) {

  let newArr = arr.reverse();
  // console.log(newArr);
}
reversefruit("Banana", "Orange", "Apple", "Mango");



   //leastandhighestvalue
let nums = [3, 90, 32, 235, 45]
const highestValue = Math.max(...nums);
const leastValue = Math.min(...nums);
// console.log(highestValue);
// console.log(leastValue);
    
   //moving negative elements
function negatiVal(...value) {
let newArr = value.sort((a, b) => a - b);
// console.log(newArr);
}
negatiVal(-2, -14, -98, -35, -47);   // sorting


    //palindromes
function checkpali(str) {
let newStr = str.split("").reverse().join("");
   return str == newStr;
     
  }
  // console.log(checkpali("hannah"));
  // console.log(checkpali("charity"));

// function palinum(num){
//   let pali = num.tostring().split("").reverse().join("");
//   return num == pali;
// }
// console.log(palinum(2345));
// console.log(palinum(1198911));

