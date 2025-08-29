function addStudent() {

  let name = document.getElementById("name").value;

  let roll = document.getElementById("roll").value;

  let math = parseInt(document.getElementById("math").value);

  let science = parseInt(document.getElementById("science").value);

  let english = parseInt(document.getElementById("english").value);

  if (!name || !roll || isNaN(math) || isNaN(science) || isNaN(english)) {

    alert("Please fill all fields correctly!");

    return;

  }

  let total = math + science + english;

  let average = (total / 3).toFixed(2);

  let table = document.getElementById("studentTable").getElementsByTagName("tbody")[0];

  let newRow = table.insertRow();

  newRow.innerHTML = `

    <td>${roll}</td>

    <td>${name}</td>

    <td>${math}</td>

    <td>${science}</td>

    <td>${english}</td>

    <td>${total}</td>

    <td>${average}</td>

  `;

  // Clear form fields after adding

  document.getElementById("name").value = "";

  document.getElementById("roll").value = "";

  document.getElementById("math").value = "";

  document.getElementById("science").value = "";

  document.getElementById("english").value = "";

}