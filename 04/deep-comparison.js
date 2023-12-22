function deepEqual(compA, compB) {
  if (typeof(compA) !== 'object' || compA === null) 
    return compA === compB;

  let propertiesA = Object.keys(compA);
  let propertiesB = Object.keys(compB);

  if (propertiesA.length !== propertiesB.length) return false;

  for (let property of propertiesA) {
    if (!(propertiesB.includes(property)) || !deepEqual(compA[property], compB[property]))
      return false;
  }
  return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true