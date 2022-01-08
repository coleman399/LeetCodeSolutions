// let nums = [3,2,3]
// let target = 6

// const twoSum = (nums, target) => {
//     let results = [];
//     for (let index = 0; index < nums.length; index++) {
//         for (let i = 1; i < nums.length; i++) {
//             let tempNum = nums[index] + nums[index + i];
//             if (tempNum === target) {
//                 results = [index, index + i];
//             } 
//         }  
//     }
//     console.log(results);
// }

// twoSum(nums, target);

// output = [0, 1]


//twoSum revisited

let nums = [3,2,3]
let target = 6

const twoSum = (nums, target) => {
    const previousValues = {};
    for (let i = 0; i < nums.length; i++){
        const currentNum = nums[i]; // storing current value
        const neededValue = target - currentNum; // getting neededValue
        const index2 = previousValues[neededValue]; // Calling previousValues using key "neededValue" and returning its value which is the index of the neededValue 
        if (index2 != null){ // if neededValue is not in previousValues, index2 is undefined
            console.log([index2, i]); //returns indices
        }else{
            previousValues[currentNum] = i; //adds current number to previousValues as a Key and i as its value
        }
    }
}

twoSum(nums, target);

// const test_case = "[]" 

// const isValid = (s) => {
//     let map = {
//         '(':')',
//         '{':'}',
//         '[':']',
//     }
//     let stack = [];
//     for (let char of s) {
//         if(map[char]) {
//             stack.push(map[char]);
//         } else if (char !== stack.pop()){
//             return false;
//         }
//     }
//     if (stack.length === 0) {
//         return true;
//     } else {
//         return false;
//     }
// };

// console.log(isValid(test_case))