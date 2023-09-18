"use strict";

const nav_sidebar_active = document.getElementById("sidebar-title");
const nav_active = document.getElementById("sidebar");

const tableBody = document.getElementById("tbody");

const containerForm = document.getElementById("container-form");
const inputID = document.getElementById("input-id");
const inputName = document.getElementById("input-name");
const inputAge = document.getElementById("input-age");
const inputType = document.getElementById("input-type");
const inputWeight = document.getElementById("input-weight");
const inputLength = document.getElementById("input-length");
const inputColor = document.getElementById("input-color-1");
const inputBreed = document.getElementById("input-breed");
const inputVaccinated = document.getElementById("input-vaccinated");
const inputDewormed = document.getElementById("input-dewormed");
const inputSterilized = document.getElementById("input-sterilized");
const btnSubmit = document.getElementById("submit-btn");

//=======1. Bổ sung Animation cho Sidebar=======
nav_sidebar_active.addEventListener("click", function (e) {
  e.preventDefault();

  nav_active.classList.toggle("active");
});

//==========5. Chức năng Edit==================

console.log(petArr);
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

    // Action
    const action = document.createElement("td");
    row.appendChild(action);
    const buttonAction = document.createElement("button");
    action.appendChild(buttonAction);
    buttonAction.classList.add("btn"); //"btn-danger"
    buttonAction.innerHTML = "Edit";
    buttonAction.setAttribute("onclick", `editPet(${petArr[i].id})`);
    buttonAction.setAttribute(
      "style",
      "color: black; background-color: rgb(240, 202, 17);"
    );
  }
}

// hàm Edit
const editPet = (x) => {
  const editNumber = petArr.findIndex(checkID);
  console.log(`editNumber is ${editNumber}`);
  containerForm.classList.remove("hide");
  fillInfor(petArr);
  findBreed(breedArr);

  function checkID(petArr) {
    return petArr.id == x;
  }

  function fillInfor(petArr) {
    //hàm hiển thị giá trị của pet hiện tại ra màn hình
    inputID.value = petArr[editNumber].id;
    inputName.value = petArr[editNumber].name;
    inputAge.value = petArr[editNumber].age;

    inputWeight.value = petArr[editNumber].weight;
    inputLength.value = petArr[editNumber].length;
    inputColor.value = petArr[editNumber].color;

    inputType.value = petArr[editNumber].type;

    inputVaccinated.value = petArr[editNumber].vaccinated;
    if (petArr[editNumber].vaccinated) {
      inputVaccinated.setAttribute("checked", "");
    } else if (!petArr[editNumber].vaccinated) {
      inputVaccinated.removeAttribute("checked");
    }

    inputDewormed.value = petArr[editNumber].dewormed;
    if (petArr[editNumber].dewormed) {
      inputDewormed.setAttribute("checked", "");
    } else if (!petArr[editNumber].dewormed) {
      inputDewormed.removeAttribute("checked");
    }

    inputSterilized.value = petArr[editNumber].sterilized;
    if (petArr[editNumber].sterilized) {
      inputSterilized.setAttribute("checked", "");
    } else if (!petArr[editNumber].sterilized) {
      inputSterilized.removeAttribute("checked");
    }
  }

  function findBreed(breedArr) {
    //hàm check breed của pet
    let dogcatOption = []; //Tạo mảng mới để lưu lại thông tin tất cả giá trị của breed
    const breedArrCat = breedArr.filter((arr) => arr.type == "Cat");
    const breedArrDog = breedArr.filter((arr) => arr.type == "Dog");
    inputBreed.innerHTML = "<option>Select Breed</option>";
    if (inputType.value == "Dog") {
      for (let i = 0; i < breedArrDog.length; i++) {
        dogcatOption[i] = breedArrDog[i].breed;
      }
    } else if (inputType.value == "Cat") {
      for (let i = 0; i < breedArrCat.length; i++) {
        dogcatOption[i] = breedArrCat[i].breed;
      }
    } else {
      console.log("NOT");
    }
    console.log(dogcatOption);
    inputBreed.innerHTML = "<option>Select Breed</option>";
    dogcatOption.forEach((element) => {
      const option = document.createElement("option");
      option.innerHTML = element;
      inputBreed.appendChild(option);
      console.log(element);
    });
    inputBreed.value = petArr[editNumber].breed;
  }
};

//Khi chuyển type cho pet từ CAT sang DOG và ngược lại thì cần hiển thị breed tương ứng
let dogcatOption = []; //Tạo mảng mới để lưu lại thông tin tất cả giá trị của breed
const breedArrCat = breedArr.filter((arr) => arr.type == "Cat");
const breedArrDog = breedArr.filter((arr) => arr.type == "Dog");
inputBreed.innerHTML = "<option>Select Breed</option>";
inputType.addEventListener("click", function () {
  dogcatOption = [];
  if (inputType.value == "Dog") {
    console.log(breedArr);
    for (let i = 0; i < breedArrDog.length; i++) {
      dogcatOption[i] = breedArrDog[i].breed;
    }
  } else if (inputType.value == "Cat") {
    for (let i = 0; i < breedArrCat.length; i++) {
      dogcatOption[i] = breedArrCat[i].breed;
    }
  } else {
    console.log("NOT");
  }
  console.log(dogcatOption);
  inputBreed.innerHTML = "<option>Select Breed</option>";
  dogcatOption.forEach((element) => {
    const option = document.createElement("option");
    option.innerHTML = element;
    inputBreed.appendChild(option);
    console.log(element);
  });
});

//Sau khi chỉnh sửa thông tin và click vào nút Submit
btnSubmit.addEventListener("click", function () {
  saveData(petArr);

  renderTableData(petArr);
  console.log(petArr);
  saveToStorage("petArrKey", JSON.stringify(petArr));
  console.log(JSON.stringify(petArr));
});
function saveData(petArr) {
  const idexNumber = petArr.findIndex(
    (element) => Number(element.id) === Number(inputID.value)
  );
  console.log("indexNumber:", idexNumber);
  if (inputName.value === "") {
    alert("Please fill Pet Name");
    return false;
  } else {
    petArr[idexNumber].name = inputName.value;
  }
  if (!(inputAge.value >= 1 && inputAge.value <= 15)) {
    console.log("Age must be between 1 and 15!");
    alert("Age must be between 1 and 15!");
  } else {
    petArr[idexNumber].age = inputAge.value;
  }
  if (inputWeight.value < 1 || inputWeight.value > 15) {
    console.log("Weight must be between 1 and 15!");
    alert("Weight must be between 1 and 15!");
    return false;
  } else {
    petArr[idexNumber].weight = inputWeight.value;
  }
  if (inputLength.value < 1 || inputLength.value > 100) {
    console.log("Length must be between 1 and 100!");
    alert("Length must be between 1 and 100!");
    return false;
  } else {
    petArr[idexNumber].length = inputLength.value;
  }
  petArr[idexNumber].color = inputColor.value;
  if (inputType.value === "Select Type") {
    console.log("Please select Type!");
    alert("Please select Type!");
    return false;
  } else {
    petArr[idexNumber].type = inputType.value;
  }
  if (inputBreed.value === "Select Breed") {
    console.log("Please select Breed!");
    alert("Please select Breed!");
    return false;
  } else {
    petArr[idexNumber].breed = inputBreed.value;
  }
  petArr[idexNumber].vaccinated = inputVaccinated.checked;
  console.log("inputVaccinated value:", inputVaccinated.checked);
  petArr[idexNumber].dewormed = inputDewormed.checked;
  console.log("inputDewormed value:", inputDewormed.checked);
  petArr[idexNumber].sterilized = inputSterilized.checked;
  console.log("inputSterilized value:", inputSterilized.checked);
  // console.log(petArr[idexNumber]);
}

// function validateData(data) {
//   if (data.name === "") {
//     console.log("Please fill Pet Name");
//   } else if (!(data.age >= 1 && data.age <= 15)) {
//     console.log("Age must be between 1 and 15!");
//     alert("Age must be between 1 and 15!");
//     return false;
//   } else if (data.weight < 1 || data.weight > 15) {
//     console.log("Weight must be between 1 and 15!");
//     alert("Weight must be between 1 and 15!");
//     return false;
//   } else if (data.length < 1 || data.length > 100) {
//     console.log("Length must be between 1 and 100!");
//     alert("Length must be between 1 and 100!");
//     return false;
//   } else if (data.type === "Select Type") {
//     console.log("Please select Type!");
//     alert("Please select Type!");
//     return false;
//   } else if (data.breed === "Select Breed") {
//     console.log("Please select Breed!");
//     alert("Please select Breed!");
//     return false;
//   } else {
//   }
//   if (i == petArr.length - 1) {
//     return true;
//   }
// }
