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


const test_case = "[]" 

const isValid = (s) => {
    let map = {
        '(':')',
        '{':'}',
        '[':']',
    }
    let stack = [];
    for (let char of s) {
        if(map[char]) {
            stack.push(map[char]);
        } else if (char !== stack.pop()){
            return false;
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

console.log(isValid(test_case))