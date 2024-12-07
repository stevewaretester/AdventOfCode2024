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


function isIncreasingOrDecreasing(inNumbers)
{
    const isIncreasing = inNumbers.every((num, i, arr) =>
        i === 0 || (num > arr[i - 1] && num - arr[i - 1] >= 1 && num - arr[i - 1] <= 3)
    );

    const isDecreasing = inNumbers.every((num, i, arr) =>
        i === 0 || (num < arr[i - 1] && arr[i - 1] - num >= 1 && arr[i - 1] - num <= 3)
    );

    return isIncreasing||isDecreasing;

}

//Part 1
function determineSafe(lines) {
    let safeCount = 0;
    for (const line of lines) {
        const numbers = line.split(' ').map(Number);
        //console.log(numbers)
    
            // Check if the numbers are all increasing or all decreasing
            // const isIncreasing = numbers.every((num, i, arr) =>
            //     i === 0 || (num > arr[i - 1] && num - arr[i - 1] >= 1 && num - arr[i - 1] <= 3)
            // );
    
            // const isDecreasing = numbers.every((num, i, arr) =>
            //     i === 0 || (num < arr[i - 1] && arr[i - 1] - num >= 1 && arr[i - 1] - num <= 3)
            // );

    
            // If either condition is met, the line is "safe"
            if (isIncreasingOrDecreasing(numbers)) {
                safeCount++;
            }
        }
    return safeCount;
}


//Part 2

function determineSaferp2(lines){
    
    let safeCount = 0;

    for (const line of lines) {
        const numbers = line.split(' ').map(Number);

        for (let i = 0; i < numbers.length; i++){

            let tempNumbers = [...numbers];
            tempNumbers.splice(i,1);
            //console.log(tempNumbers);
            //console.log(numbers);

            if(isIncreasingOrDecreasing(tempNumbers)){
                safeCount++;
                break;
            }
        }
    }
    return safeCount;
}
console.log('A1: '+determineSafe(myLines)); //564
console.log('A2: '+determineSaferp2(myLines));

//  console.log('A2: '+determineSaferp2([
//          "7 6 4 2 1", // Safe without removing any level
//          "1 2 7 8 9", // Unsafe regardless of which level is removed
//          "9 7 6 2 1", // Unsafe regardless of which level is removed
//          "1 3 2 4 5", // Safe by removing the second level, 3
//          "8 6 4 4 1", // Safe by removing the third level, 4
//          "1 3 6 7 9"  // Safe without removing any level
//      ]));


module.exports = {determineSafe,determineSaferp2,isIncreasingOrDecreasing};
