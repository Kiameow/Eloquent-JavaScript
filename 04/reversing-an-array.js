function reverseArray(arr) {
  const result = [];
  for (let element of arr) {
    result.unshift(element);
  }
  return result;
}

function reverseArrayInPlace(arr) {
  for (let i=0; i<Math.floor(arr.length/2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length -1 -i];
    arr[arr.length -1 -i] = temp;
  }
}