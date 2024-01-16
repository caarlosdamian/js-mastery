// const months = ['January', 'February', 'March', 'April'];
// // months[2] = 'not march';
// // months[4] = 'May';
// // console.log(months.length);

// for (let i = 0; i < months.length; i++) {
//   console.log(months[i]);
// }

const names = ['Jon', 'Bob', 'David', 'Mark'];

// Array Push - Adds a new value to the end of the array.
names.push('Dean');
console.log(names);

// Array Pop - Deletes the last element of an array
names.pop();
console.log(names);
// Array Shift - Deletes the first element of an array
names.shift();
console.log(names);
// Array Unshift - Adds a new value to the start of an array
names.unshift('Dean');
console.log(names);
// Array Splice - It adds/removes values from any position of an array
names.splice(2, 2);
console.log(names);

// Array Slice - Copies certain parts of an array into a newely created array
const noOneLikesJon = names.slice(1);
