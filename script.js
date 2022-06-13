// Escreva seu código aqui

// forEach
function newForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

const arrayForEach = ["<", "<", "<"];
const arrayForEachTwo = [";", ";", ";"];

function testForEach(elem, i, array) {
  console.log((array[i] = elem + "D"));
}

// console.log(newForEach(arrayForEachTwo, testForEach));

// map
function newMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}
const arrayTest = [1, 2, 3, 4, 5];

function mapTest(elem, index, array) {
  return `Número ${elem} na posição: ${index}, veio desse array: ${array}`;
}

// console.log(arrayTest.map(mapTest));
// console.log(newMap(arrayTest, mapTest));

// filter
function newFilter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
const arrayFilter = [1, 2, 3, 4, 5];
const arrayFilterTwo = [
  "Gabriel",
  "Matheus",
  "Vini",
  "Vagnão",
  "Yuran",
  "Henrique",
];

function filterTest(elem, index, array) {
  return elem > 2;
}

function filterTestTwo(elem, index, array) {
  return elem.length > 6;
}

// console.log(newFilter(arrayFilter, filterTest));
// console.log(newFilter(arrayFilterTwo, filterTestTwo));

// find
function newFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
}

const arrayFind = [100, 200, 300, 400, 500];
const arrayFindTwo = ["Minecraft", "GTA V", "Fortnite", "Overwatch", "PUBG"];

function findTest(elem, index, array) {
  return elem > 500;
}

function findTestTwo(elem, index, array) {
  return elem == "GTA V";
}

// console.log(newFind(arrayFind, findTest));
// console.log(newFind(arrayFindTwo, findTestTwo));

// indexOf
function newIndexOf(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

const arrayIndexOf = [13, 14, 15, 16, 17];
const arrayIndexOfTwo = [
  "JavaScript",
  "Css",
  "Html",
  "Jquery",
  "React",
  "Angular",
];

function indexOfTest(elem, index, array) {
  return elem < "Html";
}

// console.log(newIndexOf(arrayIndexOf, indexOfTest));
// console.log(newIndexOf(arrayIndexOfTwo, indexOfTest));

// includes
function newIncludes(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

const arrayIncludes = ["Gato", "Cachorro", "Gato", "Cachorro", "Gato"];
const arrayIncludesTwo = ["Brasil", "Portugal", "Espanha", "França", "Italia"];

function includesTest(elem, index, array) {
  return elem == "Gato";
}

function includesTestTwo(elem, index, array) {
  return elem === "Zâmbia";
}

// console.log(newIncludes(arrayIncludes, includesTest));
// console.log(newIncludes(arrayIncludesTwo, includesTestTwo));

// reduce
function newReduce(array, callback) {
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}

const arrayReduce = [50, 50];

function reduceTest(acc, elem, index, array) {
  return acc + elem;
}

console.log(newReduce(arrayReduce, reduceTest));