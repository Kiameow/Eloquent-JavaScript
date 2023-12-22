function range(start, end, step=1) {
  if (start > end) {
    step = -1;
  }
  
  const arr = [];
  if (step > 0) {
    for (let i=start; i<=end; i+=step) {
      arr.push(i);
    }
  } else if (step < 0) {
    for (let i=start; i>=end; i+=step) {
      arr.push(i);
    }
  } else {
    console.log("step cannot be 0");
  }
  
  return arr;
}

function sum(arr) {
  let total = 0;
  for (let number of arr) {
    total += number;
  }
  return total;
}