$(document).ready(function () {
  $("#course").on('change', function () {
    $(".data").hide();
    $("#" + $(this).val()).fadeIn(700);
  }).change();
});
//Search the product 
function filterTable() {
  debugger;
  let filter = searchInput.value.toUpperCase();
  rows = dataTable.getElementsByTagName("tr");
  let flag = false;

  for (let row of rows) {
    let cells = row.getElementsByTagName("th");
    for (let cell of cells) {
      if (cell.textContent.toUpperCase().indexOf(filter) > -1) {
        if (filter) {
          cell.style.backgroundColor = '';
        }
        flag = true;
      }
    }
    if (flag) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }

    flag = false;
  }
}
const buttons = document.querySelectorAll('.button');
const count = document.getElementById("count");
const seats = document.querySelectorAll('.course:not(.noSlot)');
//Update  count
function updateCourseCount() {
  const selectedCourses = document.querySelectorAll('.button.selected');
  const selectedCoursesCount = selectedCourses.length;
  count.innerText = selectedCoursesCount;
  total.innerText = selectedCoursesCount * coursePrice;
}

function searchReset(formData) {
  document.getElementById("searchInput").value = '';
}

function register() {
  let name = document.getElementById("name1").textContent;
  let id = document.getElementById("id1").textContent;
  let number = document.getElementById("number1").textContent;
  let teacher = document.getElementById("teacher1").textContent;
  let timestart = document.getElementById("timestart1").textContent;
  let timeend = document.getElementById("timeend1").textContent;
  let room = document.getElementById("room1").textContent;
  let soTiet = document.getElementById("soTiet1").textContent;
  let table = document.getElementById('course-sign');
  let newRow = table.insertRow(table.length);
  let cel1 = newRow.insertCell(0);
  let cel2 = newRow.insertCell(1);
  let cel3 = newRow.insertCell(2);
  let cel4 = newRow.insertCell(3);
  let cel5 = newRow.insertCell(4);
  let cel6 = newRow.insertCell(5);
  let cel7 = newRow.insertCell(6);
  let cel8 = newRow.insertCell(7);
  let cel9 = newRow.insertCell(8);
  cel1.innerHTML = name;
  cel2.innerHTML = id;
  cel3.innerHTML = number;
  cel4.innerHTML = teacher;
  cel5.innerHTML = timestart;
  cel6.innerHTML = timeend;
  cel7.innerHTML = room;
  cel8.innerHTML = soTiet;
  cel9.innerHTML = `<button onClick="onDelete(this)">Delete</button>`;
}
function register1() {
  let name1 = document.getElementById("name2").textContent;
  let id1 = document.getElementById("id2").textContent;
  let number1 = document.getElementById("number2").textContent;
  let teacher1 = document.getElementById("teacher2").textContent;
  let timestart1 = document.getElementById("timestart2").textContent;
  let timeend1 = document.getElementById("timeend2").textContent;
  let room1 = document.getElementById("room2").textContent;
  let soTiet1 = document.getElementById("soTiet2").textContent;
  let table = document.getElementById('course-sign');
  let newRow = table.insertRow(table.length);
  let cel1 = newRow.insertCell(0);
  let cel2 = newRow.insertCell(1);
  let cel3 = newRow.insertCell(2);
  let cel4 = newRow.insertCell(3);
  let cel5 = newRow.insertCell(4);
  let cel6 = newRow.insertCell(5);
  let cel7 = newRow.insertCell(6);
  let cel8 = newRow.insertCell(7);
  let cel9 = newRow.insertCell(8);
  cel1.innerHTML = name1;
  cel2.innerHTML = id1;
  cel3.innerHTML = number1;
  cel4.innerHTML = teacher1;
  cel5.innerHTML = timestart1;
  cel6.innerHTML = timeend1;
  cel7.innerHTML = room1;
  cel8.innerHTML = soTiet1;
  cel9.innerHTML = `<button onClick="onDelete(this)">Delete</button>`;
}
function register3() {
  let name1 = document.getElementById("name4").textContent;
  let id1 = document.getElementById("id4").textContent;
  let number1 = document.getElementById("number4").textContent;
  let teacher1 = document.getElementById("teacher4").textContent;
  let timestart1 = document.getElementById("timestart4").textContent;
  let timeend1 = document.getElementById("timeend4").textContent;
  let room1 = document.getElementById("room4").textContent;
  let soTiet1 = document.getElementById("soTiet4").textContent;
  let table = document.getElementById('course-sign');
  let newRow = table.insertRow(table.length);
  let cel1 = newRow.insertCell(0);
  let cel2 = newRow.insertCell(1);
  let cel3 = newRow.insertCell(2);
  let cel4 = newRow.insertCell(3);
  let cel5 = newRow.insertCell(4);
  let cel6 = newRow.insertCell(5);
  let cel7 = newRow.insertCell(6);
  let cel8 = newRow.insertCell(7);
  let cel9 = newRow.insertCell(8);
  cel1.innerHTML = name1;
  cel2.innerHTML = id1;
  cel3.innerHTML = number1;
  cel4.innerHTML = teacher1;
  cel5.innerHTML = timestart1;
  cel6.innerHTML = timeend1;
  cel7.innerHTML = room1;
  cel8.innerHTML = soTiet1;
  cel9.innerHTML = `<button onClick="onDelete(this)">Delete</button>`;
}
//Course click event
buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.classList.contains('course') ) {
      e.target.classList.toggle('selected');
    }
    updateCourseCount();
  });
});
const slots = document.querySelectorAll('.slot');
slots.forEach(slot => {
  slot.addEventListener('load', e => {
    if (e.target.value = 0) {
      e.target.classList.toggle('selected');
    }
    document.getElementById("abcdfer").disabled = true;
  });
});

//Delete the data
function onDelete(td) {
  if (confirm('Bạn có chắc chắn muốn xóa dữ liệu này?')) {
      row = td.parentElement.parentElement;
      document.getElementById('course-sign').deleteRow(row.rowIndex);
  }
}
const total = document.getElementById('total');
const courseSelect = document.getElementById('course');

let coursePrice = +courseSelect.value;
courseSelect.addEventListener('change', e => {
  coursePrice = +e.target.value;
  updateCourseCount();
});