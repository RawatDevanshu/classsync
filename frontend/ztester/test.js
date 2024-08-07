// Sample data for generating dropdowns will be fetched from apis and database
let faculty_data;
let subjectdata;
let room_list;
let timetable;
let local_faculty_data;
let messageCounter = 0;
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}
const fixtime_firstphase = () => {                        	//  this function removes all the classes and decrease the counter(section.length) from the timetable data saved during initialization
	let mytable = document.getElementById("mytable");
	for (let i = 1; i <= 7; i++) {
		let currday = mytable.rows[i].cells[0].innerHTML.toLowerCase();
		for (let j = 1; j <= 10; j++) {
			let currslot = mytable.rows[0].cells[j].innerHTML.toLowerCase();

			let temp_roomid = timetable.schedule[currday][currslot].class_id;
			if (temp_roomid in room_list && temp_roomid != '0') {
				let temproom = room_list[temp_roomid].schedule[currday][currslot];
				// temproom.section = temproom.section.filter((item, index) => temproom.section.indexOf(item) === index);	// remove duplicates from the array ( for debugging )
				if (temproom.section.length > 0) {
					if (temproom.section.length == 1) {
						temproom.course = "";
						temproom.semester = "";
						temproom.subjectcode = "";
						temproom.teacherid = "";
						temproom.section = [];
					}
					else if (temproom.section.length > 1) {
						temproom.section = temproom.section.filter(section => section !== document.getElementById("section_option").value);
					}
				}
				else {
					temproom.course = "";
					temproom.semester = "";
					temproom.subjectcode = "";
					temproom.teacherid = "";
					temproom.section = [];
				}
			}

			// let temp_subject = document.getElementById("mytable").rows[i].cells[j].childNodes[0].value;
			let temp_subject = timetable.schedule[currday][currslot].subjectcode;
			if (temp_subject != '' && temp_roomid != '0') {
				let temp_facultyid_real = timetable.teacher_subject_data.find(x => x.subjectcode === temp_subject).teacherid;
				for (temp_facultyid in faculty_data) {
					if (temp_facultyid_real == faculty_data[temp_facultyid].teacherid) {
						// console.log(faculty_data[temp_facultyid])
						let temp_faculty = faculty_data[temp_facultyid].schedule[currday][currslot];
						if (temp_faculty.section.length > 0) {
							if (temp_faculty.section.length == 1) {
								temp_faculty.section = [];
								temp_faculty.subjectcode = "";
								temp_faculty.course = "";
								temp_faculty.semester = "";
								temp_faculty.roomid = [];
							}
							else if (temp_faculty.section.length > 1) {
								faculty_data[temp_facultyid].schedule[currday][currslot].section = faculty_data[temp_facultyid].schedule[currday][currslot].section.filter(section => section !== document.getElementById("section_option").value);
							}
						}
						else if (temp_faculty.section.length == 0) {
							temp_faculty.section = [];
							temp_faculty.subjectcode = "";
							temp_faculty.course = "";
							temp_faculty.semester = "";
							temp_faculty.roomid = [];
						}
					}
				}
			}
		}
	}
}
const fixtime_secondphase = () => {                       	//  this function adds all the current selected classes ( mytable ) and increase the counter(section.length)  
	// console.log("=====================================================");
	let mytable = document.getElementById("mytable");
	for (let i = 1; i <= 7; i++) {
		let currday = mytable.rows[i].cells[0].innerHTML.toLowerCase();
		for (let j = 1; j <= 10; j++) {
			let currslot = mytable.rows[0].cells[j].innerHTML.toLowerCase();

			let temp_roomid = mytable.rows[i].cells[j].childNodes[1].value;
			if (temp_roomid in room_list && temp_roomid != '0') {
				let temproom = room_list[temp_roomid].schedule[currday][currslot];
				if (temproom.section.length == 0) {
					temproom.teacherid = timetable.teacher_subject_data.find(x => x.subjectcode === mytable.rows[i].cells[j].childNodes[0].value).teacherid;
					temproom.subjectcode = mytable.rows[i].cells[j].childNodes[0].value;
					temproom.section.push(document.getElementById("section_option").value);
					temproom.semester = document.getElementById("semester_option").value;
					temproom.course = document.getElementById("course_option").value;
				}
				else if (temproom.section.length > 0) {
					temproom.section.push(document.getElementById("section_option").value);
				}
			}

			let temp_subject = document.getElementById("mytable").rows[i].cells[j].childNodes[0].value;
			if (temp_subject != '' && temp_roomid != '0') {
				let temp_facultyid_real = timetable.teacher_subject_data.find(x => x.subjectcode === temp_subject).teacherid;
				for (temp_facultyid in faculty_data) {
					if (temp_facultyid_real == faculty_data[temp_facultyid].teacherid) {
						// console.log(faculty_data[temp_facultyid])
						let temp_faculty = faculty_data[temp_facultyid].schedule[currday][currslot];
						if (temp_faculty.section.length > 0) {
							faculty_data[temp_facultyid].schedule[currday][currslot].section.push(document.getElementById("section_option").value);
						}
						else if (temp_faculty.section.length == 0) {
							faculty_data[temp_facultyid].schedule[currday][currslot].section = [document.getElementById("section_option").value];
							faculty_data[temp_facultyid].schedule[currday][currslot].subjectcode = document.getElementById("mytable").rows[i].cells[j].childNodes[0].value;
							faculty_data[temp_facultyid].schedule[currday][currslot].course = document.getElementById("course_option").value;
							faculty_data[temp_facultyid].schedule[currday][currslot].semester = document.getElementById("semester_option").value;
							faculty_data[temp_facultyid].schedule[currday][currslot].roomid = [document.getElementById("mytable").rows[i].cells[j].childNodes[1].value];
						}
						// console.log(faculty_data[temp_facultyid])
					}
				}
			}
		}
	}
	// console.log(faculty_data);
	// console.log("=====================================================");
	// console.log(room_list);
	console.log(':::::  SECOND PHASE DONE  :::::');
}
const updateCounter = () => {                            	//  this function updates the counter of currently allocated classes in the timetable data
	let mytable = document.getElementById("mytable");
	let teacher_subject_table = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
	for (let k = 0; k < teacher_subject_table.rows.length; k++) {
		teacher_subject_table.rows[k].cells[6].firstChild.innerHTML = 0;
	}
	for (let i = 1; i <= 7; i++) {
		for (let j = 1; j <= 10; j++) {
			let sl_subjectcode = mytable.rows[i].cells[j].childNodes[0].value;
			if (sl_subjectcode == '') {
				continue;
			}
			if (teacher_subject_table.rows) {
				for (let k = 0; k < teacher_subject_table.rows.length; k++) {
					if (teacher_subject_table.rows[k].cells[3].firstChild.innerHTML === sl_subjectcode) {
						teacher_subject_table.rows[k].cells[6].firstChild.innerHTML = parseInt(teacher_subject_table.rows[k].cells[6].firstChild.innerHTML) + 1;
					}
					if (parseInt(teacher_subject_table.rows[k].cells[6].firstChild.innerHTML) < parseInt(teacher_subject_table.rows[k].cells[4].firstChild.innerHTML)) {
						let column = teacher_subject_table.rows[k].cells[6].firstChild;
						column.classList = ("text", "text-warning","more_lectures");

					}
					else if (parseInt(teacher_subject_table.rows[k].cells[6].firstChild.innerHTML) == parseInt(teacher_subject_table.rows[k].cells[4].firstChild.innerHTML)) {
						let column = teacher_subject_table.rows[k].cells[6].firstChild;
						column.classList = ("text", "text-success");
					}
					else if (parseInt(teacher_subject_table.rows[k].cells[6].firstChild.innerHTML) > parseInt(teacher_subject_table.rows[k].cells[4].firstChild.innerHTML)) {
						let column = teacher_subject_table.rows[k].cells[6].firstChild;
						column.classList = ("text","text-danger","less_lectures");
					}
				}
			}
		}
	}
}
const validateTeacherSubject = () => {						//  this function validates the teacher and subject data in the table and returns true if the data is valid else false
	updateCounter();
	let mytable = document.getElementById("mytable");
	let isValid = true;

	for (let i = 1; i <= 7; i++) {
		let currday = mytable.rows[i].cells[0].innerHTML.toLowerCase();
		for (let j = 1; j <= 10; j++) {
			let currslot = mytable.rows[0].cells[j].innerHTML.toLowerCase();

			let curr_slot_room = mytable.rows[i].cells[j].childNodes[1].value;
			let subjectCode = mytable.rows[i].cells[j].childNodes[0].value;

			// Skip room with ID '0'
			if (curr_slot_room === '0' || subjectCode === '') {
				continue;
			}

			// Validate if the room exists in room_list
			if (curr_slot_room in room_list) {
				let roomSchedule = room_list[curr_slot_room].schedule[currday][currslot];
				let teacherId = timetable.teacher_subject_data.find(x => x.subjectcode === subjectCode).teacherid;

				// Skip teacher with ID '0'
				if (!teacherId || teacherId === '0') {
					continue;
				}

				// Check if room has any assigned section
				if (roomSchedule.section.length > 0) {
					// Subject mismatch check
					if (roomSchedule.subjectcode !== subjectCode) {
						setTimeout(() => {
							float_error_card_func(`Type 1 - Room conflict <br>Diffrent Subject Conflicted at ${currday.toUpperCase()} ${currslot} slot`, `Another class is allotted ${roomSchedule.subjectcode} as subject in this slot already.<br>[ Choose another class if the subject is diffrent ]`, "primary");
						}, 1000);
						isValid = false;
					}
					// Teacher mismatch check
					if (roomSchedule.teacherid !== teacherId) {
						setTimeout(() => {
							float_error_card_func(`Type 2 - Room conflict <br>Teacher Conflicted at ${currday.toUpperCase()} ${currslot} slot`, `[ ${roomSchedule.teacherid} ] is teaching ${roomSchedule.subjectcode} in this slot. <br>[ Choose another class if the teacher is diffrent ]`, "info");
						}, 2000);
						isValid = false;
					}
				}
				// Validate the teacher's schedule
				for (element in faculty_data) {
					if (faculty_data[element].teacherid === teacherId) { // the teacher who is teaching the subject
						let teacherSchedule = faculty_data[element].schedule[currday][currslot];

						// If the teacher is assigned in the same slot
						if (teacherSchedule.subjectcode === subjectCode && teacherSchedule.section.length >0) { // review this condition
							if(teacherSchedule.section.includes(document.getElementById("section_option").value) && teacherSchedule.section.length > 1) {
								setTimeout(() => {
									// float_error_card_func(`${teacherSchedule.section.includes(document.getElementById("section_option").value)} && ${teacherSchedule.section} ${currday} ${currslot}`,"","info")
									float_error_card_func(`Merge at ${currday.toUpperCase()} ${currslot}`, ``, "warning");
								}, 500);
							}
							if(!teacherSchedule.section.includes(document.getElementById("section_option").value) && teacherSchedule.section.length == 1) {
								setTimeout(() => {
									float_error_card_func(`Merge at ${currday.toUpperCase()} ${currslot}`, ``, "warning");
								}, 500);
							}
							// isValid = false;
						}

						// If the teacher is teaching a different subject in the same slot
						if (teacherSchedule.subjectcode && teacherSchedule.subjectcode !== subjectCode) {
							float_error_card_func(`Type 11 tester- Teacher Conflict at ${currday.toUpperCase()} ${currslot} slot`, `Another class is allotted ${teacherSchedule.subjectcode} as subject in this slot already.`, "danger");
							isValid = false;
						}
						// if (teacherSchedule.section.length > 0) {
						// 	if (teacherSchedule.section.includes(document.getElementById("section_option").value)) {
						// 		float_error_card_func(`Type 22 tester - Teacher Conflict at ${currday.toUpperCase()} ${currslot} slot`, `${faculty_data[element].name} [ ${faculty_data[element].teacherid} ] is teaching ${teacherSchedule.subjectcode} in this slot. [ change your teacher or choose another class ]`, "danger");
						// 		isValid = false;
						// 	}
						// }
						if (teacherSchedule.subjectcode !== "" && teacherSchedule.subjectcode !== subjectCode) {
							float_error_card_func(`Type 1 - Teacher Conflict at ${currday.toUpperCase()} ${currslot} slot`, `${faculty_data[element].name} [ ${faculty_data[element].teacherid} ] <br><i><b>( current teacher )</b></i> is teaching ${teacherSchedule.subjectcode} at ${room_list[teacherSchedule.roomid].classname} at the current time.`, "danger");
							isValid = false;
						}
						if (teacherSchedule.roomid.length != 0 && teacherSchedule.roomid[0] !== curr_slot_room) {
							console.log(room_list[teacherSchedule.roomid])
							float_error_card_func(`Type 2 - Teacher Conflict at ${currday.toUpperCase()} ${currslot} slot`, `${faculty_data[element].name} [ ${faculty_data[element].teacherid} ] <br><i><b>( current teacher )</b></i> is teaching ${teacherSchedule.subjectcode} at ${room_list[teacherSchedule.roomid].classname} at the current time.`, "danger");
							isValid = false;
						}
					}
				}
			}
		}
	}

	console.log('::::: VALIDATION COMPLETE :::::');
	return isValid;
};
const save_table_func = () => {                         	//  function below calculate and construct the timetable json and send that to the backend 
	if (validateTeacherSubject()) {
		blocking();
		let tempteachersubjectdata = [];
		let scheduleslot = {}
		let mytable = document.getElementById("mytable");
		for (let i = 1; i <= 7; i++) {
			let currrow = mytable.rows[i].cells[0].innerHTML.toLowerCase();
			let tempdayslot = {}
			for (let j = 1; j <= 10; j++) {
				let currcol = mytable.rows[0].cells[j].innerHTML.toLowerCase();
				let sl_class_id = mytable.rows[i].cells[j].childNodes[1].value;
				let sl_subjectcode = mytable.rows[i].cells[j].childNodes[0].value;
				let sl_slotdata = "";
				if (sl_class_id != '0' || sl_subjectcode != '') {
					let curr_box = mytable.rows[i].cells[j].childNodes[1];
					sl_slotdata = `${sl_subjectcode}\n${curr_box.options[curr_box.selectedIndex].textContent}`;
				}
				else {
					sl_slotdata = "";
				}

				tempdayslot[currcol] = {
					"class_id": sl_class_id,
					"subjectcode": sl_subjectcode,
					"slotdata": sl_slotdata
				}
			}
			scheduleslot[currrow] = tempdayslot;
		}


		let tableBody = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
		// Iterate over each row in the table body
		for (let i = 0; i < tableBody.rows.length; i++) {
			let row = tableBody.rows[i];

			let subjectname = row.cells[0].firstChild.innerHTML;
			let teachername = row.cells[1].firstChild.innerHTML;
			let teacherid = row.cells[2].firstChild.innerHTML;
			let subjectid = row.cells[3].firstChild.innerHTML;
			let weekly_hrs = row.cells[4].firstChild.innerHTML;
			let theory_practical = row.cells[5].firstChild.innerHTML;


			let rowData = {
				"subjectcode": subjectid,
				"teacherid": teacherid,
				"weekly_hrs": weekly_hrs,
				"teachername": teachername,
				"subjectname": subjectname,
				"theory_practical": theory_practical,
			}
			tempteachersubjectdata.push(rowData);
		}

		let jsonData = {
			"course": document.getElementById("course_option").value,
			"semester": document.getElementById("semester_option").value,
			"section": document.getElementById("section_option").value,
			"schedule": scheduleslot,
			"teacher_subject_data": tempteachersubjectdata,
		};

		// console.log(JSON.stringify(jsonData, null, 2));
		// jsonData ka post request marna hai for teacher subject data  


		// Convert JSON data to a string
		const jsonDataString = JSON.stringify(jsonData, null, 4);

		// Create a POST request
		fetch(`${localhost}/table/save-timetable`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${getCookie('accessToken')}`
			},
			body: jsonDataString
		}).then(response => {
			if (response.ok) {
				float_error_card_func("Timetable Saved Successfully", "", "success");
				return response.json();
			} else {
				float_error_card_func("Timetable Not Saved", "", "danger");
				throw new Error(':::::  DATA NOT SAVED DUE TO NETWORK ERROR :::::');
			}
		}).then(() => {
			fixtime_firstphase();
		}).then(() => {
			timetable = jsonData;
		}).then(() => {
			fixtime_secondphase();
		}).then(() => {
			fetch(`${localhost}/list/save-list`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${getCookie('accessToken')}`
				},
				body: JSON.stringify({
					"type": "rooms",
					"data": room_list
				})
			}).then(response => {
				if (response.ok) {
					float_error_card_func("Room Data Saved", "", "success");
					return response.json();
				} else {
					float_error_card_func("Room Data Not Saved", "", "danger");
					throw new Error(':::::  DATA NOT SAVED DUE TO NETWORK ERROR :::::');
				}
			}).then(() => {
				fetch(`${localhost}/faculty/update`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${getCookie('accessToken')}`
					},
					body: JSON.stringify({ "facultyList": faculty_data })
				}).then(response => {
					if (response.ok) {
						float_error_card_func("Faculty data Saved", "", "success");
						return response.json();
					} else {
						float_error_card_func("Faculty Data Not Saved", "", "danger");
						throw new Error(':::::  FACULTY DATA NOT SAVED DUE TO NETWORK ERROR :::::');
					}
				}).then(() => {
					setTimeout(initializePage, 1000);
				}).catch(error => {
					float_error_card_func("Faculty Data Not Saved <br>Server Error", "", "danger");
					console.error('::::: ERROR SAVING DATA :::::', error);
				});
			}).catch(error => {
				float_error_card_func("Room Data Not Saved <br>Server Error", "", "danger");
				console.error('::::: ERROR SAVING DATA :::::', error);
			});
		}).catch(error => {
			float_error_card_func("Timetable Not Saved <br>Server Error", "", "danger");
			console.error('::::: ERROR SAVING DATA :::::', error);
		});
	}else{
		setTimeout(() => {
			float_error_card_func("Validation Failed <br>Timetable Not saved", "", "warning");
		}, 3000);
	}
}

const add_select_box_to_mytable = () => {               	//  this function below adds the select option field to each table cell in the table  
	let mytable = document.getElementById("mytable");
	for (let i = 1; i < mytable.rows.length; i++) {
		for (let j = 1; j < mytable.rows[1].cells.length; j++) {
			let tempcell = mytable.rows[i].cells[j];
			let select = document.createElement('select');
			select.setAttribute('class', 'form-select form-select text subjectselectbox fw-bold');
			select.setAttribute('style', 'white-space: pre-wrap;');
			tempcell.appendChild(select);
			let select2 = document.createElement('select');
			select2.setAttribute('class', 'form-select form-select text roomselectbox');
			select2.setAttribute('style', 'white-space: pre-wrap;');
			tempcell.appendChild(select2);
		}
	}
}
const add_rooms_options_to_mytable = (room_list) => {		// 	this add options to room select box in the main table dynamically with the data obtained from mongoDB
	for (let i = 1; i <= 7; i++) {
		let currday = mytable.rows[i].cells[0].innerHTML.toLowerCase();
		for (let j = 1; j <= 10; j++) {
			let currslot = mytable.rows[0].cells[j].innerHTML.toLowerCase();
			
			mytable.rows[i].cells[j].childNodes[1].innerHTML = "";
			let tempselectedvalue = timetable.schedule[currday][currslot].class_id;
			Object.entries(room_list).forEach(([key, value]) => {
				let option = document.createElement("option");
				option.value = key;
				option.text = value.classname;
				option.setAttribute("class", "text");
				// console.log(room_list[key].schedule[currday][currslot].section.length);
				if (room_list[key].schedule[currday][currslot].section.length == 1) {
					option.setAttribute("class", "bg-success text-light bg-gradient text fw-bold");
					option.innerHTML = `${value.classname} ${value.schedule[currday][currslot].semester} [ ${value.schedule[currday][currslot].section.sort()} ]`;
				}
				else if (room_list[key].schedule[currday][currslot].section.length == 2) {
					option.setAttribute("class", "bg-primary text-light bg-gradient text fw-bold");
					option.innerHTML = `${value.classname} ${value.schedule[currday][currslot].semester} [ ${value.schedule[currday][currslot].section.sort()} ]`;
				}
				else if (room_list[key].schedule[currday][currslot].section.length == 3) {
					option.setAttribute("class", "bg-warning text-dark bg-gradient text fw-bold");
					option.innerHTML = `${value.classname} ${value.schedule[currday][currslot].semester} [ ${value.schedule[currday][currslot].section.sort()} ]`;
				}
				else if (room_list[key].schedule[currday][currslot].section.length == 4) {
					option.setAttribute("class", "bg-danger text-light bg-gradient text fw-bold");
					option.innerHTML = `${value.classname} ${value.schedule[currday][currslot].semester} [ ${value.schedule[currday][currslot].section.sort()} ]`;
				}
				else if (room_list[key].schedule[currday][currslot].section.length > 4) {
					option.setAttribute("class", "bg-dark text-light bg-gradient text fw-bold");
					option.innerHTML = `${value.classname} ${value.schedule[currday][currslot].semester} [ ${value.schedule[currday][currslot].section.sort()} ]`;
				}
				// console.log(option.value, option.text)
				if (key == tempselectedvalue) {
					option.selected = true;
				}
				mytable.rows[i].cells[j].childNodes[1].appendChild(option);
			});
		}
	}
};
const add_subjects_options_to_mytable = (subject_list) => { // 	this add options to subject select box in the main table dynamically with the data obtained from mongoDB
	let subjectselectbox = document.querySelectorAll(".subjectselectbox");
	subjectselectbox.forEach(select => {
		let tempselectedvalue = select.value;
		select.innerHTML = "";

		// adidng blank option 
		let option = document.createElement("option");
		option.value = "";
		option.text = "";
		if (option.value == tempselectedvalue) {
			option.selected = true;
		}
		select.appendChild(option);
		//
		subject_list.forEach(element => {
			option = document.createElement("option");
			option.value = element.subjectcode;
			option.text = element.subjectcode
			if (element.subjectcode == tempselectedvalue) {
				option.selected = true;
			}
			select.appendChild(option);
		});
	});
};

const fetch_room_list = () => {
	return new Promise((resolve, reject) => {
		fetch(`${localhost}/list/get-list?type=rooms`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				room_list = data.data.data;
				console.log(room_list);
				// add_rooms_options_to_mytable(room_list);
				resolve(room_list);
			})
			.catch(error => {
				console.error('Room Data not available [ SERVER ERROR ] :::: ', error);
				reject(error);
			});
	});
};
const fetch_faculties_list = () => {
	return new Promise((resolve, reject) => {
		if (timetable) {
			let teacher_subject_data = timetable.teacher_subject_data;
			let teacher_query_list = [];
			for (let i = 0; i < teacher_subject_data.length; i++) {
				if (teacher_subject_data[i].teacherid != "0") {
					teacher_query_list.push(teacher_subject_data[i].teacherid);
				}
			}
			// console.log(teacher_query_list);

			fetch(`${localhost}/faculty/get`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({ "facultyList": teacher_query_list })
			})
				.then(response => response.json())
				.then(data => {
					data = data.data;
					faculty_data = data;
					console.log(faculty_data);
					resolve(faculty_data);
				})
				.catch(error => {
					console.error('Faculty Data not available [ SERVER ERROR ] :::: ', error);
					reject(error);
				});
		} else {
			reject(new Error('Timetable not available'));
		}
	});
};
const render_tables = () => {                           	// renders the timetable on the main table [ uses the same strucute of JSON as it POST to the backend]
	// rendering the second table first
	if (timetable) {
		// float_error_card_func("Timetable Available", "", "success");
		let localteacher_subject_data = timetable.teacher_subject_data;
		let table = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
		table.innerHTML = "";
		for (let i = 0; i < localteacher_subject_data.length; i++) {
			const element = localteacher_subject_data[i];

			let table = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
			let newRow = table.insertRow(table.rows.length);

			// subject select box render
			let cell = newRow.insertCell();

			let cell_insert = document.createElement("span");
			cell_insert.setAttribute("class", "text");
			cell_insert.innerHTML = localteacher_subject_data[i].subjectname;
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3");

			// teacher select box render
			cell = newRow.insertCell();
			cell_insert = document.createElement('span');
			cell_insert.setAttribute("class", "text");
			cell_insert.innerHTML = localteacher_subject_data[i].teachername;
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3");

			// teacher select box render
			cell = newRow.insertCell();
			cell_insert = document.createElement('span');
			cell_insert.setAttribute("class", "text");
			cell_insert.innerHTML = localteacher_subject_data[i].teacherid;
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3");

			cell = newRow.insertCell();
			cell_insert = document.createElement("span");
			cell_insert.innerHTML = localteacher_subject_data[i].subjectcode;
			cell_insert.setAttribute("class", "text");
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3 fw-bolder");

			cell = newRow.insertCell();
			cell_insert = document.createElement("span");
			cell_insert.innerHTML = localteacher_subject_data[i].weekly_hrs;
			cell_insert.setAttribute("class", "text");
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3 h5 fw-bold");

			cell = newRow.insertCell();
			cell_insert = document.createElement("span");
			cell_insert.innerHTML = localteacher_subject_data[i].theory_practical.charAt(0).toUpperCase() + localteacher_subject_data[i].theory_practical.slice(1);
			cell_insert.setAttribute("class", "text");
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3");

			cell = newRow.insertCell();
			cell_insert = document.createElement("span");
			cell_insert.innerHTML = 0;
			cell_insert.setAttribute("class", "text");
			cell.appendChild(cell_insert);
			cell.setAttribute("class", "border-dark border-3 h4 fw-bold");
		}
		add_subjects_options_to_mytable(localteacher_subject_data)

		// rendering the first main table now 
		let local_time_table_data = timetable.schedule;
		let mytable = document.getElementById("mytable");

		for (let i = 1; i < mytable.rows.length; i++) {
			let curr_day = mytable.rows[i].cells[0].innerHTML.toLowerCase();
			let curr_whole_row = mytable.rows[i];

			for (let j = 1; j <= 10; j++) {
				let curr_timeslot = mytable.rows[0].cells[j].innerHTML.toLowerCase();
				let curr_col_slot = curr_whole_row.cells[j];
				let curr_col_slot_childs = curr_col_slot.childNodes;

				// trying for subjects
				for (let i = 0; i < curr_col_slot_childs[0].options.length; i++) {
					let subject_options = curr_col_slot_childs[0].options;
					let optionValue = subject_options[i].value;
					if (optionValue == local_time_table_data[curr_day][curr_timeslot].subjectcode) {
						// console.log(optionValue);
						// console.log(local_time_table_data[curr_day][curr_timeslot].subjectcode);
						subject_options[i].selected = true;
					}
				}

				// trying for rooms
				for (let i = 0; i < curr_col_slot_childs[1].options.length; i++) {
					let room_options = curr_col_slot_childs[1].options;
					optionValue = room_options[i].value;
					if (optionValue == local_time_table_data[curr_day][curr_timeslot].class_id) {
						// console.log(optionValue);
						// console.log(local_time_table_data[curr_day][curr_timeslot].class_id);
						room_options[i].selected = true;
					}
				}
			}
		}
	}
	else {
		let table = document.getElementById("teacher_table").getElementsByTagName('tbody')[0];
		table.innerHTML = "";
		reset_table();
		// float_error_card_func("Timetable Not Available", "", "danger");
	}
}
const fetch_timetable = () => {
	return new Promise((resolve, reject) => {
		let course = document.getElementById("course_option").value;
		let semester = document.getElementById("semester_option").value;
		let section = document.getElementById("section_option").value;

		fetch(`${localhost}/table/get-timetable?` + new URLSearchParams({ course: course, semester: semester, section: section }), {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => response.json())
			.then(data => {
				timetable = data.data;
				console.log(timetable);
				resolve();
			})
			.then(() => {
				render_tables();
			})
			.then(() => {
				updateCounter();
			})
			.catch(error => {
				float_error_card_func("TimeTable - Server Error", "", "danger");
				console.error('Data unavailable:', error);
				reject(error);
			});
	});
};
const initializePage = async () => {                          	//  this function initializes the page by fetching the room list, faculty list and timetable data from the server
	try {
		await fetch_timetable().catch(error => { throw error; });
		await fetch_faculties_list().catch(error => { throw error; });
		await fetch_room_list().catch(error => { throw error; });
		add_rooms_options_to_mytable(room_list);
		unblocking();
		setTimeout(() => {
			document.getElementById("loader").style.display = "none";
		}, 1500);
		if (timetable) {
			float_error_card_func("Initialization Successful", "", "success");
		}
	} catch (error) {
		unblocking();
		console.log("Error in fetching data from the server" + error);
		setTimeout(() => {
			document.getElementById("loader").style.display = "none";
		}, 1500);
		float_error_card_func("Initialization Failed <br> Server Error", "", "danger");
		console.error('Error during initialization:', error);
	}
};
const reset_table = () => {                             	//  this function resets the table to the initial state by removing all the data from the table
	let mytable = document.getElementById("mytable");
	for (let i = 1; i <= 7; i++) {
		for (let j = 1; j <= 10; j++) {
			mytable.rows[i].cells[j].childNodes[0].selectedIndex = 0;
			mytable.rows[i].cells[j].childNodes[1].selectedIndex = 0;
		}
	}
};
//  adding event listners to the buttons and select boxes
document.getElementById("save_tt_json").addEventListener("click", save_table_func); 	// [ save TT JSON on DB button eventlistner ]
document.getElementById("reset_tt").addEventListener("click", reset_table);				// [ reset TT button eventlistner ]
document.getElementById('course_option').addEventListener('change', initializePage);  	// [ course select box eventlistner ]
document.getElementById('semester_option').addEventListener('change', initializePage);  // [ semester select box eventlistner ]
document.getElementById('section_option').addEventListener('change', initializePage);	// [ section select box eventlistner ]
document.getElementById("mytable").addEventListener("change", validateTeacherSubject);
document.addEventListener('DOMContentLoaded', () => {                                     //  this function initializes the page
	add_select_box_to_mytable();            // add subject and room select boxes to all the table cells  
	initializePage();                       // initialize the page by fetching the room list, faculty list and timetable data from the server
});