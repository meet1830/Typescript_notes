var character = "mario";
console.log(character);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (item) {
    console.log(item);
});
/* tsc commands
1. tsc L02_Compiling_ts.ts --> creates a new js file which the browser uses to print to console
2. tsc L02_Compiling_ts.ts -outFile L02_Compiling_ts.js --> creates js file with specified file name
3. tsc L02_Compiling_ts.ts -w --> watches the ts file and recompiles into a js file each time the file is saved
*/
