"use strict";

const nav_sidebar_active = document.getElementById("sidebar-title");
const nav_active = document.getElementById("sidebar");

const inputFile = document.getElementById("input-file");
const btnImport = document.getElementById("import-btn");
const btnExport = document.getElementById("export-btn");

//===========1. Bổ sung Animation cho Sidebar=======
nav_sidebar_active.addEventListener("click", function (e) {
  e.preventDefault();

  nav_active.classList.toggle("active");
});

//===========7. Bài tập nâng cao Import Export data===============

// function saveStaticDataToFile() {
//   var blob = new Blob(["Welcome to Websparrow.org."], {
//     type: "text/plain;charset=utf-8",
//   });
//   saveAs(blob, "petData.txt");
// }

//7.1 Export
//Hàm lưu giá trị của petArr hiện tại
function saveDynamicDataToFile() {
  const userInput = JSON.stringify(petArr);

  const blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "Pet Data.txt");
}
// Hàm lưu giá trị BreedArr hiện tại
function saveDynamicBreedToFile() {
  const userBreedInput = JSON.stringify(breedArr);

  const blob = new Blob([userBreedInput], { type: "text/plain;charset=utf-8" });
  saveAs(blob, "Breed Data.txt");
}

//7.2 Import

//7.2.1 petArr
//Get the form and file field
let form = document.querySelector("#upload");
let file = document.querySelector("#file");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  // event.preventDefault();

  //Nếu chưa chọn file thì sẽ không upload được (file.value.length = 0)
  console.log(file.value.length);
  if (!file.value.length) return;

  //Tạo một reader object để đọc file
  let reader = new FileReader();

  reader.readAsText(file.files[0]); //đọc file đầu tiên

  //Setup the callback event to run when the file is read
  reader.onload = logFile;

  // petArr = reader;
  // console.log("petArr:", petArr);
  // saveToStorage("petArrKey", JSON.stringify(petArr));
  alert("Upload Pet Data Finish");
}

function logFile(event) {
  let str = event.target.result;
  console.log(str);
  let json = JSON.parse(str);
  console.log(json);
  petArr = json;
  console.log("petArr", petArr);
  saveToStorage("petArrKey", JSON.stringify(petArr));
}

//7.2.2 breedArr
//Get the form and file field
let formBreed = document.querySelector("#uploadBreed");
let fileBreed = document.querySelector("#file-breed");

formBreed.addEventListener("submit", handleBreedSubmit);
function handleBreedSubmit(event) {
  // event.preventDefault();

  //Nếu chưa chọn file thì sẽ không upload được (file.value.length = 0)
  console.log(fileBreed.value.length);
  if (!fileBreed.value.length) return;

  //Tạo một reader object để đọc file
  let reader = new FileReader();

  reader.readAsText(fileBreed.files[0]); //đọc file đầu tiên

  //Setup the callback event to run when the file is read
  reader.onload = logFileBreed;

  // petArr = reader;
  // console.log("petArr:", petArr);
  // saveToStorage("petArrKey", JSON.stringify(petArr));
  alert("Upload Breed Finish");
}

function logFileBreed(event) {
  let str = event.target.result;
  console.log(str);
  let json = JSON.parse(str);
  console.log(json);
  breedArr = json;
  console.log("breedArr", breedArr);
  saveToStorage("breedArrKey", JSON.stringify(breedArr));
}
