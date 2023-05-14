import { dobDropdown, years } from "./helper.js";

// Get query parameters from the URL
const urlParams = new URLSearchParams(window.location.search);

// Get value of the id parameter
const userDataString = urlParams.get("id");
console.log("userDataString:", userDataString);

// Decode thei id parameter and store it in a variable
const userId = decodeURIComponent(urlParams.get("id"));
console.log("userId:", userId); // check the value of userId

// Fetch the user with the given id
fetch(`http://localhost:3000/users/${userId}`)
	.then((response) => response.json())
	.then((user) => {
		// console.log(user)

		const userProfile = document.querySelector("main");

		const profileDetail = document.createElement("div");
		profileDetail.innerHTML = `
        <div>
        <img src="${user.profilePicture}" alt="Profile Picture">
        <h2>${user.firstName} ${user.lastName}</h2>
        <p>Date of Birth</p>
        <h3>${user.dateOfBirth} </h3>
        <p>Bio</p>
        <h3>${user.bio} </h3>
        </div>
        `;
		userProfile.appendChild(profileDetail);

		const updateButton = document.querySelector(".fa-pen-to-square");

		updateButton.addEventListener("click", () => {
			// Create new select elements for dropdowns
			const monthDropdown = document.createElement("select");
			const dayDropdown = document.createElement("select");
			const yearDropdown = document.createElement("select");

			// Call dobDropdown function to populate the month, day, and year dropdowns
			dobDropdown(monthDropdown, dayDropdown, yearDropdown);

			const profileUpdate = document.querySelector(".profile-detail");
			profileUpdate.innerHTML = `
      <div> 
      <img src="${user.profilePicture}" alt="Profile Picture">
      <input type="text" value="${user.profilePicture}">
      <h2><input type="text" value="${user.firstName}"> <input type="text" value="${user.lastName}"></h2>
      <p class="dob">Date of Birth</p>
      <p>Bio</p>
      <h3><textarea>${user.bio}</textarea></h3>
      <button>Save</button>
      </div>
      `;

			// Add the month, day, and year dropdowns to the .dob element
			document
				.querySelector(".dob")
				.append(monthDropdown, dayDropdown, yearDropdown);

			// Extract the month, day, and year values from the user's dateOfBirth string using the split() method
			const [month, day, year] = user.dateOfBirth.split(/[\s,]+/);

			// Set the selected index of the dropdowns based on the extracted values
			yearDropdown.selectedIndex = years.indexOf(parseInt(year));
			monthDropdown.selectedIndex = parseInt(month) - 1;
			dayDropdown.selectedIndex = parseInt(day) - 1;
		});
	})
	.catch((error) => console.error(error));

/* ---------------- Click events ---------------- */

// Select icons
const backButton = document.querySelector(".fa-arrow-left");
const deleteButton = document.querySelector(".fa-trash-can");

// Attach event listeners to the icons
backButton.addEventListener("click", () => {
	// Redirect to index.html
	window.location.href = `index.html`;
});

// const editButton = document.querySelector(".fa-pen-to-square");

// editButton.addEventListener("click", () => {

//   const profileEdit = document.querySelector(".profile-detail");
//   profileEdit.innerHTML = `
//   <div>
//   <img src="${user.profilePicture}" alt="Profile Picture">
//   <input type="text" value="${user.profilePicture}">
//   <h2><input type="text" value="${user.firstName}"> <input type="text" value="${user.lastName}"></h2>
//   <p>Date of Birth</p>
//   <h3><input type="date" value="${user.dateOfBirth}"></h3>
//   <p>Bio</p>
//   <h3><textarea>${user.bio}</textarea></h3>
//   <button>Save</button>
//   </div>
//   `

// });

deleteButton.addEventListener("click", () => {
	// Add code to handle the click event for the delete button
});
