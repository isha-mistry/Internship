fetch("https://dummyjson.com/users").then((data) =>{
    // console.log(data);
    return data.json();
}).then((objectData) => {
    // console.log(objectData.users[0].firstName);
    let tableData="";
    objectData.users.map((values, index)=>{
        tableData += `<tr>
        <td hidden>${values.id}</td>
        <td id="fn[${index}]">${values.firstName}</td>
        <td id="ln[${index}]">${values.lastName}</td>
        <td id="em[${index}]">${values.email}</td>
        <td id="age[${index}]">${values.age}</td>
        <td><img height="60px" width="60px" src="${values.image}"></td>
        <td id="un[${index}]">${values.username}</td>
        <td id="ps[${index}]">${values.password}</td>
        <td><button onclick="edit_row(this, ${index})">Update</button></td>
        <td><button onclick="delete_row(this)">Delete</button></td>
        
    </tr>`;
    });
    document.getElementById('table_body').innerHTML = tableData;
})


function delete_row(e){
    e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);
}

function edit_row(e){
    let row = e.parentNode.parentNode;
    console.log(row.cells[0]);
    
    editData = `<form id="formData" style="position:absolute;background-color:beige; display="block"; margin:50px; padding:50px; align:center">
        
        <input type="text" name="id" value="${row.cells[0].innerHTML}" hidden>
        First Name = <input type="text" name="firstName" value="${row.cells[1].innerHTML}" /><br><br>
        Last Name = <input type="text" name="lastName" value="${row.cells[2].innerHTML}" /><br><br>
        Email = <input type="text" name="email" value="${row.cells[3].innerHTML}" /><br><br>
        age = <input type="text" name="age" value="${row.cells[4].innerHTML}" /><br><br>
        username = <input type="text" name="username" value="${row.cells[6].innerHTML}" /><br><br>
        password = <input type="text" name="password" value="${row.cells[7].innerHTML}" /><br><br>
        
        <input type="button" value="Submit" onclick="update_data()">
    </form>`

    document.getElementById("div").innerHTML = editData; 

}

/* updating lastName of user with id 1 */
function update_data(){
    let editData = document.getElementById("formData");
    alert(editData.firstName.value);
    
    let id = editData.id.value;
    let first_name = editData.firstName.value;
    let last_name = editData.lastName.value;
    let email = editData.lastName.value;
    let age = editData.age.value;
    let username = editData.username.value;
    let password = editData.password.value;

    if (editData.style.display === "none") {
        editData.style.display = "block";
      } 
      else {
        editData.style.display = "none";
      }

    fetch('https://dummyjson.com/users/'+id, {
    
    method: 'PUT', /* or PATCH */
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({     
        firstName: first_name,
        lastName: last_name,
        email: email,
        age: age,
        username: username,
        password: password,
    })
    })
    .then(res => res.json())
    .then((uid) => {
        console.log(document.getElementById(`fn[${id}]`));
        document.getElementById(`fn[${id-1}]`).innerText = first_name;
        document.getElementById(`ln[${id-1}]`).innerText = last_name;
    });
}


function search_data(){
    let searchData = document.getElementById("searchForm");
    let field = searchData.selectedField.value;
    let text = searchData.findText.value;

    if(field === "Firstname" || field === "Lastname"){
        alert("function called");
        fetch('https://dummyjson.com/users/search?q='+text)
        .then(res => res.json())
        .then((objectData) => {
            // console.log(objectData.users[0].firstName);
            let tableData="";
            objectData.users.map((values, index)=>{
                tableData += `<tr>
                <td hidden>${values.id}</td>
                <td id="fn[${index}]">${values.firstName}</td>
                <td id="ln[${index}]">${values.lastName}</td>
                <td id="em[${index}]">${values.email}</td>
                <td id="age[${index}]">${values.age}</td>
                <td><img height="60px" width="60px" src="${values.image}"></td>
                <td id="un[${index}]">${values.username}</td>
                <td id="ps[${index}]">${values.password}</td>
                <td><button onclick="edit_row(this, ${index})">Update</button></td>
                <td><button onclick="delete_row(this)">Delete</button></td>
                
            </tr>`;
            });
            document.getElementById('table_body').innerHTML = tableData;
        });
    }
}
