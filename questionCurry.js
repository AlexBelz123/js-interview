// 1) Написати функцію яка буде вертати суму усіх аргументів ---------------------------------

// const sum = (a, b) => a + b

// console.log(sum(1, 3)(4)) // -> 8
// console.log(sum(6)(4)) // -> 10

// Answer

function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

// testing
let curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3)); // 6, still callable normally
console.log(curriedSum(1)(2, 3)); // 6, currying of 1st arg
console.log(curriedSum(1)(2)(3)); // 6, full currying
