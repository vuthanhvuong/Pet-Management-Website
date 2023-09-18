"use strict";

//Check Storage support
if (typeof Storage !== "undefined") {
  // Code for localStorage/sessionStorage.
  console.log("Web Storage support");
} else {
  // Sorry! No Web Storage support..
  console.log("Sorry! No Web Storage support");
}

//Test localStorage.setItem & localStorage.getItem
// const txt = '{"name":"John", "age":30, "city":"New York"}';
// console.log(JSON.parse(txt));
// const obj = { name: "John", age: 30, city: "New York" };
// const myJSON = JSON.stringify(obj);
// console.log(myJSON);

//=======2. Lưu dữ liệu dưới dạng LocalStorage========
function saveToStorage(key, value) {
  localStorage.setItem(key, value);
}
function getFromStorage(key, defaultVal) {
  return localStorage.getItem(key) ?? defaultVal;
}
// saveToStorage("name", "Jonh");
// console.log(getFromStorage("name", "Khong co gia tri"));
let petArr = [];
petArr = JSON.parse(getFromStorage("petArrKey", "[]")); //Lấy ra dữ liệu từ Storage
let breedArr = [];
breedArr = JSON.parse(getFromStorage("breedArrKey", "[]")); //Lấy ra dữ liệu breed từ Storage
