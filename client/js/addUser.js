// Import required modules
import { v4 as uuidv4 } from "https://cdn.skypack.dev/uuid";
import { renderUsers } from './main.js';

/* ---------------- Date of birth dropdown ---------------- */

// Get references to the month, day, and year dropdown menus
const monthDropdown = document.querySelector("#month");
const dayDropdown = document.querySelector("#day");
const yearDropdown = document.querySelector("#year");

dobDropdown(monthDropdown, dayDropdown, yearDropdown);


/* ---------------- Submit form data to server ---------------- */

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	// Get form data
	const formData = new FormData(form);
	console.log(formData);

	// Format the date using the form data
	const month = formData.get("month");
	const day = formData.get("day");
	const year = formData.get("year");

	const dateOfBirth = `${month} ${day}, ${year}`;

	// Assign formatted date to the new user object
	const newUser = {
		id: uuidv4(),
		firstName: formData.get("firstName"),
		lastName: formData.get("lastName"),
		dateOfBirth: dateOfBirth,
		profilePicture: formData.get("profilePicture"),
		bio: formData.get("bio"),
	};

	console.log(newUser);

	// Send POST request to backend server to add new user

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
  })
    .then(response => {
      console.log(response)
      if (response.ok) {
      // close modal
      // update ui to show new user
        renderUsers();
    }
  })
});
