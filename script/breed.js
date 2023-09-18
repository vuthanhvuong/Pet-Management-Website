"use strict";

const nav_sidebar_active = document.getElementById("sidebar-title");
const nav_active = document.getElementById("sidebar");

const submitInputBreed = document.getElementById("submit-btn");
const typeBreedInput = document.getElementById("input-type");
const breedInput = document.getElementById("input-breed");
const idBreedInput = document.getElementById("id-breed-input");
const tableBreedBoddy = document.getElementById("tbody");
//=======1. Bổ sung Animation cho Sidebar=======
nav_sidebar_active.addEventListener("click", function (e) {
  e.preventDefault();

  nav_active.classList.toggle("active");
});

//========3. Chức năng quản lý breed===========

//=======2. Lưu dữ liệu dưới dạng LocalStorage========

renderTableDataBreed(breedArr);

//Lấy dữ liệu từ input form
submitInputBreed.addEventListener("click", function () {
  const data = {
    id: idBreedInput.value,
    breed: breedInput.value,
    type: typeBreedInput.value,
  };
  console.log(data);

  const validateBreedData = function (data) {
    if (breedArr.length === 0) {
      //đối với lần đầu tiên thêm dữ liệu vào mảng, sẽ ko kiểm tra ID có bị trùng không
      if (data.id === "") {
        console.log("Please fill Breed ID");
        alert("Please fill Breed ID");
        return false;
      } else if (data.breed === "") {
        console.log("Please fill Breed Name");
        alert("Please fill Breed Name");
        return false;
      } else if (data.type === "Select Type") {
        console.log("Please select Type!");
        alert("Please select Type!");
        return false;
      } else {
        return true;
      }
    } else {
      //Từ lần thứ 2 thêm dữ liệ vào mảng, khi đó petArr đã có length = 1 nên sẽ thực hiện được lệnh lặp
      for (let i = 0; i < breedArr.length; i++) {
        if (data.id === breedArr[i].id) {
          console.log("ID must be unique!");
          alert("ID must be unique!");
          return false;
        } else if (data.id === "") {
          console.log("Please fill Pet ID");
          alert("Please fill Pet ID");
          return false;
        } else if (data.breed === "") {
          console.log("Please fill Breed Name");
          alert("Please fill Breed Name");
          return false;
        } else if (data.type === "Select Type") {
          console.log("Please select Type!");
          alert("Please select Type!");
          return false;
        } else {
        }
        if (i == breedArr.length - 1) {
          return true;
        }
      }
    }
  };

  validateBreedData(data);
  const validateBreed = validateBreedData(data);
  console.log(validateBreed);
  if (validateBreed) {
    breedArr.push(data);
    saveToStorage("breedArrKey", JSON.stringify(breedArr));
    console.log(breedArr);
    clearBreedInput();
    renderTableDataBreed(breedArr);
  }
  console.log("breedArr After Submit", breedArr);
});

const clearBreedInput = () => {
  idBreedInput.value = "";
  breedInput.value = "";
  typeBreedInput.value = "Select Type";
};

function renderTableDataBreed(breedArr) {
  tableBreedBoddy.innerHTML = "";

  for (let i = 0; i < breedArr.length; i++) {
    // Tạo hàng
    const row = document.createElement("tr");
    tableBreedBoddy.appendChild(row);

    // Tạo các giá trị từng cột trong hàng

    // ID
    const id = document.createElement("th");
    row.appendChild(id);
    id.innerHTML = breedArr[i].id;

    // Name Breed
    const name = document.createElement("td");
    row.appendChild(name);
    name.innerHTML = breedArr[i].breed;

    // Type
    const type = document.createElement("td");
    row.appendChild(type);
    type.innerHTML = breedArr[i].type;

    // Action
    const action = document.createElement("td");
    row.appendChild(action);
    const buttonAction = document.createElement("button");
    action.appendChild(buttonAction);
    buttonAction.classList.add("btn", "btn-danger");
    buttonAction.innerHTML = "Delete";
    buttonAction.setAttribute("onclick", `deleteBreed(${breedArr[i].id})`);
  }
}

//Xóa dữ liệu breed
const deleteBreed = (x) => {
  if (confirm("Are you sure?")) {
    const deleteBreedNumber = breedArr.findIndex(checkBreedID);
    console.log(`deleteBreedNumber is ${deleteBreedNumber}`);
    console.log("breedArr:", breedArr);
    breedArr.splice(deleteBreedNumber, 1);
    // localStorage(deleteItem("petArrKey"));
    // saveToStorage("petArrKey", JSON.stringify(petArr));

    saveToStorage("breedArrKey", JSON.stringify(breedArr));
    renderTableDataBreed(breedArr);
  }
  function checkBreedID(breedArr) {
    return breedArr.id == x;
  }
};
