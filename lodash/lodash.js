import _ from "lodash";

//ARRAY
// task 1
// const array = Array(8)
//   .fill()
//   .map(() => Math.round(Math.random() * 8));

// console.log("array1:  ", array, "\n --------------------\n");

// const array2 = Array(8)
//   .fill()
//   .map(() => Math.round(Math.random() * 8));

// console.log("array2:  ", array2, "\n --------------------\n");

// console.log("difference - ", _.difference(array, array2));

// task 2
// let products = [
//   { product: "banana", hasGMO: true },
//   { product: "apple", hasGMO: false },
//   { product: "orange", hasGMO: false },
// ];
// console.log(
//   _.differenceWith(products, [{ product: "banana", hasGMO: true }], _.isEqual)
// );

// task 3
// let products = [
//   { product: "banana", hasGMO: true },
//   { product: "apple", hasGMO: false },
//   { product: "orange", hasGMO: false },
// ];
// // return first equal element index
// console.log(_.findIndex(products, (data) => data.hasGMO));

// task 4
// let array = [];
// array.length = 8;
// _.fill(array, 0);
// console.log(array);

// task 5
// const array = Array(4)
//   .fill()
//   .map(() => Math.round(Math.random() * 8));

// console.log("array1:  ", array, "\n --------------------\n");

// const array2 = Array(4)
//   .fill()
//   .map(() => Math.round(Math.random() * 8));

// console.log("array2:  ", array2, "\n --------------------\n");

// console.log(_.intersection(array, array2));

// task 6
// console.log(_.union(array, array2));
// task 7
// console.log(_.xor(array, array2));

//LANG
// task 8
// console.log(_.eq("a", "a"));
// => true

// Math
// task 9
// const array = Array(4)
//   .fill()
//   .map(() => Math.round(Math.random() * 8));

// console.log(array);
// console.log(_.max(array));

// task 10
// console.log(_.sum(array));

//NUMBER
// task 11
// console.log(_.random(0, 5));
// => an integer between 0 and 5

//Object
// task 12
// console.log(_.assign({ name: "tergel" }, { isMale: true }));

// task 13
// let products = {
//   banana: { hasGMO: true },
//   apple: { hasGMO: false },
//   orange: { hasGMO: false },
// };

// console.log(_.findKey(products, (data) => data.hasGMO));

// task 14
// let products = {
//   banana: { hasGMO: true },
//   apple: { hasGMO: false },
//   orange: { hasGMO: false },
// };

// console.log(_.forIn(products, (_value, key) => console.log(key)));
