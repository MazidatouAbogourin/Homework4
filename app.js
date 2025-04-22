//Map
const arr = [1, 2, 3, 4, 5];

arr.__proto__.myMap = function (cb) {
  return cb(this);
};

function cb(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 2 * arr[i];
  }
  return arr;
}

console.log(arr.map((c) => c * 2));

console.log(arr.myMap(cb));

//Filter
const arr2 = [90, 4, 56, 7, 32, 9];
console.log(arr2.filter((a) => a > 10));

function checkCondition(val) {
  if (val > 10) {
    return true;
  }
  return false;
}

arr2.__proto__.myFilter = function (checkCondition) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (checkCondition(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

console.log(arr2.myFilter(checkCondition));

//includes
const choice = ["orange", "apple", "mango", "bananas"];
console.log(choice.includes("cb"));

choice.__proto__.myInclude = function (val) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === val) {
      return true;
    }
  }
  return false;
};

console.log(choice.myInclude("orange"));

//find

const arr3 = [3, 4, 5, 6, 7];
console.log(arr3.find((c) => c > 5));

arr3.__proto__.myFind = function (fn3) {
  for (let i = 0; i < this.length; i++) {
    if (fn3(this[i])) {
      return this[i];
    }
  }
};

function fn3(val) {
  return val > 5 ? true : false;
}

console.log(arr3.myFind(fn3));

// slice

const arrSlice = ["door", "bell", "cars", " paper", "pencil"];
console.log(arrSlice.slice(0, 2));
arrSlice.__proto__.mySlice = function (start = 0, end = this.length) {
  const newArray = [];
  for (let i = start; i < end; i++) {
    newArray.push(this[i]);
  }

  return newArray;
};

console.log(arrSlice.mySlice());

//reduce
const arrReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arrReduce.reduce((acc, curr) => acc + curr, 0));
arrReduce.__proto__.myReduce = function (fn, index) {
  let sum = 0;
  for (let i = index; i < this.length; i++) {
    sum = fn(sum, this[i]);
  }
  return sum;
};

console.log(arrReduce.myReduce((a, b) => a + b, 0));
