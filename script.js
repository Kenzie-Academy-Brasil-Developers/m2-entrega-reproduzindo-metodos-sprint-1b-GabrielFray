// Escreva seu código aqui

// forEach
function newForEach(array, callback) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

const arrayForEach = ["<", "<", "<"];
const arrayForEachTwo = [";", ";", ";"];

function testForEach(elem, i, array) {
  return (array[i] = elem + 3);
}

// console.log(newForEach(arrayForEach, testForEach));
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
const arrayReduceTwo = [500, 250];

function reduceTest(acc, elem, index, array) {
  return acc + elem;
}

function reduceTestTwo(acc, elem, index, array) {
  return acc - elem;
}

// console.log(newReduce(arrayReduce, reduceTest));
// console.log(newReduce(arrayReduceTwo, reduceTestTwo));

// findIndex
function newFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

const arrayFindIndex = [
  "Futebol",
  "Ping-pong",
  "Vôlei",
  "Frescobol",
  "Basquete",
];

function findIndexTest(elem, index, array) {
  return elem == "Basquete";
}

// console.log(newFindIndex(arrayFindIndex, findIndexTest));

//  some
function newSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

const arraySome = [2, 5, 8, 1, 4];
const arraySomeTwo = [12, 5, 8, 1, 4];

function someTest(elem, index, array) {
  return elem > 10;
}

// console.log(newSome(arraySome, someTest));
// console.log(newSome(arraySomeTwo, someTest));

// every
function newEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

const arrayEvery = [12, 5, 8, 130, 44];
const arrayEveryTwo = [12, 54, 18, 130, 44];

function everyTest(elem, index, array) {
  return elem >= 10;
}

// console.log(newEvery(arrayEvery, everyTest));
// console.log(newEvery(arrayEveryTwo, everyTest));

// concat
function newConcat(array, args) {
  const newArray = array.slice();
  for (let i = 0; i < args.length; i++) {
    newArray.push(args[i]);
  }
  return newArray;
}

const arrayConcat = ["a", "b", "c"];
const arrayConcatTwo = ["d", "e", "f"];

// console.log(newConcat(arrayConcat, arrayConcatTwo));

// join
function newJoin(array, separador) {
  let newString = "";
  for (let i = 0; i < array.length; i++) {
    newString += array[i];
    if (i < array.length - 1) {
      newString += separador;
    }
  }
  return newString;
}

const arrayJoin = ["Fire", "Air", "Water"];

// console.log(newJoin(arrayJoin, ''));

// slice
function newSlice(array, inicio, fim) {
  const newArray = [];
  for (let i = inicio; i < fim; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

const arraySlice = ["Banana", "Laranja", "Limao", "Maçã", "Manga"];

// console.log(newSlice(arraySlice, 1, 3));

// flat
// function newFlat(array) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray.push(array[i], i, array);
//   }
//   return newArray;
// }

// const arrayFlat = [1, 2, [3, 4]];

// console.log(newFlat(arrayFlat));

// flatMap
function newFlatMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

const arrayFlatMap = [1, 2, 3, 4, 5];

function flatMapTest(elem, index, array) {
  return elem * 2;
}

console.log(newFlatMap(arrayFlatMap, flatMapTest));
