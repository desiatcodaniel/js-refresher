/* CONVENTIONS AND RULES FOR VARIABLES

Conventions:
-variable names are usually camelCased in JS
-do not use upper case start on variables "Person"
-REAL CONSTANTS are written in ALLCAPS "PI"

Hard Rules:
-illegal variable name = starts with number
-can only contain numbers, underscores (_), letters, dollar sign 
-reserved names are not allowed such as "function", "name", etc.
*/

const firstName = 'Daniel'
const lastName = 'Desiatco'

console.log(`My name is ${lastName}, ${firstName}`);

/* PRIMITIVE DATA TYPES
Number - Floating point numbers
String - Text, always put in quotes or it will be recognized as variables
Boolean - Logical type (true or false|1 or 0)

Undefined - Value taken by a variable that is not yet defined ('empty value')
Null - Also means 'empty value'
Symbol - Value that is unique and cannot be changed
BigInt - Larger integers than the Number type can hold
*/

//Code Challenge #1 (practice variables and)
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 95;
const johnHeight = 1.88;

let calculateBMI = (weight, height) => weight/ height ** 2;

const markBMI = Math.round(calculateBMI(markWeight, markHeight) * 100) / 100 ;
const johnBMI = Math.round(calculateBMI(johnWeight, johnHeight) * 100) / 100 ;

console.log(`Mark: ${markBMI} - John: ${johnBMI}`);

//Code Challenge #2 (if statement or conditional to look for true/false conditions)
console.log(markBMI > johnBMI? `Mark's BMI is higher at ${markBMI}`: `John's BMI is higher at ${johnBMI}`);