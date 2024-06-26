let faculty_data;
let room_list;
let flag = 0;
let events = {
	"2024-06-11": { "description": "Software Enginneering (Practical)", "color": "info" },
	"2024-06-12": { "description": "Farewell Party BTech CSE", "color": "warning" },
	"2024-06-10": { "description": "buddha purnima Example", "color": "danger" },
	"2024-06-19": { "description": "Theory Paper start", "color": "warning" },
};
let messageCounter = 0;
const letmesee2 = () => {
	document.getElementById("teacher_detail").rows[0].cells[0].innerHTML = faculty_data.name;
	document.getElementById("teacher_detail").rows[0].cells[1].innerHTML = faculty_data.teacherid;
	for (let i = 1; i <= 7; i++) {
		let currrow = document.getElementById("mytable").rows[i].cells[0].innerHTML.toLowerCase();
		let day_row_border_adding = document.getElementById("mytable").rows[i];
		let today = new Date();
		const weekdays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
		let day_slot = weekdays[today.getDay()];
		let hours = today.getHours();
		let houre = hours + 1;
		hours = (hours > 12) ? String(hours - 12).padStart(2, "0") : String(hours).padStart(2, "0");
		houre = (houre > 12) ? String(houre - 12).padStart(2, "0") : String(houre).padStart(2, "0");
		let time_slot = hours + "-" + houre;
		time_slot = (time_slot).toString();
		let holidaychecker = 0;
		for (let j = 1; j <= 10; j++) {
			let currcol = document.getElementById("mytable").rows[0].cells[j].innerHTML.toLowerCase();
			document.getElementById("mytable").rows[i].cells[j].setAttribute("class", "text bg-danger text-white heading-text border-dark border-3");
			if (faculty_data && faculty_data.schedule && faculty_data.schedule[currrow] && faculty_data.schedule[currrow][currcol] && faculty_data.schedule[currrow][currcol].subjectcode) {
				let message = "N.A.";
				if (room_list && room_list[faculty_data.schedule[currrow][currcol].roomid].classname) {
					message = room_list[faculty_data.schedule[currrow][currcol].roomid].classname;
				}
				document.getElementById("mytable").rows[i].cells[j].innerHTML = `
							${faculty_data.schedule[currrow][currcol].subjectcode}<br>
							${faculty_data.schedule[currrow][currcol].course}<br>
							Sem : ${faculty_data.schedule[currrow][currcol].semester}<br>
							Room : ${message}<br>
							Section : ${faculty_data.schedule[currrow][currcol].section}<br>`;
			}
			else {
				holidaychecker++;
				document.getElementById("mytable").rows[i].cells[j].setAttribute("class", "text bg-primary bg-gradient text-white heading-text border-dark border-3");
				document.getElementById("mytable").rows[i].cells[j].innerHTML = '';
			}

			if (currrow === day_slot) {
				day_row_border_adding.cells[0].classList.add("bg-warning");							//dayslot color
			}
			if (currcol === time_slot && currrow === day_slot && today.getHours() < 19) { 				// color the time and day and period slots 
				document.getElementById("mytable").rows[0].cells[j].classList.add("bg-warning");	//timeslot color
				document.getElementById("mytable").rows[i].cells[j].classList.add("bg-peela");		// day-time	slot color
			}
		}
		if (holidaychecker === 10) {
			let row = document.getElementById("mytable").rows[i];
			for (let k = 1; k <= 10; k++) {
				row.cells[k].className = "";
				row.cells[k].innerHTML = "";
				row.cells[k].className = 'text text-dark bg-warning fw-bold text-dark border-warning border-2 align-middle h5 py-3';
			}
			let words = 'No Class Today'.split(' ');
			let cellIndex = Math.floor((10 - words.length) / 2) + 1 // Start updating from the second cell (first is for day label)

			for (let word of words) {
				if (cellIndex < row.cells.length) {
					row.cells[cellIndex].innerHTML = word;
				}
				cellIndex++;
			}
		}
	}
};

const college_event_manager = () => {
	let today = new Date();
	let startDayIndex = today.getDay() - 1;
	console.log(startDayIndex);
	for (let i = 0; i < 7; i++) {
		let currentDate = new Date();
		currentDate.setDate(today.getDate() + i);
		let currentDateString = currentDate.toISOString().split('T')[0];
		console.log(currentDateString);
		if (events[currentDateString]) {
			let rowIndex = (startDayIndex + i) % 7 + 1;
			let row = document.getElementById("mytable").rows[rowIndex];
			let color = events[currentDateString].color || "warning";

			for (let j = 1; j <= 10; j++) {
				row.cells[j].className = "";
				row.cells[j].innerHTML = "";
				row.cells[j].className = `text bg-${color} bg-gradient fw-bold text-dark border-${color} border-2 align-middle`;
			}

			// Split the description into words
			let words = events[currentDateString].description.split(' ');
			let cellIndex = Math.floor((10 - words.length) / 2) + 1 // Start updating from the second cell (first is for day label)

			for (let word of words) {
				if (cellIndex < row.cells.length) {
					row.cells[cellIndex].innerHTML = word;
					row.cells[cellIndex].className = "";
					row.cells[cellIndex].className = `text bg-${color} bg-gradient fw-bold text-dark border-${color} border-2 align-middle h5 py-3`;
				}
				cellIndex++;
			}
		}
	}
};
const fetch_room_list = () => {                         	//  this function fetches the room list data form the server [ database ] and store the variable to the local variable for future use	
	return fetch('https://classsync-25hj.onrender.com/list/get-list?type=rooms', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.then(data => {
			room_list = data.data.data;
			console.log(room_list)
		})
		.catch(error => {
			console.error('Room Data not available [ SERVER ERROR ] :::: ', error);
			float_error_card_func("Room Data not available", "Room Data is not available.<br><b>Room data might not show in the timetable.</b>", "danger");
		});
};
const letmeseeitbaby = () => {
	blocking();
	// document.getElementById("loader").style.display = "flex"; // uncomment this line to show the loader for every change
	let teacher_query_list = [];
	teacher_query_list.push(document.getElementById("teacher_option").value);

	fetch('https://classsync-25hj.onrender.com/faculty/get', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({ "facultyList": teacher_query_list })
	})
		.then(response => response.json())
		.then(data => {
			data = data.data;
			faculty_data = data[0];
			console.log(faculty_data);
			letmesee2();
		})
		.then(() => {
			if (flag === 1) {
				college_event_manager();
				setTimeout(() => { float_error_card_func("Events view On", "", "success") }, 3000);
			} else {
				setTimeout(() => { float_error_card_func("Events view Off", "", "danger") }, 3000);
			}
		})
		.then(() => {
			setTimeout(() => {
				document.getElementById("loader").style.display = "none";
				unblocking();
			}, 1500);
			float_error_card_func("Faculty Data Available", "Faculty Data is available for the selected teacher. timetable has been rendered successfully.", "success");
		})
		.catch(error => {
			setTimeout(() => {
				document.getElementById("loader").style.display = "none";
				unblocking();
			}, 1500);
			float_error_card_func("Timetable not found", "The timetable you are looking for is not found. Please try again later.", "danger");
			console.error('Data unavailable:', error)
		});
}
document.addEventListener('DOMContentLoaded', () => {
	fetch_room_list()
		.then(() => {
			letmeseeitbaby();
		})
});
document.getElementById('teacher_option').addEventListener('change', letmeseeitbaby);
document.getElementById("toggle_event").addEventListener("click", () => {
	flag = flag === 1 ? 0 : 1;
	letmeseeitbaby();
});
