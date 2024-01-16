// // global scope
// const name = 'john';

// const logName = () => {
//   console.log(name);
// };

// logName();

// console.log(this);

// // Local scope / Function Scope
// const someFunction = () => {
//   // Local Scope
//   const name = 'Janne';
//   console.log(name);
// };

// someFunction();

// // block scope

// if (true) {
//   // let and const
//   const name = 'John';
//   console.log(name);
// }

// Hoisting // never used
// mecanismo que mueve las declaraciones al inicio de la ejecucion
// sin importar de su scope
//
// var age
// var age;
// console.log(age);
// age = 20;
// var hoist;
// console.log(hoist);
// hoist = 'The variable has been hoisted';
// hoist();
// function hoist() {
//   // var message = 'test';
//   console.log(message);

//   var message = 'test';
// }

// let and const ÷

// console.log(age);
// let age = 25;
// // const age = 25;

// const hoist = () => {};

// clousures in javascript

// const outer = () => {
//   const outerVar = 'Hello';
//   const inner = () => {
//     const innervar = 'Hi';
//     console.log(outerVar, innervar);
//   };

//   return inner;
// };
// outer()();

const init = () => {
  const hobby = 'Learning Javasscript'; // local variable created by init function
  const displatHobby = () => {
    // a closure
    console.log(hobby); // using parent context
  };

  displatHobby();
};

init();
