// Import required modules
import { dobDropdown, years, months } from "./helper.js";

// Define and export function to update user profile
export function updateUser(user) {
	const profileUpdate = document.querySelector(".profile-detail");

	// Insert HTML code to display user profile information, including inputs for updating values
	profileUpdate.innerHTML = `
  <div class="profile-detail-container"> 
    <img src="${user.profilePicture}" alt="Profile Picture" class="profile-image">
    <input type="text" name="profilePicture" value="${user.profilePicture}">
    <h2 class="name-wrapper"><input type="text" name="firstName" value="${user.firstName}"> <input type="text" name="lastName" value="${user.lastName}"></h2>
    <div class="dob-wrapper">
      <p class="dob dob-label">Date of Birth</p>
    </div>
    <p class="profile-bio-label">Bio</p>
    <h3><textarea class="edit-bio" name="bio">${user.bio}</textarea></h3>
    <div class="edit-button">
      <button class="save-button">Save</button>
      <button class="cancel-edit-button">Cancel</button>
    </div>
  </div>
  `;
	// Create new select elements for dropdowns
	const monthDropdown = document.createElement("select");
	const dayDropdown = document.createElement("select");
	const yearDropdown = document.createElement("select");

	// Call dobDropdown function to populate the month, day, and year dropdowns
	dobDropdown(monthDropdown, dayDropdown, yearDropdown);

	// Add the month, day, and year dropdowns to the .dob element
	document
		.querySelector(".dob-wrapper")
		.append(monthDropdown, dayDropdown, yearDropdown);

	// Extract the month, day, and year values from the user's dateOfBirth string using the split() method
	const [month, day, year] = user.dateOfBirth.split(/[\s,]+/);

	// Set the selected index of the dropdowns based on the extracted values
	yearDropdown.selectedIndex = years.indexOf(parseInt(year));

	// Find index of the month in the months array using the findIndex() method and set the selected index of the month dropdown
	const monthIndex = months.findIndex((monthArr) => monthArr === month);
	if (monthIndex !== -1) {
		monthDropdown.selectedIndex = monthIndex;
	}

	dayDropdown.selectedIndex = parseInt(day) - 1;

	/*  -------- Save button click event  -------- */

	// Click event for save button to send new data back to server + close input fields and display new profile data
	const saveButton = document.querySelector(".save-button");
	saveButton.addEventListener("click", () => {
		console.log("Click");
		const profileUpdate = document.querySelector(".profile-detail");
		const userId = user.id;

		// Get the updated values from the input fields
		const profilePicture = profileUpdate.querySelector(
			"input[name='profilePicture']"
		).value;
		const firstName = profileUpdate.querySelector(
			"input[name='firstName']"
		).value;
		const lastName = profileUpdate.querySelector(
			"input[name='lastName']"
		).value;
		const bio = profileUpdate.querySelector("textarea").value;
		const dob = `${monthDropdown.value} ${dayDropdown.value}, ${yearDropdown.value}`;

		console.log("dob data", dob);

		// Construct the updated user object
		const updatedUser = {
			id: userId,
			profilePicture: profilePicture,
			firstName: firstName,
			lastName: lastName,
			bio: bio,
			dateOfBirth: dob,
		};
		console.log("updated user", updatedUser);

		// Send PUT request to server with updated user data
		fetch(`http://localhost:3000/users/${userId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedUser),
		})
			.then((response) => {
				console.log(response);
				if (response.ok) {
					// Update the user object with the new data
					user = updatedUser;
					// Reload the page to show updated data
					location.reload();
					console.log("Refreshed with new data!");
				}
			})
			.catch((error) => console.error(error));
	});

	/*  -------- Cancel button click event -------- */
	const cancelButton = document.querySelector(".cancel-edit-button");

	cancelButton.addEventListener("click", () => {
		// Reload the page to cancel editing
		location.reload();
	});
}
