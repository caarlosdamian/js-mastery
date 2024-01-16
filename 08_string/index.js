const single = 'This is a string';
const double = 'This is a string';

const backtickts = `${2 + 2}`; // extended functionality

console.log(typeof single);
console.log(typeof double);
console.log(backtickts);

// search substring

const hobbies = 'I love HTML, CSS and JavaScript';

const firtsIndex = hobbies.indexOf('JavaScript'); // number
const lastIndex = hobbies.lastIndexOf('JavaScript'); // number
const includeJavascript = hobbies.includes('JavaScript'); // boolean
const startWith = hobbies.startsWith('JavaScript'); // bolean
const endwith = hobbies.endsWith('JavaScript'); // bolean

// Getting substring

const exampleString = 'hotdog';
// slice()
const newq = exampleString.slice(3, 6);
console.log(newq);

// Split a string

// split ();

const exampleSplit = 'dog';

const splitString = exampleSplit.split('');
console.log(splitString);

// reverse string
const example = 'test';
const exampleReverse = example.split('').reverse().join('');
console.log(exampleReverse);
// repeat();
const dogSays = 'woof';
console.log(dogSays.repeat(10));
// trimp
const exampleTripString = '       Hello,world';
console.log(exampleTripString.trim());
// Exercise

const guestList = 'Our guests are: emma, jacob, isabella, ethan';
// 1.Get a length of the string. Store it in a variable called
// length.
// 2.Uppercase the entire string. Store the result in a variablle called uppercasedGuestList.
// Check whether
// 'ETHAN'
// is on the
// uppercasedGuestList
// 3. Store the answer in a variable called
// isEthanOnTheList
// 4. The data type of the variable must be a boolean.
// Create a substring that only contains the following:
// 'EMMA, JACOB, ISABELLA, ETHAN'
// 5. Store the answer in a variable called
// substringGuests
const length = guestList.length;
const uppercasedGuestList = guestList.toUpperCase();
const isEthanOnTheList = uppercasedGuestList.includes('ETHAN');
const substringGuests = uppercasedGuestList.substring(
  uppercasedGuestList.indexOf('EMMA')
);
const guests = substringGuests.split(',');

console.log(length);
console.log(uppercasedGuestList);
console.log(isEthanOnTheList);
console.log(substringGuests);
console.log(guests);
