function arrayToList(arr) {
  let list = null;
  for (let i=arr.length-1; i>=0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

// function listToArray(list) {
//   const arr = [];
//   while (list !== null) {
//     arr.push(list.value);
//     list = list.rest;
//   }
//   return arr;
// }

function listToArray(list) {
  const arr = [];
  for (let node = list; node; node = node.rest) {
    arr.push(node.value);
  }
  return arr;
}

function prepend(element, list) {
  return {value: element, rest: list};
}

// function nth(list, index) {
//   let tmp = list;
//   while (index) {
//     tmp = tmp.rest;
//     index -= 1;
//   }
//   return tmp.value;
// }

function nth(list, index) {
  for (let node = list; node; node = node.rest) {
    if (index === 0) {
      return node.value;
    }
    index -= 1;
  }
  return undefined;
}

function nth_recursive(list, index) {
  if (list === null) return undefined;
  if (index === 0) return list.value;
  return nth_recursive(list.rest, index-1);
}

console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
console.log(nth_recursive(arrayToList([10, 20, 30]), 1));