const readline = require('readline')
const inp = readline.createInterface({
    input:process.stdin,
    output:process.stdout

})
var userInput;

inp.on('line', (data) => {
    userInput = parseInt(data)
})
 function Cube(n){
     
     return n*n*n;
 }
 
 

inp.on('close', () => {
    console.log(Cube(userInput));
})
