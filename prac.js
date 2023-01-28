function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

const filterOutOddss = (...nums) => nums.filter(num => num % 2 === 0);


const findMin = (...value) => value.reduce((first, sec) => first < sec ? first : sec);


const mergeObjects = (Object, ObjectB) =>{ let oy = {...Object, ...ObjectB};
return oy}


const doubleAndReturnArgs = (first, ...sec) => {
  let finalSec = sec.map(value => value * 2);
  let oy = [...first, ...finalSec];
  return oy;
}


/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(Array) {
  let value = Math.floor(Math.random() * Array.length);
  return [...Array.slice(0, value), ...Array.slice(value + 1)];
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  const final = [...array1, ...array2];
  return final;
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  const final = {...obj, [key]: val};
  return final;
}


/** Return a new object with a key removed. */

function removeKey(obj, key) {
  let del = [...obj];
  del = delete obj[key];
  return del;
}


/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  const final = {...obj1, ...obj2};
  return final;
}


/** Return a new object with a modified key and value. */
let obj = {first: "23", second: "false"}

const update = (obj, key, val) => {
  let final = { ...obj }
  final[key] = val;
  return final;
}

