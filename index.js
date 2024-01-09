var variableName = 'Welcome to variables'; // old js
// es6
// let scope block moder js
let variableNameLet = 'Welcome to variables';

variableNameLet = 'Hello';

// const , not reassing
const variableNameConst = 'Welcome to variables';

// rules
// name most be unique
// no reserve js keyword let/this/return/conts/function lexically bound name
// firts caracther needs to be a letter _ or $

// console.log(variableNameLet);

// data types

/*strings 
string -> 'hello' 
number ->  4,5,6
booleans =>  true or false 
null -> null / definida but null 
undefined -> undefined / no existe 
object -> most importan data-type 
symbol 
*/

// strings - fields of text
//  single qoutes / simplte strings
//  double quotes / simple strings
//  ticks / complex string / dynamic
// typeof -> type of any variable

const singleQuotes = 'Single';
const doubleQuotes = 'double';
const name = 'Jane';
const backticks = `Hello ${name}!!!`;

// numbers

const wholeNumber = 5;
const decimal = 0.5;
// nan non a number

// booleans

// logical entitty true or false
const isCool = true;

if (isCool) {
  console.log('Hi man yout cool ');
} else {
  console.log('not cool');
}

// null

// separate null type / special value represents empty
const age = null;

//undefined
// variable that is not been assing
// declare but not defined = undefined
