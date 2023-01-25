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

//Practice Assignment
const country = 'Philippines';
const continent = 'Asia';
console.log(`${country}, ${continent}`); //should show the assigned strings/text

const isIsland = true; //should show as boolean type
let population; //should show as undefined type
console.log(typeof isIsland, typeof population, typeof country);

/*Operator Precedence
Check MDN for precedence of operators
*/
//Code Challenge #1 (practice variables and)
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 95;
const johnHeight = 1.88;

//Takes in two numbers
let calculateBMI = (weight, height) => weight/ height ** 2;

//Calculate BMI with 2 decimal places
const markBMI = Math.round(calculateBMI(markWeight, markHeight) * 100) / 100 ;
const johnBMI = Math.round(calculateBMI(johnWeight, johnHeight) * 100) / 100 ;

console.log(`Mark: ${markBMI} - John: ${johnBMI}`);

/* Template Literals (Backticks)
-no need for \n\ to add new line (regular single and double quotes need it)
*/

//Code Challenge #2 (if statement or conditional to look for true/false conditions) and use template literals for values
console.log(markBMI > johnBMI? `Mark's BMI is higher at ${markBMI}`: `John's BMI is higher at ${johnBMI}`);

/* Type Conversion v. Coercion
Conversion - Converts explicitly
    e.g. converting string to number before doing any operations (Number('1991') + 12)
Coercion - JS does the change automatically
    e.g. adding string and number.
    -,*,/ and other operations that are not + will try to coerce into the data type that it can handle (Cannot multiple, divide, or subtract strings)
*/
console.log(String(23), 23);