module.exports = {
/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
doubleArray: function(array){
  return array.map(x => x *2);
},


/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Bool}
 */
sumArrays: function(array1, array2) {
  var fullArray = array1.concat(array2);
  var sum = 0;
  for (i = 0; i < fullArray.length; i++){
    sum += fullArray[i];
  }
  return sum;
},

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
stringCount: function(str) {
  return str.length;
},

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
arrayLength: function(array) {
  return array.length;
},

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
countAll: function(array) {
  var sum = 0;
  for(i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
},

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
countStrings: function(array) {
  return array.map(x => x.length);
},

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {String}
 * @return {Number}
 */
countAllStrings: function(array) {
  var arrLength = array.map(x => x.length);
  var sum = 0;
  for(i = 0; i < arrLength.length; i++){
    sum += arrLength[i];
  }
  return sum;
},

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
convertToArray: function(object) {
  return Object.values(object);
},

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
objectSize: function(object) {
  return Object.keys(object).length;

},

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Zero}
 */
createZeroFilledArray: function(number) {
  var newArray = [];
  for (i = 0; i < number; i++){
    newArray.push(0);
  }
  return newArray;
},

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
poppedArray: function(array) {
  array.pop();
  return array;
},

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
splitString: function(str) {
  var length = str.length;
  var newArray = [];
  for (i = 0; i < length; i++){
    newArray.push(str[i]);
  }
  return newArray;
},

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {String}
 * @return {Number}
 */
lengthOfLast: function(array) {
  var last = array.pop();
  return last.length;
},

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */

sumBelowTen: function(array) {
  function belowTen(num){
    return num < 10;
  }
  var tens = array.filter(belowTen);
  var sum = 0;
  for (i = 0; i < tens.length; i++) {
    sum += tens[i];
  }
  return sum;
},

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {String}
 * @return {Number}
 */
moreThanTenLetters: function(array) {
  function overTen(str){
    return str.length > 10;
  }
  var tens = array.filter(overTen);

  return tens.length;
},

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
multiplyAll: function(array) {
  var product = 1;

  for (i = 0; i < array.length; i++){
    product *= array[i];
  }
  return product;
},

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {String}
 * @return {Number}
 */
sumAllPositive: function(array) {
  function positive(num){
    return num > 0;
  }
  var pos = array.filter(positive);
  var sum = 0;
  for (i = 0; i < pos.length; i++) {
    sum += pos[i];
  }
  return sum;
},

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
stringCountBelowThree: function(array) {
  function threeOrLess(str){
    return str.length < 4;
  }
  var threes = array.filter(threeOrLess);
  return threes.length;
},

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
countObjects: function(array) {
  return array.length;
},

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
getObjectKeys: function(object) {
  return Object.keys(object);
},

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
getObjectValues: function(object) {
  return Object.values(object);
},

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
makeObject: function(key, value) {
  return {[key]:value};
},

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Bool}
 */
makeObjectReverse: function(value, key) {
  return {[key]: value};
},

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
tupleToObject: function() {

},

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
tupleToObjectReverse: function() {

},

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
strToKeys: function() {

},

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
getValues: function() {

},

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
getKeys: function() {

},

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
objectToArray: function() {

},

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
arrayToObject: function() {

},

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
arraysToObject: function() {

},

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
objectsToTuples: function() {

},

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
mapArrayValues: function() {

},

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
mapStringCounts: function() {

},

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
arrayToObjectNums: function() {

},

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
stringToKeys: function() {

},

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
charCountMap: function() {

},

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Bool}
 */
frequencyMap: function() {

},

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Bool}
 */
tupleConvertToObject: function() {

}
}

/* module.exports = {
  doubleArray: null,
  sumArrays: null, 
  stringCount: null,
  arrayLength: null,
  countAll: null,
  countStrings: null,
  countAllStrings: null,
  convertToArray: null,
  objectSize: null,
  createZeroFilledArray: null,
  poppedArray: null,
  splitString: null,
  lengthOfLast: null,
  sumBelowTen: null,
  moreThanTenLetters: null,
  multiplyAll: null,
  sumAllPositive: null,
  stringCountBelowThree: null,
  countObjects: null,
  getObjectKeys: null,
  getObjectValues: null,
  makeObject: null,
  makeObjectReverse: null,
  tupleToObject: null,
  tupleToObjectReverse: null,
  strToKeys: null,
  getValues: null,
  getKeys: null,
  objectToArray: null,
  arrayToObject: null,
  arraysToObject: null,
  objectsToTuples: null,
  mapArrayValues: null,
  mapStringCounts: null,
  arrayToObjectNums: null,
  stringToKeys: null,
  charCountMap: null,
  frequencyMap: null,
  tupleConvertToObject: null
} */

 
 
 
