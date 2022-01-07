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



const test_case = "(}" 

const isValid = (s) => {
    if (s === null || s.length <= 0){
        return true;
    }
    let cArray = s.split('');
    let stack = [];
    cArray.forEach(char => {
        if (char === '[') {
            stack.push(']');
        } else if (char === '{') {
            stack.push('}')
        } else if (char === '(') {
            stack.push(')')
        } else if (stack.length === 0 || stack.includes(char)) {
            stack.filter(element => {
                if(element === char){
                    let index = stack.indexOf(char);
                    stack.splice(index, 1);
                }
                return false;
            })
        }
    })               
    if (stack.length === 0) {
        return true;
    }
}

console.log(isValid(test_case))