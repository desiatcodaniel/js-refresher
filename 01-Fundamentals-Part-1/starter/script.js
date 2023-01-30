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

//console.log(`My name is ${lastName}, ${firstName}`);

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

//console.log(`Mark: ${markBMI} - John: ${johnBMI}`);

/* Template Literals (Backticks)
-no need for \n\ to add new line (regular single and double quotes need it)
*/

//Code Challenge #2 (if statement or conditional to look for true/false conditions) and use template literals for values
//console.log(markBMI > johnBMI? `Mark's BMI is higher at ${markBMI}`: `John's BMI is higher at ${johnBMI}`);

/* Type Conversion v. Coercion
Conversion - Converts explicitly
    e.g. converting string to number before doing any operations (Number('1991') + 12)
Coercion - JS does the change automatically
    e.g. adding string and number.
    -,*,/ and other operations that are not + will try to coerce into the data type that it can handle (Cannot multiple, divide, or subtract strings)
*/
//console.log(String(23), 23);

//Coding Challenge #3

//Create two gymnastics teams - Dolphines and Koalas with 3 scores each
const dolphins = [96,108,89,300];
const koalas = [88,91,110,400];

//get the average of their scores and announce the winner in the console.

//function to calculate the average of an array
const getAvg = numAr => {
    let total = 0;//set initial total variable
    numAr.forEach((num) => {
        total+= num;
    })//forEach to add everything to total
    return total/(numAr.length)
}
const avgDolphins = getAvg(dolphins);
const avgKoalas = getAvg(koalas);
console.log(`The average score of Dolphins is ${avgDolphins}`);
console.log(`The average score of Koalas is ${avgKoalas}`);

//Check the winner based on who got the higher average.
//Teams can only win if the average is higher than 100
//If both teams are higher than 100 and have the same score, it's a draw
//If both teams have lower than 100 score, nobody wins

if(avgDolphins > 100 && avgDolphins === avgKoalas){
    console.log(`It's a draw between the Dolphins and Koalas!`);
}else if(avgDolphins > avgKoalas && avgDolphins > 100){
    console.log(`The Dolphins win with an average of ${avgDolphins}!`);
}else if(avgDolphins < avgKoalas && avgKoalas > 100){
    console.log(`The Koalas win with an average of ${avgKoalas}!`);
}else{
    console.log(`Nobody won as both teams did not reach the minimum score of 100`);
}

//You can use ternary operator inside of a template literal to be able to add logic since it is an expresion and not a statement (if)
//Ternary operators do not work for big blocks of codes - it is not a substitute to if statements

/* Coding Challenge #4
Build a tip calculator.
*/
//Usual tip is 15% if the bill is 50-300, 20% if any other value
let bill = [275, 40, 430];
const USUAL_TIP = .15;
const OTHER_TIP = .2;

//create a function to calculate tips based on the value
const calculateTip = (billVal) => {
    //Decide how much tip to give
    let tip = billVal>= 50 && billVal <=300? USUAL_TIP : OTHER_TIP;
    //Calculate tip value
    let tipVal = billVal * tip;
    //Log the total calculations
    console.log(`The bill is $${billVal} and the tip is ${tip * 100}% which is $${tipVal} for a grand total of $${billVal + tipVal}`);
}
//run all values using forEach
bill.forEach(calculateTip)