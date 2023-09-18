"use strict";

const nav_sidebar_active = document.getElementById("sidebar-title");
const nav_active = document.getElementById("sidebar");

const tableBody = document.getElementById("tbody");

const containerForm = document.getElementById("container-form");
const inputID1 = document.getElementById("input-id");
const inputName = document.getElementById("input-name");
// const inputAge = document.getElementById("input-age");
const inputType = document.getElementById("input-type");
// const inputWeight = document.getElementById("input-weight");
// const inputLength = document.getElementById("input-length");
// const inputColor = document.getElementById("input-color-1");
const inputBreed = document.getElementById("input-breed");
const inputVaccinated = document.getElementById("input-vaccinated");
const inputDewormed = document.getElementById("input-dewormed");
const inputSterilized = document.getElementById("input-sterilized");
const btnFind = document.getElementById("find-btn");

//=======1. Bổ sung Animation cho Sidebar=======
nav_sidebar_active.addEventListener("click", function (e) {
  e.preventDefault();

  nav_active.classList.toggle("active");
});

//=======6. Chức năng Search================

renderTableData(petArr);

//Hiển thị mảng dữ liệu pet đã có sẵn
function renderTableData(petArr) {
  tableBody.innerHTML = "";

  for (let i = 0; i < petArr.length; i++) {
    // Tạo hàng
    const row = document.createElement("tr");
    tableBody.appendChild(row);

    // Tạo các giá trị từng cột trong hàng

    // ID
    const id = document.createElement("th");
    row.appendChild(id);
    id.innerHTML = petArr[i].id;

    // Name
    const name = document.createElement("td");
    row.appendChild(name);
    name.innerHTML = petArr[i].name;

    // Age
    const age = document.createElement("td");
    row.appendChild(age);
    age.innerHTML = petArr[i].age;

    // Type
    const type = document.createElement("td");
    row.appendChild(type);
    type.innerHTML = petArr[i].type;

    // Weight
    const weight = document.createElement("td");
    row.appendChild(weight);
    weight.innerHTML = petArr[i].weight;

    // Length
    const length = document.createElement("td");
    row.appendChild(length);
    length.innerHTML = petArr[i].length;

    // Breed
    const breed = document.createElement("td");
    row.appendChild(breed);
    breed.innerHTML = petArr[i].breed;

    // ------Color------
    const color = document.createElement("td");
    row.appendChild(color);
    const iconColor = document.createElement("i");
    color.appendChild(iconColor);
    iconColor.classList.add("bi", "bi-square-fill");
    iconColor.style.color = petArr[i].color;

    // Vaccinated
    const vaccinated = document.createElement("td");
    row.appendChild(vaccinated);
    const iconVaccinated = document.createElement("i");
    vaccinated.appendChild(iconVaccinated);
    iconVaccinated.classList.add("bi");
    if (petArr[i].vaccinated) {
      iconVaccinated.classList.add("bi-check-circle-fill");
    } else {
      iconVaccinated.classList.add("bi-x-circle-fill");
    }

    // Dewormed
    const dewormed = document.createElement("td");
    row.appendChild(dewormed);
    const iconDewormed = document.createElement("i");
    dewormed.appendChild(iconDewormed);
    iconDewormed.classList.add("bi");
    if (petArr[i].dewormed) {
      iconDewormed.classList.add("bi-check-circle-fill");
    } else {
      iconDewormed.classList.add("bi-x-circle-fill");
    }

    // Sterilized
    const sterilized = document.createElement("td");
    row.appendChild(sterilized);
    const iconSterilized = document.createElement("i");
    sterilized.appendChild(iconSterilized);
    iconSterilized.classList.add("bi");
    if (petArr[i].sterilized) {
      iconSterilized.classList.add("bi-check-circle-fill");
    } else {
      iconSterilized.classList.add("bi-x-circle-fill");
    }

    // Date
    const date = document.createElement("td");
    row.appendChild(date);
    date.innerHTML = petArr[i].date;
  }
}

btnFind.addEventListener("click", function () {
  console.log(inputID1.value);
  const newArr = petArr.filter((mov) => mov.id == inputID1.value);

  console.log(newArr);
  renderTableData(newArr);
});

// function search(petArr) {
//   console.log(inputID1.value);
//   const newArr = petArr.filter(function (mov) {
//     Number(mov.id) === Number(inputID1.value);
//   });
//   console.log(petArr);
//   console.log("aaaaa");
//   console.log(newArr);
// }

// const pet = [{ id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
// const pet1 = pet.filter((mov) => mov.id == inputID1.value);
// console.log(pet1);
let str = "Mot";
const oneWord = function (str) {
  return str.replace(/ /g, "");
};
let str1 = oneWord(str);
const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};
console.log(upperFirstWord(str1));
str.includes("M");
