function saveStudent() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var course = document.getElementById("course").value;
    var email = document.getElementById("email").value;
    var genderElements = document.getElementsByName("gender");
    var gender = "";

    for (var i = 0; i < genderElements.length; i++) {
        if (genderElements[i].checked) {
            gender = genderElements[i].value;
        }
    }

    // Create Row
    var row = document.createElement("tr");
    row.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td>
            <button class="delete-btn" onclick="deleteStudent(event)">
                Delete
            </button>
        </td>
    `;
    document.getElementById("studentTable").append(row);
}


function deleteStudent(event) {
    event.target.parentElement.parentElement.remove();
}