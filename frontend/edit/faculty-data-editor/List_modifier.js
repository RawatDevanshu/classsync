let faculty_data;
let messageCounter = 0;
const save_table_func = () => {				//  function below calculate and construct the teacher list and send that to the backend via post request 
	let res = {}
	let tableBody = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
	// Iterate over each row in the table body
	for (let i = 0; i < tableBody.rows.length; i++) {
		let id = tableBody.rows[i].cells[0].firstElementChild.value.trim();
		let name = tableBody.rows[i].cells[1].firstElementChild.value;
		if (id === "" || name === "" && id !== "0") {
			float_error_card_func('Empty Field found', 'Please fill all the fields before saving the data', 'danger');
			return;
		}
		else if (id in res) {
			float_error_card_func('Duplicate ID found', 'ID cannot be duplicate 2 teacher with same IDs are detected', 'danger');
			return;
		}
		else if (id.length > 10) {
			float_error_card_func('ID too long', 'ID cannot be more than 10 digits', 'danger');
			return;
		}
		res[id] = name;
	}
	console.log(res);
	fetch('http://127.0.0.1:3000/list/save-list', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			"type": "faculties",
			"data": res
		})
	})
	.then(parsedData => {
		float_error_card_func('Faculty Data Saved Successfully', 'Faculty Data Sent and Saved Successfully to the Database', 'success');
		console.log(':::::  TEACHER DATA SAVED SUCCESSFULLY  :::::', parsedData);
	})
	.catch(error => {
		float_error_card_func('Faculty Data not saved', 'Faculty Data sent but not saved due to probable server error', 'danger');
		console.error('::::: ERROR SAVING DATA :::::', error);
	});
};
const render_tables = () => {				// renders the tables
	let table = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
	table.innerHTML = "";
	
	for( element in faculty_data){
		let newRow = table.insertRow(table.rows.length);
		let cell = newRow.insertCell();
		let cell_insert = document.createElement("span");
		cell_insert.setAttribute("class", "form-control room_textinput text fw-bold");
		cell_insert.setAttribute("type", "text");
		cell_insert.innerHTML = faculty_data[element].teacherid;
		cell.appendChild(cell_insert);
		if (faculty_data[element].teacherid == "0") {
			cell_insert.classList.add("text-danger");
		}
		cell = newRow.insertCell();
		cell_insert = document.createElement("span");
		cell_insert.setAttribute("class", "form-control room_textinput text fw-medium");
		cell_insert.setAttribute("type", "text");
		cell_insert.innerHTML = faculty_data[element].name;
		cell.appendChild(cell_insert);
		if (faculty_data[element].teacherid == "0") {
			cell_insert.classList.add("text-danger");
			cell_insert.innerHTML = "<b>Reserved by Admin</b>";
		}
	}
};
const fetch_faculties_list = () => {		// fetches the faculty list from the server
	// document.getElementById("loader").style.display = "flex";
	fetch('http://127.0.0.1:3000/faculty/getall', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			data = data.data;
			console.log(data);
			faculty_data = data;
		})
		.then(() => {
			render_tables();
		})
		.then(() => {
			setTimeout(() => {
				document.getElementById("loader").style.display = "none";
			}, 2000);
			// document.getElementById("save_teacher_list_btn").disabled = false;
			float_error_card_func('Faculty Data Fetched Successfully', 'Faculty Data Fetched Successfully from the Database', 'success');
		})
		.catch(error => {
			setTimeout(() => {
				document.getElementById("loader").style.display = "none"; 
			}, 2000);
			float_error_card_func('Faculty Data not available', 'Faculty Data not available due to probable server error', 'danger');
			console.error('Faculty Data not available [ SERVER ERROR ] :::: ', error)
		});
};	
const addfaculty = () => {					// function to add faculty	
	document.getElementById("add_faculty_button").disabled = true;
	let id = document.getElementById("add_faculty_id").value;
	let name = document.getElementById("add_faculty_name").value;
	id = id.trim();
	name = name.trim();
	if(id==="0"){
		float_error_card_func('Reserved ID Error', 'ID 0 is reserved for Admin <br> please dont do that', 'warning');
		document.getElementById("add_faculty_button").disabled = false;
		return;
	}
	if (id === "" || name === "") {
		float_error_card_func('Empty Field Error', 'Please fill all the fields before saving the data ( ID and Name are required )', 'warning');
		document.getElementById("add_faculty_button").disabled = false;
		return;
	}
	fetch('http://localhost:3000/faculty/add?teacherid=' + id + '&name=' + name, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => {
			if (response.status === 403) {
				// float_error_card_func('Faculty not added', 'Faculty not added due to duplicate ID', 'danger');
				throw new Error('Faculty not added <br>This ID already exists please use a different ID');
			}
			return response.json();
		})
		.then((parsedData) => {
			document.getElementById("add_faculty_button").disabled = false;
			setTimeout(() => {
				float_error_card_func('Faculty Added Successfully', `Faculty Name: ${name} and ID: ${id} Added Successfully to the Database`, 'success');
			}, 2000);
			console.log(':::::  TEACHER DATA ADDED SUCCESSFULLY  :::::', parsedData);
		})
		.then(() => {
			fetch_faculties_list();
		})
		.catch(error => {
			document.getElementById("add_faculty_button").disabled = false;
			float_error_card_func('Faculty not added', error||'Faculty not removed due to inavailability or probable server error', 'danger');
			console.error('::::: ERROR ADDING DATA :::::', error);
		});
};
const removefaculty = () => {				// function to remove faculty
	document.getElementById("add_faculty_button").disabled = true
	let id = document.getElementById("remove_faculty_id").value;
	id = id.trim();
	if(id==="0"){
		float_error_card_func('Reserved ID Error', 'ID 0 is reserved for Admin <br> please dont do that', 'warning');
		return;
	}
	if (id === "") {
		float_error_card_func('Empty Field Error', 'Please fill all the fields before saving the data ( ID and Name are required )', 'warning');
		return;
	}
	fetch('http://localhost:3000/faculty/remove?teacherid=' + id,{
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(parsedData => {
			document.getElementById("add_faculty_button").disabled = false;
			float_error_card_func('Faculty Removed Successfully', `Faculty Removed Successfully from the Database <br> This <b>ID:${id}</b> now does not exist in the system`, 'success');
			console.log(':::::  TEACHER DATA REMOVED SUCCESSFULLY  :::::', parsedData);
		})
		.then(() => {
			fetch_faculties_list();
		})
		.catch(error => {
			document.getElementById("add_faculty_button").disabled = false;
			float_error_card_func('Faculty not removed', 'Faculty not removed due to inavailability or probable server error', 'danger');
			console.error('::::: ERROR REMOVING DATA :::::', error);
		});
};
document.addEventListener('DOMContentLoaded', fetch_faculties_list);
document.getElementById("add_faculty_button").addEventListener("click", addfaculty);
document.getElementById("remove_faculty_button").addEventListener("click", removefaculty);