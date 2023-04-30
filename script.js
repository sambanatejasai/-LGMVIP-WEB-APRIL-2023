const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
    e.preventDefault();

    alert("Student Enrolled!");
    var std_result = document.getElementById("std_result");;

    var t_row = document.getElementById("t_row");
    t_row.style.display = "inline-flex";

    var e_row = document.createElement("div");
    e_row.classList.add("enroll", "row");
    e_row.id = "std_row";
    std_result.appendChild(e_row);
    var std_row1 = document.getElementById("std_row");

    var e_data = document.createElement("div");
    e_data.classList.add("e_data", "coloumn");
    e_data.id = "e_std_data";
    std_row1.appendChild(e_data);
    var e_std_data = document.getElementById("e_std_data");


    const e_name = document.createElement("p");
    e_name.id = "e_name";
    e_name.innerText = document.getElementById("name").value;
    e_std_data.appendChild(e_name);


    const e_gender = document.createElement("p");
    e_gender.id = "e_gender";
    var e_radio = document.getElementsByName("gender");
    for (i = 0; i < e_radio.length; i++) {
        if (e_radio[i].checked) {
            e_gender.innerHTML = e_radio[i].value;
        }
    }
    e_std_data.appendChild(e_gender);


    const e_email = document.createElement("p");
    e_email.id = "e_email";
    e_email.innerText = document.getElementById("email").value;
    e_std_data.appendChild(e_email);


    const e_skills = document.createElement("p");
    e_skills.id = "e_skills";
    e_std_data.appendChild(e_skills);
    var e_checkbox = document.getElementsByName("skills");
    for (i = 0; i < e_checkbox.length; i++) {
        if (e_checkbox[i].checked) {
            i === 0 ?
                e_skills.innerText += e_checkbox[i].value :
                e_skills.innerText += ", " + e_checkbox[i].value;
        }
    }

});