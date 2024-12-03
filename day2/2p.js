//AofC Day 2: P1
const fs = require('fs');

//Read in a file

function readFileAsLines(filePath) {
    let fileContent = null;
    try {
        fileContent = fs.readFileSync(filePath, 'utf-8'); // Read file as a string
        const lines = fileContent.split('\n').map(line => line.trim()); // Split into lines
        //console.log(lines); // Each line as an array element
        return lines;
    } catch (err) {
        console.error("Error reading the file:", err);
    }
    return fileContent
}

const filePath = './input.txt'; 
const myLines = readFileAsLines(filePath);

//Part 1
function determineSafe(lines) {
    let safeCount = 0;
    for (const line of lines) {
        const numbers = line.split(' ').map(Number);
        //console.log(numbers)
    
            // Check if the numbers are all increasing or all decreasing
            const isIncreasing = numbers.every((num, i, arr) =>
                i === 0 || (num > arr[i - 1] && num - arr[i - 1] >= 1 && num - arr[i - 1] <= 3)
            );
    
            const isDecreasing = numbers.every((num, i, arr) =>
                i === 0 || (num < arr[i - 1] && arr[i - 1] - num >= 1 && arr[i - 1] - num <= 3)
            );
    
            // If either condition is met, the line is "safe"
            if (isIncreasing || isDecreasing) {
                safeCount++;
            }
        }
    return safeCount;
}


//Part 2
module.exports = {  };
function determineSaferp2(lines){
    let safeCount = 0;


    return safeCount;
}

console.log('A: '+determineSafe(myLines))//564



module.exports = { determineSafe,determineSaferp2 };
