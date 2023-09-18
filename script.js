"use strict";

const submitBtn = document.getElementById("submit-btn");
const idInput = document.getElementById("input-id");
const nameInput = document.getElementById("input-name");
const ageInput = document.getElementById("input-age");
const typeInput = document.getElementById("input-type");
const weightInput = document.getElementById("input-weight");
const lengthInput = document.getElementById("input-length");
const colorInput = document.getElementById("input-color-1");
const breedInput = document.getElementById("input-breed");
const vaccinatedInput = document.getElementById("input-vaccinated");
const dewormedInput = document.getElementById("input-dewormed");
const sterilizedInput = document.getElementById("input-sterilized");
const tableBodyEl = document.getElementById("tbody");
const healthyBtn = document.getElementById("healthy-btn");
const bmiBtn = document.getElementById("bmi-btn");

const nav_sidebar_active = document.getElementById("sidebar-title");
const nav_active = document.getElementById("sidebar");

//==============ASSIGNMENT 1====================

// const petArr = []; //Tạo mảng rỗng để chứa data pet
let healthyCheck = false;
let healthyPetArr = petArr;
renderTableData(petArr);
console.log("PetArr Before Submit:", petArr);
console.log("BreedArr Before Submit:", breedArr);

//Ass2: phần 4: Hiển thị Breed trong màn hình quản lý thú cưng
let dogcatOption = []; //Tạo mảng mới để lưu lại thông tin tất cả giá trị của breed

const breedArrCat = breedArr.filter((arr) => arr.type == "Cat");
const breedArrDog = breedArr.filter((arr) => arr.type == "Dog");

breedInput.innerHTML = "<option>Select Breed</option>";
typeInput.addEventListener("click", function () {
  dogcatOption = [];
  if (typeInput.value == "Dog") {
    // console.log("DOG");
    console.log(breedArr);
    for (let i = 0; i < breedArrDog.length; i++) {
      dogcatOption[i] = breedArrDog[i].breed;
    }
  } else if (typeInput.value == "Cat") {
    // console.log("CAT");
    for (let i = 0; i < breedArrCat.length; i++) {
      dogcatOption[i] = breedArrCat[i].breed;
    }
  } else {
    console.log("NOT");
  }
  console.log(dogcatOption);
  breedInput.innerHTML = "<option>Select Breed</option>";
  dogcatOption.forEach((element) => {
    const option = document.createElement("option");
    option.innerHTML = element;
    breedInput.appendChild(option);
    console.log(element);
  });
});

// 2. Lấy dữ liệu từ các Input Form

submitBtn.addEventListener("click", function () {
  const data = {
    id: idInput.value,
    name: nameInput.value,
    age: parseInt(ageInput.value),
    type: typeInput.value,
    weight: parseInt(weightInput.value),
    length: parseInt(lengthInput.value),
    color: colorInput.value,
    breed: breedInput.value,
    vaccinated: vaccinatedInput.checked,
    dewormed: dewormedInput.checked,
    sterilized: sterilizedInput.checked,
    date: new Date(),
  };
  console.log(data);

  const validateData = function (data) {
    if (petArr.length === 0) {
      //đối với lần đầu tiên thêm dữ liệu vào mảng, sẽ ko kiểm tra ID có bị trùng không
      if (data.id === "") {
        console.log("Please fill Pet ID");
        alert("Please fill Pet ID");
        return false;
      } else if (data.name === "") {
        console.log("Please fill Pet Name");
        alert("Please fill Pet Name");
        return false;
      } else if (!(data.age >= 1 && data.age <= 15)) {
        console.log("Age must be between 1 and 15!");
        alert("Age must be between 1 and 15!");
        return false;
      } else if (data.weight < 1 || data.weight > 15) {
        console.log("Weight must be between 1 and 15!");
        alert("Weight must be between 1 and 15!");
        return false;
      } else if (data.length < 1 || data.length > 100) {
        console.log("Length must be between 1 and 100!");
        alert("Length must be between 1 and 100!");
        return false;
      } else if (data.type === "Select Type") {
        console.log("Please select Type!");
        alert("Please select Type!");
        return false;
      } else if (data.breed === "Select Breed") {
        console.log("Please select Breed!");
        alert("Please select Breed!");
        return false;
      } else {
        return true;
      }
    } else {
      //Từ lần thứ 2 thêm dữ liệ vào mảng, khi đó petArr đã có length = 1 nên sẽ thực hiện được lệnh lặp
      for (let i = 0; i < petArr.length; i++) {
        if (data.id === petArr[i].id) {
          console.log("ID must be unique!");
          alert("ID must be unique!");
          return false;
        } else if (data.id === "") {
          console.log("Please fill Pet ID");
          alert("Please fill Pet ID");
          return false;
        } else if (data.name === "") {
          console.log("Please fill Pet Name");
          alert("Please fill Pet Name");
          return false;
        } else if (!(data.age >= 1 && data.age <= 15)) {
          console.log("Age must be between 1 and 15!");
          alert("Age must be between 1 and 15!");
          return false;
        } else if (data.weight < 1 || data.weight > 15) {
          console.log("Weight must be between 1 and 15!");
          alert("Weight must be between 1 and 15!");
          return false;
        } else if (data.length < 1 || data.length > 100) {
          console.log("Length must be between 1 and 100!");
          alert("Length must be between 1 and 100!");
          return false;
        } else if (data.type === "Select Type") {
          console.log("Please select Type!");
          alert("Please select Type!");
          return false;
        } else if (data.breed === "Select Breed") {
          console.log("Please select Breed!");
          alert("Please select Breed!");
          return false;
        } else {
        }
        if (i == petArr.length - 1) {
          return true;
        }
      }
    }
  };

  validateData(data);
  const validate = validateData(data);
  console.log(validate);
  if (validate) {
    petArr.push(data);
    saveToStorage("petArrKey", JSON.stringify(petArr));
    clearInput();
    renderTableData(petArr);
    healthyPetArr = petArr.filter(
      (arr) =>
        arr.vaccinated == true && arr.dewormed == true && arr.sterilized == true
    );
  }
  console.log("petArr After Submit", petArr);
  console.log("Healthy Array:", healthyPetArr);
});

// 5. Hiển thị danh sách thú cưng
function renderTableData(petArr) {
  tableBodyEl.innerHTML = "";

  for (let i = 0; i < petArr.length; i++) {
    // Tạo hàng
    const row = document.createElement("tr");
    tableBodyEl.appendChild(row);

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

    // BMI
    const bmi = document.createElement("td");
    row.appendChild(bmi);
    bmi.innerHTML = "?";

    // Date
    const date = document.createElement("td");
    row.appendChild(date);
    date.innerHTML = petArr[i].date;

    // Action
    const action = document.createElement("td");
    row.appendChild(action);
    const buttonAction = document.createElement("button");
    action.appendChild(buttonAction);
    buttonAction.classList.add("btn", "btn-danger");
    buttonAction.innerHTML = "Delete";
    buttonAction.setAttribute("onclick", `deletePet(${petArr[i].id})`);
  }
}

// 6. Xóa dữ liệu vừa nhập trên Form
const clearInput = () => {
  idInput.value = "";
  nameInput.value = "";
  ageInput.value = "";
  typeInput.value = "Select Type";
  weightInput.value = "";
  lengthInput.value = "";
  breedInput.value = "Select Breed";
  vaccinatedInput.checked = false;
  dewormedInput.checked = false;
  sterilizedInput.checked = false;
};

// 7. Xóa dữ liệu thú cưng
const deletePet = (x) => {
  if (confirm("Are you sure?")) {
    const deleteNumber = petArr.findIndex(checkID);
    console.log(`deleteNumber is ${deleteNumber}`);
    petArr.splice(deleteNumber, 1);
    // localStorage(deleteItem("petArrKey"));
    // saveToStorage("petArrKey", JSON.stringify(petArr));
    saveToStorage("petArrKey", JSON.stringify(petArr));
    renderTableData(petArr);
  }
  function checkID(petArr) {
    return petArr.id == x;
  }
};

// 8. Kiểm tra thú cưng khỏe mạnh

//Khi ấn click vào Show HealthyPet
healthyBtn.addEventListener("click", function () {
  if (healthyCheck == false) {
    renderTableData(healthyPetArr);
    healthyBtn.textContent = "Show All Pet";
    healthyCheck = true;
  } else {
    renderTableData(petArr);
    healthyBtn.textContent = "Show Healthy Pet";
    healthyCheck = false;
  }
});

// 9. Nâng cao, tính BMI

bmiBtn.addEventListener("click", function () {
  for (let i = 0; i < petArr.length; i++) {
    if (petArr[i].type == "Dog") {
      petArr[i].bmi = (petArr[i].weight * 703) / petArr[i].length ** 2;
    } else {
      petArr[i].bmi = (petArr[i].weight * 886) / petArr[i].length ** 2;
    }
  }
  console.log(petArr);
  renderTableDataBMI(petArr);
});

function renderTableDataBMI(petArr) {
  tableBodyEl.innerHTML = "";

  for (let i = 0; i < petArr.length; i++) {
    // Tạo hàng
    const row = document.createElement("tr");
    tableBodyEl.appendChild(row);

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

    // BMI
    const bmi = document.createElement("td");
    row.appendChild(bmi);
    bmi.innerHTML = petArr[i].bmi.toFixed(2);

    // Date
    const date = document.createElement("td");
    row.appendChild(date);
    date.innerHTML = petArr[i].date;

    // Action
    const action = document.createElement("td");
    row.appendChild(action);
    const buttonAction = document.createElement("button");
    action.appendChild(buttonAction);
    buttonAction.classList.add("btn", "btn-danger");
    buttonAction.innerHTML = "Delete";
    buttonAction.setAttribute("onclick", `deletePet(${petArr[i].id})`);
  }
}

//=====================ASSIGNMENT 2====================

//=======1. Bổ sung Animation cho Sidebar=======
nav_sidebar_active.addEventListener("click", function (e) {
  e.preventDefault();

  nav_active.classList.toggle("active");
});

//=======2. Lưu dữ liệu dưới dạng LocalStorage========
const btnClearStorage = document.querySelector("#clearStorage");
btnClearStorage.addEventListener("click", function (e) {
  // e.preventDefault();
  // localStorage(deleteItem("petArrKey"));
  // saveToStorage("petArrKey", JSON.stringify(petArr));
  localStorage.clear();
});
