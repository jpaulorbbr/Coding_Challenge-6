//QUESTION 2
/*
Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]
*/

//Answer to question 2:

const arrayToSum = [1, 2, 3];
const targetNumber = 4;

function sumToTarget(array, target) {
    for (i=0; i < array.length; i++) {
        let found = false;
        for (x=0; found === false; x++) {
            if (array[i] + array[x] === target && array[i] !== array[x] && found === false) {
                return `${array[i]} + ${array[x]} = ${target}`;
                found = true;
            }
        } 
    }
}

sumToTarget(arrayToSum, targetNumber);