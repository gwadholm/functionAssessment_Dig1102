function firstLetterName(name) {
  alert("The name " + name + " starts with the letter " + name[0]);
}

function divisibleByTwo(x) {
  if (x%2===0) {
    return true;
  } else {
    return false;
  }
}

function largestNum(arr)  {
  let largestNum = arr[0];
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > largestNum) {
      largestNum = arr[i];
    }    
  }
  return largestNum;
}

function numCheck(x) {
  console.log("The number " + x + " is divisible by 2: " + divisibleByTwo(x));
}

firstLetterName("Tom");

numCheck(8);
numCheck(9);
numCheck(13);

console.log(divisibleByTwo(43));

let arrTest = [2,3,16,8,19,22,5];
console.log(largestNum(arrTest));

