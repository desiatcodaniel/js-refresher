//use strict to forbid certain things and show more specific errors
//it will also not allow creation of variables using reserved names as variable names
'use strict';

let hasDriversLicense = false;
const passTest = true;

//Will throw an error that the variable is undefined because of strict mode
//if(passTest) hasDriverLicense = true;

/* FUNCTIONS
Declaration: function addNum(num1, num2) {return num1 + num2}
Calling/Running/Invoking: addNum (5,6);

DECLARATIONS v. EXPRESSIONS

Declaration - creates a function to be called keyword explicitly
            - can be called before it is defined (hoisting related)

    function calcAge(birthYear){return 2023 - birthYear}
    calcAge(1995) - will return 28

Expression - stores an unnamed function into a variable
           - need to be defined before getting called (hoisting related)

    const calcAge = function(birthYear) {
        return 2023 - birthYear
    }

ARROW FUNCTION (also an expression) - do not get the 'this' keyword the same way as regular function declarations and expressions

    const calcAge = birthYear => 2023 - birthYear;

    const yearsUntilRetirement = (birthYear, name) => {
        const age = calcAge(birthYear);
        const retirement = 65 - age;

        if(retirement > 0) return retirement; // Returns years until retirement
        return -1; //return -1 if already retired
    }

    console.log(yearsUntilRetirement(1995));

FUNCTION CALLING OTHER FUNCTIONS - see example arrow function

general note: it's good practice to return a value that is the same data type as the input.
    e.g. calcAge and calcRetirement age takes in an integer (birthYear) and should return an integer.
*/
