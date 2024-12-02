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
myLines = readFileAsLines(filePath);

//console.log("read out the file w/ linecount")
/*
 for (const line in myLines){
    const count = line+1
     console.log(count+': '+myLines[line])
 }

*/
let left = []
let right = []

 console.log("split into two arrays of left and right")
 for (const line of myLines){
    const parts = line.split(/\s+/);
    console.log("P: "+parts+" L:"+parts[0]+" R:"+parts[1]);
    left.push(parts[0]);
    right.push(parts[1]);
    
 }

 let simSum = 0

 console.log("iterate through left, multiple by its count in right")
 for(const line of left){
    const filtCount = right.filter(item => item === line).length;
    simSum+=line*filtCount;
    console.log("L: "+line+': '+filtCount+" SS: "+simSum)
 }

 console.log('A: '+simSum)//17191599