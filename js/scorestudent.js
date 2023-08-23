var selectedRow = null
function mssvIsValid(mssv){
    return /^\d{10}$/.test(mssv);
}

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
			console.log(updateRecord(formData));
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["mssv"] = document.getElementById("mssv").value;
    formData["nameSubject"] = document.getElementById("nameSubject").value;
    formData["scoreGK"] = document.getElementById("scoreGK").value;
    formData["scoreCK"] = document.getElementById("scoreCK").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {

    var score =(data.scoreCK*0.6 + data.scoreGK*0.4)
    var table = document.getElementById("scoreList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.mssv;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.nameSubject;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.scoreGK;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.scoreCK;
    cell5 = newRow.insertCell(4);
        cell5.innerHTML = score;
    cell6 = newRow.insertCell(5);
    if(score<4){
        cell6.innerHTML = `F   | Rớt môn`;
    } else if(score>=4 & score<5  )
        cell6.innerHTML = `D   | Qua môn`;
    else if(score>=5 & score<6  )
        cell6.innerHTML = `C   | Qua môn`;
    else if(score>=6 & score<7  )
        cell6.innerHTML = `B   | Qua môn`;
    else if(score>=7 & score<8  )
        cell6.innerHTML = `B+  | Qua môn`;
    else if(score>=8 & score<9  )
        cell6.innerHTML = `A   | Qua môn`;
    else if(score>=9 & score<=10  )
        cell6.innerHTML = `A+  | Qua môn`;
    cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
    
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("mssv").value = selectedRow.cells[0].innerHTML;
    document.getElementById("nameSubject").value = selectedRow.cells[1].innerHTML;
    document.getElementById("scoreGK").value = selectedRow.cells[2].innerHTML;
    document.getElementById("scoreCK").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.mssv;
    selectedRow.cells[1].innerHTML = formData.nameSubject;
    selectedRow.cells[2].innerHTML = formData.scoreGK;
    selectedRow.cells[3].innerHTML = formData.scoreCK;
}

//Delete the data
function onDelete(td) {
    if (confirm('Bạn có chắc chắn muốn xóa dữ liệu này?')) {
        row = td.parentElement.parentElement;
        document.getElementById('scoreList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("mssv").value = '';
    document.getElementById("nameSubject").value = '';
    document.getElementById("scoreGK").value = '';
    document.getElementById("scoreCK").value = '';
    selectedRow = null;
}

//Search the product 
function filterTable() {
  debugger;
  let filter = searchInput.value.toUpperCase();
  rows = dataTable.getElementsByTagName("tr");
  let flag = false;

  for (let row of rows) {
    let cells = row.getElementsByTagName("td");
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


function searchReset(formData){
	document.getElementById("searchInput").value = '';
}