// Escreva seu código aqui

// forEach --------------------------------------------------------------------------------------------------------------------------------------
const arrayForEach = ["<", "<", "<"];
const arrayForEachTwo = [";", ";", ";"];

function newForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

function testForEach(elem, i, array) {
  console.log((array[i] = elem + 3));
}

// console.log(newForEach(arrayForEach, testForEach));
// console.log(newForEach(arrayForEachTwo, testForEach));

// map ------------------------------------------------------------------------------------------------------------------------------------------
const arrayTest = [1, 2, 3, 4, 5];

function newMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

function mapTest(elem, index, array) {
  return `Número ${elem} na posição: ${index}, veio desse array: ${array}`;
}

// console.log(arrayTest.map(mapTest));
// console.log(newMap(arrayTest, mapTest));

// filter ---------------------------------------------------------------------------------------------------------------------------------------
const arrayFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayFilterTwo = [
  "Gabriel",
  "Matheus",
  "Vini",
  "Vagnão",
  "Yuran",
  "Henrique",
];

function newFilter(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

function filterTest(elem, index, array) {
  return elem > 6;
}

// console.log(newFilter(arrayFilter, filterTest));
// console.log(newFilter(arrayFilterTwo, filterTest));

// find ----------------------------------------------------------------------------------------------------------------------------------------
const arrayFind = ["Minecraft", "GTA V", "Fortnite", "Overwatch", "PUBG"];

function newFind(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return array[i];
    }
  }
}

function findTest(elem, index, array) {
  return elem == "GTA V";
}

// console.log(newFind(arrayFind, findTest));

//indexOf --------------------------------------------------------------------------------------------------------------------------------------
const arrayIndexOf = [13, 14, 15, 16, 17];
const arrayIndexOfTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function newIndexOf(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

function indexOfTest(elem, index, array) {
  return elem < 10;
}

// console.log(newIndexOf(arrayIndexOf, indexOfTest));
// console.log(newIndexOf(arrayIndexOfTwo, indexOfTest));

// includes -------------------------------------------------------------------------------------------------------------------------------------
const arrayIncludes = ["Gato", "Cachorro", "Gato", "Cachorro", "Gato"];
const arrayIncludesTwo = ["Brasil", "Portugal", "Espanha", "França", "Italia"];

function newIncludes(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

function includesTest(elem, index, array) {
  return elem == "Gato";
}

function includesTestTwo(elem, index, array) {
  return elem === "Zâmbia";
}

// console.log(newIncludes(arrayIncludes, includesTest));
// console.log(newIncludes(arrayIncludesTwo, includesTestTwo));

// reduce -------------------------------------------------------------------------------------------------------------------------------------
const arrayReduce = [50, 50];
const arrayReduceTwo = [500, 250];

function newReduce(array, callback) {
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    acc = callback(acc, array[i], i, array);
  }
  return acc;
}

function reduceTest(acc, elem, index, array) {
  return acc + elem;
}

// console.log(newReduce(arrayReduce, reduceTest));
// console.log(newReduce(arrayReduceTwo, reduceTest));

// findIndex ------------------------------------------------------------------------------------------------------------------------------------
const arrayFindIndex = [
  "Futebol",
  "Ping-pong",
  "Vôlei",
  "Frescobol",
  "Basquete",
];

function newFindIndex(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return i;
    }
  }
  return -1;
}

function findIndexTest(elem, index, array) {
  return elem == "Basquete";
}

// console.log(newFindIndex(arrayFindIndex, findIndexTest));

// some -------------------------------------------------------------------------------------------------------------------------------------
const arraySome = [2, 5, 8, 1, 4];
const arraySomeTwo = [12, 5, 8, 1, 4];

function newSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      return true;
    }
  }
  return false;
}

function someTest(elem, index, array) {
  return elem > 10;
}

// console.log(newSome(arraySome, someTest));
// console.log(newSome(arraySomeTwo, someTest));

// every -------------------------------------------------------------------------------------------------------------------------------------
const arrayEvery = [12, 5, 8, 130, 44];
const arrayEveryTwo = [12, 54, 18, 130, 44];

function newEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i], i, array)) {
      return false;
    }
  }
  return true;
}

function everyTest(elem, index, array) {
  return elem >= 10;
}

// console.log(newEvery(arrayEvery, everyTest));
// console.log(newEvery(arrayEveryTwo, everyTest));

// concat ---------------------------------------------------------------------------------------------------------------------------------------
const arrayConcat = ["a", "b", "c"];
const arrayConcatTwo = ["d", "e", "f"];

function newConcat(array, args) {
  const newArray = array.slice();
  for (let i = 0; i < args.length; i++) {
    newArray.push(args[i]);
  }
  return newArray;
}

// console.log(newConcat(arrayConcat, arrayConcatTwo));

// join ---------------------------------------------------------------------------------------------------------------------------------------
const arrayJoin = ["Fire", "Air", "Water"];

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

// console.log(newJoin(arrayJoin, ''));

// slice ----------------------------------------------------------------------------------------------------------------------------------------
const arraySlice = ["Banana", "Laranja", "Limao", "Maçã", "Manga"];

function newSlice(array, inicio, fim) {
  const newArray = [];
  for (let i = inicio; i < fim; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}

// console.log(newSlice(arraySlice, 1, 3));

// flat -----------------------------------------------------------------------------------------------------------------------------------------
const arrayFlat = [1, 2, [3, 4]];

function newFlat(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i], i, array);
  }
  return newArray;
}

// console.log(newFlat(arrayFlat));

// flatMap --------------------------------------------------------------------------------------------------------------------------------------
const arrayFlatMap = [1, 2, 3, 4, 5];

function newFlatMap(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callback(array[i], i, array));
  }
  return newArray;
}

function flatMapTest(elem, index, array) {
  return elem * 2;
}

// console.log(newFlatMap(arrayFlatMap, flatMapTest));
